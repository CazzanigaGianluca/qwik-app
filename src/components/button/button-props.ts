import {PropFunction} from "@builder.io/qwik";

export interface ButtonProps {
    label: string;
    onClick$: PropFunction<() => void>;
}