import styles from "./styles.module.scss";

import {
    type Control,
    type FieldErrors,
    type FieldPath,
    type FieldValues,
    useController,
} from "react-hook-form";

type InputProperties<T extends FieldValues> = {
    className?: string;
    control: Control<T, null>;
    disabled?: boolean;
    errors: FieldErrors<T>;
    label?: string;
    name: FieldPath<T>;
    placeholder?: string;
    rows?: number;
    type?: "email" | "password" | "text";
};

const Input = <T extends FieldValues>({
    control,
    disabled,
    errors,
    name,
    placeholder,
    rows,
}: InputProperties<T>): React.JSX.Element => {
    const { field } = useController({ control, name });

    const error = errors[name]?.message;
    const hasError = Boolean(error);
    const isTextArea = Boolean(rows);

    return (
        <label>
            {isTextArea ? (
                <textarea
                    disabled={disabled}
                    {...field}
                    placeholder={placeholder}
                    rows={rows}
                ></textarea>
            ) : (
                <input disabled={disabled} {...field} placeholder={placeholder} />
            )}
        </label>
    );
};

export { Input };
