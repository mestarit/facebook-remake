import { Prisma, PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body
  console.log(req.body)
  try{
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    })
    res.json(user)
  }
  catch(e){
    console.log(e)
    res.status(500).json({error: e})
  }
})

app.post('/login', async (req, res) => {
  const { email, password } = req.body
  console.log(req.body)
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  })
  if (user && user.password === password) {
    res.json(user)
  } else {
    res.status(401).json({ error: 'Invalid email or password' })
  }
})



const server = app.listen(3000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`),
)
