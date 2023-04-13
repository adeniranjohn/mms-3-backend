// Import required modules
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Schema as MongooseSchema } from "mongoose";
import { User } from "../users/users.schema";
import { IProgramArchive } from "./interface/program-archive.interface";

// Define interface for program archive document
export type ProgramArchiveDocument = HydratedDocument<ProgramArchive> &
  IProgramArchive;

// Define schema for program
@Schema({
  timestamps: true, // Add createdAt and updatedAt fields
  autoIndex: true, // Automatically create indexes for fields
  toJSON: { virtuals: true }, // Include virtual properties when converting to JSON
  toObject: { virtuals: true }, // Include virtual properties when converting to a plain object
})
export class ProgramArchive {
  @Prop({
    type: MongooseSchema.Types.ObjectId, // Define type as ObjectId
    ref: "User", // Reference the User collection
    required: true, // userId is a required field
  })
  userId: User; // Reference to the user who the program belongs to

  @Prop({
    type: MongooseSchema.Types.ObjectId, // Define type as ObjectId
    ref: "Programs", // Reference the Programs collection
    required: true, // programId is a required field
  })
  programId: string; // Title of the program

  @Prop()
  completionDate: Date; // Date when the program was completed
}

// Create mongoose schema for Program model
export const ProgramArchiveSchema =
  SchemaFactory.createForClass(ProgramArchive);