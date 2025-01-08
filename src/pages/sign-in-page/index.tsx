import React from "react";
import { Button, Input, Logo } from "~/common/components";
import * as yup from "yup";
import { ButtonVariant, LogoVariant } from "~/common/enums";
import { useAppForm } from "~/common/hooks";
import styles from "./styles.module.scss";
import Rocket from "~/assets/images/rocket.svg";
import Leadership from "~/assets/images/leadership.svg";
import Accessibility from "~/assets/images/accessibility.svg";
import GoogleIcon from "~/assets/images/google.svg?react";
import MicrosoftIcon from "~/assets/images/microsoft.svg?react";
import FacebookIcon from "~/assets/images/facebook.svg?react";

const schema = yup
    .object({
        email: yup.string().email().required(),
        password: yup.string().min(4),
    })
    .required();

type FormData = yup.InferType<typeof schema>;

const SignIn: React.FC = () => {
    const { control, errors, handleSubmit, isValid, reset } =
        useAppForm<FormData>({
            defaultValues: {
                email: "",
                password: "",
            },
            mode: "onSubmit",
            validationSchema: schema,
        });

    const handleFormSubmit = (data: FormData) => {
        console.log(data);
        reset();
    };
    return (
        <div>
            <Logo variant={LogoVariant.BLACK} />
            <div className={styles["banner"]}>
                <h2 className={styles["banner__heading"]}>
                    Тут народжуються лідери!
                </h2>
                <ul className={styles["banner__list"]}>
                    <li>
                        {" "}
                        <img src={Rocket} alt="" /> Передові технології та
                        захоплюючі проекти.
                    </li>
                    <li>
                        {" "}
                        <img src={Leadership} alt="" /> Менторство та можливість
                        навчання від справжніх професіоналів.
                    </li>
                    <li>
                        {" "}
                        <img src={Accessibility} alt="" /> Відкритий і дружній
                        колектив.
                    </li>
                </ul>
            </div>
            <div className={styles["content-wrapper"]}>
                <form onSubmit={handleSubmit(handleFormSubmit)}>
                    <Input
                        control={control}
                        errors={errors}
                        label="Електронна пошта"
                        name="email"
                        placeholder="Введіть електронну адресу"
                    />
                    <Input control={control} errors={errors} label="Пароль" name="password" />
                    <Button variant={ButtonVariant.PRIMARY}>Увійти</Button>
                </form>

                <p>або</p>
                <Button
                    variant={ButtonVariant.SECONDARY}
                    prependedIcon={<GoogleIcon />}
                >
                    Вхід за допомогою Google
                </Button>
                <Button
                    variant={ButtonVariant.SECONDARY}
                    prependedIcon={<MicrosoftIcon />}
                >
                    Вхід за допомогою Microsoft Account
                </Button>
                <Button
                    variant={ButtonVariant.SECONDARY}
                    prependedIcon={<FacebookIcon />}
                >
                    Вхід за допомогою Facebook
                </Button>
            </div>
        </div>
    );
};

export { SignIn };
