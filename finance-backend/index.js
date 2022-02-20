const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
require('dotenv').config();
const port = process.env.PORT || 3001;

app.use(express.json({extended: false}));

const connectionString = process.env.API_KEY;

MongoClient.connect(connectionString)
    .then(client => {
        console.log('Connected to Database');

        const db = client.db('finances');
        const usersCollection = db.collection('users')

        app.post('/api/v1/addUser', (req, res) => {
            
            console.log(req.body, " Post request")

            usersCollection.insertOne(req.body)
            .then(result => {
                res.send({userID: result.insertedId, name: result.name});
            })
            .catch(error => console.error(error))
            
        });

        app.get('/api/v1/users', async (req, res) => {

            let data = await db.collection('users').find().toArray();

            if(data){
                console.log('Sending user data..');
                res.json(data);
            }
        });

        app.get('/api', (req, res) => {
            console.log('Receaved api request')
            res.json({ message: "Hello from the server side!" });
        });

        app.delete('/remove:id', (req, res) => {
            const reqApartment = req.params.id.slice(1).toString();
            console.log('Removing apartment ',reqApartment);
            usersCollection.deleteOne({ "_id" : ObjectId(reqApartment) })
            .then(result => {
                console.log(result);
                res.send('Apartment: "'+reqApartment+'" has been removed')
            })
            .catch(error => console.error(error))
            
        });

        app.put('/update:id', async (req,res) => {
            const reqApartment = req.params.id.slice(1).toString();

            let data = await db.collection('users').findOne({ "_id" : ObjectId(reqApartment) });
            let status = '"sold"';
            if(data.status === '"available"') status = '"available"';
            console.log(reqApartment, data);

            usersCollection.updateOne({ "_id" : ObjectId(reqApartment) }, {$set: { status: status}})
        })

      })
      .catch(error => console.error(error))



app.listen(port, () => {
    console.log('Server started');
    console.log(`listening on ${port}`);
});