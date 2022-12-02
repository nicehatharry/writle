import React from 'react'
import { FC } from 'react'
import { DEFAULT_TITLE } from './App'
import { SubmitWordCount } from './SubmitWordCount'

interface CurrentProjectProps {
  selectedProject: string
}

const DEFAULT_INFO = {
  title: 'No project exists with that name',
  wordCount: 0,
  targetDate: new Date(),
}

export const getProjectDataKey = (projectName: string) =>
  `writle-project-${projectName}`

export const CurrentProject: FC<CurrentProjectProps> = ({
  selectedProject,
}) => {
  const projectData = localStorage.getItem(getProjectDataKey(selectedProject))
  const { title, wordCount, targetDate } = projectData
    ? JSON.parse(projectData)
    : DEFAULT_INFO

  return (
    <>
      <h1>{title}</h1>
      <h2>word count: xxx/{wordCount}</h2>
      <h3>to be completed by: {targetDate.toString()}</h3>
      <SubmitWordCount title={title} />
    </>
  )
}
