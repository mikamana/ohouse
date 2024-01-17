import React from "react";
import { Form } from "react-bootstrap"
import axios from "axios";

export default function ImageUpload({ getImage, style }) {
    const formData = new FormData();

    const FileUpload = (e) => {

        formData.append("file", e.target.files[0])
        for (const key of formData)
        axios.post('http://192.168.50.31:8001/edit/upload', formData)
            .then((result) => {
                getImage(result.data);
            });
    }

    return (
        <div>
            <Form.Control
                style={style}
                type='file'
                className='shadow-none'
                accept='image/*'
                onChange={(e) => { FileUpload(e) }}></Form.Control>
        </div>
    )
}