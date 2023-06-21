import React from 'react';
import { MdOutlineTableRestaurant } from 'react-icons/md';

const Header = () => {
	return (
		<nav
			className='navbar bg-body-tertiary navbar-dark bg-dark'
			style={{ fontFamily: 'orbit' }}
		>
			<div className='container-fluid'>
				<a className='navbar-brand fs-2' href='/' style={{ color: '#bdc2c7' }}>
					<MdOutlineTableRestaurant style={{ margin: 5 }} />
					Table reserve
				</a>
				<div
					className='collapse navbar-collapse d-flex'
					id='navbarSupportedContent'
				>
					<ul className='navbar-nav me-auto mb-2 mb-lg-0 justify-content-md-end flex-grow-1'>
						<li className='nav-item me-2 ms-2 btn btn-outline-secondary rounded-pill'>
							<a className='nav-link ' href='/login'>
								SignIn
							</a>
						</li>
						<li className='nav-item me-2 ms-2 btn btn-outline-secondary rounded-pill'>
							<a className='nav-link' href='/register'>
								SignUp
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Header;
