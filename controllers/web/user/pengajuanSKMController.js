module.exports = {
  form: (req, res) => {
    console.log(req.session.token);
    res.render("user/pengajuanSKM/pengajuanForm");
  },
  menungguVerifikasi: (req, res) => {
    console.log(req.session.token);
    res.render("user/pengajuanSkm/pengajuanMenungguVerifikasi");
  },
  selesai: (req, res) => {
    console.log(req.session.token);
    res.render("user/pengajuanSkm/pengajuanSelesai");
  },
};
