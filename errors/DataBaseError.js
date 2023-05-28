class DataBaseError extends Error {
    constructor(message){
        super(message);
        this.message = 'DataBase Failed';
    }
}

module.exports = DataBaseError;