/**
 * * ******* CONVENTIONS ********* * *
 * 
 * * Do not create a model for any resource from scratch. Instead, use the `BASE` model as a template.
 * * Do no return the payload, query, or response schema directly. Instead, create a DTO schema that includes the query, payload, and response schema.
 */


import { ProductBaseModel } from "@/shared/models/product.model";
import { z } from "zod";


const getMultipleProductItemSchema = ProductBaseModel.pick({
    id: true,
    product_id: true,
    name: true,
    price: true,
    image: true,
    category: true,
    is_featured: true,
})
export type IGetMultipleProductItem = z.infer<typeof getMultipleProductItemSchema>;

const getMultipleResponseSchema = z.array(getMultipleProductItemSchema)

export const getMultipleProductsDtoSchema = z.object({
    // queryParams: z.object({}),
    response: getMultipleResponseSchema,
});

export type IGetMultipleProductsDto = z.infer<typeof getMultipleProductsDtoSchema>;