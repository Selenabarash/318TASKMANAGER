// CREATE MIDDLEWARE 

const logger = (req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next();
};

module.exports = logger;

