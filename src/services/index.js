import axios from 'axios';

const BASE_URL = "http://api.github.com/users";

export default {

    getData(username, updateData) {
        const USER_URL = `${BASE_URL}/${username}`;
        const REPOSITORIES_URL = `${BASE_URL}/${username}/repos`;

        axios.get(USER_URL).then((response) => {
            const user = response.data;
            axios.get(REPOSITORIES_URL).then((response) => {
                const repositories = response.data;
                updateData(user, repositories);
            });
        }).catch((error) => updateData({}, []))
    }
}