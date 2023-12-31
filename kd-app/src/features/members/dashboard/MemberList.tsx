import { Item, Label, Segment } from "semantic-ui-react";
import { Gender, IMember } from "../../../app/models/IMember";

const MemberList = () => {
  const Members: IMember[] = [
    {
      id: "1",
      firstName: "S",
      middleName: "N",
      lastName: "Sharma",
      role: "President",
      gender: Gender.MALE,
      salutation: "Mr.",
      phoneNumber: "9810127549",
      info: "President",
      tenureStartDate: "5/9/2022",
      tenureEndDate: "4/9/2025",
      imgSource:
        "https://res.cloudinary.com/dmyvrfmgv/image/upload/v1689434240/Kd-President.png",
    },
    {
      id: "2",
      firstName: "V",
      middleName: "S",
      lastName: "Aggarwal",
      role: "Vice President",
      gender: Gender.MALE,
      salutation: "Mr.",
      phoneNumber: "9818803381",
      info: "Vice President",
      tenureStartDate: "5/9/2022",
      tenureEndDate: "4/9/2025",
      imgSource:
        "https://res.cloudinary.com/dmyvrfmgv/image/upload/v1689434239/Kd-VicePresident.png",
    },
    {
      id: "3",
      firstName: "M",
      middleName: "V",
      lastName: "Kaushik",
      role: "Secretary",
      gender: Gender.MALE,
      salutation: "Mr.",
      phoneNumber: "9810979716",
      info: "Secretary",
      tenureStartDate: "5/9/2022",
      tenureEndDate: "4/9/2025",
      imgSource:
        "https://res.cloudinary.com/dmyvrfmgv/image/upload/v1689434239/Kd-Secretary.png",
    },
    {
      id: "4",
      firstName: "Roshini",
      lastName: "Sharma",
      role: "Treasurer",
      gender: Gender.FEMALE,
      salutation: "Mrs.",
      phoneNumber: "9911399777",
      info: "Treasurer",
      tenureStartDate: "5/9/2022",
      tenureEndDate: "4/9/2025",
      imgSource:
        "https://res.cloudinary.com/dmyvrfmgv/image/upload/v1689434239/Kd-Treasurer.png",
    },
  ];
  return (
    <Segment>
      <Item.Group divided>
        {Members.map((member) => (
          <Item key={member.id}>
            <Item.Image size="small" src={member.imgSource} />
            <Item.Content>
              <Item.Header>
                {member.salutation} {member.firstName}
                {member.middleName ? "." + member.middleName : ""}{" "}
                {member.lastName}
              </Item.Header>
              <Item.Description>
                <div>{member.info}</div>
                <div>Tenure Start Date : {member.tenureStartDate}</div>
                <div>Tenure End Date : {member.tenureEndDate}</div>
                <div>Phone Number : {member.phoneNumber}</div>
              </Item.Description>
              <Item.Extra>
                <Label basic content={member.role} />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
};
export default MemberList;
