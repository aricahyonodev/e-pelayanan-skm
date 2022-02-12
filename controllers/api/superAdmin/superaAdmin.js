const User = require("../../../models/user")

module.exports = {
  listUser: (req, res) => {
    User.find({ level: "user" }, (err, result) => {
      if (err) {
        res.send({
          message: `Failed to get data`,
          statusCode: 500,
        });
      }
      res.send({
        message: `Get Data Pengajuan SKM Success`,
        statusCode: 200,
        results: result,
      });
    });
  },
  listAdmin: (req, res) => {
    User.find({ level: "admin" }, (err, result) => {
      if (err) {
        res.send({
          message: `Failed to get data`,
          statusCode: 500,
        });
      }
      res.send({
        message: `Get Data Pengajuan SKM Success`,
        statusCode: 200,
        results: result,
      });
    });
  },
  deleteAdminById: (req, res) => {
     User.findOneAndDelete(
       { _id: req.params.id, level: "admin" },
       (err, result) => {
         if (err) {
           res.send({
             message: `Failed to get data`,
             statusCode: 500,
           });
         }
         res.send({
           message: `Delete User Success`,
           statusCode: 200,
           results: result,
         });
       }
     );
  },
  deleteUserById: (req, res) => {
    User.findOneAndDelete({_id : req.params.id, level : "user"}, (err, result) => {
      if (err) {
        res.send({
          message: `Failed to get data`,
          statusCode: 500,
        });
      }
      res.send({
        message: `Delete User Success`,
        statusCode: 200,
        results: result,
      });
    });
  },
  updateAdminById: (req, res) => {
     User.findByIdAndUpdate(
       req.params.id,
       {
         status: req.body.status,
         level: req.body.level,
       },
       (err, result) => {
         if (err) {
           res.send({
             message: `Failed to get data`,
             statusCode: 500,
           });
         }
         res.send({
           message: `Update User Success`,
           statusCode: 200,
           results: result,
         });
       }
     );
  },
  updateUserById: (req, res) => {
    User.findByIdAndUpdate(
      req.params.id,
      {
        status: req.body.status,
        level: req.body.level,
      },
      (err, result) => {
        if (err) {
          res.send({
            message: `Failed to get data`,
            statusCode: 500,
          });
        }
        res.send({
          message: `Update User Success`,
          statusCode: 200,
        });
      }
    );
  },
};