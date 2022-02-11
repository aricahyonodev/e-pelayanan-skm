const RandomString = require("../../../module/randomString")
const Path = require("path");
const PengajuanSKM = require('../../../models/pengajuanSkm');

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
    PengajuanSKM.findByIdAndUpdate( req.params.id,{ status: 'SELESAI' }, (err, result) => {
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
    });
  },
  pengajuanIdTolak: (req, res) => {
    PengajuanSKM.findByIdAndUpdate( req.params.id,{ status: 'DITOLAK' }, (err, result) => {
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
  riwayat: (req, res) => {
    PengajuanSKM.find({ status: {$ne : "MENUNGGU VERIFIKASI"} }, (err, result) => {
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
  riwayatId: (req, res) => {
    PengajuanSKM.find({ _id: req.params }, (err, result) => {
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
};