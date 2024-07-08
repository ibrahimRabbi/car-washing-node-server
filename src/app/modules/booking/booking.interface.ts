import { Types } from "mongoose";

type Tbooking = {
    serviceId: Types.ObjectId,
    slotId: Types.ObjectId,
    customerId:Types.ObjectId,
    vehicleType: 'car'| 'truck'| 'SUV'| 'van'| 'motorcycle'| 'bus'| 'electricVehicle'| 'hybridVehicle'| 'bicycle'| 'tractor',
    vehicleBrand: string,
    vehicleModel: string,
    manufacturingYear: string,
    registrationPlate: string,
}

export default Tbooking