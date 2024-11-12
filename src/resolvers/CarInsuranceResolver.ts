import { Arg, Mutation, Resolver } from 'type-graphql';
import { CarInsurance, InsuranceModel } from '../models/CarInsurance';
import { CarModel } from '../models/Car';
import { Types } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

@Resolver()
export class CarInsuranceResolver {
  // Mutation to add new car insurance
  @Mutation(() => CarInsurance)
  async addInsurance(
    @Arg("carId", () => String) carId: string, // Accept car ID as a string
    @Arg("insuranceExpiryDate", () => Date) insuranceExpiryDate: Date,
    @Arg("provider", () => String) provider: string
  ): Promise<CarInsurance> {
    // Check if the car exists
    const car = await CarModel.findById(carId);
    if (!car) {
      throw new Error("Car not found");
    }

    // Create a new CarInsurance document
    const newInsurance = new InsuranceModel({
      id: uuidv4(),
      car: car._id, // Store the car reference as ObjectId
      insuranceExpiryDate,
      provider,
    });

    await newInsurance.save(); // Save to the database
    return newInsurance;
  }
}
