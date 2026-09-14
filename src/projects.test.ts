import assert from 'node:assert/strict'
import { beforeEach, test } from 'node:test'
import { addProject, clearProjects, listProjects } from './projects.ts'

beforeEach(clearProjects)

test('adds a project with a trimmed name', () => {
  assert.equal(addProject({ id: 'p1', name: '  Q4 launch ', owner: 'sam' }).name, 'Q4 launch')
})

test('refuses a project without a name', () => {
  assert.throws(() => addProject({ id: 'p2', name: ' ', owner: 'sam' }))
})

test('lists one owner\'s projects', () => {
  addProject({ id: 'p1', name: 'A', owner: 'sam' })
  addProject({ id: 'p2', name: 'B', owner: 'priya' })
  assert.deepEqual(listProjects('priya').map((p) => p.id), ['p2'])
})
