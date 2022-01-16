import { useState, useEffect } from "react";

import { parseJwt, localStorage } from "../utils";
import { UserProfile } from "../components/UserProfile";

export default function Web({loginUri}) {
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.get("token");
    if (token && !username) {
      const tokenData = parseJwt(token);
      setUsername(tokenData.preferred_username as string);
    } else {
      setUsername(null);
    }
  }, []);

  const logout = () => {
    localStorage.remove("token")
    setUsername(null);
  };

  return (
    <div>
      <h1>Web</h1>
      <UserProfile username={username} logout={logout} loginUri={loginUri}/>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { CLIENT_ID } = process.env;
  const { REDIRECT_URL } = process.env;

  const loginUri = `https://id.twitch.tv/oauth2/authorize?response_type=token+id_token&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scope=viewing_activity_read+openid&claims={"id_token":{"email_verified":null, "preferred_username":null}}`;
  return {
    props: {loginUri}, // will be passed to the page component as props
  }
}
