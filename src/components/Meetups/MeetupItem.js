import { useContext } from 'react';
import classes from './MeetupItem.module.css';
import Card from '../ui/Card';
import FavouritesContext from '../../store/favorites-context';

function MeetUpItem(props) {
    const favoriteCxt = useContext(FavouritesContext);
    const itemIsFavorite = favoriteCxt.itemIsFavorite(props.id);
    function toggleFavouriteStatusHandler() {
        if (itemIsFavorite) {
            favoriteCxt.removeFavorite(props.id);
        } else {
            favoriteCxt.addFavorite({
                id: props.id,
                title: props.title,
                address: props.address,
                description: props.description,
                image: props.image
            })
        }

    }
    return <li className={classes.item}>
        <Card>
            <div className={classes.image}>
                <img src={props.image} alt={props.title} />
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
                <button onClick={toggleFavouriteStatusHandler}>{itemIsFavorite ? 'Remove from Favourites' : 'Add to Favourites'}</button>
            </div>
        </Card>
    </li>
}


export default MeetUpItem;