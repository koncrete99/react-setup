import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colorBase, font } from '../../assets/styles';

const StyledLogo = styled.div`
	font-size: ${font.sm};
	color: ${colorBase[0]};
	& a {
		display: block;
		& span {
			font-weight: 600;
		}
	}
`;

function Logo() {
	return (
		<StyledLogo>
			<Link to="/">
				<span>React</span>Setup
			</Link>
		</StyledLogo>
	);
}

export default Logo;
