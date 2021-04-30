import axios from "axios";
import React, { useState } from "react";

const UploadFile = () => {
    const [fileSelected, setFileSelected] = useState<File>() // also tried <string | Blob>

    const handleFileChange = function (e: React.ChangeEvent<HTMLInputElement>) {
        const fileList = e.target.files;

        if (!fileList) return;

        setFileSelected(fileList[0]);
    };

    const upload = function (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) {
        if (fileSelected) {
            const formData = new FormData();
            formData.append("csv", fileSelected, fileSelected.name);

            axios.post("http://localhost:2000/upload_file", formData, {
                headers: {"Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                    'enctype': 'multipart/form-data',
                    "Content-Type": "multipart/form-data"
                }
            });
        }
    };

    return (
        <div>
            <h1>
                CSV Upload
            </h1>
            <h3>
                File Upload using React!
            </h3>
            <div>
                <input type="file" onChange={handleFileChange} />
                <button onClick={upload}>
                    Upload!
                </button>
            </div>
        </div>
    );
}

export default UploadFile
