export interface SearchResultItemImage {
  src: string;
  width?: string;
  height?: string;
}
export interface SearchResultItem {
  title: string;
  htmlTitle: string;
  link: string;
  displayLink: string;
  snippet: string;
  htmlSnippet: string;
  formattedUrl: string;
  htmlFormattedUrl: string;
  pagemap: {
    cse_thumbnail?: SearchResultItemImage[];
    cse_image?: SearchResultItemImage[];
  };
}
export interface SearchResult {
  searchInformation: {
    searchTime: number;
    formattedSearchTime: string;
    totalResults: number;
    formattedTotalResults: string;
  };
  items: SearchResultItem[];
}
