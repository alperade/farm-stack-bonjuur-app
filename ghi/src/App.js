import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Nav from "./Nav";
import MemberForm from "./MemberForm";
import PickMembership from "./Step1Membership";
import PickBuilding from "./Step2Building";
import HouseDetails from "./Step3HouseDetails";
import PickDateTime from "./Step4DateTime";
import Results from "./Success";

function App() {
  return (
    <div className="bg-color">
      <BrowserRouter>
        <Nav />
        <div className="container">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/form" element={<MemberForm />} />
            <Route path="/step1" element={<PickMembership />} />
            <Route path="/step2" element={<PickBuilding />} />
            <Route path="/step3" element={<HouseDetails />} />
            <Route path="/step4" element={<PickDateTime />} />
            <Route path="/success" element={<Results />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
