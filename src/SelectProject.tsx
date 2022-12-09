import React, { SyntheticEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PROJECTS_LIST_KEY } from './constants'

export const SelectProject = () => {
  const [projects, setProjects] = useState<string[]>([])
  const storedProjects = localStorage.getItem(PROJECTS_LIST_KEY)
  const navigate = useNavigate()

  useEffect(() => {
    if (storedProjects) {
      setProjects(JSON.parse(storedProjects))
    }
  }, [storedProjects])

  const handleProjectChange = (e: SyntheticEvent<HTMLSelectElement>) => {
    const value = e.currentTarget.value
    if (value === 'new') navigate('/new-project')
    else navigate(`/project/${value}`)
  }

  const formattedProjects =
    projects.length > 1
      ? projects.reduce((prev, curr) => prev.concat(`, ${curr}`))
      : projects[0]

  return (
    <>
      <h4>Writle: writing progress tracking website</h4>
      <p>Available Projects: {formattedProjects}</p>
      <select onChange={handleProjectChange}>
        <option key="choose" value="">
          -- Choose Project --
        </option>
        <option key="new" value="new">
          -- Start New Project --
        </option>
        {projects?.map((name: string) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
    </>
  )
}
