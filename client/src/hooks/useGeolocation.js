import { useEffect, useRef } from 'react';
import { useAvayaStore } from '../store/useAvayaStore';

const FALLBACK = { lat: 22.5535, lng: 88.3523 }; // Park Street, Kolkata

export function useGeolocation() {
  const setUserLocation = useAvayaStore((s) => s.setUserLocation);
  const setLocationReady = useAvayaStore((s) => s.setLocationReady);
  const setError = useAvayaStore((s) => s.setError);
  const locationMode = useAvayaStore((s) => s.locationMode);
  const watchIdRef = useRef(null);

  useEffect(() => {
    // If manual mode, stop watching GPS and do nothing
    if (locationMode === 'manual') {
      if (watchIdRef.current !== null) {
        navigator.geolocation.clearWatch(watchIdRef.current);
        watchIdRef.current = null;
      }
      return;
    }

    // Live mode
    if (!navigator.geolocation) {
      setUserLocation(FALLBACK);
      setLocationReady(true);
      setError('Geolocation not supported — showing Park Street, Kolkata.');
      return;
    }

    const onSuccess = (pos) => {
      const { latitude: lat, longitude: lng } = pos.coords;
      setUserLocation({ lat, lng });
      setLocationReady(true);
    };

    const onError = () => {
      setUserLocation(FALLBACK);
      setLocationReady(true);
      setError('Location access denied — showing Park Street, Kolkata.');
    };

    watchIdRef.current = navigator.geolocation.watchPosition(onSuccess, onError, {
      enableHighAccuracy: true,
      timeout: 10_000,
      maximumAge: 5_000,
    });

    return () => {
      if (watchIdRef.current !== null) {
        navigator.geolocation.clearWatch(watchIdRef.current);
        watchIdRef.current = null;
      }
    };
  }, [setUserLocation, setLocationReady, setError, locationMode]);
}
