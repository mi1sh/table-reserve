import { Register } from '../components/Register';
import { Link } from 'react-router-dom';
import useTitle from '../hooks/use-title';

const RegisterPage = () => {
	useTitle('Table reserve | Sign up');

	return (
		<div>
			<h1 className='heading'>
				<strong>
					<u>Register</u>
				</strong>
			</h1>
			<p>
				Already have an account? <Link to='/login'>Sign in</Link>!
			</p>
			<Register />
		</div>
	);
};

export default RegisterPage;
