import Loader from '../../ui/loader/Loader';
import FullPage from '../../ui/layout/FullPage';

function SuspenseFallback() {
	return (
		<FullPage>
			<Loader />
		</FullPage>
	);
}

export default SuspenseFallback;
