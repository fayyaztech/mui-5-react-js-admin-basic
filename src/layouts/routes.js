// menuConfig.js
import { Inbox, Mail } from "@mui/icons-material";

const menuConfig = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <Inbox />,
    children: [],
  },
  {
    title: "Students",
    path: "#",
    icon: <Inbox />,
    children: [
      {
        title: "List",
        path: "/students/list",
        icon: <Mail />,
      },
      {
        title: "Add Student",
        path: "/students/add",
        icon: <Mail />,
      },
      {
        title: "Attendance",
        path: "/students/attendance",
        icon: <Mail />,
      },
    ],
  },
  {
    title: "Accounts",
    path: "#",
    icon: <Inbox />,
    children: [
      {
        title: "List",
        path: "/students/list",
        icon: <Mail />,
      },
      {
        title: "Attendance",
        path: "/students/attendance",
        icon: <Mail />,
      },
    ],
  },
  {
    title: "Account",
    path: "/account",
    icon: <Inbox />,
    children: [],
  },
  {
    title: "About",
    path: "/about",
    icon: <Inbox />,
    children: [],
  },
];

export default menuConfig;
