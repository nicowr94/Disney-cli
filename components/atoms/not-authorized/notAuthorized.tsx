import React,{useContext} from 'react';

import styles  from './notAuthorized.module.scss';

export default function NotAuthorized() {
  

  return (
    <div className={styles.a_not_authorized__content}>
      <h1 className="content__title">The page you were looking for cannot be found.</h1>
      <div className="body-copy content__body">Please go to the Disney+ home page by clicking the button below</div>
      <a className="button button--primary" href="/">DISNEY+ HOME</a>
  </div>
  )
}
