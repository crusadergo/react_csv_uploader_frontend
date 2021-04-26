import axios from 'axios';
import React,{ChangeEvent, Component} from 'react';
import logo from './logo.svg';
import './App.css';
import UploadFile from './components/upload_file';

class App extends Component {
	render() {
		return (
			<UploadFile />
		)
	}
}

export default App;
