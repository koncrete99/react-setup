import styled from 'styled-components';
import { colorBase, size } from '../../assets/styles';

type SectionProps = {
	$bgColor?: string;
	color?: string;
};

const Section = styled.section<SectionProps>`
	padding: ${size.xl} ${size.sm};
	background-color: ${(props) =>
		colorBase[props.$bgColor as keyof typeof colorBase] ?? colorBase[900]};
	color: ${(props) =>
		colorBase[props.color as keyof typeof colorBase] ?? colorBase.default};
`;

export default Section;
