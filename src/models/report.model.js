let data = [
  {
    status: "Approved"
  },
  {
    status: "Authenticated"
  },
  {
    status: "Rejected"
  },
  {
    status: "Success"
  },
  {
    status: "Pending"
  }
]
const reportData = async (value) => {
  let = filterResult = [];
  console.log(value, "**********value***********");
  if (!value || !value) {
    return data;
  }
  else {
    let = filterResult = [];
    for (let val of data) {
      if (val.status == value.status) {
        filterResult.push(val);
      }
    }
    data = filterResult;
  }
  return data;
}

module.exports = { reportData }