import React, { useState } from "react";
import LoginForm from "./forms/LoginForm";
import SignupForm from "./forms/SignupForm";
import LoginLoading from "./cards-lists-boxes/LoginLoading";

function Login({ onLogin }) {

    const [signupMode, setSignupMode] = useState(false)
    const [isLoading, setIsLoading] = useState(false)


    if (isLoading) {
        return <LoginLoading />
    }

    return (
        signupMode? 
            <SignupForm signupMode={signupMode} setSignupMode={setSignupMode} onLogin={onLogin} /> : 
            <LoginForm 
                onLogin={onLogin} 
                setSignupMode={setSignupMode} 
                signupMode={signupMode}
                setIsLoading={setIsLoading} 
            />
    )
}

export default Login