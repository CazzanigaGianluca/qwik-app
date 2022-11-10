import { $, component$, useStore } from "@builder.io/qwik";
import CheckoutSection from "~/components/checkout-section/checkout-section";

export default component$(() => {
  const state = useStore({
    name: '',
    surname: '',
    email: '',
    address: '',
    city: '',
    province: '',
    postalCode: '',
    creditCardName: '',
    expireDate: '',
    cvc: ''
  });

  const onCheckoutSubmit = $((e: Event): void => {
    e.preventDefault();
    alert(`Dati inseriti:
      ${JSON.stringify(state)}
    `);
  });

  return (
    <div>
      <form onSubmit$={onCheckoutSubmit}>
        <CheckoutSection title="Dati di spedizione">
          <span q:slot="content">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">Nome</label>
                <input type="text" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" value={state.name} onInput$={(e: Event) => (state.name = (e.target as HTMLInputElement).value)}/>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">Cognome</label>
                <input type="text" name="surname" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" value={state.surname} onInput$={(e: Event) => (state.surname = (e.target as HTMLInputElement).value)}/>
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="text" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" value={state.email} onInput$={(e: Event) => (state.email = (e.target as HTMLInputElement).value)}/>
              </div>

              <div className="col-span-6">
                <label className="block text-sm font-medium text-gray-700">Indirizzo</label>
                <input type="text" name="address" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" value={state.address} onInput$={(e: Event) => (state.address = (e.target as HTMLInputElement).value)}/>
              </div>

              <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Città</label>
                <input type="text" name="city" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" value={state.city} onInput$={(e: Event) => (state.city = (e.target as HTMLInputElement).value)}/>
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Provincia</label>
                <input type="text" name="province" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" value={state.province} onInput$={(e: Event) => (state.province = (e.target as HTMLInputElement).value)}/>
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label className="block text-sm font-medium text-gray-700">CAP</label>
                <input type="text" name="postal-code" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" value={state.postalCode} onInput$={(e: Event) => (state.postalCode = (e.target as HTMLInputElement).value)}/>
              </div>
            </div>
          </span>
        </CheckoutSection>

        <div className="block">
          <div className="py-5">
            <div className="border-t border-gray-200"></div>
          </div>
        </div>

        <CheckoutSection title="Dati di pagamento">
          <span q:slot="content">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6">
                <label className="block text-sm font-medium text-gray-700">Nome presente sulla carta</label>
                <input type="text" name="credit-card-name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" value={state.creditCardName} onInput$={(e: Event) => (state.creditCardName = (e.target as HTMLInputElement).value)}/>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">Data scadenza (MM/YY)</label>
                <input type="text" name="expire-date" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" value={state.expireDate} onInput$={(e: Event) => (state.expireDate = (e.target as HTMLInputElement).value)}/>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium text-gray-700">CVC</label>
                <input type="text" name="cvc" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" value={state.cvc} onInput$={(e: Event) => (state.cvc = (e.target as HTMLInputElement).value)}/>
              </div>
            </div>
          </span>
        </CheckoutSection>
        <div className="py-3 text-right">
          <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Conferma ordine
          </button>
        </div>
      </form>
    </div>
  )
});