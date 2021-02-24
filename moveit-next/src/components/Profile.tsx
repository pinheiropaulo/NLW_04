import styles from "../styles/components/Profile.module.css";

export function Profile() {
  return (
    <div className={styles.ProfileContainer}>
      <img src="http://github.com/pinheiropaulo.png" alt="Paulo Pinheiro" />
      <div>
        <strong>Paulo Pinheiro</strong>

        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
}
