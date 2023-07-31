const multer = require('multer');
const path = require('path');

// // for single file upload
// const storage = multer.diskStorage({
//     destination: function (req, res, cd) {
//         cd(null, './uploads/');
//     },
//     filename: function (req, file, cd) {
//         cd(null, file.originalname);
//     }
// })

// const fileFilter = (req, file, cb) => {
//     if (file.mimetype.startsWith('image/')) {
//         cb(null, true);
//     } else {
//         console.log("Received a non-image file. Rejected.");
//         cb(null, false)
//     }
// };

// let upload = multer({
//     storage: storage,
//     fileFilter: fileFilter,
//     limits: {
//         fileSize: 1024 * 1024 * 5
//     },
// });

// module.exports = upload.any('Photo');



//******************************multiples files upload****************************.



const maxFileSizes = {
    image: 12 * 1024 * 1024
};

const storage = multer.diskStorage({
    destination: function (req, res, cd) {
        cd(null, './uploads/');
    },
    filename: function (req, file, cd) {
        const timestamp = Date.now();
        const extension = path.extname(file.originalname);
        const newFilename = `${timestamp}${extension}`;
        cd(null, newFilename);
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    } else {
        cb(null, false)
    }
};

let upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 12 * 1024 * 1024,
    },
});

module.exports = upload.fields([
    { name: 'Photo', maxCount: 1 },
    { name: 'Cheque', maxCount: 1 },
    { name: 'PhotoID', maxCount: 1 }
]);


//************************************************* */
// const maxFileSizes = {
//     image: 12 * 1024 * 1024,
//     // video: 10 * 1024 * 1024
// };

// const storage = multer.diskStorage({
//     destination: function (req, res, cd) {
//         cd(null, './uploads/');
//     },
//     filename: function (req, file, cd) {
//         const timestamp = Date.now();
//         const extension = path.extname(file.originalname);
//         const newFilename = `${timestamp}${extension}`;
//         cd(null, `${Date.now()}${path.extname(file.originalname)}`);
//     }
// })

// const fileFilter = (req, file, cb) => {
//     const fileSize = maxFileSizes[file.mimetype.startsWith('image/')];
//     if (file.size <= fileSize) {
//         cb(null, true);
//     } else {
//         // console.log(`File size exceeds the allowed limit (${12} MB).`);
//         cb(null, false);
//     }


//     if (file.mimetype.startsWith('image/')) {
//         cb(null, true);
//     } else {
//         cb(null, false)
//     }
// };

// let upload = multer({
//     storage: storage,
//     fileFilter: fileFilter
// });

// module.exports = upload.fields([
//     { name: 'Photo', maxCount: 5 },
//     { name: 'Cheque', maxCount: 5 },
//     { name: 'PhotoID', maxCount: 5 }
// ]);