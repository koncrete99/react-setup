import { css, styled } from 'styled-components';

interface IconProps {
	color?: string;
	size?: string;
}

const Icon = styled.div<IconProps>`
	${(props) =>
		props.size === 'sm' &&
		css`
			font-size: 2rem;
		`}
	${(props) =>
		props.size === 'md' &&
		css`
			font-size: 4rem;
		`}
	${(props) =>
		props.size === 'lg' &&
		css`
			font-size: 6rem;
		`}
		${(props) =>
		props.size === 'xl' &&
		css`
			font-size: 12rem;
		`}
	display: inline-block;
	line-height: 0;
	transition: all 0.5s ease-in;
	margin: 0;
	padding: 0;
	&:hover {
		color: var(--grey-0);
	}
`;

export default Icon;
