import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const StyledAppLayout = styled.div`
	min-height: 100vh;
	display: grid;
	grid-template-rows: 6rem 1fr auto;
	background-color: var(--black-950);
	color: var(--black-50);
	font-size: var(--size-font-md);
`;

const Main = styled.main``;

function AppLayout() {
	return (
		<>
			<StyledAppLayout>
				<Header />
				<Main>
					<Outlet />
				</Main>
				<Footer />
			</StyledAppLayout>
		</>
	);
}

export default AppLayout;