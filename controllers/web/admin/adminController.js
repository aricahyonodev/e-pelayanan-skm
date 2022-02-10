module.exports = {
  pengajuan: (req, res) => {
    res.render("admin/pengajuan");
  },
  riwayat: (req, res) => {
    res.render("admin/riwayat");
  },
  pengajuanDetail: (req, res) => {
    res.render("admin/pengajuanDetail");
  },
};
