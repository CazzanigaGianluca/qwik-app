import {$, component$, Resource, useClientEffect$, useStore} from "@builder.io/qwik";
import {RequestHandler, useEndpoint} from "@builder.io/qwik-city";
import {Product} from "~/routes/product";
import Rating from "~/components/rating/rating";
import Button from "~/components/button/button";

export const onGet: RequestHandler<Product> = async ({params}) => {
    return await fetch(`https://fakestoreapi.com/products/${params.productId}`).then(res => res.json());
};

export default component$(() => {
    const product = useEndpoint<Product>();
    const state = useStore({addedToCart: false});

    useClientEffect$(({track}) => {
        const addedToCart = track(() => state.addedToCart);
        if (addedToCart) {
            setTimeout(() => {
                state.addedToCart = !addedToCart;
            }, 3000);
        }
    });

    const addToCart = $((): void => {
        state.addedToCart = !state.addedToCart;
    });

    const setButtonLabel = (): string => {
        if (state.addedToCart) {
            return 'Aggiunto al carrello!!'
        }
        return 'Aggiungi al carrello';
    };

    return (
        <div>
            <Resource
                value={product}
                onPending={() => <div>Loading...</div>}
                onRejected={() => <div>Error</div>}
                onResolved={(product) => (
                    <div className="grid gap-x-8 grid-cols-2">
                        <figure>
                            <img className="h-96 object-scale-down mx-auto" src={product.image} alt={product.title}/>
                        </figure>
                        <span>
                            <h2 className="text-2xl font-semibold">{product.title}</h2>
                            <p className="pt-8">{product.description}</p>
                            <span className="flex items-center mt-6">
                                <p className="mr-2">Valutazione ({product.rating.count} utenti):</p>
                                <Rating rate={product.rating.rate}></Rating>
                            </span>
                            <div className="text-5xl font-bold mt-6">$ {product.price}</div>
                            <div className="flex justify-center mt-10">
                                <Button label={setButtonLabel()} onClick$={addToCart}></Button>
                            </div>
                        </span>
                    </div>
                )}
            />
        </div>
    );
});