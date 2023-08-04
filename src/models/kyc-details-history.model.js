const dbCon = require('../config/db');


const insertKycDetailsHistory = async (data) => {

  //const insertQuery = `INSERT INTO kyc_details_history kyc_id = ?, awsm_history_id = ?, ase_email = ?, aw_code = ?, awsm_code = ?, approved_by = ?, approved_comment = ?, approved_on = ?, gender =? , dob = ?, bank_account_no = ?, address = ?, bank_cheque = ?, bank_name = ?, beneficiary_name = ?, ifsc_code = ?, mobile_no = ?,  photo_id = ?, photo = ?, status = ?, kyc-type = ?, reason = ? `;


  let insertQuery = `INSERT INTO kyc_details_history (kyc_id, ase_email, aw_code, awsm_code, gender, dob, bank_account_no, address, bank_cheque, bank_name, created_by, beneficiary_name, ifsc_code, mobile_no,  photo_id, photo, status, kyc_type) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;


  const insertField = [data.kyc_id, data.ase_email, data.aw_code, data.awsm_code, data.gender, data.dob, data.bank_account_no, data.address, data.bank_cheque, data.bank_name, data.beneficiary_name, data.beneficiary_name, data.ifsc_code, data.mobile_no, data.photo_id, data.photo, data.status, data.kyc_type];


  return new Promise((resolve, reject) => {
    dbCon.query(insertQuery, insertField, (error, result) => {
      if (error) {
        return reject(error)
      }
      return resolve(result);
    });
  })
}

module.exports = { insertKycDetailsHistory }