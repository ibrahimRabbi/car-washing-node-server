import express from 'express';
import cors from 'cors'
import envData from './app/config/config';
import mongoose from 'mongoose';
import { userRoute } from './app/modules/user/user.route';
import globalErrorHandler from './app/error/globalErrorHandler';
import notFound from './app/error/notFoundError';
import { serviceRoute } from './app/modules/services/services.route';
import { slotRoute } from './app/modules/timeSlot/slot.route';
import { bookingRoute } from './app/modules/booking/booking.route';

const app = express()

app.use(cors())
app.use(express.json())



//routes
app.use('/api/auth', userRoute)
app.use('/api/services', serviceRoute)
app.use('/api/services', slotRoute)
app.use('/api/slots', slotRoute)
app.use('/api/bookings',bookingRoute)

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

