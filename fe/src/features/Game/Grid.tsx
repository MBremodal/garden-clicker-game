import './game.scss';
import Tile from './Tile';

const Grid = () => {
	const grid = [];

	for (let i = 0; i < 5; i++) {
		grid.push(
			<Tile
				key={i}
				idx={i}
			/>
		);
	}

	return <div>{grid}</div>;
};

export default Grid;
