import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function DeleteButton({ nordicCenter }) {

    const history = useHistory()

    const [showModal, setShowModal] = useState(false)
    
    const handleShow = () => setShowModal(true)
    const handleClose = () => setShowModal(false)
    
    const handleDelete = () => {
        fetch(`/api/nordiccenters/${nordicCenter.id}`, {
            method: "DELETE"
        })
        .then(r => {
            if (r.ok) {
                
                history.push('/')
            } else {
                alert("Error: delete unsuccessful")
                handleClose()
            }
        })
    }

    return(
        <div>

            <Button size="lg" className="ms-5 mb-4 btn-outline-danger" onClick={handleShow} >Delete Nordic Center</Button>
            <Modal centered  show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Confirm Delete Nordic Center</Modal.Title>
                </Modal.Header>
                <Modal.Body className="fs-5" >This will permanently delete the Nordic center and all trips there</Modal.Body>
                <Modal.Footer>
                <Button className="btn btnprimary me-auto" onClick={handleClose}>
                    Cancel
                </Button>
                <Button className="btn btn-danger" onClick={handleDelete}>
                    Delete
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default DeleteButton