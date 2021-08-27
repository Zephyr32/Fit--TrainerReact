import { Dashboard, Receipt } from "@material-ui/icons";
import { Dashboard as DashboardPage } from "../pages/Dashboard/Dashboard";
import NewExercise from "../pages/NewExercise/NewExercise";
import EditExercise from "../pages/EditExercises/EditExercises";
import NewWorkout from "../pages/NewWorkout/NewWorkout";
import EditWorkout from "../pages/EditWorkout/EditWorkout";
const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/newExercise",
    name: "New Exercise",
    icon: Receipt,
    component: NewExercise,
    layout: "/admin",
  },
  {
    path: "/EditExercise",
    name: "Edit Exercise",
    icon: Receipt,
    component: EditExercise,
    layout: "/admin",
  },
  {
    path: "/NewWorkout",
    name: "New Workout",
    icon: Receipt,
    component: NewWorkout,
    layout: "/admin",
  },
  {
    path: "/EditWorkout",
    name: "Edit Workout",
    icon: Receipt,
    component: EditWorkout,
    layout: "/admin",
  },
];

export default dashboardRoutes;
