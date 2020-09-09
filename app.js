let test =
  "maDam aYoing Who Staysing in oYo Was in a Bus to Lagos whEn Her Son Sold the rAceCar";
let revWord = caseRev(test);
let upperWrord = upper(test);
let ingEnding = changeLastNum(test);
let drome =  plaindrome(upperWrord)
function upper(str) {
  let arr = str.split(" ");
  let newArr = new Array();
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
  }
  return newArr;
}
function chek(string) {
  if (string === string.toUpperCase()) {
    return 0;
  } else if (string === string.toLowerCase()) {
    return 1;
  } else {
    return 2;
  }
}

function caseRev(word) {
  let eachAlph;
  let revSen = "";
  for (let i = 0; i < word.length; i++) {
    eachAlph = word.charAt(i);
    if (chek(eachAlph) === 0) {
      revSen += eachAlph.toLowerCase();
    } else if (chek(eachAlph) === 1) {
      revSen += eachAlph.toUpperCase();
    } else {
      revSen += word.charAt(i);
    }
  }
  return revSen;
}

function changeLastNum(str) {
  let id = str.split(/\s/g);
  let ing = new Array();
  for(let i of id){
      if(i.toLowerCase().endsWith('ing')){
          ing.push(i)
      }
  }
  return ing;
}

function plaindrome(str){
    let plainDromeWord = new Array();
    for(let i of str){
        if(i.length >=2){
            let plain =  i.split('').reverse().join('');
            if(plain.toLowerCase() === i.toLowerCase()){
                plainDromeWord.push(i)
            }
        }
    }
    if(plainDromeWord.length >=1 ){
        if(plainDromeWord.length == 1){
            return plainDromeWord[0]
        }else{
            return plainDromeWord;
        }

}else{
    return ''
}

}
console.log('Reversed words ========')
console.log(revWord)
console.log('Wrods with Ing--------')
console.log(ingEnding)
console.log('Words with capital letter-------')
console.log(upperWrord)
console.log('Plaindrome words--------')
console.log(drome);
