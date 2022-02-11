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
  riwayat: (req, res) => {
    PengajuanSKM.find({ status: "SELESAI" }, (err, result) => {
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