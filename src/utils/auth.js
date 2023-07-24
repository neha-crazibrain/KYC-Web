const auth = async (req, res, next) => {
    let token = req.cookies.token;

    if (!token) {
        console.log({ message: ' Token has expired!' });
        return res.redirect('/account');
    }

    next();
}

module.exports = { auth }