import { Button, Item, Label, Segment } from "semantic-ui-react";
import { SyntheticEvent, useState } from "react";
import { useStore } from "../../../app/stores/Store";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

const ActivityList = () => {
  
  const { activityStore } = useStore();
  const {deleteActivity, activitiesByDate, loading} = activityStore;
  const[target,setTarget] = useState('');

  const handleActivityDelete = (e: SyntheticEvent<HTMLButtonElement> ,id: string) => {
    setTarget(e.currentTarget.name);
    deleteActivity(id);
  }
  
  return (
    <Segment>
      <Item.Group divided>
        {activitiesByDate.map((activity) => (
          <Item key={activity.id}>
            <Item.Content>
              <Item.Header as="a">{activity.title}</Item.Header>
              <Item.Meta>{activity.date}</Item.Meta>
              <Item.Description>
                <div>{activity.description}</div>
                <div>
                  {activity.city}, {activity.venue}
                </div>
              </Item.Description>
              <Item.Extra>
                <Button
                  floated="right"
                  content="View"
                  color="blue"
                  as={Link}
                  to={`/activities/${activity.id}`}
                  //onClick={() => activityStore.selectActivity(activity.id)}
                />
                <Button
                  name={activity.id}
                  floated="right"
                  loading={loading && target === activity.id}
                  content="Delete"
                  color="red"
                  //onClick={() => onDeleteActivity(activity.id)}
                  onClick={(e) => handleActivityDelete(e, activity.id)}
                />
                <Label basic content={activity.category} />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
};

export default observer(ActivityList);
