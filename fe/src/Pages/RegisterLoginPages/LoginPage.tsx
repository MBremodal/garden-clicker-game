import './registerLoginPage.scss';
import {useForm} from 'react-hook-form';

type loginData = {
	name: string;
	password: string;
};

export default function LoginPage() {
	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm();
	const onSubmit = (data: loginData) => console.log(data);
	console.log(errors);

	return (
		<div className='login-container'>
			<div className='container'>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input
						type='text'
						placeholder='Name'
						{...register('Name', {required: true})}
					/>
					<input
						type='password'
						placeholder='password'
						{...register('password', {required: true, min: 5, maxLength: 20})}
					/>

					<input type='submit' />
				</form>
			</div>
		</div>
	);
}
