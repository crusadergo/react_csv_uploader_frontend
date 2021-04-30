import axios from "axios";
import { useState } from "react";
import React from "react";

export interface CsvFileType {
    id: number,
    file: File,
    filename: string,
}

const FilesList = (prop: { filesList: Array<CsvFileType> }) => {
    console.log(prop.filesList)
    return (
        <div className='test'>
            {prop.filesList.length > 0 && (
                <ul>
                    {prop.filesList.map((file) => (
                        <li key={file.id}>{file.filename}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default FilesList
