import './game.scss';
import land from '../../assets/images/land_01.webp';
import {add, animate} from '../../redux/store/store';
import {useDispatch, useSelector} from 'react-redux';

function Tile() {
	const dispatch = useDispatch();
	const {animation} = useSelector((state) => state.general);

	const handleAnimationReset = () => {
		setTimeout(() => {
			dispatch(animate(false));
		}, 100);
	};

	return (
		<div className='tile-container'>
			<img
				className={animation ? 'animate-single-tile' : ''}
				onClick={() => {
					dispatch(animate(true));
					dispatch(add());
					handleAnimationReset();
				}}
				src={land}
				alt='image of land tile'
			/>
		</div>
	);
}

export default Tile;
