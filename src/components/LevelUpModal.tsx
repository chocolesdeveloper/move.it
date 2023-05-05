import { useContext } from "react"
import { ChallengesContext } from "@/contexts/ChallengesContext"

import Image from "next/image"

import styles from "../styles/components/LevelUpModal.module.css"

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext)

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>
        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button type="button" onClick={closeLevelUpModal}>
          <Image
            src="/icons/close.svg"
            width={40}
            height={40}
            alt="Imagem para fechar o modal"
          />
        </button>
      </div>
    </div>
  )
}
