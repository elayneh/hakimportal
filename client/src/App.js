import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Search from "./page/Search";
import About from "./page/About";
import Contact from "./page/Contact";
import Work from "./page/Works";
import Service from "./page/Services";
import Testimonial from "./page/Testimonials";
import News from "./page/News";
import StaffLogin from "./page/Login/StaffLogin";
import PatientLogin from "./page/Login/PatientLogin";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="search" element={<Search />} />
        <Route path="works" element={<Work />} />
        <Route path="services" element={<Service />} />
        <Route path="testimonials" element={<Testimonial />} />
        <Route path="login/patient-login" element={<PatientLogin />} />
        <Route path="login/staff-login" element={<StaffLogin />} />
        <Route path="news" element={<News />} />
        <Route path="/login" element={<PatientLogin />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export const NotFound = () => {
  return (
    <div>
      <h1> 404 page not found </h1>{" "}
    </div>
  );
};

export default App;
