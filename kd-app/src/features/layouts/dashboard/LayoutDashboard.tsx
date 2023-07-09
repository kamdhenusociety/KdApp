import { Container, Grid, Header, List } from "semantic-ui-react";
import LayoutList from "./LayoutList";

const LayoutDashboard = () => {
  return (
    <Container>
      <Header as="h1">Flats Layout Plan</Header>
      <Grid>
        <Grid.Column width="16">
          <List>
            <LayoutList />
          </List>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default LayoutDashboard;
