import {component$} from "@builder.io/qwik";
import {ReactButton} from "~/integrations/react/react-button";

export default component$(() => {
    return (
        <div>
            <ReactButton client:hover/>
        </div>
    );
});