module.exports = function check(str, bracketsConfig) {
  for(let j = 0;j<1000;j++){
        for (let i = 0;i<bracketsConfig.length;i++){
        str = str.split(bracketsConfig[i][0]+bracketsConfig[i][1]).join('');}
    }
    if(!str) return true;
    return false;
}
