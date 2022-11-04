import {component$} from "@builder.io/qwik";
import {CardProps} from "~/components/card/card-props";
import {Link} from "@builder.io/qwik-city";

export default component$((props: CardProps) => {
    return (
        <div className="w-96 flex flex-col border rounded-md shadow-xl">
            <figure>
                <img className="h-56 object-scale-down mx-auto" src={props.image} alt={props.title}/>
            </figure>
            <div className="flex flex-auto flex-col p-8 gap-2">
                <Link className="hover:underline" href={`product/${props.id}`}>
                    <h2 className="flex items-center gap-2 text-2xl font-semibold">{props.title}</h2>
                </Link>
                <p className="text-xl font-bold">$ {props.price}</p>
                <div className="justify-end flex flex-wrap items-start gap-2">
                    <div className="bg-transparent border-current text-current inline-flex items-center justify-center h-5 text-sm w-fit px-2 border rounded-full">{props.category}</div>
                </div>
            </div>
        </div>
    )
});