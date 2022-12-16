import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Nav from "./Nav";
import ItineraryForm from "./Features/Itineraries/ItineraryForm";
import EventForm from "./Features/Events/EventForm";
import Itineraries from "./Features/Itineraries/ListItinerary";
import Events from "./Features/Events/ListEvents_playaround";
import ItineraryDetail from "./Features/Itineraries/ItineraryDetail";
import UpdateEventForm from "./Features/Events/UpdateEventForm";
import UpdateItineraryForm from "./Features/Itineraries/UpdateItineraryForm";
import MemberForm from "./MemberForm";
import PickMembership from "./Step1Membership";
import PickRooms from "./Step2Rooms";

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
            <Route path="/step2" element={<PickRooms />} />
            <Route
              path="/module3-project-gamma/UpdateItineraryForm"
              element={<UpdateItineraryForm />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
