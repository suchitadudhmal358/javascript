let id1 = document.getElementById("id1");
console.log(id1);

//matches
console.log(id1.matches(".abc"));
console.log(id1.matches(".box"));

//closest
let sp1 = document.getElementById("sp1");
console.log(sp1.closest(".box"));
console.log(sp1.closest("#sp1"));

//contains - id1 contains sp1
console.log(id1.contains(sp1));
console.log(sp1.contains(sp1));
console.log(sp1.contains(id1));
