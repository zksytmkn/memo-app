/** @type {import('prettier').Config} */
module.exports = {
  // prettier
  printWidth: 120,

  // @ianvs/prettier-plugin-sort-imports
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "^(remix-run/(.*)$)|^(remix-run$)",
    "",
    "<THIRD_PARTY_MODULES>",
    "",
    "^types$",
    "^@/components/(.*)$",
    "^@/app/(.*)$",
    "",
    "^[./]",
  ],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderTypeScriptVersion: "5.0.4",
};
