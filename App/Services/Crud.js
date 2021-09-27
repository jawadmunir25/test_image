/*
 Created by jawad on 09/26/2021.
*/
class Crud {

    /** Add data
    * @description Add data to given collection 
    * @param  {object} model - schema reference
    * @param  {object} data - data to be added
    * @returns {object} Query result
    */
    static async add(model, data) {
        const obj = new model(data);
        return obj.save();
    }

    /**
     * @description Get one record based on given condition
     * @param  {object} model - schema information
     * @param  {object} cond - query filter 
     * @param  {object} proj ={} - projection to be used in query
     * @param  {object} sort ={} - sort to be used in query
     * * @param  {number} limit - number of records to limit in query
     * @param  {number} skip - number of records to skip
     * @return {object} - required document
     */
    static async getList(model, filter, projection = {}, sort = {}, limit = 0, skip = 0) {
        return await model.find(filter, projection).sort(sort).limit(limit).skip(skip).lean().exec();
    }

    /**
     * @description Get one record based on given condition
     * @param  {object} model - schema information
     * @param  {object} cond - query filter 
     * @param  {object} proj={} - projection to be used in query
     * @return {object} - required docuemt
     */
    static async getOne(model, cond, proj = {}) {
        return await model.findOne(cond, proj).lean();
    }

    /** Update a record 
     * @description Update a record in specified collection based on given condition 
     * @param  {object} model - schema reference
     * @param  {object} cond - information of record to be updated
     * @param  {object} data - data to be updated
     * @returns {object} - returns the document with updated fields
     */
    static async updateOne(model, cond, data) {
        return await model.updateOne(cond, { $set: data }).exec();
    }
}

module.exports = Crud;
