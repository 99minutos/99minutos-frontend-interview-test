import './App.css';
import MissionList from './components/MissionList';
import MissionContainer from './components/MissionContainer';
import { useState } from 'react';

function App() {
	const [mission, setMission] = useState();

	function onClickMostrar(newMission) {
		setMission(newMission);
	}

	return (
		<div className="App">
			<div className='container-mission'>
				<MissionList clickHandler={onClickMostrar}/>
				<MissionContainer mission={mission}/>
			</div>
		</div>
	);
}

export default App;
