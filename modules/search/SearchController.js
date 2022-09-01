const { responseApi } = require("../../helpers/responseApi");
const CalculateDistanceUseCase = require("./useCase/CalculateDistanceUseCase");

class SearchController {
    constructor() {
        this.calculateDistanceUseCase = new CalculateDistanceUseCase()
    }

    async getDistance(req, res, next) {
        responseApi(await this.calculateDistanceUseCase.execute(req), res)
    }
}

module.exports = SearchController