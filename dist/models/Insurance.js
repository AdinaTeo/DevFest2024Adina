var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ObjectType, Field, ID } from "type-graphql";
import { getModelForClass, prop } from "@typegoose/typegoose";
import { Car } from "./Car";
import { DateTimeResolver } from "graphql-scalars";
let Insurance = class Insurance {
};
__decorate([
    Field(() => ID),
    prop({ required: true }),
    __metadata("design:type", String)
], Insurance.prototype, "id", void 0);
__decorate([
    Field(() => Car),
    prop({ ref: () => Car, required: true }),
    __metadata("design:type", Object)
], Insurance.prototype, "car", void 0);
__decorate([
    Field(() => DateTimeResolver),
    prop({ required: true }),
    __metadata("design:type", Date)
], Insurance.prototype, "insuranceExpiryDate", void 0);
__decorate([
    Field(),
    prop({ required: true }),
    __metadata("design:type", String)
], Insurance.prototype, "provider", void 0);
Insurance = __decorate([
    ObjectType()
], Insurance);
export { Insurance };
export const InsuranceModel = getModelForClass(Insurance);
