import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { colorBase, device, size, font } from '../../assets/styles/index';

const Nav = styled.nav``;

const NavList = styled.ul`
	display: flex;
	gap: 0.8rem;
	@media ${device.tablet} {
		flex-direction: row;
		order: 1;
	}
`;

const StyledNavLink = styled(NavLink)`
	&:link,
	&:visited {
		display: block;
		margin: 0 auto;
		text-align: center;
		color: ${colorBase[200]};
		font-size: ${font.xs};
		padding: ${size.xxs} ${size.xs};
		transition: all 0.3s;
	}
	&:hover,
	&:active {
		color: ${colorBase[100]};
	}
	&.active:link,
	&.active:visited {
		color: ${colorBase[0]};
	}
`;

function MainNav() {
	return (
		<Nav>
			<NavList>
				<li>
					<StyledNavLink to="/ui/typography">UI - Typography</StyledNavLink>
				</li>
				<li>
					<StyledNavLink to="/ui/elements">UI - Elements</StyledNavLink>
				</li>
				<li>
					<StyledNavLink to="/ui/grid">UI - Structure</StyledNavLink>
				</li>
			</NavList>
		</Nav>
	);
}

export default MainNav;
