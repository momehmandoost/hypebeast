import axios from "axios";

export const makeRequest = axios.create({
    baseURL: 'http://localhost:1337/api',
    headers: {
        Authorization: "bearer " + '61b3385b8baf742356c08cf4482f1e232ccc2c3e983efca65feef4501bf3578560d50b3872ebfd14e09ddd573048ff6253e3bc30213bdb9c19211fdc71a87c19808713c37c9877220e8f84c030588c9c96fe9d6aeec94c0c387cbe9008ecfb4b496bf3e8abf9ed0f833713c987975e171d3aa37019968d42a3b27620fe45fe52',
    },
});