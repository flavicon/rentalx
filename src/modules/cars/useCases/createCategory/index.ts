import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { CreateCategoryUseCase } from "../createCategory/CreateCategoryUseCase";
import { CreateCategoryController } from "./CreateCategoryController";

const createCategoiesRepository = new CategoriesRepository();

const createCategoryUseCase = new CreateCategoryUseCase(
  createCategoiesRepository
);

const createCategoriesController = new CreateCategoryController(
  createCategoryUseCase
);

export { createCategoriesController };
