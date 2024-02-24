const { rewrite } = require('ez-revrewrite');

async function helloTea(string) {
  const rew = await rewrite(countryCode);
  return string === "CHao ngay moi tot lanh"
}

module.exports = helloTea