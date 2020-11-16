import Head from 'next/head';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import styles from '@styles/index.module.css';

export default function Index() {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: 39.809072,
    longitude: -98.5599219,
    zoom: 3,
  });

  return (
    <div className={styles.app__container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://api.tiles.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.main__container}>
        <ReactMapGL
          mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
          mapStyle="mapbox://styles/jgil-r/ckcb9aqs35x7w1ip6t8ljo3t2"
          {...viewport}
          onViewportChange={nextViewport => setViewport(nextViewport)}
        />
      </main>
    </div>
  );
}
