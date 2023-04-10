/*
Import necessary modules and dependencies
*/
import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import * as admin from "firebase-admin";
import { ServiceAccount } from "firebase-admin";
import { AppModule } from "./app.module";
import { HttpExceptionFilter } from "./filters/http-exception.filter";
/*

Declare async function 'bootstrap' for starting the NestJS server
*/
async function bootstrap() {
  // Create an instance of Nest application
  const app = await NestFactory.create(AppModule);
  // Get the configuration service instance
  const configService = app.get(ConfigService);

  // Retrieve the port number
  const assignedPort = parseInt(configService.get("PORT"));

  // Set the global prefix for all routes to 'api/v1'
  app.setGlobalPrefix("api/v1");

  // Enable Cross-Origin Resource Sharing (CORS)
  app.enableCors();

  // Instantiate a validation pipe globally for transforming incoming data
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  // instantiate exception filter globally
  // only added to transform the response to the specified format rather than default nestjs format
  app.useGlobalFilters(new HttpExceptionFilter());

  // Set the config options
  const adminConfig: ServiceAccount = {
    projectId: configService.get<string>("FIREBASE_PROJECT_ID"),
    privateKey: configService
      .get<string>("FIREBASE_PRIVATE_KEY")
      .replace(/\\n/g, "\n"),
    clientEmail: configService.get<string>("FIREBASE_CLIENT_EMAIL"),
  };
  // Initialize the firebase admin app
  admin.initializeApp({
    credential: admin.credential.cert(adminConfig),
    // databaseURL: configService.get("FIREBASE_DATABASE_URL"),
  });

  // Assign the port number to either the configured port or a default of 3000
  const PORT = assignedPort || 3000;

  // Start the server and listen on the assigned port
  await app.listen(PORT);
}

/*
Call the bootstrap function to start the server
*/
bootstrap();
