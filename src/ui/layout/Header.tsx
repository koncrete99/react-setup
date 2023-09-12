import styled from 'styled-components';
import Logo from './Logo';
import MainNav from './MainNav';
import { colorBase, size } from '../../assets/styles';

const StyledHeader = styled.header`
	border-bottom: 1px solid ${colorBase[800]};
	padding: ${size.xs} ${size.sm};
	display: grid;
	grid-template-columns: auto auto;
	justify-content: space-between;
	align-items: center;
`;

function Header() {
	return (
		<StyledHeader>
			<Logo />
			<MainNav />
		</StyledHeader>
	);
}

export default Header;
