import React from 'react';

const ArchedText = ({text}) => {
	return (
		<svg
			width='200'
			height='100'
		>
			<defs>
				<path
					id='curve'
					d='M10 80 Q 52.5 10, 95 80 T 180 80'
					fill='transparent'
				/>
			</defs>
			<text
				x='10'
				y='0'
			>
				<textPath
					xlinkHref='#curve'
					className='arched-text'
				>
					{text}
				</textPath>
			</text>
		</svg>
	);
};

export default ArchedText;
