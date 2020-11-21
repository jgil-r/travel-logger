import { useState, Fragment } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import styled from 'styled-components';
import { getAllTravelLogs } from '@utils/db-admin';
import { LocationMarker } from '@components/location-marker';
import SEO from '@components/seo';

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

const PopupText = styled.p`
  color: var(--color-popup-text);
  padding: 0;
  margin: 0;
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
`;

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
                    <PopupText>{log.location}</PopupText>
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

export async function getServerSideProps() {
  const { logs } = await getAllTravelLogs();

  return {
    props: {
      logs,
    },
  };
}
