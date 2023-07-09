import { Item, Label, Segment } from "semantic-ui-react";
import { IAmenity } from "../../../app/models/IAmenity";

const AmenityList = () => {
  const Amenities: IAmenity[] = [
    {
      id: "1",
      title: "Main Enterance Gate",
      description: "Main Enterance Gate.",
      imgSource:
        "https://res.cloudinary.com/dmyvrfmgv/image/upload/v1683989614/Kamdhenu/KD_MainEnteranceGate.jpg",
      feature: "Main Enterance Gate",
    },
    {
      id: "2",
      title: "Secuity",
      description:
        "Society is protected by 24x7 secuirty cameras and decurity gaurds. Secuirty register is available at gate for visitor entry log.",
      imgSource:
        "https://res.cloudinary.com/dmyvrfmgv/image/upload/v1683989617/Kamdhenu/KD_Security.jpg",
      feature: "Security",
    },
    {
      id: "3",
      title: "Mandir",
      description:
        "Mandir is a sacred place for Hindu worship. It is dedicated to god and inside will be a shribe to the god. The purpose of worship in the mandir is to have darshan of the gods and goddesses. Offerings or prasad such as flower, fruits, water, milk, nuts or sweers are mode.",
      imgSource:
        "https://res.cloudinary.com/dmyvrfmgv/image/upload/v1683989616/Kamdhenu/KD_12_mfbin8.jpg",
      feature: "Worship Place",
    },
    {
      id: "4",
      title: "Children Playground",
      description:
        "Playgrounds are recreational areas designed for children to play and have fun. They often have equipment such as seesaws, merry-go-rounds, swing sets, slides, jungle gyms, chin-up bars, sandboxes, spring riders, trapeze rings, playhouses and mazes. These facilities help children develop physical coordination, strength and flexibility while providing recreation and enjoyment and supporting social and emotional development.",
      imgSource:
        "https://res.cloudinary.com/dmyvrfmgv/image/upload/v1683989620/Kamdhenu/KD_Playground.jpg",
      feature: "Playground",
    },
    {
      id: "5",
      title: "Garden",
      description:
        "Gardens are outdoor spaces that can be used for growing plants, flowers, and vegetables. Garden centers are retail stores that sell plants and gardening supplies. They may contain a permanent wood or steel frame building with retail sales space, office, work area, cooler and storage.",
      imgSource:
        "https://res.cloudinary.com/dmyvrfmgv/image/upload/v1683989618/Kamdhenu/KD_Garden1.jpg",
      feature: "Garden",
    },
    {
      id: "6",
      title: "LIG Flats",
      description: "One Bedroom Flat.",
      imgSource:
        "https://res.cloudinary.com/dmyvrfmgv/image/upload/v1683989620/Kamdhenu/KD_LIG.jpg",
      feature: "LIG Flat",
    },
    {
      id: "7",
      title: "MIG Flats",
      description: "Two Bedroom Flat.",
      imgSource:
        "https://res.cloudinary.com/dmyvrfmgv/image/upload/v1683989620/Kamdhenu/KD_MIG.jpg",
      feature: "MIG Flat",
    },
    {
      id: "8",
      title: "HIG Flats",
      description: "Three Bedroom Flat.",
      imgSource:
        "https://res.cloudinary.com/dmyvrfmgv/image/upload/v1683989619/Kamdhenu/KD_HIG.jpg",
      feature: "HIG Flat",
    },
    {
      id: "9",
      title: "Water Pump",
      description: "Bore well water pump.",
      imgSource:
        "https://res.cloudinary.com/dmyvrfmgv/image/upload/v1683989616/Kamdhenu/KD_Waterpump.jpg",
      feature: "Water Pump",
    },
    {
      id: "10",
      title: "Generator",
      description: "Emergency electric generator.",
      imgSource:
        "https://res.cloudinary.com/dmyvrfmgv/image/upload/v1683989614/Kamdhenu/KD_Generator.jpg",
      feature: "Electric Generator",
    },
    {
      id: "11",
      title: "Common Parking",
      description: "Common Parking.",
      imgSource:
        "https://res.cloudinary.com/dmyvrfmgv/image/upload/v1683989614/Kamdhenu/KD_CommonParking.jpg",
      feature: "Common Parking",
    },
    {
      id: "12",
      title: "Stilt Parking - HIG Flats",
      description: "HIG Parking.",
      imgSource:
        "https://res.cloudinary.com/dmyvrfmgv/image/upload/v1683989618/Kamdhenu/KD_HIGPARKING.jpg",
      feature: "HIG Parking",
    },
    {
      id: "13",
      title: "Parking - MIG Flats Area",
      description: "MIG Parking.",
      imgSource:
        "https://res.cloudinary.com/dmyvrfmgv/image/upload/v1683989619/Kamdhenu/KD_MIGParking.jpg",
      feature: "MIG Parking",
    },
    {
      id: "14",
      title: "Parking - LIG Flats Area",
      description: "LIG Parking.",
      imgSource:
        "https://res.cloudinary.com/dmyvrfmgv/image/upload/v1683989622/Kamdhenu/KD_LIGPARKING.jpg",
      feature: "LIG Parking",
    }
  ];
  return (
    <Segment>
      <Item.Group divided>
        {Amenities.map((amenity) => (
          <Item key={amenity.id}>
            <Item.Image size="big" src={amenity.imgSource} />
            <Item.Content>
              <Item.Header>{amenity.title}</Item.Header>
              <Item.Description>
                <div>
                  <p>{amenity.description}</p>
                </div>
              </Item.Description>
              <Item.Extra>
                <Label basic content={amenity.feature} />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
};
export default AmenityList;
