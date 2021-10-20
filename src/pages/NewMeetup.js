import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/Meetups/NewMeetupForm";
import requests from "../requests";

function NewMeetupPage() {
    const history = useHistory();
    function addMeetupHandler(meetupData) {
        requests.post('/meetup.json', meetupData).then(() => {
            history.replace("/");
        })
    }
    return <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
}


export default NewMeetupPage;