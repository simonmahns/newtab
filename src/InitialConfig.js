var tempStArray = localStorage.getItem("shortTermGoals");
var tempLtArray = localStorage.getItem("longTermGoals");
var links = localStorage.getItem("links");

//retreving goals
if (
  tempStArray == null ||
  tempStArray.length < 1 ||
  tempStArray === undefined
) {
  var stArraytemp = [];
} else {
  let original = localStorage.getItem("shortTermGoals");
  let obj = JSON.parse(original);
  stArraytemp = obj;
}

if (
  tempLtArray === null ||
  tempLtArray.length < 1 ||
  tempLtArray === undefined
) {
  var ltArraytemp = [];
} else {
  let original = localStorage.getItem("longTermGoals");
  let obj = JSON.parse(original);
  ltArraytemp = obj;
}
//retreving links

if (links == null || links.length < 1 || links === undefined) {
  var linksTemp = [];
} else {
  let original = localStorage.getItem("links");
  let obj = JSON.parse(original);
  linksTemp = obj;
}

export { stArraytemp, ltArraytemp, linksTemp };
