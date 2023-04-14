import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";


import App from "./pages/App";
import FormPage from "./pages/FormPage";
import About from "./components/About";
import Founders from "./components/Founders";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import CreateForm from "./pages/CreateForm";

export default function Index() {
    return (
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path="/" element={<App />} ></Route>
          <Route exact path="/About" element={<About />} ></Route>
          <Route exact path="/Founders" element={<Founders/>}></Route>
          <Route exact path="/donateCampaign" element={<FormPage />}></Route>
          <Route exact path="/createCampaign" element={<CreateForm />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
  