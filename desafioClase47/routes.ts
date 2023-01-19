import { Router } from "./deps.ts";
import { productsController } from "./controller.ts";

const router = new Router();

router
  .get("/api/products", productsController.getAllProducts) // Get all quotes
  .get("/api/products/:id", productsController.getPropductById) // Get one quote of quoteID: id
  .post("/api/products", productsController.createProduct) // Add a quote
  .put("/api/products/:id", productsController.updateProduct) // Update a quote
  .delete("/api/products/:id", productsController.deleteProduct); // Delete a quote

export default router;