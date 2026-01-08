const ADMIN_TOKEN = "admin-123";

function checkAccess(token) {
  return token === ADMIN_TOKEN;
}

module.exports = { checkAccess };
