import {component$} from "@builder.io/qwik";
import {ButtonProps} from "~/components/button/button-props";

export default component$((props: ButtonProps) => {
    return (
        <button className="bg-sky-300 border rounded-md p-4 font-semibold hover:bg-sky-500" onClick$={props.onClick$}>{props.label}</button>
    );
});