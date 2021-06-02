import {ON_GET_RESOURCES} from './constants';

export function getResourcesAction() {
  return {
    type: ON_GET_RESOURCES,
    payload: {
      request: {
        url: `/unknown?per_page=10000`,
      },
    },
  };
}
