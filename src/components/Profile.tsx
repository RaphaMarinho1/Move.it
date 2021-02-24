import styles from '../styles/components/Profile.module.css'

export function Profile() {
  return(
    <div className={styles.profileContainer}>
      <img src="https://github.com/raphamarinho1.png" alt="Raphael Marinho"/>
      <div>
        <strong>Raphael Marinho</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 1
        </p>
      </div>
    </div>
  );
}