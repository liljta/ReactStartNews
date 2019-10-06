
class APIService {
    _baseUrl = "https://newsapi.org/v2/top-headlines?country=";
    _category = "&category=";
    _apiKey = "&apiKey=83022bee3f1341d495b8480a4b7b08bb";

    async Request(country, category) {
        const res = await fetch(`${this._baseUrl}${country}${this._category}${category}${this._apiKey}`);
        if (!res.ok) throw new Error(`Could not get data from ${this._baseUrl}  recived ${res.status}`);
        return await res.json();
    }

    async getNews(country, category) {return await this.Request(country, category);}
}

export default APIService;