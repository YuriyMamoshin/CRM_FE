import styles from "./styles.module.scss";

import logo from "~/assets/images/logo.svg";

export const MainPage: React.FC = () => {
    return (
        <section className={styles["main-page"]}>
            <img src={logo} alt="Logo" className={styles["main-page__logo"]} />
            <article
                className={`${styles["main-page__content-wrapper"]} ${styles["content-wrapper"]}`}
            >
                <h1 className={styles["heading"]}>
                    Стартуйте в IT з першим реальним проєктом від{" "}
                    <span className={styles["heading__span"]}>TOPIZDATO!</span>{" "}
                </h1>
                <p className={styles["text"]}>Приєднуйтесь зараз та розвивайте свої навички</p>

                <footer>Приєднатися!</footer>
                <footer>Авторизуватися</footer>
            </article>
        </section>
    );
};
