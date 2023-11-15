import './navbar.scss';

function Navbar() {
	return (
		<nav>
			<div className='links-container'>
				<a href='/about'>about</a>
				<a href='/leaderboard'>leaderboard</a>
				<a href='/register'>register</a>
				<a href='/login'>log in</a>
			</div>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 1440 320'
			>
				<path
					fill='#344D4C'
					fillOpacity='1'
					d='M 0 96 L 1 103 C 216 87 277 154 331 83 C 412 36 480 75 524 85.3 C 567.3 96 611 128 655 122.7 C 698.2 117 833 47 1004 87 C 1251 183 1309 163 1440 120 L 1440 72 L 1440 0 L 1418.2 0 C 1396.4 0 1353 0 1309 0 C 1265.5 0 1222 0 1178 0 C 1134.5 0 1091 0 1047 0 C 1003.6 0 960 0 916 0 C 872.7 0 829 0 785 0 C 741.8 0 698 0 655 0 C 610.9 0 567 0 524 0 C 480 0 436 0 393 0 C 349.1 0 305 0 262 0 C 218.2 0 175 0 131 0 C 87.3 0 44 0 22 0 L 0 0 Z'
				></path>
			</svg>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 1440 320'
			>
				<path
					fill='#396959'
					fillOpacity='1'
					d='M -1 105 L 49 86 C 55 88 94 46 142 57 C 288 116 354 89 396 90 C 446 93 457 113 532 69 C 576 48 678 52 712 56 C 757 67 834 111 888 79 C 970 56 1004 46 1072 78 C 1119 97 1134.3333 69.3333 1227 76 C 1315 85 1321 106 1383 97 L 1440 99 L 1440 0 L 1418.2 0 C 1396.4 0 1353 0 1309 0 C 1265.5 0 1222 0 1178 0 C 1134.5 0 1091 0 1047 0 C 1003.6 0 960 0 916 0 C 872.7 0 829 0 785 0 C 741.8 0 698 0 655 0 C 610.9 0 567 0 524 0 C 480 0 436 0 393 0 C 349.1 0 305 0 262 0 C 218.2 0 175 0 131 0 C 87.3 0 44 0 22 0 L 0 0 Z'
				></path>
			</svg>
		</nav>
	);
}

export default Navbar;
