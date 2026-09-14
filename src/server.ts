import express from 'express'
import { addProject, listProjects } from './projects.ts'

const app = express()
app.use(express.json())

app.get('/healthz', (_req, res) => res.send('ok'))
app.get('/api/projects', (req, res) => res.json(listProjects(req.query.owner as string | undefined)))
app.post('/api/projects', (req, res) => {
  try {
    res.status(201).json(addProject(req.body))
  } catch (e) {
    res.status(400).json({ error: (e as Error).message })
  }
})

const port = Number(process.env.PORT ?? 3000)
app.listen(port, () => console.log(`halyard-api listening on ${port}`))
