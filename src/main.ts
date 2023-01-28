import fs = require("fs")
import mymod = require("./old")
function main() {

  const code = fs.readFileSync("src/x.txt", "utf8");
  const o = code.toString()
  console.log(o)
  mymod.sayno()

}
main()