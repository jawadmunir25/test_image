/*
 Created by jawad on 09/26/2021.
*/
const _ = require("lodash"),
    fs = require("fs"),
    services = require("../Services/Crud.js"),
    profiling = require("../Models/profiling"),
    Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);


const add = async (req, res) => {
    try {
        let obj = {};
        if (!_.isNil(req.body.name))
            obj.name = req.body.name;

        if (!_.isUndefined(req.file.path)) {
            obj.image = "data:image/gif;base64," + fs.readFileSync(req.file.path, 'base64');
            obj.imagePath = req.file.path;
        }
        if (_.isEmpty(obj))
            return res.send({ message: `Missing Attributes`, success: false });
        const result = await services.add(profiling, obj);
        if (_.isNull(result))
            return res.status(400).send({ message: `Unable to add`, success: false });
        return res.send({ message: 'Successfully added', success: true });

    } catch (error) {
        console.error(`ERROR => profiling Controller => add =>\n${error}`);
        return res.status(500).send({ success: false, message: 'Please try later', err: error });
    }
}
const getById = async (req, res) => {
    try {
        const result = await services.getOne(profiling, { _id: req.params.id, isDeleted: false }, { isDeleted: 0 });
        if (_.isNull(result))
            return res.status(204).send({ message: `Unable to get`, success: false });
        return res.send({ message: 'Successfully fetched', success: true, data: result });

    } catch (error) {
        console.error(`ERROR => profiling Controller => getById =>\n${error}`);
        return res.status(500).send({ success: false, message: 'Please try later', err: error });
    }
}

const getList = async (req, res) => {
    try {
        const result = await services.getList(profiling, { isDeleted: false }, { isDeleted: 0 });
        if (_.isEmpty(result))
            return res.send({ message: `Unable to get list`, success: false });
        return res.send({ message: 'Successfully fetched', success: true, data: result });

    } catch (error) {
        console.error(`ERROR => profiling Controller => getList =>\n${error}`);
        return res.status(500).send({ success: false, message: 'Please try later', err: error });
    }

}

const update = async (req, res) => {
    try {
        let obj = {};
        if (!_.isNil(req.body.name))
            obj.name = req.body.name;

        if (!_.isUndefined(req.file.path)) {
            obj.image = "data:image/gif;base64," + fs.readFileSync(req.file.path, 'base64');
            obj.imagePath = req.file.path;
        }
        if (_.isEmpty(obj))
            return res.send({ message: `Missing Attributes`, success: false });
        const result = await services.updateOne(profiling, { _id: value.id }, obj);
        if (result.nModified !== 1)
            return res.send({ code: 304, message: `Unable to update`, success: false });
        return res.send({ message: 'Successfully updated', success: true });

    } catch (error) {
        console.error(`ERROR => profiling Controller => update =>\n${error}`);
        return res.status(500).send({ success: false, message: 'Please try later', err: error });
    }
}

const remove = async (req, res) => {
    try {
        const result = await services.updateOne(profiling, { _id: req.params.id }, { isDeleted: true });
        if (result.nModified !== 1)
            return res.status(204).send({ message: `Unable to delete`, success: false });
        return res.send({ message: 'Successfully deleted', success: true });

    } catch (error) {
        console.error(`ERROR => profiling Controller => remove =>\n${error}`);
        return res.status(500).send({ success: false, message: 'Please try later', err: error });
    }
}

module.exports = {
    add,
    getById,
    getList,
    update,
    remove


}