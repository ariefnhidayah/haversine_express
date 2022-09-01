const ResponseEntities = require('../entities/ResponseEntities')

const responseApi = (entity, res) => {
    if (entity instanceof ResponseEntities) {
        const response = entity.toResponse();

        res.status(response.statusCode).send({
            success: response.success,
            message: response.message,
            data: response.data,
            responseTime: response.responseTime,
        });
        return;
    }
    res.status(500)
}

module.exports = {
    responseApi
}