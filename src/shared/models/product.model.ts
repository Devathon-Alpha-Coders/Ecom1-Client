import { z } from "zod";

export const ProductBaseModel = z.object({
    id: z.number().min(1),
    product_id: z.string().min(1),
    name: z.string().min(1),
    price: z.number().min(0),
    image: z.string().min(1),
    category: z.string().min(1),
    is_featured: z.boolean().optional(),
    created_at: z.string().optional(),
    updated_at: z.string().optional(),
});

export type IProductBase = z.infer<typeof ProductBaseModel>;