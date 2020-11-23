import axios from "axios";
export default {
    namespaced: true,
    state: {
        token: null,
        user: null,
    },
    mutations: {
        //
    },
    actions: {
        async signin({}, credentials) {
            let response = await axios.post('http://127.0.0.1:8000/api/auth/signin', credentials)
        }
    },
}