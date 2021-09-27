/*
 Created by jawad on 09/26/2021.
*/
/*
|All Routes Must Start With Forward Slash
*/
const profiling = require('../../App/Controllers/profiling');
const apiBase = "/profile/image";

const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/')
    },
    filename: (req, file, cb) => {
        cb(null, `${+Date.now()}.jpg`)
    }
});

const upload = multer({ storage });

Route.post(apiBase, upload.single('image'), (req, res, next) => {
    profiling.add(req, res)
});
Route.post(apiBase, upload.single(), profiling.add);
Route.get(apiBase + '/:id', profiling.getById);
Route.put(apiBase + '/:id', upload.single('image'), (req, res, next) => {
    profiling.update(req, res)
});
Route.get(apiBase, profiling.getList);
Route.delete(apiBase + '/:id', profiling.remove);

module.exports = Route;

