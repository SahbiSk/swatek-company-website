import React, { Fragment } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./mainComponents/Navbar";
import Footer from "./mainComponents/Footer";
import Home from "./mainComponents/Home/Home";
import Contact from "./mainComponents/Contact/Contact";
import Produits from "./mainComponents/Produits/Produits";
import Login from "./mainComponents/Login/Login";
import Partenaires from "./mainComponents/Partenaires/Partenaires";
import MainActualités from "./mainComponents/Actualités/MainActualités";
import Catalogue from "./mainComponents/Actualités/Catalogue des pfe/Catalogue";
import { PartenaireActualité } from "./mainComponents/Actualités/PartenaireActualité/PartenaireActualité";
import SystemInfo from "./mainComponents/Prestations/SystemInfo/SystemInfo";
import GestionBa from "./mainComponents/Prestations/Gestion-tech-bati/GestionBa";
import SystemEm from "./mainComponents/Prestations/SystemEmbarqué/SystemEm";
import DashboardWrapper from "./mainComponents/Dashboard/DashboardWrapper";
import AdminActualitées from "./mainComponents/Dashboard/Actualitées/AdminActualitées";
import AdminPartenaires from "./mainComponents/Dashboard/Partenaires/AdminPartenaires";
import AdminProduits from "./mainComponents/Dashboard/Produits/AdminProduits";
import DashboardSection from "./mainComponents/Dashboard/DashboardSection/DashboardSection";
import Signin from "./mainComponents/Dashboard/newAdmin/Signin";

function App() {
  const { token } = useSelector((state) => state.authReducer);
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <Navbar>
                <Home />
                <Footer />
              </Navbar>
            )}
          />
          <Route
            path="/contact"
            exact
            render={(props) => (
              <Navbar>
                <Contact />
                <Footer />
              </Navbar>
            )}
          />
          <Route
            path="/produits"
            exact
            render={(props) => (
              <Navbar>
                <Produits />
                <Footer />
              </Navbar>
            )}
          />
          <Route
            path="/admin"
            exact
            render={(props) => (
              <Fragment>
                {token ? (
                  <DashboardWrapper>
                    <DashboardSection />
                  </DashboardWrapper>
                ) : (
                  <Login />
                )}
              </Fragment>
            )}
          />{" "}
          <Route
            path="/admin/produits"
            exact
            render={(props) => (
              <Fragment>
                {token ? (
                  <DashboardWrapper>
                    <AdminProduits />
                  </DashboardWrapper>
                ) : (
                  <Login />
                )}{" "}
              </Fragment>
            )}
          />{" "}
          <Route
            path="/admin/partenaires"
            exact
            render={(props) => (
              <Fragment>
                {token ? (
                  <DashboardWrapper>
                    <AdminPartenaires />
                  </DashboardWrapper>
                ) : (
                  <Login />
                )}{" "}
              </Fragment>
            )}
          />{" "}
          <Route
            path="/admin/actualités"
            exact
            render={(props) => (
              <Fragment>
                {token ? (
                  <DashboardWrapper>
                    <AdminActualitées />
                  </DashboardWrapper>
                ) : (
                  <Login />
                )}{" "}
              </Fragment>
            )}
          />{" "}
          <Route
            path="/admin/newadmin"
            exact
            render={(props) => (
              <Fragment>
                {token ? (
                  <DashboardWrapper>
                    <Signin />
                  </DashboardWrapper>
                ) : (
                  <Login />
                )}{" "}
              </Fragment>
            )}
          />
          <Route
            path="/partenaires"
            exact
            render={(props) => (
              <Navbar>
                <Partenaires />
                <Footer />
              </Navbar>
            )}
          />{" "}
          <Route
            path="/actualités"
            exact
            render={(props) => (
              <Navbar>
                <MainActualités />
                <Footer />
              </Navbar>
            )}
          />{" "}
          <Route
            path="/actualités/0"
            exact
            render={(props) => (
              <Navbar>
                <PartenaireActualité />
                <Footer />
              </Navbar>
            )}
          />{" "}
          <Route
            path="/actualités/1"
            exact
            render={(props) => (
              <Navbar>
                <Catalogue />
                <Footer />
              </Navbar>
            )}
          />
          <Route
            path="/sys-info"
            exact
            render={(props) => (
              <Navbar>
                <SystemInfo />
                <Footer />
              </Navbar>
            )}
          />{" "}
          <Route
            path="/gestion-tech-batiment"
            exact
            render={(props) => (
              <Navbar>
                <GestionBa />
                <Footer />
              </Navbar>
            )}
          />{" "}
          <Route
            path="/sys-embarqué"
            exact
            render={(props) => (
              <Navbar>
                <SystemEm />
                <Footer />
              </Navbar>
            )}
          />
          <Redirect to="/" />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
