import React, { SyntheticEvent, useEffect, useState } from 'react'
import { CurrentProject } from './CurrentProject'
import { NewProject } from './NewProject'

export const PROJECTS_LIST_KEY = 'writle-projects'
export const DEFAULT_TITLE = 'Untitled'
export const getProjectKey = (project: string) => `writle-project-${project}`

export const App = () => {
  const [projects, setProjects] = useState<string[]>([])
  const [project, setProject] = useState<string>('')
  const storedProjects = localStorage.getItem(PROJECTS_LIST_KEY)

  useEffect(() => {
    if (storedProjects) {
      setProjects(JSON.parse(storedProjects))
    }
  }, [storedProjects])

  const handleProjectChange = (e: SyntheticEvent<HTMLSelectElement>) => {
    const value = e.currentTarget.value
    console.log('Changing project to', value)
    setProject(value)
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
      <div>{project === 'new' && <NewProject />}</div>
      {project !== 'new' && project !== '' && (
        <CurrentProject selectedProject={project} />
      )}
    </>
  )
}
