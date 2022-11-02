import Home from "../components/pages/Home";
import Page404 from "../components/pages/Page404";
import Setting from "../components/pages/Setting";
import UserManagement from "../components/pages/UserManagement";

export const homeRoutes = [
  {
    // eslint-disable-next-line react/react-in-jsx-scope
    children: <Home />,
    exact: true,
    path: "/",
  },
  {
    // eslint-disable-next-line react/react-in-jsx-scope
    children: <UserManagement />,
    exact: false,
    path: "/user_management",
  },
  {
    // eslint-disable-next-line react/react-in-jsx-scope
    children: <Setting />,
    exact: false,
    path: "/setting",
  },
  {
    // eslint-disable-next-line react/react-in-jsx-scope
    children: <Page404 />,
    exact: false,
    path: "*",
  },
];
