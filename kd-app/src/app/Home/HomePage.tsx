import { Container, Item, Label } from "semantic-ui-react";
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
              <Item.Header>{import.meta.env.VITE_APP_NAME}</Item.Header>
              <Item.Description>
                <div>LIG flats numbers 1 to 16.</div>
                <div>MIG flats numbers 17 to 40.</div>
                <div>HIG flats numbers 41 to 110.</div>
                <div>Address : Plot-51 Sector-9 Rohini New Delhi 110085</div>
                <div>Contact email : kamdhenusociety@outlook.com</div>
              </Item.Description>
              <Item.Extra>
                <a
                  href="https://www.google.com/maps/place/28%C2%B043'07.0%22N+77%C2%B007'28.3%22E/@28.7184424,77.1244568,20.25z/data=!4m4!3m3!8m2!3d28.7185972!4d77.1245381?entry=ttu"
                  target="_blank"
                >
                  <Label basic content="Kamdhenu Apartment location on map" color="green" />
                </a>
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Container>
    </>
  );
};

export default HomePage;
