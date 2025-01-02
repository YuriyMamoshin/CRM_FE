import { Button } from "~/common/components";
import {Logo} from "~/common/components";
import styles from "./styles.module.scss";
import { ButtonSize, ButtonVariant, LogoVariant } from "~/common/enums";

const MainPage: React.FC = () => {
    return (
        <section className={styles["main-page"]}>
            <Logo variant={LogoVariant.WHITE}/>
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
