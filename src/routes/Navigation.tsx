import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
  Navigate,
} from "react-router-dom";

import logo from "../logo.svg";
import { routes } from "./routes";

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            {routes.map(({ to, name }) => {
              return (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) => (isActive ? "nav-active" : "")}
                  >
                    {name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
        <Routes>
          {routes.map(({ path, Component }) => {
            return <Route key={path} path={path} element={<Component />} />;
          })}

          <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
        </Routes>
      </div>
    </Router>
  );
};
