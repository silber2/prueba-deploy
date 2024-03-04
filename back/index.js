import express from 'express'
import cors from 'cors'
import {Schema, model} from 'mongoose'
import mongoose from 'mongoose'

const app = express();
app.use(cors())
mongoose.connect('mongodb+srv://fransilber16:KMKtQn2qMyR1OU7w@cluster0.8nbblqs.mongodb.net/pruebadeploy?retryWrites=true&w=majority&appName=Cluster0')
    .then(console.log("db connected"))
    .catch(err => console.error("error db conection"))


const objectSchema = new Schema({
    name: String
})

const Object = model('obj', objectSchema)

// const newObject = new Object({
//     name: "hola3"
// })

// newObject.save()

app.get('/api', (req, res) => {

    // Object.find()
    //     .then(response => {
    //         if (response.length < 1) {
    //             console.error("response is empty")
    //             return res.status(404).send("Not Found");
    //         }
    //         res.status(200).json(response)
    //     })
    //     .catch(err => console.error(err + "error get"))
    const buscarObjs = async () => {
        const resp = await Object.find()
        res.json(resp)
    }

    buscarObjs()
    })
    
app.listen(process.env.PORT, () => {
    console.log('listeninggg')
})