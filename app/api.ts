import {API} from 'aws-amplify';
import {Announcement} from './types';

export const getAnnouncements = () => {
  return API.get('announcements', '/getAnnouncements', {}) as Promise<
    Announcement[]
  >;
};

export const postAnnouncement = (values: Announcement) => {
  const myInit = {
    body: values,
  };
  return API.post('announcements', '/createAnnouncement', myInit);
};
