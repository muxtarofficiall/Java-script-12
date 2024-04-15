class Currency {
    constructor() {
        this.url = "https://api.fastforex.io/fetch-all?api_key=YOUR_API_KEY";
    }

    async exchange(amount, firstCurrency, secondCurrency) {
        const response = await fetch(`${this.url}${secondCurrency}`);
        const result = await response.json();
        const exchangedResult = amount * result.data[firstCurrency];

        return exchangedResult;
    }
}