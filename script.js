// variables

const btn = document.querySelector(".btn");
const coupon = document.querySelector(".coupon");

// event listeners
btn.addEventListener("click", copyText);

// functions
function copyText(e) {
  e.preventDefault();

  //? deprecated
  // coupon.select();
  // coupon.setSelectionRange(0, -1);
  // document.execCommand("copy");
  // btn.innerHTML = "Copied!";
  // setTimeout(() => {
  //   btn.innerHTML = "Copy";
  // }, 2000);

  //? new way
  navigator.clipboard.writeText(coupon.value).then(() => {
    btn.innerHTML = "Copied!";
    setTimeout(() => {
      btn.innerHTML = "Copy";
    }, 2000);
  });
}
