import classes from './Card.module.css';

// Card components wraps around ??
function Card(props) {
    return (
        <div className={classes.card}>
            {/* JavaScript --> props.children - renders the content nested in the Card component wrap [<Card></Card>] */}
            {props.children}
        </div>
    );
}

export default Card;