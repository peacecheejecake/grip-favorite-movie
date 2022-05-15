// declare module '*.scss' {
//   export const content: { [className: string]: string };
// }

// import React from "react";

type SVGFunctionComponent = React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

interface Item {
  id: string;
  title: string;
  year: string;
  posterURL: string;
  type: string;
  isFavorite: boolean;
}

interface ItemErrorMessage {
  Error: string;
}

interface ResponseData<T> {
  Response: string;
  Search?: T[];
  totalResults?: string;
  Error?: string;
}

interface ResponseItem {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}
