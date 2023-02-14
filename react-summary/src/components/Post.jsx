import classes from './Post.module.css';
// or import styles from '' the name is up to you

function Post(props) {
    return ( 
        <div className={classes.post}>
            <p className={classes.author}>{props.author}</p>
            <p className={classes.text}>{props.body}</p>
        </div>
    );
}

export default Post;