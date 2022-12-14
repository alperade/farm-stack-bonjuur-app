import { useGetItinerariesQuery } from "../../app/itineraryApi";
import Form from "react-bootstrap/Form";
import { updateItinerary } from "../../app/itinerarySlice";
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { updateSearch } from "../../app/searchSlice";
import { useSelector } from "react-redux";
import { useGetTokenQuery } from "../../app/accountApi";

function ItinerarySelect() {
  const { data: tokenData } = useGetTokenQuery();
  const accountId = tokenData && tokenData.account && tokenData.account.id;
  let loc = useSelector((state) => state.search.location);
  let [changed, setChanged] = useState(false);
  let id = "";
  if (changed !== false) {
    id = changed.slice(0, 24);
    loc = changed.slice(25);
  }

  const dispatch = useDispatch();
  const { data, isLoading } = useGetItinerariesQuery();

  useEffect(() => {
    const actionId = updateItinerary({ itineraryId: id });
    dispatch(actionId);
    const actionLocation = updateSearch({ location: loc });
    dispatch(actionLocation);
  }, [id, loc, dispatch, changed]);

  if (isLoading) {
    return <progress className="progress is-primary" max="100"></progress>;
  }

  return (
    <div>
      <Form.Select id="selectid" onChange={(e) => setChanged(e.target.value)}>
        <option>Select an Itinerary</option>
        {data.itineraries
          .filter((itinerary) => itinerary.account_id === accountId)
          .map((itinerary) => {
            return (
              <option
                value={[itinerary.id, itinerary.location]}
                href={itinerary.location}
                key={itinerary.name}
              >
                {itinerary.name}
              </option>
            );
          })}
        ;
      </Form.Select>
    </div>
  );
}

export default ItinerarySelect;
