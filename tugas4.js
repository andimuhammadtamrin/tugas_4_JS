var andi = 156;
var budi = 181;
var rini = 174;
var data1 = [andi, budi, rini];
var datasort = data1.sort();
var datalength = datasort.length;
// console.log(datasort);
// console.log(datalength);

function tertinggi(){
  if((andi > budi) && (andi > rini)){
      console.log(andi);
    }
  else if((budi > rini) && (budi>andi)){
      console.log(budi);
  }
  else{
    console.log(rini);
  }
}


//terendah.....................................................................
function terendah(){
  if((andi < budi) && (andi< rini))
  console.log(andi);
  else if((budi < rini) && (budi < andi)){
      console.log(budi);
  }
  else {
    console.log(rini);
  }
}

//sedang........................................................................

function sedang(){
  var a = (datalength+1)/2;
  var sedang = console.log(data1[a-1]);
  return sedang
}


console.log("Data urutan tertinggi dari siswa (cm):");
tertinggi()
sedang()
terendah()
