let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function centerArr(index) {
  let half = 7; //Math.floor(arr.length / 2);
  let length = half * 2 + 1;
  let begin = 0;
  let end = 0;
  console.log(arr[index]);

  // 左侧节点不足时，从尾部截取
  if (index < half) {
    console.log("左侧节点不足时，从尾部截取");
    begin = index - half;
    return arr.slice(begin).concat(arr.slice(0, begin)).slice(0, length);
  }
  //右侧节点不足，从首部截取
  else if (arr.length - index <= half) {
    console.log("右侧节点不足，从首部截取");
    end = half + 1 - (arr.length - index); //取反
    return arr.concat(arr.slice(0, end)).slice(-length); //arr.slice(index).concat(arr.slice(0, end));
  } else {
    console.log("节点充足");
    return arr
      .slice(index - half, index)
      .concat(arr.slice(index, index + half + 1));
    //两边充足
  }
}

console.log(JSON.stringify(centerArr(0)));
console.log(JSON.stringify(centerArr(1)));
console.log(JSON.stringify(centerArr(2)));
console.log(JSON.stringify(centerArr(3)));
console.log(JSON.stringify(centerArr(4)));
console.log(JSON.stringify(centerArr(5)));
console.log(JSON.stringify(centerArr(6)));
console.log(JSON.stringify(centerArr(7)));
console.log(JSON.stringify(centerArr(8)));
console.log(JSON.stringify(centerArr(9)));
console.log(JSON.stringify(centerArr(10)));
console.log(JSON.stringify(centerArr(11)));
console.log(JSON.stringify(centerArr(12)));
console.log(JSON.stringify(centerArr(13)));
console.log(JSON.stringify(centerArr(14)));
