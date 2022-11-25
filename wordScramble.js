const scramble = (toScramble) => {
  const stringArray = toScramble.split(" ");
  let jumbledString = ""
  space = "";

  for(words of stringArray){
    const arr = words.split("");
    jumbledString += space;
    size = arr.length;
    for(let i = 0; i < size;i++){
      const num = Math.floor(Math.random() * arr.length);
      jumbledString += arr[num].toLowerCase();
      arr.splice(num,1);
    }
    space = " ";
  }
  return jumbledString;
}

try{
  if(process.argv.length < 3){
    throw "Script requires one commandline argument";
  }
  console.log(scramble(process.argv[2]));

} catch (ex){
  console.log(ex);
}