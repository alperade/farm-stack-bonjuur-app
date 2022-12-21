import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import MemberForm from "./MemberForm";
import PickMembership from "./Step1Membership";
import PickBuilding from "./Step2Building";
import HouseDetails from "./Step3HouseDetails";
import PickDateTime from "./Step4DateTime";
import Review from "./Step6Review";
import MembershipDetails from "./Step7Success";
import WaitList from "./WaitList";

import SignupStep from "./Step5Signup";

function App() {
  return (
    <div className="bg-color">
      <BrowserRouter>
        <Nav />
        <div className="container">
          <Routes>
            <Route path="/form" element={<MemberForm />} />
            <Route path="/" element={<PickMembership />} />
            <Route path="/step2" element={<PickBuilding />} />
            <Route path="/step3" element={<HouseDetails />} />
            <Route path="/step4" element={<PickDateTime />} />
            <Route path="/step5" element={<SignupStep />} />
            <Route path="/review" element={<Review />} />
            <Route path="/details" element={<MembershipDetails />} />
            <Route path="/waitlist" element={<WaitList />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
