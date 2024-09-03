import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"


const checkoutSchema = z.object({
    products: z.array(z.object({
        id: z.string().min(1),
        name: z.string().min(1),
        price: z.number().min(1),
        quantity: z.number().min(1),
    })),
})

type ICheckout = z.infer<typeof checkoutSchema>



const CheckoutForm = () => {

    const { formState, register, handleSubmit } = useForm({
        resolver: zodResolver(checkoutSchema),
        defaultValues: {
            products: [],
        },
    })


    const onSubmit = (data: ICheckout) => {
        console.log(data.products)
    }


    return (
        <form
            className="flex flex-col gap-2"
            onSubmit={handleSubmit(onSubmit)}
        >
            {/* <input className="border border-gray-300 rounded-md p-2" type="text" {...register("products.0.name")} /> */}
            <button type="submit">Submit</button>
        </form>
    )
}

export default CheckoutForm