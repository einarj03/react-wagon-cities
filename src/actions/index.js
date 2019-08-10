// TODO: add and export your own actions
import cities from '../data/cities';

export function setCities() {
  // TODO use api call to get cities, for now simulating DB

  return {
    type: 'SET_CITIES',
    payload: cities
  };
}

export function setActiveCity(city) {
  return {
    type: 'SET_ACTIVE_CITY',
    payload: city
  };
}
