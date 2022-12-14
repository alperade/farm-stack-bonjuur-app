import { useGetEventsQuery, useDeleteEventMutation } from "../../app/eventApi";
import ErrorNotification from "../../ErrorNotification";

function Events() {
  const [deleteEvent] = useDeleteEventMutation();
  const { data, error, isLoading } = useGetEventsQuery();
  if (isLoading) {
    return <progress className="progress is-primary" max="100"></progress>;
  }

  return (
    <div className="columns is-centered">
      <div className="column is-narrow">
        <ErrorNotification error={error} />
        <form>
          <table className="table is-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Start Date</th>
                <th>Location</th>
                <th>itinerary_id</th>
                <th>image_url</th>
                <th>Delete?</th>
              </tr>
            </thead>
            <tbody>
              {data.events.map((event) => (
                <tr key={event.id}>
                  <td>{event.name}</td>
                  <td>{event.date}</td>
                  <td>{event.location}</td>
                  <td>{event.itinerary_id}</td>
                  <td>{event.image_url}</td>
                  <td>
                    <button onClick={() => deleteEvent(event.id)}>
                      delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
}

export default Events;
