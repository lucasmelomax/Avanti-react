import React from 'react'
import styles from "./Card.module.css";
import Error from './Error'


const Card = ({avatar_url, name, bio, error, data}) => {

  if(error) return <Error error={error} />
  return (
    <div className={styles.card}>
      <div className={styles.avatar}>
        <img src={avatar_url} alt="" />
      </div>
      <div>
        <h1>{name}</h1>
        <p>{bio}</p>
      </div>
      
    </div>
  )
}

export default Card
