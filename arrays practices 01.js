var array01 = [1,2,3,4,5,6,"a","welcome"];

function pract02(arrayssss, subValue){
  if(typeof arrayssss[subValue] == 'undefined'){
    arrayssss[subValue] = 0;
  }
  else if(typeof arrayssss[subValue] == 'number'){
    arrayssss[subValue] = 1;
  }
  else{
    arrayssss[subValue] = -1;
  }
}


pract02(array01, 5);