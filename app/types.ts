export type Announcement = {
  headline: string;
  description: string;
  price: number;
  announcementId?: string;
  createdAt?: number;
  storeName?: string;
};

type StatusLoading = {
  status: 'loading';
  data: [];
};

type StatusLoaded<T> = {
  status: 'success';
  data: T;
};
type StatusError = {
  status: 'error';
  data: [];
  error: Error;
};

export type Status<T> = StatusLoading | StatusLoaded<T> | StatusError;
