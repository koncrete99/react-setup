import { Suspense, lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { AppProvider } from './contexts/AppContext';
import SuspenseFallback from './pages/fallback/SuspenseFallback';
import ErrorFallback from './pages/fallback/ErrorFallback';
import { GlobalStyle } from './assets/styles';

const AppLayout = lazy(() => import('./ui/layout/AppLayout'));
const Index = lazy(() => import('./pages/Index'));
const Layout = lazy(() => import('./pages/design-system/LayoutPage'));
const Grid = lazy(() => import('./pages/design-system/GridPage'));
const PageNotFound = lazy(
	() => import('./pages/fallback/PageNotFoundFallback')
);
const router = createBrowserRouter([
	{
		element: <AppLayout />,
		children: [
			{ path: '/', element: <Index /> },
			{ path: 'design-system/layout', element: <Layout /> },
			{ path: 'design-system/grid', element: <Grid /> },
			{ path: '*', element: <PageNotFound /> },
		],
	},
]);

function App() {
	return (
		<>
			<GlobalStyle />
			<AppProvider>
				<ErrorBoundary
					FallbackComponent={ErrorFallback}
					onReset={() => window.location.replace('/')}
				>
					<Suspense fallback={<SuspenseFallback />}>
						<RouterProvider router={router} />
					</Suspense>
				</ErrorBoundary>
			</AppProvider>
		</>
	);
}

export default App;
