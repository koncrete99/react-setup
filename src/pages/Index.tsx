import Section from '../ui/structure/Section';
import Container from '../ui/structure/Container';
import Link from '../ui/type/Link';
import Button from '../ui/elements/Button';
import Headline from '../ui/type/Headline';

function Index() {
	return (
		<Section $bgColor="200" color="0">
			<Container>
				<Headline as="h3" size="xxl">
					ToDo
				</Headline>
				<ul>
					<li>
						Error
						<Link color="primary" href="">
							Boundary
						</Link>
						<p>
							<Button color="primary" size="sm">
								fgdfg
							</Button>
						</p>
					</li>
				</ul>
			</Container>
		</Section>
	);
}

export default Index;
