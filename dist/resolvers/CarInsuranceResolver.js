var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Arg, Mutation, Resolver } from 'type-graphql';
import { CarInsurance, InsuranceModel } from '../models/CarInsurance';
import { CarModel } from '../models/Car';
import { v4 as uuidv4 } from 'uuid';
let CarInsuranceResolver = class CarInsuranceResolver {
    // Mutation to add new car insurance
    addInsurance(carId, insuranceExpiryDate, provider) {
        return __awaiter(this, void 0, void 0, function* () {
            // Check if the car exists
            const car = yield CarModel.findById(carId);
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
            yield newInsurance.save(); // Save to the database
            return newInsurance;
        });
    }
};
__decorate([
    Mutation(() => CarInsurance),
    __param(0, Arg("carId", () => String)),
    __param(1, Arg("insuranceExpiryDate", () => Date)),
    __param(2, Arg("provider", () => String)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Date, String]),
    __metadata("design:returntype", Promise)
], CarInsuranceResolver.prototype, "addInsurance", null);
CarInsuranceResolver = __decorate([
    Resolver()
], CarInsuranceResolver);
export { CarInsuranceResolver };
