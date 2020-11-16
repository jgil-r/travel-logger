import Head from 'next/head';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import styled from 'styled-components';
import { getAllTravelLogs } from '@utils/db-admin';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainContainer = styled.main`
  width: 900px;
  max-width: 90vw;
  height: 75vh;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);
`;

export default function Index({ logs }) {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: 39.809072,
    longitude: -98.5599219,
    zoom: 3,
  });

  console.log(logs);
  return (
    <AppContainer>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://api.tiles.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>

      <MainContainer>
        <ReactMapGL
          mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
          mapStyle="mapbox://styles/jgil-r/ckcb9aqs35x7w1ip6t8ljo3t2"
          {...viewport}
          onViewportChange={nextViewport => setViewport(nextViewport)}
        />
      </MainContainer>
    </AppContainer>
  );
}

export async function getStaticProps() {
  const { logs } = await getAllTravelLogs();

  return {
    props: {
      logs,
    },
  };
}
