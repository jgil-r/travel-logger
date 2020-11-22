import { useState, Fragment } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';

import { getAllTravelLogs } from '@utils/db-admin';

import {
  AppContainer,
  MainContainer,
  PopupLocation,
  SEO,
  LocationMarker,
  Button,
} from '@components/index';

export async function getServerSideProps() {
  const { logs } = await getAllTravelLogs();

  return {
    props: {
      logs,
    },
  };
}

export default function Index({ logs }) {
  const [showPopup, setShowPopup] = useState({});
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: 39.809072,
    longitude: -98.5599219,
    zoom: 3,
  });

  return (
    <>
      <SEO />
      <AppContainer>
        <MainContainer>
          <ReactMapGL
            mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
            mapStyle="mapbox://styles/jgil-r/ckcb9aqs35x7w1ip6t8ljo3t2"
            {...viewport}
            onViewportChange={nextViewport => setViewport(nextViewport)}
          >
            {logs.map(log => (
              <Fragment key={log.id}>
                <Marker
                  latitude={parseFloat(log.latitude)}
                  longitude={parseFloat(log.longitude)}
                  offsetTop={-5}
                  offsetLeft={-5}
                >
                  <Button
                    onClick={() =>
                      setShowPopup({
                        [log.id]: true,
                      })
                    }
                    text="View Location"
                  >
                    <LocationMarker />
                  </Button>
                </Marker>
                {!showPopup[log.id] ? null : (
                  <Popup
                    latitude={parseFloat(log.latitude)}
                    longitude={parseFloat(log.longitude)}
                    closeButton={true}
                    closeOnClick={false}
                    onClose={() => setShowPopup(false)}
                    dynamicPosition={true}
                    sortByDepth={true}
                    anchor="bottom"
                  >
                    <PopupLocation>{log.location}</PopupLocation>
                  </Popup>
                )}
              </Fragment>
            ))}
          </ReactMapGL>
        </MainContainer>
      </AppContainer>
    </>
  );
}
