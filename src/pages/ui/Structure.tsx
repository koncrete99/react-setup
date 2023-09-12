import Card from '../../ui/elements/Card';
import Column from '../../ui/structure/Column';
import Container from '../../ui/structure/Container';
import Grid from '../../ui/structure/Grid';
import Section from '../../ui/structure/Section';

function Structural() {
	return (
		<Section>
			<Container>
				<Grid $columns="1fr 1fr 1fr">
					<Column>
						<Card>
							<h1>ToDo</h1>

							<ul>
								<li>ErrorBoundary</li>
							</ul>
						</Card>
					</Column>
					<Column>
						<Card>
							<h1>ToDo</h1>

							<ul>
								<li>ErrorBoundary</li>
							</ul>
						</Card>
					</Column>
					<Column>
						<Card>
							<h1>ToDo</h1>

							<ul>
								<li>ErrorBoundary</li>
							</ul>
						</Card>
					</Column>
				</Grid>
			</Container>
		</Section>
	);
}

export default Structural;
