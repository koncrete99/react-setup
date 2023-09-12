import styled, { css } from 'styled-components';
import {
	colorBase,
	colorPrimary,
	colorSecondary,
	font,
} from '../../assets/styles';

type HeadlineProps = {
	as?: 'h1' | 'h2' | 'h3' | 'h4';
	color?: 'primary' | 'secondary';
	size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
};

const headlines = {
	h1: css`
		font-size: ${font.xxl};
		color: ${colorBase[50]};
		font-weight: 300;
	`,
	h2: css`
		font-size: ${font.xl};
	`,
	h3: css`
		font-size: ${font.lg};
	`,
	h4: css`
		font-size: ${font.md};
	`,
};

const colors = {
	primary: css`
		color: ${colorPrimary.default};
	`,
	secondary: css`
		color: ${colorSecondary.default};
	`,
};

const sizes = {
	sm: css`
		font-size: ${font.sm};
	`,
	md: css`
		font-size: ${font.md};
	`,
	lg: css`
		font-size: ${font.lg};
	`,
	xl: css`
		font-size: ${font.xl};
	`,
	xxl: css`
		font-size: ${font.xxl};
	`,
};

const Headline = styled.h1<HeadlineProps>`
	line-height: 1.2;
	display: block;
	${(props) => props.as && headlines[props.as as keyof typeof headlines]}
	${(props) => props.color && colors[props.color]}
	${(props) => props.size && sizes[props.size]}
`;

export default Headline;
