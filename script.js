// تحميل نص حزب البحر
const content = document.getElementById("content");

if (content) {

    content.innerHTML = `
    بسم الله الرحمن الرحيم

    <br><br>

    الحمد لله رب العالمين، والصلاة والسلام على سيدنا محمد وعلى آله وصحبه أجمعين.

    <br><br>

    حزب البحر

    <br><br>

    يا الله يا علي يا عظيم يا حليم يا كريم.

    <br><br>

    اللهم إني أسألك بأسمائك الحسنى وصفاتك العلى أن تحفظني بعنايتك،
    وأن تجعل لي من كل هم فرجاً ومن كل ضيق مخرجاً.

    <br><br>

    اللهم يا لطيف الطف بنا فيما جرت به المقادير،
    واحفظنا من بين أيدينا ومن خلفنا وعن أيماننا وعن شمائلنا.

    <br><br>

    (ضع نص حزب البحر الكامل هنا)

    `;
}


// تكبير الخط
let size = 22;

function zoomIn(){

    size += 2;

    document.getElementById("content").style.fontSize = size + "px";

}


// تصغير الخط
function zoomOut(){

    if(size > 14){

        size -= 2;

        document.getElementById("content").style.fontSize = size + "px";

    }

}


// حفظ مكان القراءة
window.onload = function(){

    let saved = localStorage.getItem("bahrScroll");

    if(saved){

        window.scrollTo(0, saved);

    }

};


window.onscroll = function(){

    localStorage.setItem("bahrScroll", window.scrollY);

};