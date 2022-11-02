import {component$, useStore} from "@builder.io/qwik";

export default component$(() => {
    const state = useStore({ count: 0 });

    return (
        <button className="bg-sky-300 border rounded-md p-4 font-semibold hover:bg-sky-500" onClick$={() => state.count++}># of clicks: {state.count}</button>
    );
});