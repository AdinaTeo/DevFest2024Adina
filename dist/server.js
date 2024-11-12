var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ApolloServer } from "apollo-server";
import { createSchema } from "./schema";
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    const schema = yield createSchema();
    const server = new ApolloServer({ schema });
    server.listen({ port: 4000 }, () => console.log("Server is running on http://localhost:4000"));
});
startServer();
