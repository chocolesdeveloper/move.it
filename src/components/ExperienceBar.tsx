import { useContext } from "react"
import { ChallengesContext } from "@/contexts/ChallengesContext"

import styles from "../styles/components/ExperienceBar.module.css"

export function ExperienceBar() {
  const { currentExperience, experienceNextToLevel } =
    useContext(ChallengesContext)

  const percentToNetLevel =
    Math.round(currentExperience * 100) / experienceNextToLevel

  console.log(percentToNetLevel)

  return (
    <header className={styles.experienceBar}>
      <span>0xp</span>
      <div>
        <div style={{ width: `${percentToNetLevel}%` }} />

        <span
          className={styles.currentExperience}
          style={{ left: `${percentToNetLevel}%` }}
        >
          {currentExperience}xp
        </span>
      </div>
      <span>{experienceNextToLevel}xp</span>
    </header>
  )
}
