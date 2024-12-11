import React from "react";
import { Input } from "~/common/components";
import * as yup from "yup";

const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(4),
}).required();

type FormData = yup.InferType<typeof schema>;

const SignIn: React.FC = () => {
    return (
        <div>Hey, sign in, please

            <Input />
        </div>
    )
}

export {SignIn};