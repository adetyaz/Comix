import axios from "axios";

const apiClient = axios.create({
    // baseUrl: "https://gateway.marvel.com:443/v1/public/",
    // apikey: "a0a05db7ecdde5910e672b1d253e6e4a",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

export default {
    baseUrl: "https://gateway.marvel.com/",
    publicKey: "a0a05db7ecdde5910e672b1d253e6e4a",
    privateKey: "91fda0d88939bafcfa0155a8f826e2b5d5afff47",
    getCharacters() {
        return apiClient.get(
            `${this.baseUrl}characters?${this.publicKey}${this.privateKey}`
        );
    },
};