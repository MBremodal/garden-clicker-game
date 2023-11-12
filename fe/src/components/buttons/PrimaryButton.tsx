import Button from 'react-bootstrap/Button';

function PrimaryButton({ onClick }: { onClick: () => void }) {
	return (
		<Button
			onClick={onClick}
			variant='outline-primary'
			className='test-button'>
			Hello
		</Button>
	);
}

export default PrimaryButton;
