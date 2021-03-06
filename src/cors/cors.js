const whitelist = ['https://my-react-app.harrisonhuaruichen.now.sh', 'http://localhost:3000'];

const corsOptions = {
      origin: function (origin, callback) {
        if(!origin) return callback(null, true)
        if (whitelist.indexOf(origin) !== -1) {
          callback(null, true)
        } else {
          callback(new Error('Not allowed by CORS'))
        }
    }
}

module.exports = corsOptions;
