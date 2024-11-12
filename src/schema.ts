import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { CarInsuranceResolver } from "./resolvers/CarInsuranceResolver";

export const createSchema = async () => {
  return await buildSchema({
    resolvers: [CarInsuranceResolver],
  });
};
