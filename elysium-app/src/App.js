import "./App.css";
import "./pages/New.css";
import Rout from "./Route";
import Nav from "./components/Nav";
// import OurClients from "./Sections/OurClients";
// import ServiceCom from "./Sections/ServiceCom";
// import StepsSection from "./Sections/StepsSection";

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <ServiceCom />
      <OurClients />
      <StepsSection /> */}
      <Rout />
    </div>
  );
}

export default App;
