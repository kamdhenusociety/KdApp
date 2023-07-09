import { Container, Grid, Header, List } from "semantic-ui-react";
import MemberList from "./MemberList";

const MemberDashboard = () => {
  return (
    <Container>
      <Header as="h1">Members</Header>
      <Grid>
        <Grid.Column width="16">
          <List>
            <MemberList />
          </List>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default MemberDashboard;
