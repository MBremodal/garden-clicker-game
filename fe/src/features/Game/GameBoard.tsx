import Grid from './Grid';
import './game.scss';

function GameBoard() {
	return (
		<div className='board-container'>
			<Grid
				rows={2}
				columns={5}
			/>
		</div>
	);
}

export default GameBoard;
