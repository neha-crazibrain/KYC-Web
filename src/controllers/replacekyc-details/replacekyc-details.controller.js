const replacekycDetailsView = async (req, res, next) => {
  res.render('replacekyc-details')
}

const replacekycUpdate = async (req, res) => {
  res.redirect('/replacekyc')
}

module.exports = {
  replacekycDetailsView,
  replacekycUpdate
}