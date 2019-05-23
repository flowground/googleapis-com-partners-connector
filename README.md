# ![LOGO](logo.png) Google Partners **flow**ground Connector

## Description

A generated **flow**ground connector for the Google Partners API (version v2).

Generated from: https://api.apis.guru/v2/specs/googleapis.com/partners/v2/swagger.json<br/>
Generated at: 2019-05-23T12:13:32+03:00

## API Description

Searches certified companies and creates contact leads with them, and also audits the usage of clients.

## Authorization

This API does not require authorization.

## Actions

### Lists analytics data for a user's associated company.<br/>
> Should only be called within the context of an authorized logged in user.

*Tags:* `analytics`

#### Input Parameters
* `pageSize` - _optional_ - Requested page size. Server may return fewer analytics than requested.
If unspecified or set to 0, default value is 30.
Specifies the number of days in the date range when querying analytics.
The `page_token` represents the end date of the date range
and the start date is calculated using the `page_size` as the number
of days BEFORE the end date.
Must be a non-negative integer.
* `pageToken` - _optional_ - A token identifying a page of results that the server returns.
Typically, this is the value of `ListAnalyticsResponse.next_page_token`
returned from the previous call to
ListAnalytics.
Will be a date string in `YYYY-MM-DD` format representing the end date
of the date range of results to return.
If unspecified or set to "", default value is the current date.
* `requestMetadata.experimentIds` - _optional_ - Experiment IDs the current request belongs to.
* `requestMetadata.locale` - _optional_ - Locale to use for the current request.
* `requestMetadata.partnersSessionId` - _optional_ - Google Partners session ID.
* `requestMetadata.trafficSource.trafficSourceId` - _optional_ - Identifier to indicate where the traffic comes from.
An identifier has multiple letters created by a team which redirected the
traffic to us.
* `requestMetadata.trafficSource.trafficSubId` - _optional_ - Second level identifier to indicate where the traffic comes from.
An identifier has multiple letters created by a team which redirected the
traffic to us.
* `requestMetadata.userOverrides.ipAddress` - _optional_ - IP address to use instead of the user's geo-located IP address.
* `requestMetadata.userOverrides.userId` - _optional_ - Logged-in user ID to impersonate instead of the user's ID.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Logs a generic message from the client, such as<br/>
> `Failed to render component`, `Profile page is running slow`,<br/>
> `More than 500 users have accessed this result.`, etc.

*Tags:* `clientMessages`

#### Input Parameters
* `$.xgafv` - _optional_ - V1 error format.
    Possible values: 1, 2.
* `access_token` - _optional_ - OAuth access token.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `bearer_token` - _optional_ - OAuth bearer token.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `pp` - _optional_ - Pretty-print response.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Lists companies.

*Tags:* `companies`

#### Input Parameters
* `address` - _optional_ - The address to use when searching for companies.
If not given, the geo-located address of the request is used.
* `companyName` - _optional_ - Company name to search for.
* `gpsMotivations` - _optional_ - List of reasons for using Google Partner Search to get companies.
* `industries` - _optional_ - List of industries the company can help with.
* `languageCodes` - _optional_ - List of language codes that company can support. Only primary language
subtags are accepted as defined by
<a href="https://tools.ietf.org/html/bcp47">BCP 47</a>
(IETF BCP 47, "Tags for Identifying Languages").
* `maxMonthlyBudget.currencyCode` - _optional_ - The 3-letter currency code defined in ISO 4217.
* `maxMonthlyBudget.nanos` - _optional_ - Number of nano (10^-9) units of the amount.
The value must be between -999,999,999 and +999,999,999 inclusive.
If `units` is positive, `nanos` must be positive or zero.
If `units` is zero, `nanos` can be positive, zero, or negative.
If `units` is negative, `nanos` must be negative or zero.
For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
* `maxMonthlyBudget.units` - _optional_ - The whole units of the amount.
For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.
* `minMonthlyBudget.currencyCode` - _optional_ - The 3-letter currency code defined in ISO 4217.
* `minMonthlyBudget.nanos` - _optional_ - Number of nano (10^-9) units of the amount.
The value must be between -999,999,999 and +999,999,999 inclusive.
If `units` is positive, `nanos` must be positive or zero.
If `units` is zero, `nanos` can be positive, zero, or negative.
If `units` is negative, `nanos` must be negative or zero.
For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
* `minMonthlyBudget.units` - _optional_ - The whole units of the amount.
For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.
* `orderBy` - _optional_ - How to order addresses within the returned companies. Currently, only
`address` and `address desc` is supported which will sorted by closest to
farthest in distance from given address and farthest to closest distance
from given address respectively.
* `pageSize` - _optional_ - Requested page size. Server may return fewer companies than requested.
If unspecified, server picks an appropriate default.
* `pageToken` - _optional_ - A token identifying a page of results that the server returns.
Typically, this is the value of `ListCompaniesResponse.next_page_token`
returned from the previous call to
ListCompanies.
* `requestMetadata.experimentIds` - _optional_ - Experiment IDs the current request belongs to.
* `requestMetadata.locale` - _optional_ - Locale to use for the current request.
* `requestMetadata.partnersSessionId` - _optional_ - Google Partners session ID.
* `requestMetadata.trafficSource.trafficSourceId` - _optional_ - Identifier to indicate where the traffic comes from.
An identifier has multiple letters created by a team which redirected the
traffic to us.
* `requestMetadata.trafficSource.trafficSubId` - _optional_ - Second level identifier to indicate where the traffic comes from.
An identifier has multiple letters created by a team which redirected the
traffic to us.
* `requestMetadata.userOverrides.ipAddress` - _optional_ - IP address to use instead of the user's geo-located IP address.
* `requestMetadata.userOverrides.userId` - _optional_ - Logged-in user ID to impersonate instead of the user's ID.
* `services` - _optional_ - List of services that the returned agencies should provide. If this is
not empty, any returned agency must have at least one of these services,
or one of the specializations in the "specializations" field.
* `specializations` - _optional_ - List of specializations that the returned agencies should provide. If this
is not empty, any returned agency must have at least one of these
specializations, or one of the services in the "services" field.
* `view` - _optional_ - The view of the `Company` resource to be returned. This must not be
`COMPANY_VIEW_UNSPECIFIED`.
    Possible values: COMPANY_VIEW_UNSPECIFIED, CV_GOOGLE_PARTNER_SEARCH.
* `websiteUrl` - _optional_ - Website URL that will help to find a better matched company.
.

### Update company.<br/>
> Should only be called within the context of an authorized logged in user.

*Tags:* `v2`

#### Input Parameters
* `requestMetadata.experimentIds` - _optional_ - Experiment IDs the current request belongs to.
* `requestMetadata.locale` - _optional_ - Locale to use for the current request.
* `requestMetadata.partnersSessionId` - _optional_ - Google Partners session ID.
* `requestMetadata.trafficSource.trafficSourceId` - _optional_ - Identifier to indicate where the traffic comes from.
An identifier has multiple letters created by a team which redirected the
traffic to us.
* `requestMetadata.trafficSource.trafficSubId` - _optional_ - Second level identifier to indicate where the traffic comes from.
An identifier has multiple letters created by a team which redirected the
traffic to us.
* `requestMetadata.userOverrides.ipAddress` - _optional_ - IP address to use instead of the user's geo-located IP address.
* `requestMetadata.userOverrides.userId` - _optional_ - Logged-in user ID to impersonate instead of the user's ID.
* `updateMask` - _optional_ - Standard field mask for the set of fields to be updated.
Required with at least 1 value in FieldMask's paths.
* `pp` - _optional_ - Pretty-print response.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Gets a company.

*Tags:* `companies`

#### Input Parameters
* `address` - _optional_ - The address to use for sorting the company's addresses by proximity.
If not given, the geo-located address of the request is used.
Used when order_by is set.
* `companyId` - _required_ - The ID of the company to retrieve.
* `currencyCode` - _optional_ - If the company's budget is in a different currency code than this one, then
the converted budget is converted to this currency code.
* `orderBy` - _optional_ - How to order addresses within the returned company. Currently, only
`address` and `address desc` is supported which will sorted by closest to
farthest in distance from given address and farthest to closest distance
from given address respectively.
* `requestMetadata.experimentIds` - _optional_ - Experiment IDs the current request belongs to.
* `requestMetadata.locale` - _optional_ - Locale to use for the current request.
* `requestMetadata.partnersSessionId` - _optional_ - Google Partners session ID.
* `requestMetadata.trafficSource.trafficSourceId` - _optional_ - Identifier to indicate where the traffic comes from.
An identifier has multiple letters created by a team which redirected the
traffic to us.
* `requestMetadata.trafficSource.trafficSubId` - _optional_ - Second level identifier to indicate where the traffic comes from.
An identifier has multiple letters created by a team which redirected the
traffic to us.
* `requestMetadata.userOverrides.ipAddress` - _optional_ - IP address to use instead of the user's geo-located IP address.
* `requestMetadata.userOverrides.userId` - _optional_ - Logged-in user ID to impersonate instead of the user's ID.
* `view` - _optional_ - The view of `Company` resource to be returned. This must not be
`COMPANY_VIEW_UNSPECIFIED`.
    Possible values: COMPANY_VIEW_UNSPECIFIED, CV_GOOGLE_PARTNER_SEARCH.
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Creates an advertiser lead for the given company ID.

*Tags:* `companies`

#### Input Parameters
* `companyId` - _required_ - The ID of the company to contact.
* `access_token` - _optional_ - OAuth access token.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `bearer_token` - _optional_ - OAuth bearer token.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `pp` - _optional_ - Pretty-print response.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Lists advertiser leads for a user's associated company.<br/>
> Should only be called within the context of an authorized logged in user.

*Tags:* `leads`

#### Input Parameters
* `orderBy` - _optional_ - How to order Leads. Currently, only `create_time`
and `create_time desc` are supported
* `pageSize` - _optional_ - Requested page size. Server may return fewer leads than requested.
If unspecified, server picks an appropriate default.
* `pageToken` - _optional_ - A token identifying a page of results that the server returns.
Typically, this is the value of `ListLeadsResponse.next_page_token`
returned from the previous call to
ListLeads.
* `requestMetadata.experimentIds` - _optional_ - Experiment IDs the current request belongs to.
* `requestMetadata.locale` - _optional_ - Locale to use for the current request.
* `requestMetadata.partnersSessionId` - _optional_ - Google Partners session ID.
* `requestMetadata.trafficSource.trafficSourceId` - _optional_ - Identifier to indicate where the traffic comes from.
An identifier has multiple letters created by a team which redirected the
traffic to us.
* `requestMetadata.trafficSource.trafficSubId` - _optional_ - Second level identifier to indicate where the traffic comes from.
An identifier has multiple letters created by a team which redirected the
traffic to us.
* `requestMetadata.userOverrides.ipAddress` - _optional_ - IP address to use instead of the user's geo-located IP address.
* `requestMetadata.userOverrides.userId` - _optional_ - Logged-in user ID to impersonate instead of the user's ID.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Updates the specified lead.

*Tags:* `v2`

#### Input Parameters
* `requestMetadata.experimentIds` - _optional_ - Experiment IDs the current request belongs to.
* `requestMetadata.locale` - _optional_ - Locale to use for the current request.
* `requestMetadata.partnersSessionId` - _optional_ - Google Partners session ID.
* `requestMetadata.trafficSource.trafficSourceId` - _optional_ - Identifier to indicate where the traffic comes from.
An identifier has multiple letters created by a team which redirected the
traffic to us.
* `requestMetadata.trafficSource.trafficSubId` - _optional_ - Second level identifier to indicate where the traffic comes from.
An identifier has multiple letters created by a team which redirected the
traffic to us.
* `requestMetadata.userOverrides.ipAddress` - _optional_ - IP address to use instead of the user's geo-located IP address.
* `requestMetadata.userOverrides.userId` - _optional_ - Logged-in user ID to impersonate instead of the user's ID.
* `updateMask` - _optional_ - Standard field mask for the set of fields to be updated.
Required with at least 1 value in FieldMask's paths.
Only `state` and `adwords_customer_id` are currently supported.
* `pp` - _optional_ - Pretty-print response.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Lists the Offers available for the current user

*Tags:* `offers`

#### Input Parameters
* `requestMetadata.experimentIds` - _optional_ - Experiment IDs the current request belongs to.
* `requestMetadata.locale` - _optional_ - Locale to use for the current request.
* `requestMetadata.partnersSessionId` - _optional_ - Google Partners session ID.
* `requestMetadata.trafficSource.trafficSourceId` - _optional_ - Identifier to indicate where the traffic comes from.
An identifier has multiple letters created by a team which redirected the
traffic to us.
* `requestMetadata.trafficSource.trafficSubId` - _optional_ - Second level identifier to indicate where the traffic comes from.
An identifier has multiple letters created by a team which redirected the
traffic to us.
* `requestMetadata.userOverrides.ipAddress` - _optional_ - IP address to use instead of the user's geo-located IP address.
* `requestMetadata.userOverrides.userId` - _optional_ - Logged-in user ID to impersonate instead of the user's ID.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `pp` - _optional_ - Pretty-print response.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Lists the Historical Offers for the current user (or user's entire company)

*Tags:* `offers`

#### Input Parameters
* `entireCompany` - _optional_ - if true, show history for the entire company.  Requires user to be admin.
* `orderBy` - _optional_ - Comma-separated list of fields to order by, e.g.: "foo,bar,baz".
Use "foo desc" to sort descending.
List of valid field names is: name, offer_code, expiration_time, status,
    last_modified_time, sender_name, creation_time, country_code,
    offer_type.
* `pageSize` - _optional_ - Maximum number of rows to return per page.
* `pageToken` - _optional_ - Token to retrieve a specific page.
* `requestMetadata.experimentIds` - _optional_ - Experiment IDs the current request belongs to.
* `requestMetadata.locale` - _optional_ - Locale to use for the current request.
* `requestMetadata.partnersSessionId` - _optional_ - Google Partners session ID.
* `requestMetadata.trafficSource.trafficSourceId` - _optional_ - Identifier to indicate where the traffic comes from.
An identifier has multiple letters created by a team which redirected the
traffic to us.
* `requestMetadata.trafficSource.trafficSubId` - _optional_ - Second level identifier to indicate where the traffic comes from.
An identifier has multiple letters created by a team which redirected the
traffic to us.
* `requestMetadata.userOverrides.ipAddress` - _optional_ - IP address to use instead of the user's geo-located IP address.
* `requestMetadata.userOverrides.userId` - _optional_ - Logged-in user ID to impersonate instead of the user's ID.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Gets Partners Status of the logged in user's agency.<br/>
> Should only be called if the logged in user is the admin of the agency.

*Tags:* `v2`

#### Input Parameters
* `requestMetadata.experimentIds` - _optional_ - Experiment IDs the current request belongs to.
* `requestMetadata.locale` - _optional_ - Locale to use for the current request.
* `requestMetadata.partnersSessionId` - _optional_ - Google Partners session ID.
* `requestMetadata.trafficSource.trafficSourceId` - _optional_ - Identifier to indicate where the traffic comes from.
An identifier has multiple letters created by a team which redirected the
traffic to us.
* `requestMetadata.trafficSource.trafficSubId` - _optional_ - Second level identifier to indicate where the traffic comes from.
An identifier has multiple letters created by a team which redirected the
traffic to us.
* `requestMetadata.userOverrides.ipAddress` - _optional_ - IP address to use instead of the user's geo-located IP address.
* `requestMetadata.userOverrides.userId` - _optional_ - Logged-in user ID to impersonate instead of the user's ID.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `pp` - _optional_ - Pretty-print response.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Logs a user event.

*Tags:* `userEvents`

#### Input Parameters
* `$.xgafv` - _optional_ - V1 error format.
    Possible values: 1, 2.
* `access_token` - _optional_ - OAuth access token.
* `alt` - _optional_ - Data format for response.
    Possible values: json, media, proto.
* `bearer_token` - _optional_ - OAuth bearer token.
* `callback` - _optional_ - JSONP
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `pp` - _optional_ - Pretty-print response.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Lists states for current user.

*Tags:* `userStates`

#### Input Parameters
* `requestMetadata.experimentIds` - _optional_ - Experiment IDs the current request belongs to.
* `requestMetadata.locale` - _optional_ - Locale to use for the current request.
* `requestMetadata.partnersSessionId` - _optional_ - Google Partners session ID.
* `requestMetadata.trafficSource.trafficSourceId` - _optional_ - Identifier to indicate where the traffic comes from.
An identifier has multiple letters created by a team which redirected the
traffic to us.
* `requestMetadata.trafficSource.trafficSubId` - _optional_ - Second level identifier to indicate where the traffic comes from.
An identifier has multiple letters created by a team which redirected the
traffic to us.
* `requestMetadata.userOverrides.ipAddress` - _optional_ - IP address to use instead of the user's geo-located IP address.
* `requestMetadata.userOverrides.userId` - _optional_ - Logged-in user ID to impersonate instead of the user's ID.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `pp` - _optional_ - Pretty-print response.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Updates a user's profile. A user can only update their own profile and<br/>
> should only be called within the context of a logged in user.

*Tags:* `users`

#### Input Parameters
* `requestMetadata.experimentIds` - _optional_ - Experiment IDs the current request belongs to.
* `requestMetadata.locale` - _optional_ - Locale to use for the current request.
* `requestMetadata.partnersSessionId` - _optional_ - Google Partners session ID.
* `requestMetadata.trafficSource.trafficSourceId` - _optional_ - Identifier to indicate where the traffic comes from.
An identifier has multiple letters created by a team which redirected the
traffic to us.
* `requestMetadata.trafficSource.trafficSubId` - _optional_ - Second level identifier to indicate where the traffic comes from.
An identifier has multiple letters created by a team which redirected the
traffic to us.
* `requestMetadata.userOverrides.ipAddress` - _optional_ - IP address to use instead of the user's geo-located IP address.
* `requestMetadata.userOverrides.userId` - _optional_ - Logged-in user ID to impersonate instead of the user's ID.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `pp` - _optional_ - Pretty-print response.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Gets a user.

*Tags:* `users`

#### Input Parameters
* `requestMetadata.experimentIds` - _optional_ - Experiment IDs the current request belongs to.
* `requestMetadata.locale` - _optional_ - Locale to use for the current request.
* `requestMetadata.partnersSessionId` - _optional_ - Google Partners session ID.
* `requestMetadata.trafficSource.trafficSourceId` - _optional_ - Identifier to indicate where the traffic comes from.
An identifier has multiple letters created by a team which redirected the
traffic to us.
* `requestMetadata.trafficSource.trafficSubId` - _optional_ - Second level identifier to indicate where the traffic comes from.
An identifier has multiple letters created by a team which redirected the
traffic to us.
* `requestMetadata.userOverrides.ipAddress` - _optional_ - IP address to use instead of the user's geo-located IP address.
* `requestMetadata.userOverrides.userId` - _optional_ - Logged-in user ID to impersonate instead of the user's ID.
* `userId` - _required_ - Identifier of the user. Can be set to <code>me</code> to mean the currently
authenticated user.
* `userView` - _optional_ - Specifies what parts of the user information to return.
    Possible values: BASIC, PROFILE, PUBLIC_PROFILE.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Deletes a user's company relation. Unaffiliaites the user from a company.

*Tags:* `users`

#### Input Parameters
* `requestMetadata.experimentIds` - _optional_ - Experiment IDs the current request belongs to.
* `requestMetadata.locale` - _optional_ - Locale to use for the current request.
* `requestMetadata.partnersSessionId` - _optional_ - Google Partners session ID.
* `requestMetadata.trafficSource.trafficSourceId` - _optional_ - Identifier to indicate where the traffic comes from.
An identifier has multiple letters created by a team which redirected the
traffic to us.
* `requestMetadata.trafficSource.trafficSubId` - _optional_ - Second level identifier to indicate where the traffic comes from.
An identifier has multiple letters created by a team which redirected the
traffic to us.
* `requestMetadata.userOverrides.ipAddress` - _optional_ - IP address to use instead of the user's geo-located IP address.
* `requestMetadata.userOverrides.userId` - _optional_ - Logged-in user ID to impersonate instead of the user's ID.
* `userId` - _required_ - The ID of the user. Can be set to <code>me</code> to mean
the currently authenticated user.
* `pp` - _optional_ - Pretty-print response.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

### Creates a user's company relation. Affiliates the user to a company.

*Tags:* `users`

#### Input Parameters
* `requestMetadata.experimentIds` - _optional_ - Experiment IDs the current request belongs to.
* `requestMetadata.locale` - _optional_ - Locale to use for the current request.
* `requestMetadata.partnersSessionId` - _optional_ - Google Partners session ID.
* `requestMetadata.trafficSource.trafficSourceId` - _optional_ - Identifier to indicate where the traffic comes from.
An identifier has multiple letters created by a team which redirected the
traffic to us.
* `requestMetadata.trafficSource.trafficSubId` - _optional_ - Second level identifier to indicate where the traffic comes from.
An identifier has multiple letters created by a team which redirected the
traffic to us.
* `requestMetadata.userOverrides.ipAddress` - _optional_ - IP address to use instead of the user's geo-located IP address.
* `requestMetadata.userOverrides.userId` - _optional_ - Logged-in user ID to impersonate instead of the user's ID.
* `userId` - _required_ - The ID of the user. Can be set to <code>me</code> to mean
the currently authenticated user.
* `pp` - _optional_ - Pretty-print response.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* `uploadType` - _optional_ - Legacy upload protocol for media (e.g. "media", "multipart").
* `upload_protocol` - _optional_ - Upload protocol for media (e.g. "raw", "multipart").

## License

**flow**ground :- Telekom iPaaS / googleapis-com-partners-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
