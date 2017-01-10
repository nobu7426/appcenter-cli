/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var util = require('util');

/**
 * @class
 * Initializes a new instance of the EventProperties class.
 * @constructor
 * Event properties during the time range
 *
 * @member {array} [eventPropertiesProperty]
 * 
 */
function EventProperties() {
}

/**
 * Defines the metadata of EventProperties
 *
 * @returns {object} metadata of EventProperties
 *
 */
EventProperties.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'EventProperties',
    type: {
      name: 'Composite',
      className: 'EventProperties',
      modelProperties: {
        eventPropertiesProperty: {
          required: false,
          serializedName: 'event_properties',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'StringElementType',
                type: {
                  name: 'String'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = EventProperties;
