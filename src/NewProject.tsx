import React, { useState, SyntheticEvent } from 'react'

const UNSAFE_CHARS = /[^a-zA-Z0-9:',"\s]/g

export const NewProject = ({ showEditor }: { showEditor: boolean }) => {
  const [title, setTitle] = useState('')
  const [wordCount, setWordCount] = useState('')
  const [targetDate, setTargetDate] = useState('')

  const handleTitleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value)
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
  return showEditor ? (
    <>
      <div>
        Project: <strong>{title}</strong>
      </div>
      <div>
        Words: <strong>{wordCount}</strong>
      </div>
      <div>
        finished by: <strong>{targetDate}</strong>
      </div>
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
      </div>
    </>
  ) : (
    <></>
  )
}
