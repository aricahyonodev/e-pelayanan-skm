const Mongoose = require("mongoose");

var Schema = new Mongoose.Schema({
  nikPemohon: { type: String },
  nikKepalaKeluarga: { type: String },
  scanKartuKeluarga: { type: String },
  keperluan: { type: String },
  noHp: { type: String },
  scanSuratPendukung: { type: String },
  status: { type: String, default: "MENUNGGU VERIFIKASI" },
  scanSkm: { type: String, default: "" },
  userId: { type: String, default: "" },
  adminId: { type: String, default: "" },
});

const User = Mongoose.model("pengajuan_skm", Schema);

module.exports = User;
