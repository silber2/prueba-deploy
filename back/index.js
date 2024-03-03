import express from 'express'
import cors from 'cors'
import {Schema, model, mongoose} from 'mongoose'

const app = express();
mongoose.connect('mongodb+srv://fransilber16:KMKtQn2qMyR1OU7w@cluster0.8nbblqs.mongodb.net/pruebadeploy?retryWrites=true&w=majority&appName=Cluster0');
app.use(cors())

const objectSchema = new Schema({
    name: String
})

const Object = model('obj', objectSchema)

const newObject = {
    name: "hola3"
}

Object.save(newObject)

app.get('/api', (req, res) => {

    Object.find({})
        .then(objs => res.json(objs))
        .catch(err => console.error(err + ' error find'))
})

app.listen(process.env.PORT, () => {
    console.log('listeninggg')
})