import { useEffect, useState } from "react";
import axios from 'axios';
import requests from "../requests";
import MeetupList from "../components/Meetups/MeetupList";



function AllMeetupsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedData, setLoadedData] = useState([]);
    useEffect(() => {
        setIsLoading(true);
        requests.get('/meetup.json')
            .then(response => {
                console.log(response);
                const meetups = [];
                for (const key in response.data) {
                    const meetup = {
                        id: key,
                        ...response.data[key]
                    }
                    meetups.push(meetup);
                }
                setIsLoading(false);
                setLoadedData(meetups);
            });
    }, []);

    if (isLoading) {
        return <section>
            <p>
                Hi! The page is still loading ......
            </p>
        </section>
    }

    return <div>
        <h1>All Meetups</h1>
        <MeetupList meetups={loadedData} />
    </div>
}


export default AllMeetupsPage;