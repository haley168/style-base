var margin={
    min:0,
    max:100,
    step:0.5,
    str1:'.m',
    str2:'p{',
    str3:'%}',
    str4:':',
    name: 'margin'
}
// console.log(loop(margin));
function loop(obj){
    var arr=[];
    for(var i=obj.min/1;i<=obj.max/1;i+=obj.step){
       arr.push(
            obj.str1+dot2d(String(i))+obj.str2+obj.name+obj.str4+i+obj.str3
       )
    }
    return arr.join('');
}

function dot2d(num){
    return num.replace('.','d');
}
function delDot(num){
    return num.replace('.','');
}
function addZero(num){
  if(num<10){
      return "00"+num;
  }else if(num<100){
      return "0"+num;
  }else{
      return num;
  }
}


// .m
// 005
// -per{
// margin:
// 5
// %}