import { useState } from 'react';
// @ts-ignore
import reactLogo from './assets/react.svg';
// @ts-ignore
import viteLogo from './assets/vite.svg';
import './App.css';
import './index.css';
import Calender from './components/calender/Calender';

function App() {
	// @ts-ignore
	const [ count, setCount ] = useState( 0 );

	// @ts-ignore
	const increment = () => setCount( count => count + 1 );

	return (
		<div className="App">
			<Calender />
		</div>
	);
}

export default App;
