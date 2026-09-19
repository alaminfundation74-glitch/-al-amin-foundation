const menuBtn=document.querySelector('.menu-btn');
const menu=document.querySelector('.menu');
menuBtn?.addEventListener('click',()=>menu.classList.toggle('open'));
document.querySelectorAll('.menu a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));
function sendMessage(e){
  e.preventDefault();
  alert('ধন্যবাদ! আপনার বার্তাটি প্রস্তুত হয়েছে। ওয়েবসাইটের এই ডেমো ফর্মে সরাসরি ইমেইল পাঠানো সক্রিয় করা হয়নি।');
}
