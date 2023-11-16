import {useDispatch, useSelector} from 'react-redux';
import {add} from '../../redux/store/store';
import GameBoard from '../../features/Game/GameBoard';

function GamePage() {
	const dispatch = useDispatch();
	const {counter} = useSelector((state) => state.general);

	return (
		<div className='container'>
			<p>{counter}</p>
			<button onClick={() => dispatch(add())}>+</button>
			<GameBoard />
		</div>
	);
}

export default GamePage;
