import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IShippingFields } from "../types/types";

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<IShippingFields>({
        mode: "onChange",
    });

    const onSubmit: SubmitHandler<IShippingFields> = (data) => {
        alert(`Your name ${data.name}`);
        reset();
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    {...register("name", {
                        required: "Name is require field!",
                    })}
                    placeholder="Name"
                ></input>
                {errors.name && (
                    <div style={{ color: "red" }}>{errors.name.message}</div>
                )}
                <input
                    type="text"
                    {...register("email", {
                        required: "Email is require field!",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
                            message: "Please enter valid email",
                        },
                    })}
                    placeholder="Email"
                ></input>
                {errors.email && (
                    <div style={{ color: "red" }}>{errors.email.message}</div>
                )}
                <button>Send</button>
            </form>
        </div>
    );
};

export default Form;
