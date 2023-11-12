import React from 'react';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../components/buttons/PrimaryButton';
import { testCall } from '../services/http/apiCalls';

function HomePage() {
	const nav = useNavigate();

	const redirect = () => {
		nav('/game');
	};

	const test = async () => {
		const res = await testCall('http://localhost:3333/auth');
		console.log('res ===', res);
	};

	return (
		<div>
			<button onClick={redirect}>play the game</button>
			<PrimaryButton onClick={test} />
		</div>
	);
}

export default HomePage;
