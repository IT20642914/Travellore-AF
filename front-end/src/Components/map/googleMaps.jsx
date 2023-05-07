import { Loader } from '@googlemaps/js-api-loader';

export const loadGoogleMapsApi = (apiKey: string) => {
  const loader = new Loader({
    apiKey,
    version: 'weekly',
    libraries: ['places'],
  });

  return loader.load();
};
