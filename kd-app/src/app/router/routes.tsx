import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import ActivityForm from "../../features/activities/Form/ActivityForm";
import ActivityDetails from "../../features/activities/details/ActivityDetails";
import MemberDashboard from "../../features/members/dashboard/MemberDashboard";
import AmenityDashboard from "../../features/amenities/dashboard/AmenityDashboard";
import LayoutDashboard from "../../features/layouts/dashboard/LayoutDashboard";

export const routes: RouteObject[] = [{
    path: "/",
    element: <App />,
    children:[
        // { path: 'activities', element: <ActivityDashboard />},
        // { path: 'activities/:id', element: <ActivityDetails />},
        // { path: 'createActivity', element: <ActivityForm key='create'/>},
        { path: 'manage/:id', element: <ActivityForm key='manage'/>},
        { path: 'members', element: <MemberDashboard />},
        { path: 'amenities', element: <AmenityDashboard/>},
        { path: 'layout', element: <LayoutDashboard/>},
    ]   
},]

export const router = createBrowserRouter(routes);
