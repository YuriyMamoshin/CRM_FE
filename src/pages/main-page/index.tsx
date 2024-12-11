import { Button } from "~/common/components/button";
import styles from "./styles.module.scss";
import { ButtonSize, ButtonVariant } from "~/common/enums";
import logo from "~/assets/images/logo.svg";

const MainPage: React.FC = () => {
    return (
        <section className={styles["main-page"]}>
            <img src={logo} alt="Logo" className={styles["logo"]} />
            <article className={styles["content-wrapper"]}>
                <h1 className={styles["heading"]}>
                    Стартуйте в IT з першим реальним проєктом від{" "}
                    <span className={styles["heading__span"]}>TOPIZDATO!</span>{" "}
                </h1>
                <p className={styles["text"]}>
                    Приєднуйтесь зараз та розвивайте свої навички
                </p>

                <div className={styles["buttons-container"]}>
                    <Button
                        variant={ButtonVariant.PRIMARY}
                        size={ButtonSize.FILL}
                    >
                        Приєднатися!
                    </Button>
                    <Button
                        variant={ButtonVariant.SECONDARY}
                        size={ButtonSize.FILL}
                    >
                        Авторизуватися
                    </Button>
                </div>
            </article>
        </section>
    );
};

export { MainPage };
