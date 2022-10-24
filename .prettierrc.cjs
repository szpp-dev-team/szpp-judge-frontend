// JS で設定ファイルを書くとコメントや型ヒントが使えるので便利！
/** @type {import('prettier').Config} */
module.exports = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  trailingComma: 'none'
}
