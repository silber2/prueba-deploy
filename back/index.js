import express from 'express'
import cors from 'cors'
import {Schema, model, mongoose} from 'mongoose'

const app = express();
app.use(cors())
mongoose.connect('mongodb+srv://fransilber16:KMKtQn2qMyR1OU7w@cluster0.8nbblqs.mongodb.net/pruebadeploy?retryWrites=true&w=majority&appName=Cluster0');


const objectSchema = new Schema({
    name: String
})

const Object = model('obj', objectSchema)

// const newObject = new Object({
//     name: "hola3"
// })

// newObject.save()

app.get('/api', async (req, res) => {

    const objs = await Object.find()
    res.json(objs)
})

app.listen(process.env.PORT, () => {
    console.log('listeninggg')
})