export interface IDate {
  dateId: string;
  date: number;
  status: 'passive' | 'active';
  events?: any[];
}
