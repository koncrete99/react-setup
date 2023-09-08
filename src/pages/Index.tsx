import { useAppContext } from '../hooks/useAppContext';
import Button from '../ui/elements/Button';
import Card from '../ui/elements/Card';
import Column from '../ui/structure/Column';
import Container from '../ui/structure/Container';
import Grid from '../ui/structure/Grid';
import Section from '../ui/structure/Section';
import Headline from '../ui/type/Headline';

function Index() {
	const { state } = useAppContext();
	console.log(state);
	return (
		<Section>
			<Container>
				<Grid>
					<Column>
						<Card>
							<Headline as="h1">To Do:</Headline>
							<ul>
								<li>Error Boundary</li>
							</ul>
							<Button size="xs" color="primary">
								Hallo Welt
							</Button>
							<Button size="sm" color="primary">
								Hallo Welt
							</Button>
							<Button color="primary">Hallo Welt</Button>

							<Button size="lg" color="primary">
								Hallo Welt
							</Button>

							<Button size="xs" color="secondary">
								Hallo Welt
							</Button>
							<Button size="sm" color="secondary">
								Hallo Welt
							</Button>
							<Button color="secondary">Hallo Welt</Button>

							<Button size="lg" color="secondary">
								Hallo Welt
							</Button>
						</Card>
					</Column>
				</Grid>
			</Container>
		</Section>
	);
}

export default Index;
