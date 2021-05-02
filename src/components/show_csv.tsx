import { useState, useEffect } from "react";
import React from "react";
import { useParams } from "react-router";

// @ts-ignore
import { CsvToHtmlTable } from "react-csv-to-table";

interface ParamTypes {
    file_id: string;
}

interface CsvFile {
    id: number;
    file: File;
    filename: string;
}

const ShowCsv = () => {
    const [file, setFile] = useState<CsvFile>();
    const { file_id } = useParams<ParamTypes>();
    const [isFetched, setFetched] = useState<Boolean>(false);

    useEffect(() => {
        if (isFetched) {
            return;
        }
        fetch(`http://localhost:2000/file/${file_id}`)
            .then((response) => response.json())
            .then((data) => {
                setFetched(true);

                setFile(data);
            });
    });

    return isFetched && file ? (
        <CsvToHtmlTable
            data={file.file}
            csvDelimiter=","
            tableClassName="table"
        />
    ) : (
        <h1> Loading </h1>
    );
};

export default ShowCsv;
