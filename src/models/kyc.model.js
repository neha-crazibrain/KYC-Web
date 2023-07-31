const dbCon = require('../config/db');


const selectFromEmployee = async () => {
  let query = `SELECT * FROM employee`;
  return new Promise((resolve, reject) => {
    dbCon.query(query, (error, result) => {
      if (error) {
        return reject(error)
      }
      return resolve(result);
    });
  })
}

const selectQueryAW = async () => {
  let query = `SELECT * FROM hierarchy`;
  return new Promise((resolve, reject) => {
    dbCon.query(query, (error, result) => {
      if (error) {
        return reject(error)
      }
      return resolve(result);
    });
  })
}



const selectAllKyc = async () => {
  let query = `SELECT * FROM kyc`;
  return new Promise((resolve, reject) => {
    dbCon.query(query, (error, result) => {
      if (error) {
        return reject(error)
      }
      return resolve(result);
    });
  })
}


const insertQuery = async (data) => {

  // let query = `INSERT INTO kyc( 
  //   kyc_type, ase_email_id, ase_name, saleaman_id, salesman_name, aw_id, aw_name, beneficiary_name, state_name, city_name, address, salesman_photo, bank_number, ifsc_code, cheque_image, bank_name, photo_id_image, mobile_no, gender, dob, kyc_method, validatiion_calling_attempt, validation_calling_status, validation_calling_remark, channel_type, kyc_status, kyc_rejection_reason, remark) VALUES 
  //   ( '${'FRESH'}', '${data.ase_email_id}', '${data.ase_name}', '${data.saleaman_id}', '${data.salesman_name}', '${data.aw_id}' , '${data.aw_name}', '${data.BeneficiaryName}')`;

  let query = `INSERT INTO kyc( 
    kyc_type, beneficiary_name, address, bank_number, ifsc_code, cheque_image, bank_name, photo_id_image, mobile_no, gender, dob) VALUES 
    ( '${'FRESH'}', '${data.BeneficiaryName}', '${data.Address}', '${data.BankAC}', '${data.IFSC}', '${data.Cheque}' , '${data.BankName}', '${data.PhotoID}', '${data.Number}', '${data.Gender}', '${data.DOB}')`;


  return new Promise((resolve, reject) => {
    dbCon.query(query, (error, employees) => {
      if (error) {
        return reject(error);
      }
      return resolve(employees);
    });
  });
}



const selectFilterKyc = async () => {
  let query = `SELECT * FROM kyc WHERE kyc_status = 'reject'`;
  return new Promise((resolve, reject) => {
    dbCon.query(query, (error, result) => {
      if (error) {
        return reject(error)
      }
      return resolve(result);
    });
  })
}

const selecKycByAWSM = async (awsm_id) => {
  let query = `SELECT * FROM kyc WHERE id = '${awsm_id}'`;
  return new Promise((resolve, reject) => {
    dbCon.query(query, (error, result) => {
      if (error) {
        return reject(error)
      }
      return resolve(result);
    });
  })
}

module.exports = { selectQueryAW, selectFromEmployee, insertQuery, selectFilterKyc, selectAllKyc, selecKycByAWSM }