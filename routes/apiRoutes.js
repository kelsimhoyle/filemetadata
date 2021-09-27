const db = require("../models");
const multer = require('multer');
const upload = multer({ dest: "uploads/" });



module.exports = function (app) {
    app.post("/api/fileanalyse", upload.single("upfile"), (req, res, next) => {
        const file = req.file

        if (!file) {
            const error = new Error('Please upload a file')
            error.httpStatusCode = 400
            return next("hey error")
          };

          const uploadFile = new db.File({
              name: file.originalname,
              type: file.mimetype,
              size: file.size
          });

          uploadFile.save()
            .catch(err =>  next(err))
            .then(file => res.json({
                name: file.name,
                type: file.type,
                size: file.size
            }))
    })
};