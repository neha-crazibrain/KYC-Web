const dbCon = require('../config/db');

const selectFromAWSM = async () => {
  let query = `SELECT * FROM awsm_details`;
  return new Promise((resolve, reject) => {
    dbCon.query(query, (error, result) => {
      if (error) {
        return reject(error)
      }
      return resolve(result);
    });
  })
}

const selectFilterAWSM = async (aw_code) => {
  let query = `SELECT * FROM awsm_details WHERE aw_code = '${aw_code}'`;
  return new Promise((resolve, reject) => {
    dbCon.query(query, (error, result) => {
      if (error) {
        return reject(error)
      }
      return resolve(result);
    });
  })
}

// const selectQueryAW = async () => {
//   let query = `SELECT * FROM hierarchy`;
//   return new Promise((resolve, reject) => {
//     dbCon.query(query, (error, result) => {
//       if (error) {
//         return reject(error)
//       }
//       return resolve(result);
//     });
//   })
// }
const selectQueryAW = async () => {
  let query = `SELECT * FROM aw_details`;
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
  let query = `SELECT * FROM kyc_details`;
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

  // let query = `INSERT INTO kyc_details( 
  //   kyc_type, awsm_id, beneficiary_name, address, salesman_photo, bank_number, ifsc_code, cheque_image, bank_name, photo_id_image, mobile_no, gender, dob) VALUES 
  //   ( '${'FRESH'}', '${data.awsm_id}', '${data.BeneficiaryName}', '${data.Address}', '${data.Photo}', '${data.BankAC}', '${data.IFSC}', '${data.Cheque}' , '${data.BankName}', '${data.PhotoID}', '${data.Number}', '${data.Gender}', '${data.DOB}')`;


  const query = `INSERT INTO kyc_details(ase_email, aw_code, awsm_code,
        bank_account_no, address, bank_cheque, bank_name, beneficiary_name,
        ifsc_code, mobile_no, photo_id, photo, status, kyc_type, gender, dob, created_by) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  const values = [
    data.ase_email, data.aw_code, data.awsm_code, data.BankAC, data.Address, data.Cheque, data.BankName, data.BeneficiaryName,
    data.IFSC, data.Number, data.PhotoID, data.Photo, 'SUCCESS', 'FRESH', data.Gender, data.DOB, data.ase_name
  ];

  return new Promise((resolve, reject) => {
    console.log("**********************db 222 **********************");
    dbCon.query(query, values, (error, result) => {
      if (error) {
        console.log("insert error**********************", error);
        return reject(error);
      }
      console.log("insert done********************");
      return resolve(result);
    });
  });
}



const selectFilterKyc = async () => {
  let query = `SELECT * FROM kyc_details WHERE status = 'REJECTED'`;
  return new Promise((resolve, reject) => {
    dbCon.query(query, (error, result) => {
      if (error) {
        return reject(error)
      }
      return resolve(result);
    });
  })
}

const selecKycByAWSM = async (kyc_id) => {
  let query = `SELECT * FROM kyc_details WHERE kyc_id = '${kyc_id}'`;
  return new Promise((resolve, reject) => {
    dbCon.query(query, (error, result) => {
      if (error) {
        return reject(error)
      }
      return resolve(result);
    });
  })
}

const updateReKycModel = async (data) => {
  const updateQuery = `UPDATE kyc_details SET kyc_type = ?, beneficiary_name = ?, address = ?, photo = ?, bank_account_no = ?,  ifsc_code = ?, bank_cheque = ?, bank_name = ?, photo_id = ?, mobile_no = ?, gender = ?, dob = ?, status = ? WHERE kyc_id = ?`;

  const updateField = ['rekyc', data.BeneficiaryName, data.Address, data.Photo, data.BankAC, data.IFSC, data.Cheque, data.BankName, data.PhotoID, data.Number, data.Gender, data.DOB, "SUCCESS", data.kyc_id];


  return new Promise((resolve, reject) => {
    dbCon.query(updateQuery, updateField, (error, result) => {
      if (error) {
        return reject(error)
      }
      return resolve(result);
    });
  })

}

module.exports = { selectQueryAW, selectFilterAWSM, selectFromAWSM, insertQuery, selectFilterKyc, selectAllKyc, selecKycByAWSM, updateReKycModel }