import styled, { css } from 'styled-components';

type HeadlineProps = {
	as?: string;
	color?: string;
	size?: string;
	alignment?: string;
};

const Headline = styled.h1<HeadlineProps>`
	${(props) =>
		props.as === 'h1' &&
		css`
			font-size: 3.6rem;
			font-weight: 600;
			text-transform: uppercase;
		`}
	${(props) =>
		props.as === 'h2' &&
		css`
			font-size: 2.4rem;
			font-weight: 600;
		`}
    ${(props) =>
		props.as === 'h3' &&
		css`
			font-size: 2.2rem;
			font-weight: 300;
		`}

    ${(props) =>
		props.as === 'h4' &&
		css`
			font-size: 3rem;
			font-weight: 600;
		`}
    ${(props) =>
		props.color === 'primary' &&
		css`
			color: var(--cello-500);
		`}  
		${(props) =>
		props.size === 'lg' &&
		css`
			font-size: var(--size-font-lg);
		`} 
		${(props) =>
		props.size === 'md' &&
		css`
			font-size: var(--size-font-md);
		`}  
		${(props) =>
		props.alignment === 'center' &&
		css`
			text-align: center;
		`}  
  line-height: 1.2;
	display: block;
	margin: 0 0 1rem;
	color: var(--grey-0);
	& span {
		display: block;
		font-size: var(--size-font-md);
		font-weight: 300;
	}
`;

export default Headline;
