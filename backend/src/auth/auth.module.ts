import { MongooseModule } from "@nestjs/mongoose";
import { Module } from "@nestjs/common";

import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { User, UserSchema } from "./../users/users.schema";
import {
  Preferences,
  PreferencesSchema,
} from "src/preferences/preferences.schema";
import { UsersService } from "./../users/users.service";
<<<<<<< HEAD
import { CloudinaryModule } from "src/cloudinary/cloudinary.module";
import { PreferencesModule } from "src/preferences/preferences.module";
import { PreferencesService } from "src/preferences/preferences.service";
=======
import { CloudinaryService } from "../cloudinary/cloudinary.service";
>>>>>>> main

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([
      { name: Preferences.name, schema: PreferencesSchema },
    ]),
    CloudinaryModule,
    PreferencesModule,
  ],
<<<<<<< HEAD
  providers: [AuthService, UsersService, PreferencesService],
=======
  providers: [AuthService, UsersService, CloudinaryService],
>>>>>>> main
  controllers: [AuthController],
})
export class AuthModule {}
