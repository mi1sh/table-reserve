import { Form } from './Form';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/slices/userSlice';

import {
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogin = (email, password) => {
		const auth = getAuth();

		onAuthStateChanged(auth, currentUser => {
			setUser(currentUser);
		});

		const signInUser = async (email, password) => {
			try {
				const userCredential = await signInWithEmailAndPassword(
					auth,
					email,
					password
				);
				const { user } = userCredential;

				localStorage.setItem('accessToken', user.accessToken);
				console.log('Log in');
			} catch (error) {
				console.error('ERROR: log in error', error);
			}
		};

		signInWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				console.log(user);
				dispatch(
					setUser({
						email: user.email,
						id: user.uid,
						token: user.accessToken,
					})
				);
				navigate('/');
			})
			.catch(() => alert('Invalid email or password'));
	};
	return <Form title='sign in' handleClick={handleLogin} />;
};

export default Login;
