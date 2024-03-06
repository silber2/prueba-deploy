import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
app.use(cors());

mongoose.connect('mongodb+srv://fransilber16:KMKtQn2qMyR1OU7w@cluster0.8nbblqs.mongodb.net/pruebaDeploy?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log("DB connected");
        app.listen(process.env.PORT, () => {
            console.log('Listening on port', process.env.PORT);
        });
    })
    .catch(err => console.error("Error connecting to the database:", err));

const objectSchema = new mongoose.Schema({
    name: String
});

const ObjectModel = mongoose.model('obj', objectSchema);

app.get('/api', (req, res) => {
    ObjectModel.find()
        .then(response => {
            if (response.length < 1) {
                console.error("Response is empty");
                return res.status(404).send("Not Found");
            }
            res.status(200).json(response);
        })
        .catch(err => {
            console.error("Error getting data:", err);
            res.status(500).send("Internal Server Error");
        });
});
