import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { Sidebar } from "../../lib/layouts";
import Buttons from "./Buttons";
import FormElements from "./FormElements";
import Formik from "./Formik";
import Overlays from "./Overlays";
import Components from "./Components";
import Layouts from "./Layouts";

const navLinks = [
  {
    label: "Buttons",
    to: "/playground/buttons",
  },
  {
    label: "Form Elements",
    to: "/playground/form-elements",
  },
  {
    label: "Formik",
    to: "/playground/formik",
  },
  {
    label: "Overlays",
    to: "/playground/overlays",
  },
  {
    label: "Layouts",
    to: "/playground/Layouts",
  },
]

const Playground = () => {
  return (
    <Router>
      <div className="flex flex-row items-start justify-start">
        <Sidebar
          organizationInfo={{
            name: "neetoUI",
            subdomain: "neetoui.netlify.app"
          }}
          navLinks={navLinks}
        />
        <div className="relative flex flex-col flex-grow h-screen overflow-auto">
          <Switch>
            <Route path="/playground/buttons" component={Buttons} />
            <Route path="/playground/form-elements" component={FormElements} />
            <Route path="/playground/formik" component={Formik} />
            <Route path="/playground/overlays" component={Overlays} />
            <Route path="/playground/components" component={Components} />
            <Route path="/playground/layouts" component={Layouts} />
            <Redirect path="/playground" to="/playground/buttons" />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default Playground;
