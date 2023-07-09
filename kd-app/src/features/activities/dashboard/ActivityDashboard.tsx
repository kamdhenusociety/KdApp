import { Container, Grid, List } from "semantic-ui-react";
import ActivityList from "./ActivityList";
import { useStore } from "../../../app/stores/Store";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import LoadingComponent from "../../../app/layout/LoadingComponent";

const ActivityDashboard = () => {
  const {activityStore} = useStore();
  const {loadingInitial, activitiesByDate} = activityStore;
  
  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  if(loadingInitial) return <LoadingComponent inverted={true} content='Loading activities ...'/>
  
  return (
    <Grid>
      <Grid.Column width="10">
        <List>
          {activitiesByDate.length>0 
            ?<ActivityList />
            : <Container text><p>No activities found.</p></Container>
          }
        </List>
      </Grid.Column>
      <Grid.Column width="6">
        <h2>Activity filters</h2>
      </Grid.Column>
    </Grid>
  );
};
export default observer(ActivityDashboard);
