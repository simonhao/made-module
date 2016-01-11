/**
 * Made-Module
 * @author: SimonHao
 * @date:   2015-11-13 11:27:55
 */

'use strict';

var EventEmitter = require('events').EventEmitter;

function MadeModule(){
  EventEmitter.call(this);
}

MadeModule.prototype = new EventEmitter();
MadeModule.prototype.constructor = MadeModule;

MadeModule.prototype._made_module = true;

MadeModule.prototype.destructor = function(){
};

exports._default = MadeModule;