import express from 'express';
import cors from 'cors'
import envData from './app/config/config';
import mongoose from 'mongoose';

const app = express()

app.use(cors())
app.use(express.json())



async function main() {
    await mongoose.connect(envData.database_url as string);

    app.listen(envData.port, () => {
        console.log(`server is run on ${envData.port}`)
    })
}

main()

