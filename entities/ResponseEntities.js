class ResponseEntities {
    success = false;
    message = null;
    data = null;
    summary = null;

    statusCode = 400;

    startTime = 0;

    constructor() {
        this.startTime = new Date().getTime();
    }

    toResponse() {
        this.statusCode = this.success ? 200 : (this.statusCode);

        return {
            statusCode: this.statusCode,
            success: this.success,
            message: this.message,
            summary: this.summary,
            data: this.data,
            responseTime: this.startTime ?
                new Date().getTime() - this.startTime + " ms." :
                "unknown",
        };
    }
}

module.exports = ResponseEntities