module.exports = {
  form: (req, res) => {
    res.render("user/pengajuanSKM/pengajuanForm");
  },
  menungguVerifikasi: (req, res) => {
    res.render("user/pengajuanSkm/pengajuanMenungguVerifikasi");
  },
  selesai: (req, res) => {
    res.render("user/pengajuanSkm/pengajuanSelesai");
  },
};
