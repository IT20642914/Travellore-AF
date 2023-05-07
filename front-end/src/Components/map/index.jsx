import { useEffect, useRef } from 'react';
import { loadGoogleMapsApi } from './googleMaps';

interface MapProps {
  apiKey: string;
  zoom: number;
  center: google.maps.LatLngLiteral;
  center2: google.maps.LatLngLiteral;
}

export const Googlemap = ({ apiKey, zoom, center, center2 }: MapProps) => {
  const mapRef = useRef(null);

  useEffect(() => {
    loadGoogleMapsApi(apiKey).then(() => {
      const map = new google.maps.Map(mapRef.current, {
        zoom,
        center,
      });

      new google.maps.Marker({
        position: center,
        map,
      });
      new google.maps.Marker({
        position: center2,
        map,
      });
    });
  }, [apiKey, zoom, center, center2]);

  return <div ref={mapRef} style={{ borderRadius: '1em', height: '100%', width: '100%' }} />;
};
