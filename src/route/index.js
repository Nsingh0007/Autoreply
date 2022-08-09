import {
  BrowserRouter as Router,
  Route,
  Routes,
  useHistory,
} from "react-router-dom";
import { ROUTES } from "./constant";
import PrivateRoute from "./private.route";
import PublicRoute from "./public.route";

// import Dashboard from "../Page/Dashboard/Dashboard";
import Bot from "../Page/Bot";
import Home from "../Page/Home";

// import Login from "../Component/Login";
import MessageSet from "../Page/MessageSet";
import MessageReply from "../Page/MessageReply";
// import AutoSetting from "../Page/AutoSetting";
import AutoSetting from "../Page/Setting";

const Routers = () => {
  const publicRoutes = [
    {
      key: 1,
      path: ROUTES.INDEX,
      component: Home,
      restricted: false,
    },
  ];

  const privateRoutes = [
    {
      key: 1,
      component: Bot,
      path: ROUTES.BOT,
      restricted: true,
      exact: true,
    },
    // {
    //   key: 2,
    //   component: Login,
    //   path: ROUTES.LOGIN,
    //   restricted: true,
    //   exact: true,
    // },
    {
      key: 3,
      component: MessageReply,
      path: ROUTES.MESSAGEREPLY,
      restricted: true,
      exact: true,
    },
    {
      key: 4,
      component: MessageSet,
      path: ROUTES.MESSAGESET,
      restricted: true,
      exact: true,
    },
    {
      key: 5,
      component: AutoSetting,
      path: ROUTES.AUTOSETTING,
      restricted: true,
      exact: true,
    },
    ,
  ];

  return (
    <Router>
      <Routes>
        {publicRoutes.map((i) => (
          <Route
            path={i?.path}
            key={i?.key}
            element={
              <PublicRoute
                restricted={i?.restricted}
                key={i?.key}
                component={i?.component}
              />
            }
          />
        ))}

        {privateRoutes.map((i) => (
          <Route
            path={i?.path}
            key={i?.key}
            element={
              <PrivateRoute
                key={i?.key}
                component={i?.component}
                restricted={i?.restricted}
              />
            }
          />
        ))}
      </Routes>
    </Router>
  );
};

export default Routers;
