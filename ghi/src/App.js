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

function App() {
  return (
    <div className="bg-color">
      <BrowserRouter>
        <Nav />
        <div className="container">
          <Routes>
            <Route path="/module3-project-gamma/" element={<Main />} />
            <Route path="/module3-project-gamma/ItineraryForm" element={<ItineraryForm />} />
            <Route path="/module3-project-gamma/EventForm" element={<EventForm />} />
            <Route path="/module3-project-gamma/UpdateEvent" element={<UpdateEventForm />} />
            <Route path="/module3-project-gamma/Itineraries" element={<Itineraries />} />
            <Route path="/module3-project-gamma/Events" element={<Events />} />
            <Route path="/module3-project-gamma/ItineraryDetail" element={<ItineraryDetail />} />
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
