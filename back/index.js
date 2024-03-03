import express from 'express'
import cors from 'cors'

const app = express();
const PORT = 213
app.use(cors())

app.get('/api', (req, res) => {

    const objs = [
        {name: "holaa"},
        {name: "hola2"}
        ]

    res.json(objs)
})

app.listen(PORT, () => {
    console.log('listeninggg')
})