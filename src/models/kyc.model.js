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
  const query = `INSERT INTO kyc_details(ase_email, aw_code, awsm_code,
        bank_account_no, address, bank_cheque, bank_name, beneficiary_name,
        ifsc_code, mobile_no, photo_id, photo, status, kyc_type, gender, dob, created_by) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  const values = [
    data.ase_email, data.aw_code, data.awsm_code, data.BankAC, data.Address, data.Cheque, data.BankName, data.BeneficiaryName,
    data.IFSC, data.Number, data.PhotoID, data.Photo, 'SUCCESS', 'FRESH', data.Gender, data.DOB, data.ase_name
  ];

  return new Promise((resolve, reject) => {
    dbCon.query(query, values, (error, result) => {
      if (error) {
        return reject(error);
      }
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

  const updateField = ['rekyc', data.beneficiary_name, data.address, data.photo, data.bank_account_no, data.ifsc_code, data.bank_cheque, data.bank_name, data.photo_id, data.mobile_no, data.gender, data.dob, "SUCCESS", data.kyc_id];


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