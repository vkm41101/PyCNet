const redis=require('redis');

const client=redis.createClient({
    url: 'redis://127.0.0.1:6379'
});

(async ()=>{await client.connect()})();

const setInRedis = async (key, data) => {
    await client.set(key, data);
};

const getFromRedis = async (key) => {
    return await client.get(key, (err, data) => {
        if (err) {
            throw err;
        } else {
            return data;
        }
    });
};

export {setInRedis, getFromRedis};