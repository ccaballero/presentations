
function showMatch(str, reg) {
  var res = [], matches
  while(true) {
    matches = reg.exec(str)
    if (matches === null) break
    res.push(matches[0])
    if (!reg.global) break
  }
  alert(res)
}

