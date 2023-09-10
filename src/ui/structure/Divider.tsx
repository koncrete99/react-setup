import styled from 'styled-components';
import { size } from '../../assets/styles';

const Divider = styled.hr`
	border: none;
	height: 1px;
	margin: ${size.sm} 0;
	background-color: rgba(0, 0, 0, 0.3);
`;

export default Divider;
