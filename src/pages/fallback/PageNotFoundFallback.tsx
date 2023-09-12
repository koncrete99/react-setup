import FullPage from '../../ui/layout/FullPage';
import Headline from '../../ui/type/Headline';

function PageNotFoundFallback() {
	return (
		<FullPage>
			<Headline as="h1">404</Headline>
			<Headline as="h2">Page not found</Headline>
		</FullPage>
	);
}

export default PageNotFoundFallback;
