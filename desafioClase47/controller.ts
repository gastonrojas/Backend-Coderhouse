import { productsContainer as products } from "./persistance/MongodbContainer.ts";

export const productsController = {
    async getAllProducts({ response }: { response: any }) {
       try {
           const allPoducts = await products.getAll()
            if(allPoducts){
                response.status = 200;
                response.body = {
                    success: true,
                    data: allPoducts,
                }
            } else {
                response.status = 500;
                response.body = {
                    success: false,
                    msg: "Internal Server Error",
                };
            }
       } catch (error) {
        response.body = {
            success: false,
            msg: error.toString(),
          };
       }
    },

    async getPropductById({params,response,}: { params: { id: string }; response: any;}){
        try {
            const product = await products.getById(params.id)
            if(product){
                response.status = 200;
                response.body = {
                    success: true,
                    data: product,
                }
            } else {
                response.status = 500;
                response.body = {
                    success: false,
                    msg: "Internal Server Error",
                };
            }
        } catch (error) {
            response.body = {
                success: false,
                msg: error.toString(),
              };
        }
    },

    async createProduct ({request, response}: {request: any, response: any}){
        try {
            if (!request.hasBody) {
                response.status = 400;
                response.body = {
                  success: false,
                  msg: "No Data",
                };
            } else{
                const body = await request.body();
                const newProduct = await body.value;
                const id = globalThis.crypto.randomUUID()
                await products.save({id, ...newProduct})
                response.status = 201;
                response.body = {
                    success: true,
                    data: newProduct,
                };
            } 
        } catch (error) {
            response.body = {
                success: false,
                msg: error.toString(),
              };
        }
    },

    async updateProduct ({params, request, response,}: {params: { id: string }, request: any, response: any}){
        try {
            if (!request.hasBody) {
                response.status = 400;
                response.body = {
                  success: false,
                  msg: "No Data",
                };
            } else{
                const body = await request.body();
                const productInput = await body.value;
                const productUpdated = await products.updateOneById(params.id, productInput)
                response.status = 200;
                response.body = {
                    success: true,
                    data: productUpdated
                }
            } 
        } catch (error) {
            response.body = {
                success: false,
                msg: error.toString(),
              };
        }
      },

      async deleteProduct({params, response}: {params: {id: string}, response: any}){
        try {
            const deletedProduct = await products.deleteOneById(params.id)
            response.status = 200;
            response.body = {
                success: true,
                data: deletedProduct
            }
        } catch (error) {
            response.body = {
                success: false,
                msg: error.toString(),
              };
        }
      }
}