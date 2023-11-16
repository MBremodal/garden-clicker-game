import './game.scss';
import Tile from './Tile';

const Grid = ({rows, columns}) => {
	const generateGrid = () => {
		const grid = [];

		for (let i = 0; i < rows; i++) {
			const row = [];

			for (let j = 0; j < columns; j++) {
				row.push(<Tile key={j} />);
			}

			grid.push(
				<div
					key={i}
					className='grid-row'
				>
					{row}
				</div>
			);
		}

		return grid;
	};

	return <div className='grid-container'>{generateGrid()}</div>;
};

export default Grid;
