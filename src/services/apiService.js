import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://gateway.marvel.com/v1/public",
    headers: {
        // "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        // "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
    },
    // withCredentials: true,
    // credentials: "same-origin",
});

export default {
    publicKey: "a0a05db7ecdde5910e672b1d253e6e4a",
    privateKey: "91fda0d88939bafcfa0155a8f826e2b5d5afff47",
    // hash: "4256dd4b67bd2423fe5bd8246d4e245a",
    getCharacters() {
        return apiClient.get(
            `/characters?ts=1&apikey=${this.publicKey}&hash=4256dd4b67bd2423fe5bd8246d4e245a`
        );
    },
};