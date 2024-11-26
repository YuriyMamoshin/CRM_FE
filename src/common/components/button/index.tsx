import clsx from "clsx";

import React, {ReactNode} from "react";
import { ButtonVariant, ButtonSize } from "~/common/enums";

import styles from "./styles.module.scss";
import { type ValueOf } from "~/common/types";

const variants: Record<ButtonVariant, string> = {
    primary: styles.button_primary,
    secondary: styles.button_secondary,
};

const sizes: Record<ButtonSize, string> = {
    fill: styles.button_fill,
}

type ButtonProperties = {
children?: ReactNode;
size: ValueOf<typeof ButtonSize>;
variant: ValueOf<typeof ButtonVariant>;
}

const Button: React.FC<ButtonProperties> = ({children, size, variant, ...restProperties}) => {
    return <button className={clsx(variants[variant], styles.button, sizes[size])} {...restProperties}>{children}</button>;
};

export {Button};