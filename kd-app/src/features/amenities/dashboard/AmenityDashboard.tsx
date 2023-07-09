import { Container, Grid, Header, List } from "semantic-ui-react";
import AmenityList from "./AmenityList";

const AmenityDashboard = () => {
  return (
    <Container>
      <Header as="h1">Ameneties</Header>
      <Grid>
        <Grid.Column width="16">
          <List>
            <AmenityList />
          </List>
        </Grid.Column>
      </Grid>
    </Container>
  );
};
export default AmenityDashboard;
