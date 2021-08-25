import {
  Dashboard,
  Person,
  LibraryBooks,
  BubbleChart,
  Notifications,
  Unarchive,
  Receipt,
} from "@material-ui/icons";
import { Dashboard as DashboardPage } from "../views/Dashboard/Dashboard";
import { UserProfile } from "../views/UserProfile/UserProfile";
import { TableList } from "../views/TableList/TableList";
import { TypographyPage } from "../views/Typography/Typography";
import { Icons } from "../views/Icons/Icons";
import { Notifications as NotificationsPage } from "../views/Notifications/Notifications";
import { UpgradeToPro } from "../views/UpgradeToPro/UpgradeToPro";
import NewExercise from "../views/NewExercise/NewExercise";
import EditExercise from "../views/EditExercises/EditExercises";
const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User Profile",
    icon: Person,
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/table",
    name: "Table List",
    icon: "content_paste",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Typography",
    icon: LibraryBooks,
    component: TypographyPage,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: BubbleChart,
    component: Icons,
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
    path: "/notifications",
    name: "Notifications",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin",
  },
  {
    path: "/upgrade-to-pro",
    name: "Upgrade To PRO",
    icon: Unarchive,
    component: UpgradeToPro,
    layout: "/admin",
  },
];

export default dashboardRoutes;
