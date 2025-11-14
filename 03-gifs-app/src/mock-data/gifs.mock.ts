export interface Gif {
  id: string;
  title: string;
  url: string;
  width: number;
  height: number;
}

export const mockGifs: Gif[] = [
  {
    id: '1',
    title: "Superman's Cake",
    url: '',
    width: 300,
    height: 300,
  },
  {
    id: '2',
    title: "Funny Cat",
    url: '',
    width: 400,
    height: 250,
  },
  {
    id: '3',
    title: "Happy BDay!",
    url: '',
    width: 280,
    height: 350,
  },
  {
    id: '4',
    title: "Thumbs Up",
    url: '',
    width: 300,
    height: 200,
  },
  {
    id: '5',
    title: "Elmo is the best",
    url: '',
    width: 300,
    height: 400,
  },
  {
    id: '6',
    title: "Messi is the best",
    url: '',
    width: 350,
    height: 280,
  },
]