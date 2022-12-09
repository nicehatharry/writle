import React, { useState, SyntheticEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  UNSAFE_CHARS,
  PROJECTS_LIST_KEY,
  DEFAULT_PROJECT_DATA,
} from './constants'
import { getProjectKey } from './utils'

export const NewProject = () => {
  const [title, setTitle] = useState('')
  const [wordCount, setWordCount] = useState('')
  const [targetDate, setTargetDate] = useState('')
  const navigate = useNavigate()

  const handleTitleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const sanitizedInput = e.currentTarget.value.replace(UNSAFE_CHARS, '')
    setTitle(sanitizedInput)
  }
  const handleWordCountChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const sanitizedNumber = e.currentTarget.value.replace(/[^0-9]/g, '')
    setWordCount(isNaN(parseInt(sanitizedNumber)) ? '' : sanitizedNumber)
  }
  const handleTargetDateChange = (e: SyntheticEvent<HTMLInputElement>) => {
    console.log('date', e.currentTarget.value)
    setTargetDate(e.currentTarget.value)
  }

  const handleSave = () => {
    console.log('Handling save')
    if (
      title.length > 0 &&
      parseInt(wordCount) > 1 &&
      new Date(targetDate) > new Date()
    ) {
      localStorage.setItem(
        getProjectKey(title),
        JSON.stringify({
          ...DEFAULT_PROJECT_DATA,
          title,
          wordCount,
          targetDate,
        }),
      )
      const prevProjects = JSON.parse(
        localStorage.getItem(PROJECTS_LIST_KEY) ?? '[]',
      )
      localStorage.setItem(
        PROJECTS_LIST_KEY,
        JSON.stringify([...prevProjects, title]),
      )
    }
    navigate('/')
  }

  return (
    <>
      <div>
        <div>
          Title: <input onChange={handleTitleChange} value={title} />
        </div>
        <div>
          Target Word Count:{' '}
          <input onChange={handleWordCountChange} value={wordCount} />
        </div>
        <div>
          Target Date:{' '}
          <input
            type="date"
            onChange={handleTargetDateChange}
            value={targetDate}
          />
        </div>
        <div>
          <button onClick={handleSave}>Save Project</button>
        </div>
      </div>
    </>
  )
}
