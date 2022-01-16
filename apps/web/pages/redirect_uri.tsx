import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { parseJwt, localStorage } from "../utils";

export default function AuthCallback() {
  const [username, setUsername] = useState<string | null>(null);
  const router = useRouter();
  const { asPath } = router;
  const start = asPath.indexOf("#");
  const authResponse = asPath.substring(start + 1);

  const urlParams = new URLSearchParams(authResponse);

  useEffect(() => {
    const token = urlParams.get("id_token");
    const tokenData = parseJwt(token);
    const { preferred_username } = tokenData;
    localStorage.set("token", token);

    setUsername(preferred_username as string);
  }, []);

  return (
    <div>
      <h1>Logged in!</h1>
      {username}
      <br/>
      <button onClick={() => router.push("/")}>Go to home</button>
    </div>
  );
}
