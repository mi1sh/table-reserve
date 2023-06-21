import { Login } from '../components/Login';
import { Link } from 'react-router-dom';
import useTitle from '../hooks/use-title';

const LoginPage = () => {
	useTitle('Table reserve | Sign in');

	return (
		<div>
			<h1 className='heading'>
				<strong>
					<u>Login</u>
				</strong>
			</h1>
			<p>
				First visit? <Link to='/register'>Sign Up</Link>!
			</p>
			<Login />
		</div>
	);
};

export default LoginPage;
