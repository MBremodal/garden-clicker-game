import './registerLoginPage.scss';
import {useForm} from 'react-hook-form';

type regData = {
	name: string;
	password: string;
	repeatPassword: string | number;
};

export default function RegisterPage() {
	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm();
	const onSubmit = (data: regData) => console.log(data);
	// console.log(errors);

	return (
		<div className='register-container'>
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
					<input
						type='password'
						placeholder='repeat password'
						{...register('repeat password', {required: true, min: 5, maxLength: 20})}
					/>

					<input type='submit' />
				</form>
			</div>
		</div>
	);
}
