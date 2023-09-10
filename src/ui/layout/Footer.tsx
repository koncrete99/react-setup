import styled from 'styled-components';
import Container from '../structure/Container';
import { colorBase, size } from '../../assets/styles';

const StyledFooter = styled.footer`
	background-color: ${colorBase[950]};
	padding: ${size.xs} ${size.sm};
`;

function Footer() {
	return (
		<StyledFooter>
			<Container>dfgdf</Container>
		</StyledFooter>
	);
}

export default Footer;
