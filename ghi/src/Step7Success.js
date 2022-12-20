import { useGetTokenQuery } from "./app/accountApi";
import { useGetMembersQuery } from "./app/memberApi";
import { useCancelMembershipMutation } from "./app/memberApi";

function MembershipDetails() {
  const { data: tokenData, isLoading: tokenLoading } = useGetTokenQuery();
  const { data: memberData, isLoading } = useGetMembersQuery();
  if (isLoading && tokenLoading) {
    return <progress className="progress is-primary" max="100"></progress>;
  }

  if (memberData && tokenData) {
    let userEmail = tokenData && tokenData.account.email;
    let result = memberData.members.filter(member => member.email == userEmail)[0];

  return (
        <div className="col-4 mx-auto">
          <table className="table bg-transparent">
            <tbody>
              <tr>
                <td>Email</td>
                <td>{result.email}</td>
              </tr>
              <tr>
                <td>Membership</td>
                <td>{result.membership}</td>
              </tr>
              <tr>
                <td>Start Date</td>
                <td>{result.start_date.slice(0,10)}</td>
              </tr>
              <tr>
                <td>Time Slot</td>
                <td>{result.time_slot}</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>{result.address}</td>
              </tr>
              <tr>
                <td>Apt Number</td>
                <td>{result.apt}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>{result.phone}</td>
              </tr>
              <tr>
                <td>Bedroom</td>
                <td>{result.bedrooms}</td>
              </tr>
              <tr>
                <td>Bathrooms</td>
                <td>{result.bathrooms}</td>
              </tr>
              <tr>
                <td>Pets</td>
                <td>{result.pets}</td>
              </tr>
            </tbody>
          </table>
        </div>
  );
}
}

export default MembershipDetails;
