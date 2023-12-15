import React from "react";
import { Row, Col, Spinner } from "react-bootstrap";

function LoginLoading() {
    return (
        <div className=" my-5 p-5 d-flex " >
            
            <h3 className="mx-auto" >Loading <Spinner  className="ms-3  " animation="border" variant="info" /></h3>
            
        </div>
    )
}

export default LoginLoading