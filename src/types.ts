export interface Item {
  data: any;
  title: string;
  url: string | null;
}

export interface History {
  items: Item[];
  index: number;
}
