import {useDispatch, useSelector} from 'react-redux';
import {add} from '../redux/store/store';

function GamePage() {
	const dispatch = useDispatch();
	const count = useSelector((state) => state.counter.value);

	return (
		<div>
			<p>{count}</p>
			<button onClick={() => dispatch(add())}>+</button>
		</div>
	);
}

export default GamePage;
