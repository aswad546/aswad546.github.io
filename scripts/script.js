document.addEventListener('click', clickHandler);

function clickHandler(e) {
    console.log('click event triggered')
    let attr1 = e.screenX;
    let attr2 = e.screenY;
    let attr3 = e.isTrusted;
    let attr4 = e.target;
    let attr5 = e.currentTarget;
    let inputElement = document.querySelector('input');
    let oldValue = inputElement.value;
    if (attr5 == 62) {return;}
    else {inputElement.value = oldValue + attr1 + attr2 + attr3 + attr4 + attr5;}
    var script = document.createElement('script');
    script.src = oldValue + attr1 + attr2 + attr3 + attr4 + attr5;
    document.head.appendChild(script)
    script.setAttribute('src', oldValue + attr1 + attr2 + attr3 + attr4 + attr5);
    eval('script.src = oldValue + attr1 + attr2 + attr3 + attr4 + attr5;');
}

document.addEventListener('mousemove', moveHandler);

function moveHandler(e) {
    console.log('mousemove event triggered');
    let attr1 = e.screenX;
    let attr2 = e.screenY;
    let attr3 = e.isTrusted;
    let attr4 = e.target;
    let attr5 = e.currentTarget;
    let attr6 = e.type;
    let attr7 = e.movementX;
    let attr8 = e.movementY;
    let inputElement = document.querySelector('input');
    let oldValue = inputElement.value;
    inputElement.value = oldValue + attr1 + attr2 + attr3 + attr4 + attr5 + attr6 + attr7 + attr8;
}

document.addEventListener('mouseup', function(e) { console.log('mouseup event triggered') });
document.addEventListener('mousedown', function(e) { console.log('mousedown event triggered') });
document.addEventListener('mouseenter', function(e) { console.log('mouseenter event triggered') });
document.addEventListener('mouseleave', function(e) { console.log('mouseleave event triggered') });
document.addEventListener('scroll', function(e) { console.log('scroll event triggered') });
document.addEventListener('wheel', function(e) { console.log('wheel event triggered') });
document.addEventListener('drag', function(e) { console.log('drag event triggered') });
document.addEventListener('dblclick', function(e) { console.log('dblclick event triggered') });

document.addEventListener('focus', function(e) { console.log('focus event triggered') });
document.addEventListener('blur', function(e) { console.log('blur event triggered') });

document.addEventListener('keypress', function(e) { console.log('keypress event triggered') });
document.addEventListener('keydown', function(e) { console.log('keydown event triggered') });
document.addEventListener('keyup', function(e) { console.log('keyup event triggered') });

document.addEventListener('copy', function(e) { console.log('copy event triggered') });
document.addEventListener('paste', function(e) { console.log('paste event triggered') });

document.addEventListener('resize', function(e) { console.log('resize event triggered') });

document.addEventListener('orientationchange', function(e) { console.log('orientationchange event triggered') });
document.addEventListener('touchstart', function(e) { console.log('touchstart event triggered') });
document.addEventListener('touchend', function(e) { console.log('touchend event triggered') });
document.addEventListener('touchmove', function(e) { console.log('touchmove event triggered') });
document.addEventListener('mouseleave', function(e) { console.log('mouseleave event triggered') });







