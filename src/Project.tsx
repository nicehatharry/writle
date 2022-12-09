import React from 'react'
import { FC } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DEFAULT_PROJECT_DATA } from './constants'
import { SubmitWordCount } from './SubmitWordCount'
import { getProjectDataKey } from './utils'

export const Project: FC = () => {
  const { project } = useParams()
  console.log('params', project)
  const navigate = useNavigate()
  if (!project) navigate('/project-not-found')
  const projectData = localStorage.getItem(getProjectDataKey(project!))
  const { title, wordCount, targetDate } = projectData
    ? JSON.parse(projectData)
    : DEFAULT_PROJECT_DATA

  return (
    <>
      <h1>{title}</h1>
      <h2>word count: xxx/{wordCount}</h2>
      <h3>to be completed by: {targetDate.toString()}</h3>
      <SubmitWordCount title={title} />
    </>
  )
}
