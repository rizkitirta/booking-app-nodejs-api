const createError = (errStatus, errMessage) => {
    const error = new Error();
    error.status = errStatus
    error.message = errMessage

    return error;
}

module.exports = {
    createError
}