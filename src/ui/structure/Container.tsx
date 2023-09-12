import styled from 'styled-components';

type ContainerProps = {
	maxWidth?: string;
};

const Container = styled.div<ContainerProps>`
	margin: 0 auto;
	max-width: ${(props) => props.maxWidth ?? '112rem'};
`;

export default Container;
