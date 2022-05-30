const response = require('../settings/response')

exports.index = (req, res) => {
    response.status('Hello rest api nodejs', res)
}