import { Button, Card, Image } from "semantic-ui-react";
import { useStore } from "../../../app/stores/Store";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { observer } from "mobx-react-lite";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

const ActivityDetails = () => {
  const {activityStore} = useStore();
  const {selectedActivity: activity,loadActivity, loadingInitial} = activityStore;
  const { id } = useParams();

  useEffect (() => {
    if(id) loadActivity(id);

  },[id, loadActivity])

  if(loadingInitial || !activity) return <LoadingComponent inverted={true} content='No activity found.'/>;
  return (
    <Card fluid>
      <Image src={`/assets/categoryImages/${activity.category}.jpg`} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{activity.title}</Card.Header>
        <Card.Meta>
          <span>{activity.date}</span>
        </Card.Meta>
        <Card.Description>
          {activity.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths='2'>
            <Button basic color="blue" content="Edit" as={Link} to={`/manage/${activity.id}`}  />
            <Button basic color="grey" content="Cancel" as={Link} to='/activities'/>
        </Button.Group>
      </Card.Content>
    </Card>
  );
};
export default observer(ActivityDetails);
