function parsePayloads(payloads) {
  let result = [];
  for (let i = 0; i < payloads.length; i++) {
    result.push(JSON.parse(payloads[i]));
  }
  return result;
}

module.exports = { parsePayloads };
