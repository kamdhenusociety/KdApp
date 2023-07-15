import { Container, Grid, Header, List } from "semantic-ui-react";
import FlatLayoutList from "./FlatLayoutList";

const FlatLayoutDashboard = () => {
  return (
    <Container>
      <Header as="h1">Flats Layout Plan</Header>
      <Grid>
        <Grid.Column width="16">
          <List>
            <FlatLayoutList />
          </List>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default FlatLayoutDashboard;
