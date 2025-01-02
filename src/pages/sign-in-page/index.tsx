import React from "react";
import { Button, Input, Logo } from "~/common/components";
import * as yup from "yup";
import { ButtonVariant, LogoVariant } from "~/common/enums";
import { useAppForm } from "~/common/hooks";
import styles from "./styles.module.scss";

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
            <Logo variant={LogoVariant.BLACK}/>
            <div className={styles["banner"]}>
                <h2>Тут народжуються лідери!</h2>
                <ul>
                    <li>Передові технології та захоплюючі проекти.</li>
                    <li>Менторство та можливість навчання від справжніх професіоналів.</li>
                    <li>Відкриття і дружній колектив.</li>
                </ul>
            </div>


            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <Input control={control} errors={errors} name="email" placeholder="Введіть електронну адресу"/>
                <Input control={control} errors={errors} name="password" />
                <Button variant={ButtonVariant.PRIMARY}>Увійти</Button>
            </form>
        </div>
    );
};

export { SignIn };
