import React from "react";
import { ul, url_color } from "./styles";
import { Link } from "react-router-dom";

export interface CsvFileType {
    id: number;
    filename: string;
}

const FilesList = (prop: { filesList: Array<CsvFileType> }) => {
    return (
        <div className="files_list">
            {prop.filesList.length > 0 && (
                <ul style={ul}>
                    {prop.filesList.map((file) => (
                        <Link style={url_color} to={`/show_file/${file.id}`}>
                            <li key={file.id}>{file.filename}</li>
                        </Link>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default FilesList;
