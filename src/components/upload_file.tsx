import axios from "axios";
import React, { useState } from "react";
import { upload_title } from "./styles";

const UploadFile = (prop: { resetFetched: () => void }) => {
    const [fileSelected, setFileSelected] = useState<File>(); // also tried <string | Blob>

    const handleFileChange = function (e: React.ChangeEvent<HTMLInputElement>) {
        const fileList = e.target.files;

        if (!fileList) return;

        setFileSelected(fileList[0]);
    };

    const upload = function (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) {
        if (fileSelected) {
            const formData = new FormData();
            formData.append("csv", fileSelected, fileSelected.name);

            axios
                .post("http://localhost:2000/upload_file", formData, {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Headers":
                            "Origin, X-Requested-With, Content-Type, Accept",
                        enctype: "multipart/form-data",
                        "Content-Type": "multipart/form-data",
                    },
                })
                .then(prop.resetFetched);
        }
    };

    return (
        <div>
            <p style={upload_title}>Upload CSV</p>
            <div>
                <input type="file" onChange={handleFileChange} />
                <button onClick={upload}>Upload!</button>
            </div>
        </div>
    );
};

export default UploadFile;
