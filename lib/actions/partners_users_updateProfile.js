/**
 * Auto-generated action file for "Google Partners" API.
 *
 * Generated at: 2019-05-07T14:41:49.916Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / googleapis-com-partners-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'partners.users.updateProfile'
 * Endpoint Path: '/v2/users/profile'
 * Method: 'patch'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "requestMetadata.experimentIds",
    "requestMetadata.locale",
    "requestMetadata.partnersSessionId",
    "requestMetadata.trafficSource.trafficSourceId",
    "requestMetadata.trafficSource.trafficSubId",
    "requestMetadata.userOverrides.ipAddress",
    "requestMetadata.userOverrides.userId",
    "oauth_token",
    "pp",
    "prettyPrint",
    "quotaUser",
    "uploadType",
    "upload_protocol"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "requestMetadata_experimentIds": "requestMetadata.experimentIds",
    "requestMetadata_locale": "requestMetadata.locale",
    "requestMetadata_partnersSessionId": "requestMetadata.partnersSessionId",
    "requestMetadata_trafficSource_trafficSourceId": "requestMetadata.trafficSource.trafficSourceId",
    "requestMetadata_trafficSource_trafficSubId": "requestMetadata.trafficSource.trafficSubId",
    "requestMetadata_userOverrides_ipAddress": "requestMetadata.userOverrides.ipAddress",
    "requestMetadata_userOverrides_userId": "requestMetadata.userOverrides.userId",
    "oauth_token": "oauth_token",
    "pp": "pp",
    "prettyPrint": "prettyPrint",
    "quotaUser": "quotaUser",
    "uploadType": "uploadType",
    "upload_protocol": "upload_protocol",
    "address": "address",
    "addressLine": "addressLine",
    "administrativeArea": "administrativeArea",
    "dependentLocality": "dependentLocality",
    "languageCode": "languageCode",
    "latitude": "latitude",
    "longitude": "longitude",
    "latLng": "latLng",
    "locality": "locality",
    "postalCode": "postalCode",
    "regionCode": "regionCode",
    "sortingCode": "sortingCode",
    "adwordsManagerAccount": "adwordsManagerAccount",
    "channels": "channels",
    "emailAddress": "emailAddress",
    "marketComm": "marketComm",
    "performanceSuggestions": "performanceSuggestions",
    "phoneContact": "phoneContact",
    "physicalMail": "physicalMail",
    "specialOffers": "specialOffers",
    "emailOptIns": "emailOptIns",
    "familyName": "familyName",
    "givenName": "givenName",
    "industries": "industries",
    "jobFunctions": "jobFunctions",
    "languages": "languages",
    "markets": "markets",
    "migrateToAfa": "migrateToAfa",
    "phoneNumber": "phoneNumber",
    "primaryCountryCode": "primaryCountryCode",
    "profilePublic": "profilePublic",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};

    let callParams = {
        spec: spec,
        operationId: 'partners.users.updateProfile',
        pathName: '/v2/users/profile',
        method: 'patch',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}