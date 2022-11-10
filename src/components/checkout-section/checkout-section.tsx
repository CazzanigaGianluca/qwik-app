import { component$, Slot } from "@builder.io/qwik";
import { CheckoutSectionProps } from "~/components/checkout-section/checkout-section-props";

export default component$((props: CheckoutSectionProps) => {
  return (
    <>
      <h3 className="text-lg font-medium leading-6 text-gray-900">{props.title}</h3>
      <div className="py-5">
        <Slot name="content" />
      </div>
    </>
  );
});