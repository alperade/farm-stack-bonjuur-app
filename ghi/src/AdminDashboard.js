import { useGetMembersQuery } from "./app/memberApi";
import { useGetWaitListEmailsQuery } from "./app/waitlistApi";
import { useGetTokenQuery } from "./app/accountApi";

function Admin() {
  const { data: tokenData } = useGetTokenQuery();
  const accountId = tokenData && tokenData.account && tokenData.account.id;
  const { data: memberData, isLoading: memberLoading } = useGetMembersQuery();
  const { data: waitlistData, isLoading: waitlistLoading } = useGetWaitListEmailsQuery();

  if (memberLoading || waitlistLoading) {
    return <progress className="progress is-primary" max="100"></progress>;
  }

  if (tokenData.account.email === "omer@bonjuur.com") {
    return (
        <div>
            <h3 style={{marginTop:"3vh"}}>Members List</h3>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Email</th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Address</th>
                            <th scope="col">Apt</th>
                            <th scope="col">Membership</th>
                            <th scope="col">Start Date</th>
                            <th scope="col">Time Slot</th>
                            <th scope="col">Cleaner</th>
                            <th scope="col">Is Active</th>
                            <th scope="col">Bedrooms</th>
                            <th scope="col">Bathrooms</th>
                        </tr>
                    </thead>
                    <tbody>
                        {memberData.members.map((member) => (
                        <tr>
                            <td>{ member.email }</td>
                            <td>{ member.full_name }</td>
                            <td>{ member.phone }</td>
                            <td>{ member.address }</td>
                            <td>{ member.apt }</td>
                            <td>{ member.membership }</td>
                            <td>{ member.start_date.slice(0,10) }</td>
                            <td>{ member.time_slot }</td>
                            <td>{ member.cleaner }</td>
                            <td>{ member.is_active ? "Active" : "Not Active" }</td>
                            <td>{ member.bedrooms }</td>
                            <td>{ member.bathrooms }</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                <h3 style={{marginTop:"3vh"}}>Waitlist</h3>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Email</th>
                            <th scope="col">Address</th>
                            <th scope="col">Created_on</th>
                        </tr>
                    </thead>
                    <tbody>
                        {waitlistData.waitlistemails.map((waitlist) => (
                        <tr>
                            <td>{ waitlist.email }</td>
                            <td>{ waitlist.address }</td>
                            <td>{ waitlist.created_on.slice(0,10) }</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
        </div>
    );
    }
}

export default Admin;
