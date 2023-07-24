const { reportData } = require("../../models/report.model");
const reportView = async (req, res, next) => {
  let a = reportData();
  res.render('report')
}

module.exports = {
  reportView
}