function foo(i) { //foo(3)
    if (i < 0) {
      return;
    }
    console.log('begin: ' + i);
    foo(i - 1);
      //foo(3-1) //2
        //foo(2-1) //1
          //foo(1-1) //0
            //foo(0-1) //-1
              //return
          //foo(0)
          //console.log('end: ' + 0);//finished function, going out of scope
        //foo(1)
        //console.log('end: ' + 1);//finished function, going out of scope
      //foo(2)
      //console.log('end: ' + 2);//finished function, going out of scope
    //foo(3)
    //console.log('end: ' + 3);//finished function, going out of scope
    console.log('end: ' + i);
  }
  foo(3);
  
    // begin: 3 
    // begin: 2
    // begin: 1
    // begin: 0
    // end: 0
    // end: 1
    // end: 2
    // end: 3