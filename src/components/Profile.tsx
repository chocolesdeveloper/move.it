import Image from "next/image"

import { useContext } from "react"
import { ChallengesContext } from "@/contexts/ChallengesContext"

import styles from "../styles/components/Profile.module.css"

export function Profile() {
  const { level } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <Image
        src="https://github.com/chocolesdeveloper.png"
        alt="Imagem perfil"
        width={88}
        height={88}
      />
      <div>
        <strong>William Ferreira</strong>
        <p>
          <Image src="icons/level.svg" alt="Level Up" width={14} height={16} />
          Level {level}
        </p>
      </div>
    </div>
  )
}
