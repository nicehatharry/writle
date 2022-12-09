import React, { FC, SyntheticEvent, useState } from 'react'
import { DEFAULT_PROJECT_DATA, ProjectDataRecord } from './constants'
import { ShareableText } from './ShareableText'
import { getProjectDataKey } from './utils'

interface SubmitWordCountProps {
  title: string
}

export const SubmitWordCount: FC<SubmitWordCountProps> = ({ title }) => {
  const [newTotalWords, setNewTotalWords] = useState('')
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const handleClick = () => {
    const lsResult = localStorage.getItem(getProjectDataKey(title))
    const oldData: ProjectDataRecord = lsResult
      ? JSON.parse(lsResult)
      : DEFAULT_PROJECT_DATA
    const newData = [...oldData.wordLogs]
    const oldCount =
      oldData.wordLogs.length > 1
        ? oldData.wordLogs[oldData.wordLogs.length - 1].wordCount
        : 0
    newData.push({
      date: new Date().toLocaleDateString(),
      wordCount: parseInt(newTotalWords) - oldCount,
    })
    localStorage.setItem(
      getProjectDataKey(title),
      JSON.stringify({ ...oldData, wordLogs: newData }),
    )
    setHasSubmitted(true)
  }
  const handleWordCountChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const sanitizedNumber = e.currentTarget.value.replace(/[^0-9]/g, '')
    setNewTotalWords(isNaN(parseInt(sanitizedNumber)) ? '' : sanitizedNumber)
  }
  return (
    <>
      New Total Word Count: <input onChange={handleWordCountChange} />
      <button onClick={handleClick}>
        {hasSubmitted ? 'Replace' : 'Submit'}
      </button>
      {hasSubmitted && (
        <ShareableText title={title} wordCount={newTotalWords} />
      )}
    </>
  )
}
