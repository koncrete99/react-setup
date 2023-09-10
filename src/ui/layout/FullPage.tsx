import styled from 'styled-components';
import { colorBase } from '../../assets/styles';

const FullPage = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: ${colorBase[900]};
	color: ${colorBase.default};
`;

export default FullPage;
