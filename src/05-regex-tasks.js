
function getRegexForGuid() {
  return /{\b[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}\b}/i;
}


function getRegexForPitSpot() {
  return /^.*p.t\w*/;
}


function getPasswordValidator(minLength) {
  const regex = new RegExp(`^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{${minLength},}$`);
  return regex;
}

module.exports = {
  getRegexForGuid,
  getRegexForPitSpot,
  getPasswordValidator,
};
