import React, { FC } from 'react'

interface ShareableTextProps {
  title: string
  wordCount: string
}

export const ShareableText: FC<ShareableTextProps> = ({ title, wordCount }) => {
  const handleCopyClick = () => {
    const formattedText = `Writle📗 ${title} - ${wordCount} words
            🟩 🟩 🟩 🟩 🟩 🟩 🟩 🟩 🔲 🟩 🟩 🟩 🟩 🔲 🟩 🟩 🟩`
    navigator.clipboard.writeText(formattedText)
  }
  return (
    <div>
      <button onClick={handleCopyClick}>🟩 Copy shareable text 🟩</button>
    </div>
  )
}
