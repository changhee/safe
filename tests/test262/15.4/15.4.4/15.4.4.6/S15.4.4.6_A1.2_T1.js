  var x = new Array(0, 1, 2, 3);
  var pop = x.pop();
  {
    var __result1 = pop !== 3;
    var __expect1 = false;
  }
  {
    var __result2 = x.length !== 3;
    var __expect2 = false;
  }
  {
    var __result3 = x[3] !== undefined;
    var __expect3 = false;
  }
  {
    var __result4 = x[2] !== 2;
    var __expect4 = false;
  }
  x = [];
  x[0] = 0;
  x[3] = 3;
  var pop = x.pop();
  {
    var __result5 = pop !== 3;
    var __expect5 = false;
  }
  {
    var __result6 = x.length !== 3;
    var __expect6 = false;
  }
  {
    var __result7 = x[3] !== undefined;
    var __expect7 = false;
  }
  {
    var __result8 = x[2] !== undefined;
    var __expect8 = false;
  }
  x.length = 1;
  var pop = x.pop();
  {
    var __result9 = pop !== 0;
    var __expect9 = false;
  }
  {
    var __result10 = x.length !== 0;
    var __expect10 = false;
  }
  