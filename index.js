// add solution here
function theBeatlesPlay(musicians, instruments){
  var array = []
  for (let i = 0; i < 4; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
return array
}

// needs to take each element from both arrays
// loop with a counter, i= 0, some condition, i ++1
// `${musicians[0]} plays ${instruments[0]}`
// need to add to array, I think .push is okay because we only need one array
// return

function whileLoop(facts){
  var array = []
  let num = 0
  while (num > 0){
    array.push(`${facts[num]}!!!`
  }
  return array
}
