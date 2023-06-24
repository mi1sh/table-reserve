import { useState } from 'react';

const Form = ({ title, handleClick }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<>
			<div className='form d-flex justify-content-center gap-3 pb-3'>
				<div className='form-floating shadow-lg'>
					<input
						id='floatingInput'
						className='form-control shadow-lg'
						aria-describedby='emailHelp'
						aria-label='Email'
						type='email'
						value={email}
						onChange={e => setEmail(e.target.value)}
						placeholder='name@example.com'
					/>
					<label htmlFor='floatingInput'>Email</label>
				</div>
				<div className='form-floating shadow-lg'>
					<input
						className='form-control shadow-lg'
						type='password'
						id='floatingPassword'
						value={password}
						onChange={e => setPassword(e.target.value)}
						placeholder='Your password'
					/>
					<label htmlFor='floatingPassword'>Password</label>
				</div>
			</div>
			<button
				type='button'
				className='btn btn-dark shadow-lg'
				onClick={() => handleClick(email, password)}
			>
				{title}
			</button>
		</>
	);
};

export { Form };
