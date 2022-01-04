import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryUseCase } from "../createCategory/CreateCategoryUseCase";
import { CreateCategoryController } from "./CreateCategoryController";

const createCategoiesRepository = CategoriesRepository.getInstance();

const createCategoryUseCase = new CreateCategoryUseCase(
  createCategoiesRepository
);

const createCategoriesController = new CreateCategoryController(
  createCategoryUseCase
);

export { createCategoriesController };
