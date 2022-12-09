let env = process.env.NODE_ENV || 'development';

let config = {
    development: {
        API_URL: 'http://localhost:5001/api/v1'
    },
    production: {
        API_URL: 'https://dunglu-back.herokuapp.com/api/client'
    },
};

module.exports = config[env];