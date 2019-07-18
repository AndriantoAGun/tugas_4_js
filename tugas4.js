var Desy = 172;
var Viny = 167;
var Beby = 162;

if (Beby > Desy){
  if (Beby > Viny){
    console.log("Beby paling tinggi");
  } else {
    console.log("Beby kedua tertinggi");
  }
} else {
  if (Beby < Viny){
    console.log("Beby paling pendek");
  } else {
    console.log("Beby kedua terpendek");
  }
}

if (Viny > Desy){
  if (Viny > Beby){
    console.log("Viny paling tinggi");
  } else {
    console.log("Viny kedua tertinggi");
  }
} else {
  if (Viny < Beby){
    console.log("Viny paling pendek");
  } else {
    console.log("Viny kedua terpendek");
  }
}

if (Desy > Viny){
  if (Beby > Viny){
    console.log("Viny paling tinggi");
  } else {
    console.log("Viny kedua tertinggi");
  }
} else {
  if (Viny < Beby){
    console.log("Viny paling pendek");
  } else {
    console.log("Viny kedua terpendek");
  }
}

if (Desy > Viny){
  if (Desy > Beby){
    console.log("Desy paling tinggi");
  } else {
    console.log("Desy kedua tertinggi");
  }
} else {
  if (Desy < Beby){
    console.log("Desy paling pendek");
  } else {
    console.log("Desy kedua terpendek");
  }
}
