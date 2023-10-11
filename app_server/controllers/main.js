const index = (req, res) => {
  res.render("index", { title: "alo guys test" });
};
module.exports = { index };
