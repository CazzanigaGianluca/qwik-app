import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { QwikLogo } from '../icons/qwik';
import styles from './header.css?inline';
import {useContent} from "@builder.io/qwik-city";

export default component$(() => {
  useStylesScoped$(styles);

  const { menu } = useContent();

  return (
    <header>
      <div class="logo">
        <QwikLogo />
      </div>
      <ul>
        {menu?.items?.map(item => (
          <li>
            <a href={item.href}>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
});
