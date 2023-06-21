import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<main className='container text-center pt-5'>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
