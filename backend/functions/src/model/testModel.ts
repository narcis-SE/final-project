import { ObjectId } from "mongodb";

export default interface test {
    _id?: ObjectId;
    message: string;
}