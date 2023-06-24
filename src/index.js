import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import './index.scss';
import './firebase/firebase';
import App from './App';
import { store } from './store';

const root = createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<section>
					<App className='app' />
				</section>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
);
