import React from 'react'
import { SelectProject } from './SelectProject'
import { NewProject } from './NewProject'
import { Project } from './Project'

export const routes = [
  {
    path: '/',
    element: <SelectProject />,
  },
  {
    path: '/new-project',
    element: <NewProject />,
  },
  {
    path: '/project/:project',
    element: <Project />,
  },
]
