import { GlobalStyle } from '../../assets/styles/index';
import FullPage from '../../ui/layout/FullPage';
import Button from '../../ui/elements/Button';

type ErrorFallBackProps = {
	error: Error;
	resetErrorBoundary: React.MouseEventHandler;
};

function ErrorFallback({ error, resetErrorBoundary }: ErrorFallBackProps) {
	return (
		<>
			<GlobalStyle />
			<FullPage>
				<h1>Error</h1>
				<h2>{error.message}</h2>
				<Button onClick={resetErrorBoundary}>Reload</Button>
			</FullPage>
		</>
	);
}

export default ErrorFallback;
