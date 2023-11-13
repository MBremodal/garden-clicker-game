import Navbar from '../features/Navbar/Navbar';
import './homePage.scss';
import {useNavigate} from 'react-router-dom';

function HomePage() {
	const nav = useNavigate();

	const redirect = () => {
		nav('/game');
	};

	return (
		<>
			<Navbar />
			<div className='home-container'>
				<button onClick={redirect}>play the game</button>
			</div>
		</>
	);
}

export default HomePage;
