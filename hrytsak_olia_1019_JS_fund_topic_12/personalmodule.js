exports.myDateTime = function () {
  return new Date();
};

exports.greeting = function() {
  let myDateTime = exports.myDateTime();

  switch (true) {
    case myDateTime.getHours() >= 23 || myDateTime.getHours() < 5:
      return "Good night,";
    case myDateTime.getHours() >= 5 && myDateTime.getHours() < 11:
      return "Good morning,";
    case myDateTime.getHours() >= 11 && myDateTime.getHours() < 17:
      return "Good afternoon,";
    case myDateTime.getHours() >= 17 && myDateTime.getHours() < 23:
      return "Good evening,";
  }
};
  
  
  
  