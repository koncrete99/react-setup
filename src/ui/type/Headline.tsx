import styled, { css } from 'styled-components';
import { colorPrimary, colorSecondary, typeSize } from '../../assets/styles';

type HeadlineProps = {
	as?: 'h1' | 'h2' | 'h3' | 'h4';
	color?: 'primary' | 'secondary';
	size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
};

const headlines = {
	h1: css`
		font-size: ${typeSize.xl};
	`,
	h2: css`
		font-size: ${typeSize.lg};
	`,
	h3: css`
		font-size: ${typeSize.md};
	`,
	h4: css`
		font-size: ${typeSize.sm};
	`,
};

const colors = {
	primary: css`
		color: ${colorPrimary.base};
	`,
	secondary: css`
		color: ${colorSecondary.base};
	`,
};

const sizes = {
	sm: css`
		font-size: ${typeSize.sm};
	`,
	md: css`
		font-size: ${typeSize.md};
	`,
	lg: css`
		font-size: ${typeSize.lg};
	`,
	xl: css`
		font-size: ${typeSize.xl};
	`,
	xxl: css`
		font-size: ${typeSize.xxl};
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
