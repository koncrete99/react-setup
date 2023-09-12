import styled from 'styled-components';
import { colorBase, font, size } from '../../assets/styles';
import Container from '../structure/Container';
import Grid from '../structure/Grid';
import Column from '../structure/Column';
import Link from '../type/Link';

const StyledFooter = styled.footer`
	background-color: ${colorBase[950]};
	padding: ${size.lg} ${size.sm};
	font-size: ${font.sm};
`;

function Footer() {
	return (
		<StyledFooter>
			<Container>
				<Grid $columns="auto auto" $justifyContent="space-between">
					<Column>
						&copy; {new Date().getFullYear()}{' '}
						<Link href="https://github.com/koncrete99" target="_blank">
							koncrete99
						</Link>
					</Column>
					<Column>dfgdfg</Column>
					<Column></Column>
				</Grid>
			</Container>
		</StyledFooter>
	);
}

export default Footer;
