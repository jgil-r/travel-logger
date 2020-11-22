import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { useAuth } from '@utils/auth';

import { SEO, PrimaryButton, AddLogForm, AppContainer } from '@components/index';

const SignOutContainer = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
`;

const FormContainer = styled.div`
  width: 400px;
  max-width: 90vw;
`;

export default function AddLog() {
  const auth = useAuth();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <>
      <SEO title="Add Log" />
      <AppContainer>
        <main>
          {auth.user ? (
            <FormContainer>
              <h1>Hello, {auth.user.name}</h1>
              <AddLogForm />
              <SignOutContainer>
                <PrimaryButton onClick={() => auth.signOut()}>Sign Out</PrimaryButton>
              </SignOutContainer>
            </FormContainer>
          ) : (
            <>
              {hasMounted ? (
                <PrimaryButton onClick={() => auth.signInWithGithub()}>Sign In</PrimaryButton>
              ) : null}
            </>
          )}
        </main>
      </AppContainer>
    </>
  );
}
