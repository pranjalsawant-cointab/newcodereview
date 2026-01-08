function hasDuplicateEmails(users) {
  for (let i = 0; i < users.length; i++) {
    for (let j = 0; j < users.length; j++) {
      if (i !== j && users[i].email === users[j].email) {
        return true;
      }
    }
  }
  return false;
}

module.exports = { hasDuplicateEmails };
