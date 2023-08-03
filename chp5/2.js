function meth() {
    const a = 50 / 0;
}
function hie() {
    meth();
}
function hello() {
    try {
        hie();
    }
    catch (e) {
        console.log(e.name);
        console.log(e.message);
    }
}
hello()