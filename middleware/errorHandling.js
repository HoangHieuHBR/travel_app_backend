const errorHandler = (req, res, next, error) => {
    return res.status(500).json({status: false, message: "Some thing went wrong"});
}

module.exports = errorHandler;