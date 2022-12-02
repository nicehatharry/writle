import React from 'react'
import { FC } from 'react'
import { DEFAULT_TITLE } from './App'

interface CurrentProjectProps {
  selectedProject: string
}

const DEFAULT_INFO = {
  title: 'No project exists with that name',
  wordCount: 0,
  targetDate: new Date(),
}

export const CurrentProject: FC<CurrentProjectProps> = ({
  selectedProject,
}) => {
  const projectDataKey = `writle-project-${selectedProject}`
  const projectData = localStorage.getItem(projectDataKey)
  const { title, wordCount, targetDate } = projectData
    ? JSON.parse(projectData)
    : DEFAULT_INFO

  const handleCopyClick = () => {
    const formattedText = `Writle📗 (${title}) - 10134 words
        🟩 🟩 🟩 🟩 🟩 🟩 🟩 🟩 🔲 🟩 🟩 🟩 🟩 🔲 🟩 🟩 🟩`
    navigator.clipboard.writeText(formattedText)
  }

  return (
    <>
      <h1>{title}</h1>
      <h2>word count: xxx/{wordCount}</h2>
      <h3>to be completed by: {targetDate.toString()}</h3>
      <div>
        <button onClick={handleCopyClick}>Copy text</button>
      </div>
    </>
  )
}
