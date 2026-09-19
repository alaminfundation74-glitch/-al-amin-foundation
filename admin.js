const DEMO_USER="admin"; const DEMO_PASS="1234";
function getData(){return JSON.parse(localStorage.getItem("alAminData")||'{"capital":500000,"profit":75000,"loan":300000}')}
function login(){const u=document.getElementById("username").value,p=document.getElementById("password").value;if(u===DEMO_USER&&p===DEMO_PASS){sessionStorage.setItem("alAminAdmin","yes");showDash()}else document.getElementById("loginMsg").textContent="Username বা Password সঠিক নয়।"}
function showDash(){document.getElementById("loginBox").classList.add("hidden");document.getElementById("dashboard").classList.remove("hidden");const d=getData();capitalInput.value=d.capital;profitInput.value=d.profit;loanInput.value=d.loan}
function saveData(){const d={capital:Number(capitalInput.value||0),profit:Number(profitInput.value||0),loan:Number(loanInput.value||0)};localStorage.setItem("alAminData",JSON.stringify(d));document.getElementById("saveMsg").textContent="হিসাব সফলভাবে সংরক্ষণ হয়েছে।"}
function logout(){sessionStorage.removeItem("alAminAdmin");location.reload()}
if(sessionStorage.getItem("alAminAdmin")==="yes")showDash();
