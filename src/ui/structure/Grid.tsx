import styled from 'styled-components';
import { device, size } from '../../assets/styles';

type GridProps = {
	$columns?: string;
	$justifyContent?: string;
};

const Grid = styled.div<GridProps>`
	display: grid;
	gap: ${size.md};
	grid-template-columns: 1fr;
	@media ${device.tablet} {
		flex-direction: row;
		grid-template-columns: ${(props) => props.$columns ?? 'auto'};
		justify-content: ${(props) => props.$justifyContent ?? 'start'};
	}
`;

export default Grid;
