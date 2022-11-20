import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';
import {DocumentHead} from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <main className="container mx-auto">
        <Header />
        <section className="my-4">
          <Slot />
        </section>
      </main>
    </>
  );
});

export const head: DocumentHead = {
    title: 'Qwik Demo',
};