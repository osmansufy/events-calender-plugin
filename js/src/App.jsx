import { useState } from 'react';
// @ts-ignore
import reactLogo from './assets/react.svg';
// @ts-ignore
import viteLogo from './assets/vite.svg';
import './App.css';
import './index.css';
import Calender from './components/calender/Calender';

function App() {
	return (
		<div className="App">
			<Calender />
		</div>
	);
}

export default App;
