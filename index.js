var _ = require('underscore');
var pgConnector = require('loopback-connector-postgresql');
var debug = require('debug')('loopback:connector:pgenv');

exports.initialize = function initializeDataSource(dataSource, callback) {
  debug('initialize:');
  var properties = dataSource.settings.properties;
  var settings = _.clone(properties);

  debug('properties:', properties);
  for (var key in properties) {
    var value = properties[key];
    var match = value.match(/^\$(.*)$/);
    if (match) {
      settings[key] = value.replace(match[0], process.env[match[1]]);
    }
  }
  debug('settings:', settings);

  dataSource.settings = settings;
  pgConnector.initialize(dataSource, callback);

  // throw new Error('EXIT');

};
