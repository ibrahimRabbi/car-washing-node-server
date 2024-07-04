import express from 'express';
import cors from 'cors'
import envData from './app/config/config';
import mongoose from 'mongoose';
import { userRoute } from './app/modules/user/user.route';
import globalErrorHandler from './app/error/globalErrorHandler';
import notFound from './app/error/notFoundError';

const app = express()

app.use(cors())
app.use(express.json())



//routes
app.use('/api/auth', userRoute)


//error handler
app.use(globalErrorHandler)
app.use(notFound)






async function main() {
    await mongoose.connect(envData.database_url as string);

    app.listen(envData.port, () => {
        console.log(`server is run on ${envData.port}`)
    })
}

main()

