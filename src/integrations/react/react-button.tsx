/** @jsxImportSource react */

import {qwikify$} from "@builder.io/qwik-react";
import {useState} from "react";

export const ReactButton = qwikify$(() => {
    const [counter, setCounter] = useState(0);

    return (
        <button className="bg-sky-300 border rounded-md p-4 font-semibold hover:bg-sky-500" onClick={() => setCounter(counter+1)}># of clicks: {counter}</button>
    );
});