import { useRef } from 'react'
import Card from "../ui/Card";
import classes from './NewMeetupForm.module.css';

function NewMeetupForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descInputRef = useRef();

    function formSubmitHandler(event) {
        event.preventDefault();
        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDesc = descInputRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDesc
        }
        props.onAddMeetup(meetupData);

    }
    return <Card>
        <form className={classes.form} onSubmit={formSubmitHandler}>
            <div className={classes.control}>
                <label>Meetup Title </label>
                <input type="text" required id="title" ref={titleInputRef} />
            </div>
            <div className={classes.control}>
                <label>Meetup Image </label>
                <input type="url" required id="image" ref={imageInputRef} />
            </div>
            <div className={classes.control}>
                <label> Address </label>
                <input type="text" required id="address" ref={addressInputRef} />
            </div>
            <div className={classes.control}>
                <label>Description </label>
                <textarea required id="description" rows="5" ref={descInputRef}></textarea>
            </div>
            <div className={classes.actions}>
                <button >Add Meetup</button>
            </div>

        </form>
    </Card>
}


export default NewMeetupForm;