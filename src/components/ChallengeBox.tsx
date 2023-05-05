import Image from "next/image"
import styles from "../styles/components/ChallengeBox.module.css"

import { useContext } from "react"
import { ChallengesContext } from "@/contexts/ChallengesContext"
import { CountdownContext } from "@/contexts/CountDownContext"

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } =
    useContext(ChallengesContext)

  const { resetCountDown } = useContext(CountdownContext)

  function handleChallengeSucceded() {
    completeChallenge()
    resetCountDown()
  }

  function handleChallengeFailed() {
    resetChallenge()
    resetCountDown()
  }

  return (
    <div className={styles.challendeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} XP</header>

          <main>
            <Image
              src={`icons/${activeChallenge.type}.svg`}
              alt=""
              width={140}
              height={112}
              priority
            />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>
            <button
              type="button"
              className={styles.challengeSucceededButton}
              onClick={handleChallengeSucceded}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <Image
              src="icons/level-up.svg"
              alt="Arrow up"
              width={32}
              height={44}
            />
            <span>Avance de level completando desafios</span>
          </p>
        </div>
      )}
    </div>
  )
}
