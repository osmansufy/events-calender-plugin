import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import './App.css';
import './index.css';

function App() {
	const [ count, setCount ] = useState( 0 );

	const increment = () => setCount( count => count + 1 );

	return (
		<div className="App">
			<div className="logos">
				<a href="https://vitejs.dev" target="_blank">
					<img src={ viteLogo } className="logo" alt="Vite logo" />
				</a>
				<a href="https://reactjs.org" target="_blank">
					<img src={ reactLogo } className="logo react" alt="React logo" />
				</a>
			</div>
			<h2>Calender </h2>
			<div className="card">
				<button onClick={ increment }>count is { count }</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
		
		<div className="flex justify-center gap-4">
			<div className="w-1/3 bg-gray-300 p-4">
				<div className="flex justify-between items-center">
					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button</button>
					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button</button>
				</div>
			</div>
		</div>
		</div>
	);
}

export default App;
