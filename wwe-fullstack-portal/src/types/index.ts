export interface Superstar {
  id: string;
  name: string;
  brand: 'RAW' | 'SmackDown' | 'NXT';
  imageUrl: string;
  isChampion: boolean;
  wins: number;
  losses: number;
}