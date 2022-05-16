import axios from 'axios';

// type DataFecth = (keyword: string, page: number | string) => Promise<{ data: Item[] | null; error: string | null }>;

export const fetchData = async (keyword: string, page: number) => {
  if (!keyword) return { data: null, error: null };

  const { data } = await axios.get<ResponseData<ResponseItem>>(
    `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.NEXT_PUBLIC_API_KEY}&s=${keyword}&page=${page}`
  );

  if (data?.Search !== undefined) {
    const itemList = makeUniqueList(data.Search).map((singleData) => {
      const { imdbID, Title, Year, Poster, Type } = singleData;
      const item: Item = { id: imdbID, title: Title, year: Year, posterURL: Poster, type: Type, isFavorite: false };
      return item;
    });
    return { data: itemList, error: null };
  }
  if (data?.Error !== undefined) {
    return { data: null, error: data.Error };
  }

  throw Error;
};

const makeUniqueList = (itemList: ResponseItem[]) => {
  const idSet = new Set();
  const newList: ResponseItem[] = [];
  itemList.forEach((item) => {
    if (idSet.has(item.imdbID)) return;
    idSet.add(item.imdbID);
    newList.push(item);
  });
  return newList;
};
