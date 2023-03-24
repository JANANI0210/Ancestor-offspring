function Ancestor(code, gender) {
  if ((gender == "m" || gender == "M") && code < 0) {
    relation = " Father";
  } else if ((gender == "f" || gender == "f") && code < 0) {
    relation = " Mother";
  } else if ((gender == "m" || gender == "M") && code > 0) {
    relation = " Son";
  } else if ((gender == "f" || gender == "f") && code > 0) {
    relation = " Daughter";
  }

  switch (code) {
    case -3:
      console.log("Great grand" + relation);
      break;
    case -2:
      console.log("Grand" + relation);
      break;
    case -1:
      console.log(relation);
      break;
    case 0:
      console.log("Me");
      break;
    case 1:
      console.log(relation);
      break;
    case 2:
      console.log("Grand" + relation);
      break;
    case 3:
      console.log("Great grand" + relation);
      break;
  }
}

var code = 0;
var gender = "f";
var relation;
Ancestor(code, gender);
