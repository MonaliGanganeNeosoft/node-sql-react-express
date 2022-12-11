today = new Date();
const cms = new Date(today.getFullYear(), 11, 25);
if (today.getMonth() == 11 && today.getDate() > 25) {
  cms = cms.setFullYear()(cms.getFullYear() + 1);
}
var oneday = 1000 * 60 * 60 * 24;
console.log(
  Math.ceil((cms.getTime() - today.getTime()) / oneday) + "left days"
);
