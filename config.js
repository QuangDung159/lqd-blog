let env = process.env.NODE_ENV || 'development';

let config = {
    development: {
        API_URL: 'https://lqd-blog-be-nodejs.onrender.com/api/v1'
    },
    production: {
        API_URL: 'https://lqd-blog-be-nodejs.onrender.com/api/v1'
    },
};

module.exports = config[env];