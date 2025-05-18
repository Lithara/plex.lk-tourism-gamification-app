// Types for location coordinates
interface Location {
  latitude: number;
  longitude: number;
}

// Convert degrees to radians
const toRadians = (degrees: number): number => {
  return (degrees * Math.PI) / 180;
};

// Calculate distance between two locations using Haversine formula
const calculateDistance = (loc1: Location, loc2: Location): number => {
  const R = 6371; // Earth's radius in kilometers
  const dLat = toRadians(loc2.latitude - loc1.latitude);
  const dLon = toRadians(loc2.longitude - loc1.longitude);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(loc1.latitude)) *
      Math.cos(toRadians(loc2.latitude)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in kilometers

  return distance;
};

// Check if two locations are within 2km
export const isNearby = (loc1: Location, loc2: Location): boolean => {
  try {
    // Validate inputs
    if (
      !loc1 ||
      !loc2 ||
      isNaN(loc1.latitude) ||
      isNaN(loc1.longitude) ||
      isNaN(loc2.latitude) ||
      isNaN(loc2.longitude) ||
      loc1.latitude < -90 ||
      loc1.latitude > 90 ||
      loc2.latitude < -90 ||
      loc2.latitude > 90 ||
      loc1.longitude < -180 ||
      loc1.longitude > 180 ||
      loc2.longitude < -180 ||
      loc2.longitude > 180
    ) {
      return false;
    }

    const distance = calculateDistance(loc1, loc2);
    return distance <= 2;
  } catch (error) {
    console.error("Error calculating distance:", error);
    return false;
  }
};
