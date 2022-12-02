import React, { FC, SyntheticEvent, useState } from 'react'
import { ShareableText } from './ShareableText'

interface SubmitWordCountProps {
  title: string
}

export const SubmitWordCount: FC<SubmitWordCountProps> = ({ title }) => {
  const [wordCount, setWordCount] = useState('')
  const handleClick = () => {
    console.log(wordCount, 'words submitted')
  }
  const handleWordCountChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const sanitizedNumber = e.currentTarget.value.replace(/[^0-9]/g, '')
    setWordCount(isNaN(parseInt(sanitizedNumber)) ? '' : sanitizedNumber)
  }
  return (
    <>
      <input onChange={handleWordCountChange} />
      <button onClick={handleClick}>Submit Word Count</button>
      {wordCount && <ShareableText title={title} wordCount={wordCount} />}
    </>
  )
}
