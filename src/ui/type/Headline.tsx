import styled, { css } from 'styled-components';

type HeadlineProps = {
	as?: 'h1' | 'h2' | 'h3' | 'h4';
	color?: 'primary' | 'secondary';
	size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
};

const headlines = {
	h1: css`
		font-size: var(--font-xl);
		font-weight: 600;
		text-transform: uppercase;
	`,
	h2: css`
		font-size: var(--font-lg);
		font-weight: 600;
	`,
	h3: css`
		font-size: var(--font-lg);
		font-weight: 600;
		text-transform: uppercase;
	`,
	h4: css`
		font-size: 3.6rem;
		font-weight: 600;
		text-transform: uppercase;
	`,
};

const colors = {
	primary: css`
		color: var(--primary);
	`,
	secondary: css`
		color: var(--secondary);
	`,
};

const sizes = {
	sm: css`
		font-size: var(--font-sm);
	`,
	md: css`
		font-size: var(--font-md);
	`,
	lg: css`
		font-size: var(--font-lg);
	`,
	xl: css`
		font-size: var(--font-xl);
	`,
	xxl: css`
		font-size: var(--font-xxl);
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
