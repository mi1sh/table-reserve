import { useDispatch } from 'react-redux';
import { useAuth } from '../hooks/use-auth';
import { removeUser } from '../store/slices/userSlice';
import About from '../components/About';

const HomePage = () => {
	const dispatch = useDispatch();

	const { isAuth, email } = useAuth();

	if (isAuth) {
		return (
			<div className='text-center pt-5'>
				<h1>Welcome</h1>

				<button
					type='button'
					className='btn btn-dark'
					onClick={() => dispatch(removeUser())}
				>
					Log out from {email} ?
				</button>
				<About />
			</div>
		);
	}
	return (
		<>
			<div className='text-center pt-5'>
				<h1
					className='text-dark'
					style={{ fontSize: 120, fontFamily: 'tilt prism' }}
				>
					Welcome
				</h1>
				<a
					type='button'
					className='btn btn-dark me-3 btn-lg shadow'
					href='/login'
				>
					Sign In
				</a>
				<a
					type='button'
					className='btn btn-dark btn-lg shadow'
					href='/register'
				>
					Sign Up
				</a>
				<About />
			</div>
		</>
	);
};

export default HomePage;
