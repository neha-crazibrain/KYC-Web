
const replacekycDetailsView = async (req, res, next) => {
  res.render('replacekyc-details')
}

const replacekycUpdate = async (req, res) => {
  res.send({status: true})
}

module.exports = {
  replacekycDetailsView,
  replacekycUpdate
}