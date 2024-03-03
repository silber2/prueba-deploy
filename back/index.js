import express from 'express'
import cors from 'cors'

const app = express();

app.use(cors())

app.get('/api', (req, res) => {

    const objs = [
        {name: "holaa"},
        {name: "hola2"}
        ]

    res.json(objs)
})

app.listen(process.env.PORT, () => {
    console.log('listeninggg')
})