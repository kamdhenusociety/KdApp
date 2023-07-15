import { Item, Label, Segment } from "semantic-ui-react";
import { ILayout } from "../../../app/models/ILayout";

const LayoutList = () => {
  const Layouts: ILayout[] = [
    {
      id: "1",
      title: "LIG Flat Layout PLan",
      description: "One bedroom layout plan. LIG flats numbers 1 to 16.",
      imgSource:
        "https://res.cloudinary.com/dmyvrfmgv/image/upload/v1688913857/FloorPlanTypeA.jpg",
      feature: "Download LIG Layout PLan",
      layoutUrl: "/assets/Kamdhenu_Type_A.pdf",
    },
    {
      id: "2",
      title: "MIG Flat Layout PLan",
      description: "Two bedroom layout plan. MIG flats numbers 17 to 40.",
      imgSource:
        "https://res.cloudinary.com/dmyvrfmgv/image/upload/v1688913857/FloorPlanTypeB.jpg",
      feature: "Download MIG Layout PLan",
      layoutUrl: "/assets/Kamdhenu_Type_B.pdf",
    },
    {
      id: "3",
      title: "HIG Flat Layout PLan",
      description: "Three bedroom layout plan.HIG flats numbers 41 to 110.",
      imgSource:
        "https://res.cloudinary.com/dmyvrfmgv/image/upload/v1688913857/FloorPlanTypeC.jpg",
      feature: "Download HIG Layout PLan",
      layoutUrl: "/assets/Kamdhenu_Type_C.pdf",
    },
  ];
  return (
    <Segment>
      <Item.Group divided>
        {Layouts.map((layout) => (
          <Item key={layout.id}>
            <Item.Image size="big" src={layout.imgSource} />
            <Item.Content>
              <Item.Header>{layout.title}</Item.Header>
              <Item.Description>
                <div>
                  <p>{layout.description}</p>
                </div>
              </Item.Description>
              <Item.Extra>
                <a href={layout.layoutUrl} target="_blank">
                  <Label basic content={layout.feature} color="green" />
                </a>
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
};

export default LayoutList;
