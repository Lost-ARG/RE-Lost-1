var sleep = (ms = 0) => {
    return new Promise(r => setTimeout(r, ms));
}

var imgPath;
async function imgChange() {
    $('#codeImg').css('display', 'block');
    for (let i = 0; i < 10; i++) {
        for (let i = 1; i <= 4; i++) {
            imgPath = '../img/codeConer0' + i + '.jpg';
            $('#codeImg').attr('src', imgPath);
            await sleep(100);
            $('#codeImg').css('opacity', Math.random() - 0.4);
        }

    }
    $('#codeImg').css('display', 'none');
}

async function bgChange() {
    while (true) {
        await sleep(Math.random() * 20000 + 10000);
        await imgChange();
    }
}
bgChange();

function goOOXX() {
    location.replace('../pages/OOXX.html');
}