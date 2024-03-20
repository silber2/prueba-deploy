import express from 'express';

import cors from 'cors';
import mongoose from 'mongoose';
import { MercadoPagoConfig, Preference } from 'mercadopago';


const app = express();
app.use(cors());
mongoose.connect('mongodb+srv://fransilber16:KMKtQn2qMyR1OU7w@cluster0.8nbblqs.mongodb.net/pruebaDeploy?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log("DB connected");
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
                return res.status(404).send("Not Found asldlasdlasd");
            }
            res.status(200).json(response);
        })
        .catch(err => {
            console.error("Error getting data:", err);
            res.status(500).send("Internal Server Error");
        });
});


const client = new MercadoPagoConfig({ accessToken: 'TEST-6909478488543305-031412-78d4628b899e70fa5b01e2cbe63d5679-242264453' });


const preference = new Preference(client);

app.get('/api/createOrder', (req, res) => {
   
    preference.create({
      body: {
        items: [
            {
                title: "Mi producto",
                quantity: 1,
                unit_price: 20
            }
        ],
      }
    })
    .then(preference => res.status(200).json(preference))
    .catch(() => console.log('errorrrrrrrrrrrroooooooooooooo'));
})

// app.get('/api/createOrder', (req, res) => {
//     res.status(200).send('12232312312312312')
// })


app.listen(2322, () => {
   console.log('dsadadasd')

});