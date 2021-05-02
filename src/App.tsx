import React, { useEffect, useState } from "react";
import "./App.css";
import UploadFile from "./components/upload_file";
import FilesList, { CsvFileType } from "./components/files_list";
import ShowCsv from "./components/show_csv";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { container } from "./components/styles";

const App = () => {
    const [filesList, setFilesList] = useState<Array<CsvFileType>>([]);
    const [isFetched, setFetched] = useState<Boolean>(false);

    useEffect(() => {
        if (isFetched) {
            return;
        }

        fetch("http://localhost:2000/files_list")
            .then((response) => response.json())
            .then((data) => {
                setFetched(true);

                setFilesList(data.files);
            });
    });

    return (
        <Router>
            <Switch>
                <Route path={`/show_file/:file_id`}>
                    <ShowCsv />
                </Route>
                <Route>
                    <div style={container}>
                        <UploadFile resetFetched={() => setFetched(false)} />
                        <FilesList filesList={filesList} />
                    </div>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
