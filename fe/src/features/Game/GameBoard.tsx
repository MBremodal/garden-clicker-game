import Grid from './Grid';
import Tile from './Tile';
import './game.scss';

function GameBoard() {
	return (
		<div className='board-container'>
			<Grid />
		</div>
	);
}

export default GameBoard;
