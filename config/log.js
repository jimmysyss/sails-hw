/**
 * Built-in Log Configuration
 * (sails.config.log)
 *
 * Configure the log level for your app, as well as the transport
 * (Underneath the covers, Sails uses Winston for logging, which
 * allows for some pretty neat custom transports/adapters for log messages)
 *
 * For more information on the Sails logger, check out:
 * http://sailsjs.org/#!/documentation/concepts/Logging
 */

// Customize the Logger to use Winstons
var winston = require('winston');
var customLogger = new winston.Logger();

customLogger.add(winston.transports.Console, {
  colorize: true,
  level: 'debug'
});

customLogger.add(winston.transports.File, {
  filename: 'sails-hw.log',
  level: 'debug',
  json: false
});

module.exports.log = {

  /***************************************************************************
  *                                                                          *
  * Valid `level` configs: i.e. the minimum log level to capture with        *
  * sails.log.*()                                                            *
  *                                                                          *
  * The order of precedence for log levels from lowest to highest is:        *
  * silly, verbose, info, debug, warn, error                                 *
  *                                                                          *
  * You may also set the level to "silent" to suppress all logs.             *
  *                                                                          *
  ***************************************************************************/
  custom: customLogger,
  //level: 'info'

};
