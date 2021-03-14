

exports.getdate = function(){

var today = new Date();

var option={
  weekday:"long",
  day:"numeric",
  month:"long"
};

return today.toLocaleDateString("en-US",option);


}

exports.getday = function(){

var today = new Date();

var option={
  weekday:"long",
};

  return today.toLocaleDateString("en-US",option);

}

module.exports
