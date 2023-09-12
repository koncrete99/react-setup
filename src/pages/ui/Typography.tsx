import Card from '../../ui/elements/Card';
import Column from '../../ui/structure/Column';
import Container from '../../ui/structure/Container';
import Grid from '../../ui/structure/Grid';
import { Layer } from '../../ui/structure/Layer';
import Section from '../../ui/structure/Section';
import Headline from '../../ui/type/Headline';
import { decodeHTMLEntities } from '../../utils/helpers';

function Typography() {
	return (
		<>
			<Section>
				<Container>
					<Headline as="h1">Typography</Headline>
				</Container>
			</Section>
			<Section $bgColor="800">
				<Container>
					<Layer>
						<Grid $columns="1fr 2fr">
							<Column>
								<Headline as="h1" color="primary">
									Headline
								</Headline>
								<Headline as="h2" color="secondary" size="md">
									Headline
								</Headline>
							</Column>
							<Column>
								<Card>
									<Layer $padding="md" $margin={['0', 'xl']}>
										<pre>
											<code>
												{decodeHTMLEntities(
													'<Headline as="h1" color="primary" size="xl">'
												)}
											</code>
										</pre>
									</Layer>
								</Card>

								<p>Settings:</p>
							</Column>
						</Grid>
					</Layer>
				</Container>
			</Section>
			<Section>
				<Container>
					<Grid $columns="1fr 2fr">
						<Column>
							<Headline as="h1" color="primary" size="xl">
								Icons
							</Headline>
						</Column>
						<Column>
							<pre>
								<code>
									{decodeHTMLEntities(
										'<Headline as="h1" color="primary" size="xl">'
									)}
								</code>
							</pre>
						</Column>
					</Grid>
				</Container>
			</Section>
		</>
	);
}

export default Typography;
