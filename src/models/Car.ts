import { ObjectType, Field, ID } from "type-graphql";
import { getModelForClass, prop } from "@typegoose/typegoose";

@ObjectType()
export class Car {
  @Field(() => ID)
  @prop({ required: true })
  id!: string;

  @Field()
  @prop({ required: true })
  make!: string;

  @Field()
  @prop({ required: true })
  model!: string;

  @Field()
  @prop({ required: true })
  year!: number;
}

export const CarModel = getModelForClass(Car);
