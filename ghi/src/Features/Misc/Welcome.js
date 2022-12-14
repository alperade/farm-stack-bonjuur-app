import logo from "../../media/fomore-light.png";

function Welcome() {
  return (
    <div>
      <img
        alt="no meaningful description"
        src={logo}
        className="welcome-title"
      ></img>
      <h6 className="welcome-subtitle">
        <b>FOMO</b> &#x2022; /ˈfōmō/ &#x2022; noun: "the fear of missing out on
        something that others are experiencing"
      </h6>
      <div className="welcome-body">
        <p>Welcome to FOMORE! The quickest way manage your itineraries.</p>
        <p>
          To get started, sign up or log in, and create your first itinerary.
        </p>
        <p>Search events or create your own, and add them to your itinerary.</p>
      </div>
    </div>
  );
}

export default Welcome;
