const express = require('express');
const rekycRoute = require('./rekyc/rekyc.route');
const authenticationRoutes = require('./authentication/authentication.route');
const awsmDetailsRoutes = require("./awsm-details/awsm-details.route");
const editkycDetailsRoutes = require("./editkyc-details/editkyc-details.route");
const editkycRoutes = require("./editkyc/editkyc.route");
const kycRoutes = require("./kyc/kyc.route");
const replaceKycDetailRoutes = require('./replacekyc-details/replacekyc-details.route');
const replaceKycRoutes = require("./replacekyc/replacekyc.route");
const reportRoutes = require("./report/report.route");
const accountRoutes = require("./account/account.route");
const rekycOpenRoutes = require("./rekyc-open/rekyc-open.route");
const apiRoutes = require("./api/api.route");



const router = express.Router();

const routes = [
    {
        path: '/account',
        route: accountRoutes
    },
    {
        path: '/rekyc',
        route: rekycRoute
    },
    {
        path: '/authentication',
        route: authenticationRoutes
    },
    {
        path: '/awsm-details',
        route: awsmDetailsRoutes
    },
    {
        path: '/editkyc-details',
        route: editkycDetailsRoutes
    },
    {
        path: '/editkyc',
        route: editkycRoutes
    },
    {
        path: '/kyc',
        route: kycRoutes
    },
    {
        path: '/replacekyc-details',
        route: replaceKycDetailRoutes
    },
    {
        path: '/replacekyc',
        route: replaceKycRoutes
    },
    {
        path: '/report',
        route: reportRoutes
    },
    {
        path: '/rekyc-open',
        route: rekycOpenRoutes
    },
    {
        path: '/api',
        route: apiRoutes
    }
];
routes.forEach((route) => {
    router.use(route.path, route.route);
});
module.exports = router;