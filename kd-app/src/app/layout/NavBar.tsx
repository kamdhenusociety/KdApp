import {
  Container,
  Menu,
  Image,
  Header
} from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Menu inverted fixed="top" secondary>
        <Container>
          <Menu.Item as={NavLink} to="/" header>
            <Header as="h1">
            <Image
                    circular
                    src="/kd.svg"
                    style={{ marginRight: "10px" }}
                  />
            {import.meta.env.VITE_APP_HEADER}
            {/* <Grid>
              <Grid.Column width="2">
                <Header as="h2">
                  <Image
                    circular
                    src="/kd.svg"
                    style={{ marginRight: "10px" }}
                  />
                </Header>
              </Grid.Column>
              <Grid.Column width="14">
                <Header as="h2">
                  The Kamdhenu Co-Operative Group Housing Society Ltd.
                </Header>
              </Grid.Column>
            </Grid> */}

            </Header>
          </Menu.Item>
          <Menu.Item>
            {APP_ENV ==='development'? APP_ENV : ''} 
          </Menu.Item>
          {/* <Menu.Item
          as={NavLink}
          to="/activities"
          name="activities"
          content="Activities"
        />
        <Menu.Item>
          <Button
            positive
            as={NavLink}
            to="/createActivity"
            content="Create Activity"
          />
        </Menu.Item> */}
        </Container>
      </Menu>
      <Menu
        pointing
        inverted
        fixed="top"
        secondary
        style={{ marginTop: "8em" }}
      >
        <Menu.Item name="home" as={NavLink} to="/" />
        <Menu.Item name="members" as={NavLink} to="/members" />
        <Menu.Item name="amenities" as={NavLink} to="/amenities" />
        <Menu.Item name="flat layout plan" as={NavLink} to="/layout" />
        <Menu.Item name="activities" as={NavLink} to="/activities" />
        {/* <Menu.Menu position="right">
          <Menu.Item name="logout" />
        </Menu.Menu> */}
      </Menu>
    </>
  );
};

export default NavBar;
