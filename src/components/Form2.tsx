import React, { useState, FocusEvent } from "react";

const Form2 = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [emailError, setEmailError] = useState("Email не может быть пустым");
    const [passwordError, setPasswordError] = useState(
        "Пароль не может быть пустым"
    );

    const blurHandler = (event: FocusEvent<HTMLInputElement>): void => {
        switch (event.target.name) {
            case "email":
                setEmailDirty(true);
                break;
            case "password":
                setPasswordDirty(true);
                break;
        }
    };

    return (
        <div>
            <form>
                <h1>Регитсрация</h1>

                {emailDirty && emailError && (
                    <div style={{ color: "red" }}>{emailError}</div>
                )}

                <input
                    name="email"
                    type="text"
                    placeholder="Enter your email..."
                    onBlur={(event) => blurHandler(event)}
                    value={email}
                />

                {passwordDirty && passwordError && (
                    <div style={{ color: "red" }}>{passwordError}</div>
                )}

                <input
                    name="password"
                    type="password"
                    placeholder="Enter your password..."
                    onBlur={(event) => blurHandler(event)}
                    value={password}
                />

                <button type="submit">Registration</button>
            </form>
        </div>
    );
};

export default Form2;
