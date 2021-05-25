interface TelegraphAPI {
  url: string
  token: string
}

class TelegraphAPI {
  constructor() {
    this.url = 'https://api.telegra.ph'
  }

  async getPage(link: URL) {
    let methodUrl = this.makeUrl('/getPage');
    let target = methodUrl.toString() + link.pathname;
    try {
      const response = await fetch(target + '?return_content=true');
      const result = await response.json();
      if (!result.ok) throw new Error(result.error)
      return result;
    } catch (err) {
      console.error(err);
    }
  }

  async getPageList(offset = 0) {
    let methodUrl = this.makeUrl('/getPageList');
    methodUrl.searchParams.append('access_token', this.token);
    methodUrl.searchParams.append('offset', String(offset));
    methodUrl.searchParams.append('limit', '10');
    let target = methodUrl.toString();
    try {
      if (!this.token) throw new Error('no access token');
      const response = await fetch(target);
      const result = await response.json();
      if (!result.ok) throw new Error(result.error);
      return result;
    } catch (err) {
      console.error(err);
    }
  }

  makeUrl(method: string) {
    return new URL(method, this.url);
  }

  set setAccessToken(token: string) {
    this.token = token;
  }
}

const telegraphAPI = new TelegraphAPI();

export default telegraphAPI;