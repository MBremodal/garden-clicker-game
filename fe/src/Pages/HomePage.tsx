import React from 'react';
import {useNavigate} from 'react-router-dom';

function HomePage() {
	const nav = useNavigate();

	const redirect = () => {
		nav('/game');
	};

	return (
		<>
			<button onClick={redirect}>play the game</button>
		</>
	);
}

export default HomePage;
