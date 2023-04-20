class ApiFeatures{
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }

    pagination(page, size){
        const skip = size * (page - 1)  //It'll leave 'skip' number of moviess from first 

        this.query = this.query.limit(size).skip(skip);    //After skipping 'skip' number of items from first then it'll show 'resultPerPage' number of items in the current page

        return this;
    }
}

module.exports = ApiFeatures;