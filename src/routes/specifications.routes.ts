import { Router } from "express";
import { createCategoriesController } from "../modules/cars/useCases/createCategory";

const specificationRoutes = Router();

specificationRoutes.post("/", (request, response) => {
  return createCategoriesController.handle(request, response);
});

export { specificationRoutes };
