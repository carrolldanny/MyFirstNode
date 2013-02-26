exports.myFunction = function(params, callback) {
  var num = params.num;
  if(num > 10){
    return callback({err: 'Num too large'}, {result: num});
  }
  callback(undefined, {result: num});
};

exports.errorFunction = function(params, callback) {
  
    return callback({err: 'Num too large'}, {result: num});
  
};
