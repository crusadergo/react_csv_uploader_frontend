import React, {Component, useEffect, useState} from 'react';
import './App.css';
import UploadFile from './components/upload_file';
import FilesList, { CsvFileType } from './components/files_list';

const App = () => {
	const [filesList, setFilesList] = useState<Array<CsvFileType>>([])
	const [isFetched, setFetched] = useState<Boolean>(false)

	useEffect(() => {
		if (isFetched) { return };

		fetch("http://localhost:2000/files_list")
			.then((response) => response.json())
			.then(data => {
				setFetched(true)

				setFilesList(data.files)
			});
	})

	return (
		<div>
			<UploadFile />
			<FilesList filesList={filesList} />
		</div>
	)
}

export default App;
