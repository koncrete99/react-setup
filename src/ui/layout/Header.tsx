import styled from 'styled-components';

const StyledHeader = styled.header`
	background-color: var(--base-800);
`;

function Header() {
	return (
		<StyledHeader>
			<div>Logo</div>
			<div>MainNav</div>
		</StyledHeader>
	);
}

export default Header;
