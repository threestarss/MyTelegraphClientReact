interface TelegraphAPI {
  url: string;
  token: string;
  returnContentFlag: string;
}

//TODO: needs a refactor

class TelegraphAPI {
  constructor() {
    this.url = "https://api.telegra.ph";
    this.token = "";
    this.returnContentFlag = "?return_content=true";
  }

  async createPage(
    title: string,
    authorName: string,
    authorUrl: string,
    content: any
  ) {
    let methodUrl = this.makeUrlObj("/createPage");
    methodUrl.searchParams.append("access_token", this.token);
    methodUrl.searchParams.append("title", title);
    methodUrl.searchParams.append("author_name", authorName);
    methodUrl.searchParams.append("author_url", authorUrl);
    methodUrl.searchParams.append("content", content);
    methodUrl.searchParams.append("return_content", "true");
    let target = methodUrl.toString();
    try {
      const response = await fetch(target, {
        method: "POST",
      });
      const result = await response.json();
      console.log(result);
      if (!result.ok) throw new Error(result.error);
      return result;
    } catch (err) {
      console.error(err);
    }
  }

  async getPage(link: URL) {
    let methodUrl = this.makeUrlObj("/getPage");
    let target = methodUrl.toString() + link.pathname;
    const response = await fetch(target + this.returnContentFlag);
    const responseToJSON = await response.json();
    if (!responseToJSON.ok) throw new Error(responseToJSON.error);
    return responseToJSON.result;
  }

  async getPageList(offset = 0) {
    let methodUrl = this.makeUrlObj("/getPageList");
    methodUrl.searchParams.append("access_token", this.token);
    methodUrl.searchParams.append("offset", String(offset));
    methodUrl.searchParams.append("limit", "10");
    let target = methodUrl.toString();
    try {
      if (!this.token) throw new Error("no access token");
      const response = await fetch(target);
      const result = await response.json();
      if (!result.ok) throw new Error(result.error);
      return result;
    } catch (err) {
      console.error(err);
    }
  }

  makeUrlObj(method: string) {
    return new URL(method, this.url);
  }

  set setAccessToken(token: string) {
    this.token = token;
  }
}

const telegraphAPI = new TelegraphAPI();

export default telegraphAPI;
