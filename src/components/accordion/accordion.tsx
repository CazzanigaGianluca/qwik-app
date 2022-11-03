import {component$, Slot, useStore} from "@builder.io/qwik";
import {AccordionProps} from "~/components/accordion/accordion-props";

export default component$((props: AccordionProps) => {
    const state = useStore({ open: props.open});

    return (
        <div className="border rounded-lg border-gray-400">
            <div className={`p-2 ${state.open ? `border-b border-gray-400`: ``}`} onClick$={() => state.open = !state.open}>{props.title}</div>
            {state.open && <div className="p-2">
                <Slot></Slot>
            </div>}
        </div>
    );
});