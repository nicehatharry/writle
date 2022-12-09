export interface WordLog {
  date: string
  wordCount: number
}

export interface ProjectDataRecord {
  title: string
  wordCount: number
  targetDate: string
  wordLogs: WordLog[]
}

export const DEFAULT_TITLE = 'Untitled'
export const DEFAULT_PROJECT_DATA: ProjectDataRecord = {
  title: 'No project exists with that name',
  wordCount: 0,
  targetDate: new Date().toLocaleDateString(),
  wordLogs: [],
}
export const PROJECTS_LIST_KEY = 'writle-projects'
export const UNSAFE_CHARS = /[^a-zA-Z0-9:',"\s]/g
