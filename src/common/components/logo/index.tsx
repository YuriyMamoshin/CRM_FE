import styles from "./styles.module.scss";
import LogoElement from "~/assets/images/logo.svg?react";
import { LogoVariant } from "~/common/enums/";
import { ValueOf } from "~/common/types";
import clsx from "clsx";

const variants: Record<LogoVariant, string> = {
    white: styles.logo_white,
    black: styles.logo_black,
};

type LogoProperties = {
    variant: ValueOf<typeof LogoVariant>;
};

const Logo: React.FC<LogoProperties> = ({ variant }) => {
    return (
        <div className="logo">
            <LogoElement className={clsx(styles["logo"], variants[variant])}/>
        </div>
    );
};

export { Logo };
