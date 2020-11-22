import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import VisuallyHidden from '@reach/visually-hidden';

import { createTravelLog } from '@utils/db';

import { PrimaryButton } from './buttons';

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;

  > label {
    margin-bottom: 1rem;
  }

  > label input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid var(--color-white);
    border-radius: 3px;

    &:focus:not(.focus-visible) {
      outline: none;
    }

    &:focus-visible {
      box-shadow: 0 0 0 3px var(--color-focus);
    }

    /* Firefox support for :focus-visible */
    &:-moz-focusring {
      box-shadow: 0 0 0 3px var(--color-focus);
    }
  }
`;

const AddLogForm = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm();

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
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="location">
        <VisuallyHidden>Location</VisuallyHidden>
        <input
          id="location"
          name="location"
          type="text"
          ref={register}
          placeholder="Location"
          required
        />
      </label>
      <label htmlFor="latitude">
        <VisuallyHidden>Latitude</VisuallyHidden>
        <input
          id="latitude"
          name="latitude"
          type="text"
          ref={register}
          placeholder="Latitude"
          required
        />
      </label>
      <label htmlFor="longitude">
        <VisuallyHidden>Longitude</VisuallyHidden>
        <input
          id="longitude"
          name="longitude"
          type="text"
          ref={register}
          placeholder="Longitude"
          required
        />
      </label>
      <PrimaryButton>Submit</PrimaryButton>
    </FormStyled>
  );
};

export default AddLogForm;
