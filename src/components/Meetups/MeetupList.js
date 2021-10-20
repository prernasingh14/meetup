import MeetUpItem from "./MeetupItem";
import classes from './MeetupList.module.css'

function MeetupList(props) {
    return <div className={classes.list}>
        <ul>
            {props.meetups.map((meetup) =>
                <MeetUpItem
                    key={meetup.id}
                    id={meetup.id}
                    image={meetup.image}
                    title={meetup.title}
                    address={meetup.address}
                    description={meetup.description}
                />
            )}
        </ul>
    </div>
}



export default MeetupList;