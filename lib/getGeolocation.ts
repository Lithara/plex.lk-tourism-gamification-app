// utils/getGeolocation.ts
export interface Geolocation {
  latitude: number;
  longitude: number;
}

export interface GeolocationError {
  code: number;
  message: string;
}

export const getCurrentGeolocation = (): Promise<Geolocation> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject({
        code: 0,
        message: 'Geolocation is not supported by this browser.',
      });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        reject({
          code: error.code,
          message: error.message,
        });
      },
      {
        enableHighAccuracy: true,
        timeout: 10000, // 10 seconds
        maximumAge: 0, // No cached position
      }
    );
  });
};