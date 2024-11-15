import styles from "./styles.module.scss";

import logo from "~/assets/images/logo.svg";
export const MainPage: React.FC = () => {
    return (
        <div className={styles["main-page"]}>
            <img src={logo} alt="Logo" />
        </div>
    );
};
