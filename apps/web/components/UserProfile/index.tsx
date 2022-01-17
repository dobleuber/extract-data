import styles from "./index.module.css";

interface UserProfileProps {
  username: string | null;
  logout: () => void;
  loginUri: string;
}

export const UserProfile = ({
  username,
  logout,
  loginUri,
}: UserProfileProps) => {
  return (
    <div data-testid="user-profile" className={styles.userProfile}>
      {username ? (
        <>
          <h2 className={styles.h2}>{username}</h2>
          <button onClick={logout} className={styles.button}>Logout</button>
        </>
      ) : (
        <a className={styles.link}  href={loginUri}>twitch login</a>
      )}
    </div>
  );
};
