exports.myFunction = function(params, callback) {
  var num = params.num;
  if(num > 10){
    return callback({err: 'Num too large'}, {result: num});
  }
  callback(undefined, {result: num});
};

exports.errorFunction = function(params, callback) {
  var messsage = "theres been an error";
  if(messsage == "theres been an error"){
    return callback({err: messsage}, {result: num});
  }
  callback(undefined, {result: "all is well"});
};
