import { useAuth } from '@utils/auth';
import styled from 'styled-components';

const AddLogContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function AddLog() {
  const auth = useAuth();
  console.log(auth.user);

  return (
    <AddLogContainer>
      <main>
        {auth.user ? (
          <div>
            <p>Email: {auth.user.email}</p>
            <button onClick={() => auth.signOut()}>Sign Out</button>
          </div>
        ) : (
          <button onClick={() => auth.signInWithGithub()}>Sign In</button>
        )}
      </main>
    </AddLogContainer>
  );
}
