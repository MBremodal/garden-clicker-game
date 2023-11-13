import './navbar.scss';

function Navbar() {
	return (
		<nav>
			<div className='links-container'>
				<a href='#'>link1</a>
				<a href='#'>link1</a>
				<a href='#'>link1</a>
				<a href='#'>link1</a>
			</div>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 1440 320'
			>
				<path
					fill='#344D4C'
					fill-opacity='1'
					d='M0,96L21.8,122.7C43.6,149,87,203,131,208C174.5,213,218,171,262,144C305.5,117,349,107,393,96C436.4,85,480,75,524,85.3C567.3,96,611,128,655,122.7C698.2,117,742,75,785,69.3C829.1,64,873,96,916,122.7C960,149,1004,171,1047,160C1090.9,149,1135,107,1178,90.7C1221.8,75,1265,85,1309,106.7C1352.7,128,1396,160,1418,176L1440,192L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z'
				></path>
			</svg>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 1440 320'
			>
				<path
					fill='#396959'
					fill-opacity='1'
					d='M0,128L21.8,133.3C43.6,139,87,149,131,133.3C174.5,117,218,75,262,96C305.5,117,349,203,393,218.7C436.4,235,480,181,524,160C567.3,139,611,149,655,149.3C698.2,149,742,139,785,160C829.1,181,873,235,916,218.7C960,203,1004,117,1047,80C1090.9,43,1135,53,1178,64C1221.8,75,1265,85,1309,85.3C1352.7,85,1396,75,1418,69.3L1440,64L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z'
				></path>
			</svg>
		</nav>
	);
}

export default Navbar;