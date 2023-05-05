import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react"
import { ChallengesContext } from "./ChallengesContext"

interface CoundownContextData {
  minutes: number
  seconds: number
  hasFinished: boolean
  isActive: boolean
  startCountDown: () => void
  resetCountDown: () => void
}

interface CountdownContextProviderProps {
  children: ReactNode
}

export const CountdownContext = createContext({} as CoundownContextData)

let countdownTimeout: NodeJS.Timeout

export function CountdownProvider({ children }: CountdownContextProviderProps) {
  const { startNewChallenge } = useContext(ChallengesContext)

  const [time, setTime] = useState(0.1 * 60)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  function startCountDown() {
    setIsActive(true)
  }

  function resetCountDown() {
    setIsActive(false)
    setTime(0.1 * 60)
    setHasFinished(false)
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true)
      setIsActive(false)
      startNewChallenge()
    }

    return () => clearTimeout(countdownTimeout)
  }, [isActive, time])

  return (
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountDown,
        resetCountDown,
      }}
    >
      {children}
    </CountdownContext.Provider>
  )
}
