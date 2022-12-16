import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateMember } from "./app/memberSlice";

export function PickBuilding() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const buildings = ["200 W End Avenue", "606 W 57th Street", "455 W 37th Street", "595 Dean St."]
    const isLoading = buildings.isLoading;

    function handleInput(e) {
        let address = e.target.attributes.value.value
        const action = updateMember({ address: address});
        dispatch(action);
        navigate('/step1')
  }



//   if (isLoading) {
//     return <progress className="progress is-primary" max="100"></progress>;
//   }
//   if (buildings.length === 0) {
//     return (
//       <p>
//         No building to display for this time period.
//       </p>
//     );
//   }

  return (
    <div className="col-6 mx-auto">
        {buildings.map((building) => {
            return (
                <div
                    className="card col-6 mx-auto"
                    onClick={handleInput}
                    value={building}
                    style={{margin:"2rem", padding:"1rem"}}
                >
<h5 className="mx-auto">
                    {building}
</h5>
                </div>

            );
        })}
    </div>
  );
}

export default PickBuilding;
