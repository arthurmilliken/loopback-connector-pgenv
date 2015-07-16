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
    if (typeof(value) === 'string') {
      var match = value.match(/^\$(.*)$/);
      if (match) {
        var newValue = process.env[match[1]];

        var intVal = parseInt(newValue);
        if (!isNaN(intVal)) newValue = intVal;

        settings[key] = value.replace(match[0], newValue);
      }
    }
  }
  debug('settings:', settings);

  dataSource.settings = settings;
  pgConnector.initialize(dataSource, callback);

};
