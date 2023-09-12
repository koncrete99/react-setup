import styled from 'styled-components';
import { colorBase } from '../../assets/styles';

const FullPage = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: ${colorBase[900]};
	color: ${colorBase.default};
`;

export default FullPage;
