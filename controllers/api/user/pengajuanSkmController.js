const RandomString = require("../../../module/randomString")
const Path = require("path");
const PengajuanSKM = require('../../../models/pengajuanSkm');

module.exports = {
  form: (req, res) => {
    const scanKartuKeluarga = req.files.scanKartuKeluarga;
    const scanSuratPendukung = req.files.scanSuratPendukung;
    let newNameKK =
      RandomString(25) + scanKartuKeluarga.mimetype.replace("image/", ".");
    let newNameSuratPendukung =
      RandomString(25) + scanSuratPendukung.mimetype.replace("image/", ".");
    let dirName = Path.join(__dirname, "../../../public");
    scanKartuKeluarga.mv(
      dirName + "/images/skm/" + newNameKK,
      function (err, result) {
        if (err) console.log(err);
        if (result) console.log("success");
      }
    );
    scanSuratPendukung.mv(
      dirName + "/images/skm/" + newNameSuratPendukung,
      function (err, result) {
        if (err) console.log(err);
        if (result) console.log("success");
      }
    );

    const pengajuanSKM = PengajuanSKM({
      nikPemohon: req.body.nikPemohon,
      nikKepalaKeluarga: req.body.nikKepalaKeluarga,
      scanKartuKeluarga: newNameKK,
      keperluan: req.body.keperluanSkm,
      noHp: req.body.noHp,
      scanSuratPendukung: newNameSuratPendukung,
      userId: req.idUser,
    });
    pengajuanSKM.save((err, result) => {
      if (err) {
        res.send({
          message: `Failed to get data`,
          statusCode: 500,
        });
      }
      res.send({
        message: `Pengajuan SKM Success`,
        statusCode: 200,
      });
    });
  },
  menungguVerifikasi: async (req, res) => {

    PengajuanSKM.find(
      { userId: req.idUser, status: "MENUNGGU VERIFIKASI" },
      (err, result) => {
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
      }
    );
  },
  skmSelesai: (req, res) => {
    PengajuanSKM.find({ userId: req.idUser, status : "SELESAI" }, (err, result) => {
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