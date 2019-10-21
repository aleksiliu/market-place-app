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
};
type StatusLoaded<T> = {
  status: 'success';
  data: T;
};
type StatusError = {
  status: 'error';
  error: Error;
};

export type Status<T> = StatusLoading | StatusLoaded<T> | StatusError;
