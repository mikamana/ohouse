import React from "react";
import axios from "axios";


export default function ImageUpload({ getImage }) {
    const formData = new FormData();
    const FileUpload = (e) => {

        formData.append("file", e.target.files[0])
        for (const key of formData) console.log(`key---->>> ${JSON.stringify(key)}`);
        axios.post('http://192.168.50.31:8001/upload/review', formData)
            .then((result) => {
                getImage(result.data);
            });

    }

    return (
        <>
            <input type="file" accept='image/*' onChange={(e) => { FileUpload(e) }} />
        </>
    )
}