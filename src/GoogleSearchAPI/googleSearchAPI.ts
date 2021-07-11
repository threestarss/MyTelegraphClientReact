import { SearchResult } from "./apiTypes";

interface GoogleSearchAPI {
  query: string;
  serpStart: number;
  url: string;
}

class GoogleSearchAPI {
  constructor() {
    this.query = "";
    this.serpStart = 0;
    this.url = `https://www.googleapis.com/customsearch/v1?key=AIzaSyBit3zVmXZThAxAnPT_j8qBnrQgRN_IrRg&cx=0d7cbe59cd07cfd30&q=${this.query}&start=${this.serpStart}`;
  }

  async search(query: string): Promise<SearchResult> {
    this.query = query;
    this.serpStart = 0;
    this.updateUrl();
    const response = await fetch(this.url);
    const result = await response.json();
    if (!result.items) throw new Error("No results");
    return result;
  }

  async loadMoreResults(): Promise<SearchResult> {
    this.serpStart += 10;
    this.updateUrl();
    const response = await fetch(this.url);
    const result = await response.json();
    if (!result.items) throw new Error("No results");
    return result;
  }

  updateUrl() {
    this.url = `https://www.googleapis.com/customsearch/v1?key=AIzaSyBit3zVmXZThAxAnPT_j8qBnrQgRN_IrRg&cx=0d7cbe59cd07cfd30&q=${this.query}&start=${this.serpStart}`;
  }
}

const googleSearchAPI = new GoogleSearchAPI();

export default googleSearchAPI;
