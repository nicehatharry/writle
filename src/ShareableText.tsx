import React, { FC } from 'react'

interface ShareableTextProps {
  title: string
  wordCount: string
}

export const ShareableText: FC<ShareableTextProps> = ({ title, wordCount }) => {
  const handleCopyClick = () => {
    const formattedText = `Writleπ ${title} - ${wordCount} words
            π© π© π© π© π© π© π© π© π² π© π© π© π© π² π© π© π©`
    navigator.clipboard.writeText(formattedText)
  }
  return (
    <div>
      <button onClick={handleCopyClick}>π© Copy shareable text π©</button>
    </div>
  )
}
