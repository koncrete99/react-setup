import { Suspense, lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { AppProvider } from './contexts/AppContext';
import SuspenseFallback from './pages/fallback/SuspenseFallback';
import ErrorFallback from './pages/fallback/ErrorFallback';
import { GlobalStyle } from './assets/styles';

const AppLayout = lazy(() => import('./ui/layout/AppLayout'));
const Index = lazy(() => import('./pages/Index'));
const Typography = lazy(() => import('./pages/ui/Typography'));
const Elements = lazy(() => import('./pages/ui/Elements'));
const Structure = lazy(() => import('./pages/ui/Structure'));
const PageNotFound = lazy(
	() => import('./pages/fallback/PageNotFoundFallback')
);
const router = createBrowserRouter([
	{
		element: <AppLayout />,
		children: [
			{ path: '/', element: <Index /> },
			{ path: 'ui/typography', element: <Typography /> },
			{ path: 'ui/elements', element: <Elements /> },
			{ path: 'ui/structural', element: <Structure /> },
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
