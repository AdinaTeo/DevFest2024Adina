import { ObjectType, Field, ID } from "type-graphql";
import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { Car } from "./Car";
import { DateTimeResolver } from "graphql-scalars";

@ObjectType()
export class CarInsurance {
  @Field(() => ID)
  @prop({ required: true })
  id!: string;

  @Field(() => Car)
  @prop({ ref: () => Car, required: true })
  car!: Ref<Car>;

  @Field(() => DateTimeResolver)
  @prop({ required: true })
  insuranceExpiryDate!: Date;

  @Field()
  @prop({ required: true })
  provider!: string;
}

export const InsuranceModel = getModelForClass(CarInsurance);
