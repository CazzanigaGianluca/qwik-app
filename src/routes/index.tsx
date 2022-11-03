import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Counter from "~/components/counter/counter";
import Accordion from "~/components/accordion/accordion";

export default component$(() => {
  return (
    <div>
      <Counter />
        <div className="mt-2">
            <Accordion title="Expadible accordion" open={true}>test</Accordion>
        </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Qwik Demo',
};
