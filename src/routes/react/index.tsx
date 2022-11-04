import {component$} from "@builder.io/qwik";
import {ReactCounter} from "~/integrations/react/react-counter";

export default component$(() => {
    return (
        <div>
            <ReactCounter client:hover/>
        </div>
    );
});