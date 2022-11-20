import React, { useState } from 'react'
import { NewProject } from './NewProject'

export const App = () => {
  const [title, setTitle] = useState('Untitled')
  const [showEditor, setShowEditor] = useState(false)

  const handleShowEditorClick = () => {
    setShowEditor(!showEditor)
  }
  const handleCopyClick = () => {
    const formattedText = `Writle📗 (${title}) - 10134 words
    🟩 🟩 🟩 🟩 🟩 🟩 🟩 🟩 🔲 🟩 🟩 🟩 🟩 🔲 🟩 🟩 🟩`
    navigator.clipboard.writeText(formattedText)
  }
  return (
    <>
      <h1>Writle: writing progress tracking website</h1>
      <div>
        <button onClick={handleShowEditorClick}>Start New Project</button>
        <NewProject showEditor={showEditor} />
      </div>
      <div>
        <button onClick={handleCopyClick}>Copy text</button>
      </div>
    </>
  )
}
