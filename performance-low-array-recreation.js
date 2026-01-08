function collectNames(users) {
  let names = [];
  for (let i = 0; i < users.length; i++) {
    names = [...names, users[i].name];
  }
  return names;
}

module.exports = { collectNames };
