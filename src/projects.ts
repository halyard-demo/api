export interface Project {
  id: string
  name: string
  owner: string
  due?: string
}

const projects = new Map<string, Project>()

export function addProject(p: Project): Project {
  if (!p.name.trim()) throw new Error('A project needs a name')
  projects.set(p.id, { ...p, name: p.name.trim() })
  return projects.get(p.id)!
}

export function listProjects(owner?: string): Project[] {
  return [...projects.values()].filter((p) => !owner || p.owner === owner)
}

export function clearProjects(): void {
  projects.clear()
}
