const URL =
"https://script.google.com/macros/s/AKfycbzUjAmJvlVhP4E4S8uCrPFjU0jVX6V0l76GM3_c5Qbl0_fZ5HTRYqUBYiLkSSwAfPnX/exec";

document
.getElementById(
"submitBtn"
)
.addEventListener(
"click",
send);

async function send(){

const data={

name:
document
.getElementById("name").value,

discord:
document
.getElementById("discord").value,

nickname:
document
.getElementById("nickname").value,

message:
document
.getElementById("msg").value

};

await fetch(
URL,
{
method:"POST",
body:
JSON.stringify(data)
}
);

/* Animation */

const box =
document.querySelector(
".box"
);

box.style.transition=
".6s";

box.style.transform=
"scale(.9)";

box.style.opacity=
"0";

setTimeout(()=>{

box.innerHTML=`

<div class="success">

<div class="tick">
✓
</div>

<h2>
Account Verified
</h2>

<p>
Verification completed successfully
</p>

</div>

`;

box.style.opacity=
"1";

box.style.transform=
"scale(1)";

},600);

}
