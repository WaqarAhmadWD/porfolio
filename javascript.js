let img = document.getElementById("img");
let content = document.getElementById("content");
let dTyping = document.getElementById("dTyping");
let profession = [
  "Web Developer",
  "Web Designer",
  "Full Stack Web Developer",
  "MERN Developer",
  "Programmer",
];
window.addEventListener("load", () => {
  img.classList.add("leftToRight");
  content.classList.add("rightToLeft");
  dTyping.innerHTML = profession[0];
  dTyping.classList.add("typing");
  let index = 1;
  setInterval(() => {
    dTyping.classList.remove("typing");
    dTyping.innerHTML = profession[index];
    index++;
    setTimeout(() => {
      dTyping.classList.add("typing");
    }, 500);
    if (index > profession.length - 1) {
      index = 0;
    }
  }, 4500);
});
let pro = document.getElementsByName("projectMain")[0];
window.addEventListener("view", () => {
  console.log("fired");
});
