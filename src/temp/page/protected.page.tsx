import { AuthGuard } from '@app/common/AuthGuard';
import { useAuthContext } from '@contexts/AuthContext';
import { useRouter } from 'next/router';

const Protected = () => {
  const router = useRouter();
  const { auth, profile } = useAuthContext();

  // If no session exists, display access denied message
  if (!auth || !profile) {
    return (
      <>
        <h1>Access denied</h1>
        Not signed in <br />
        {/* <button type="button" onClick={() => router.push(Routes.Signin)}> */}
        Sign in
        {/* </button> */}
      </>
    );
  }

  // If session exists, display content
  return (
    <>
      <h1>Protected Page</h1>
      Signed in as {profile?.email} <br />
      {/* <button type="button" onClick={() => router.push(Routes.Signout)}> */}
      Sign out
      {/* </button> */}
    </>
  );
};

export default Protected;

Protected.guard = {
  allowAuth: true,
  roleIds: [],
} as AuthGuard;
