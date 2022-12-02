import React, { useState, SyntheticEvent } from 'react'
import { getProjectKey, PROJECTS_LIST_KEY } from './App'

const UNSAFE_CHARS = /[^a-zA-Z0-9:',"\s]/g

export const NewProject = () => {
  const [title, setTitle] = useState('')
  const [wordCount, setWordCount] = useState('')
  const [targetDate, setTargetDate] = useState('')

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
        JSON.stringify({ title, wordCount, targetDate }),
      )
      const prevProjects = JSON.parse(
        localStorage.getItem(PROJECTS_LIST_KEY) ?? '[]',
      )
      localStorage.setItem(
        PROJECTS_LIST_KEY,
        JSON.stringify([...prevProjects, title]),
      )
    }
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
