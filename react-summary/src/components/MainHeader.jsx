import { Link } from 'react-router-dom';
import { MdPostAdd, MdMessage } from 'react-icons/md';

import classes from './MainHeader.module.css';

function MainHeader() {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        <Link href="/create-post" className={classes.button}>
          <MdPostAdd size={18} />
          New Post
        </Link> {/* use link instead of href to not send a new request and reload posts */}
      </p>
    </header>
  );
}

export default MainHeader;