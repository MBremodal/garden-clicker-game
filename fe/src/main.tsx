import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './globalStyles/index.scss';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Provider} from 'react-redux';
import store from './redux/store/store';
import HomePage from './Pages/HomePage/HomePage';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import GamePage from './Pages/GamePage/GamePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutPage from './Pages/AboutPage/AboutPage';
import RegisterPage from './Pages/RegisterPage/RegisterPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/game',
		element: <GamePage />,
	},
	{
		path: '/about',
		element: <AboutPage />,
	},
	{
		path: '/register',
		element: <RegisterPage />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<QueryClientProvider
			client={
				new QueryClient({
					defaultOptions: {
						queries: {
							refetchOnWindowFocus: false,
						},
					},
				})
			}
		>
			<Provider store={store}>
				<RouterProvider router={router} />
			</Provider>
		</QueryClientProvider>
	</React.StrictMode>
);
