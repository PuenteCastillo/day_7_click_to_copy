// variables

const btn = document.querySelector(".btn");
const coupon = document.querySelector(".coupon");

// event listeners
btn.addEventListener("click", copyText);

// functions
function copyText(e) {
  e.preventDefault();
  coupon.select();
  coupon.setSelectionRange(0, -1);
  document.execCommand("copy");
  btn.innerHTML = "Copied!";

  setTimeout(() => {
    btn.innerHTML = "Copy";
  }, 2000);
}
