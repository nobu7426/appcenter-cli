/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the GrantAdminRoleRequest class.
 * @constructor
 * @member {string} adminRole The new admin_role. Possible values include:
 * 'superAdmin', 'admin', 'devOps', 'notAdmin'
 * 
 */
function GrantAdminRoleRequest() {
}

/**
 * Defines the metadata of GrantAdminRoleRequest
 *
 * @returns {object} metadata of GrantAdminRoleRequest
 *
 */
GrantAdminRoleRequest.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'GrantAdminRoleRequest',
    type: {
      name: 'Composite',
      className: 'GrantAdminRoleRequest',
      modelProperties: {
        adminRole: {
          required: true,
          serializedName: 'admin_role',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = GrantAdminRoleRequest;
