const PengajuanSKM = require('../../../models/pengajuanSkm');
const mongoose = require('mongoose');
const User = require("../../../models/user")

module.exports = {
  pengajuan: (req, res) => {
    PengajuanSKM.find({ status: "MENUNGGU VERIFIKASI" }, (err, result) => {
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
  pengajuanId: (req, res) => {
    PengajuanSKM.findOne({ _id: req.params.id }, (err, result) => {
      if (err) {
        res.send({
          message: `Failed to get data`,
          statusCode: 500,
        });
      }
      console.log(result);
      res.send({
        message: `Get Data Pengajuan SKM Success`,
        statusCode: 200,
        results: result,
      });
    });
  },
  pengajuanIdTerima: (req, res) => {
    PengajuanSKM.findByIdAndUpdate(
      req.params.id,
      { status: "SELESAI", adminId: req.idUser },
      (err, result) => {
        if (err) {
          res.send({
            message: `Failed to get data`,
            statusCode: 500,
          });
        }
        console.log(result);
        res.send({
          message: `pengajuan terima success`,
          statusCode: 200,
        });
      }
    );
  },
  pengajuanIdTolak: (req, res) => {
    PengajuanSKM.findByIdAndUpdate( req.params.id,{ status: 'DITOLAK', adminId: req.idUser }, (err, result) => {
      if (err) {
        res.send({
          message: `Failed to get data`,
          statusCode: 500,
        });
      }
      console.log(result);
      res.send({
        message: `pengajuan ditolak success`,
        statusCode: 200,
      });
    });
  },
  riwayat: async (req, res) => {
    let getData = await User.aggregate([
      {
        $match: {
          _id: mongoose.Types.ObjectId(req.idUser),
        },
      },
      {
        $lookup: {
          from: "pengajuan_skms",
          localField: "_id",
          foreignField: "adminId",
          as: "riwayat_skm",
        },
      },
    ]).exec();

    if(!getData){
       res.send({
            message: `Failed to get data`,
            statusCode: 500,
          });
    }else{
      res.send({
          message: `Get Data Pengajuan SKM Success`,
          statusCode: 200,
          results: getData,
        });
        console.log(req.idUser);
        console.log(getData);
    }
   
  },
  riwayatId: (req, res) => {
    PengajuanSKM.findById( req.params.id , (err, result) => {
      if (err) {
        res.send({
          message: `Failed to get data`,
          statusCode: 500,
        });
      }
      res.send({
        message: `Get Data Riwayat Success`,
        statusCode: 200,
        results: result,
      });
    });
  },
};