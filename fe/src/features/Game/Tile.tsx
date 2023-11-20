import {useState} from 'react';
import './game.scss';
import land from '../../assets/images/land_01.webp';
import {add, animate, setCurrentTile} from '../../redux/store/store';
import {useDispatch, useSelector} from 'react-redux';

function Tile({idx}) {
	const dispatch = useDispatch();
	const {currentTile} = useSelector((state) => state.general);
	const [localAnimation, setLocalAnimation] = useState(false);

	const handleAnimationReset = () => {
		setTimeout(() => {
			setLocalAnimation(false);
			dispatch(animate(false));
		}, 100);
	};

	const setTileIdx = () => {
		if (idx !== null) dispatch(setCurrentTile(idx));
	};

	return (
		<div className='tile-container'>
			<img
				className={localAnimation ? 'animate-single-tile' : ''}
				onClick={() => {
					setLocalAnimation(true);
					dispatch(animate(true));
					dispatch(add());
					handleAnimationReset();
					setTileIdx();
				}}
				src={land}
				alt='image of land tile'
			/>
		</div>
	);
}

export default Tile;
