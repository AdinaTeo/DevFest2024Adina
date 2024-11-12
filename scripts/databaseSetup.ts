import mongoose from "mongoose";
import { CarModel } from "../src/models/Car";
import { InsuranceModel } from "../src/models/CarInsurance";
import { v4 as uuidv4 } from "uuid";

// Connect to MongoDB
async function connectToDatabase() {
  await mongoose.connect("mongodb+srv://", {
    
  });
  console.log("Connected to MongoDB");
}

// Function to add a car
async function addCar() {
  const newCar = new CarModel({
    id: uuidv4(),
    make: "Toyota",
    model: "Camry",
    year: 2021,
  });
  await newCar.save();
  return newCar;
}

// Function to add insurance for a car
async function addInsurance(carId: string) {
  const newInsurance = new InsuranceModel({
    id: uuidv4(),
    car: carId,
    insuranceExpiryDate: new Date("2025-12-31"),
    provider: "SafeInsure",
  });
  await newInsurance.save();
  return newInsurance;
}

// Main function to seed the database
async function seedDatabase() {
  try {
    await connectToDatabase();

    const car = await addCar();
    console.log("Car added:", car);

    const insurance = await addInsurance(car.id);
    console.log("Insurance added:", insurance);

  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    mongoose.disconnect();
  }
}

// Run the seeding script
seedDatabase();
