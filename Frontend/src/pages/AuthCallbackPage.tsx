import { useCreateMyUser } from "@/api/MyUserApi";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function AuthCallbackPage() {
  const navigate = useNavigate();
  const hasCreatedUser = useRef(false);
  // this is get access to current logged in user
  const { user } = useAuth0();

  // Once we have the logged in user we can make the call to create user
  const { createUser } = useCreateMyUser();

  useEffect(() => {
    if (user?.sub && user.email && !hasCreatedUser.current) {
      createUser({ auth0Id: user?.sub, email: user.email });
      hasCreatedUser.current = true;
    }
    navigate("/");
  }, [createUser, navigate, user]);

  return <div>Loading...</div>;
}

export default AuthCallbackPage;
