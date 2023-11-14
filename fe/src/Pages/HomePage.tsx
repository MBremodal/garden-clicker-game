import {Link} from 'react-router-dom';
import Navbar from '../features/Navbar/Navbar';
import './homePage.scss';

function HomePage() {
	return (
		<>
			<Navbar />
			<div className='home-container'>
				<h1>Timber Tales</h1>
				<Link to={'/game'}>play the game</Link>
			</div>
		</>
	);
}

export default HomePage;
