import { Types } from "mongoose";

type Tbooking = {
    serviceId: Types.ObjectId,
    slotId: Types.ObjectId,
    customerId:Types.ObjectId,
    vehicleType: string,
    vehicleBrand: string,
    vehicleModel: string,
    manufacturingYear: string,
    registrationPlate: string
}

export default Tbooking