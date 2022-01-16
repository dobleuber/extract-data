interface UserProfileProps {
  username: string | null;
  logout: () => void;
  loginUri: string;
}

export const UserProfile = ({ username, logout, loginUri }: UserProfileProps) => {
  return (
    <div data-testid="user-profile">
      {username ?
        <>
            <h1>{username}</h1>
            <button onClick={logout}>Logout</button>
        </> : <a href={loginUri}>Not logged</a>}
    </div>
  );
};
