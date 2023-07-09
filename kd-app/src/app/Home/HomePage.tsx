import { Container, Header, Image, Item, Label } from "semantic-ui-react";
import NavBar from "../layout/NavBar";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Container style={{ marginTop: "12em" }}>
        <Item.Group divided>
          <Item>
            <Item.Image
              size="huge"
              src="https://res.cloudinary.com/dmyvrfmgv/image/upload/v1683989621/Kamdhenu/KD_Enterance.jpg"
            />
            <Item.Content>
              <Item.Header>Kamdhenu Apartment</Item.Header>
              <Item.Description>
                <div>LIG flats numbers 1 to 16.</div>
                <div>MIG flats numbers 17 to 40.</div>
                <div>HIG flats numbers 41 to 110.</div>
                <div>Address : Plot-51 Sector-9 Rohini New Delhi 110085</div>
                <div>Contact email : kamdhenusociety@outlook.com</div>
                <div>Map coordinates : 28.71859721702433, 77.12453813558217</div>
              </Item.Description>
              <Item.Extra>
                <Label basic content="Kamdhenu Apartment" />
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Container>
    </>
  );
};

export default HomePage;
