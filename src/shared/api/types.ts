export interface IDate {
  dateId: string;
  date: number;
  status: 'passive' | 'active';
  events?: IEvent[];
}

export interface IData {
  data: IEvent[];
}

export interface IEvent {
  id: number;
  dateStart: string;
  title: string;
  description: string;
  location: string;
  dateEnd: string;
  createdAt: string;
  updatedAt: string;
  photos: IPhoto[];
  participants: IParticipant[];
  owner: IParticipant;
}

export interface IPhoto {
  id: number;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: IFormats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: string;
  updatedAt: string;
}

export interface IParticipant {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface IFormats {
  large: IFormat;
  medium: IFormat;
  small: IFormat;
  thumbnail: IFormat;
}

export interface IFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
}

export interface IMeta {
  pagination: IPagination;
}

export interface IPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
