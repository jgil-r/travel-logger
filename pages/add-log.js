import { useRouter } from 'next/router';
import { useAuth } from '@utils/auth';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { useForm } from 'react-hook-form';
import { createTravelLog } from '@utils/db';

const AddLogContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  > p {
    display: flex;
    flex-direction: column;
  }
`;

const SignOutContainer = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
`;

export default function AddLog() {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const auth = useAuth();
  console.log(auth.user);

  const onSubmit = data => {
    const newLog = {
      id: uuidv4(),
      location: data.location,
      latitude: data.latitude,
      longitude: data.longitude,
    };

    createTravelLog(newLog);
    router.push('/');
  };

  return (
    <AddLogContainer>
      <main>
        {auth.user ? (
          <div>
            <h1>Hello, {auth.user.name}</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <p>
                <label htmlFor="location">Location:</label>
                <input id="location" name="location" type="text" ref={register} required />
              </p>
              <p>
                <label htmlFor="latitude">Latitude:</label>
                <input id="latitude" name="latitude" type="text" ref={register} required />
              </p>
              <p>
                <label htmlFor="longitude">Longitude:</label>
                <input id="longitude" name="longitude" type="text" ref={register} required />
              </p>
              <div>
                <button>Submit</button>
              </div>
            </Form>
            <SignOutContainer>
              <button onClick={() => auth.signOut()}>Sign Out</button>
            </SignOutContainer>
          </div>
        ) : (
          <button onClick={() => auth.signInWithGithub()}>Sign In</button>
        )}
      </main>
    </AddLogContainer>
  );
}
