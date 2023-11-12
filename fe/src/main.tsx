import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './globalStyles/index.scss';
import { QueryClient, QueryClientProvider } from 'react-query';
// import { Provider } from 'react-redux';
// import store from './redux/store';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import GamePage from './pages/GamePage';
import 'bootstrap/dist/css/bootstrap.min.css';

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
			}>
			{/* <Provider store={store}> */}
			<RouterProvider router={router} />
			{/* </Provider> */}
		</QueryClientProvider>
	</React.StrictMode>
);
