import {Resource, component$} from "@builder.io/qwik";
import {RequestHandler, useEndpoint} from "@builder.io/qwik-city";
import Card from "~/components/card/card";

export interface Rating {
    rate: number;
    count: number;
}

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
}

export const onGet: RequestHandler<Product[]> = async () => {
    return await fetch('https://fakestoreapi.com/products').then(res => res.json());
};

export default component$(() => {
    const productData = useEndpoint<Product[]>();

    return (
        <div className="container mx-auto grid gap-y-8 grid-cols-3">
            <Resource
                value={productData}
                onPending={() => <div>Loading...</div>}
                onRejected={() => <div>Error</div>}
                onResolved={(products) => (
                    <>
                        {products?.map(product => (
                            <Card id={product.id} title={product.title} price={product.price} image={product.image} category={product.category}></Card>
                        ))}
                    </>

                )}
            />
        </div>
    )
});