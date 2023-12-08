import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Form, Button, Row, Col } from "react-bootstrap";

function SignupForm({ signupMode, setSignupMode, onLogin }) {

    const handleReturnClick = () => {
        setSignupMode(!signupMode)
    }

    return (
        <div>
            <Button className="m-3 btn-dark"  onClick={handleReturnClick}>return to login</Button>
        </div>
    )
}

export default SignupForm
