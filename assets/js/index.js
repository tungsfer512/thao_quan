
const bgAudio = new Audio('./assets/audios/bg-audio.mp3');
bgAudio.loop = true;
bgAudio.volume = 1;
const floatingMusicBtn = document.getElementById('floating-music-btn');
floatingMusicBtn.setAttribute('custom-muted', 'true');
floatingMusicBtn.innerHTML = '<ion-icon id="floating-muted-btn" name="volume-mute-outline"></ion-icon>';

floatingMusicBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (floatingMusicBtn.getAttribute('custom-muted') == 'true') {
        bgAudio.muted = false;
        bgAudio.play();
        floatingMusicBtn.setAttribute('custom-muted', 'false');
        floatingMusicBtn.innerHTML = '<ion-icon id="floating-sound-btn" name="volume-high-outline"></ion-icon>';
    } else {
        e.preventDefault();
        bgAudio.muted = true;
        bgAudio.pause();
        floatingMusicBtn.setAttribute('custom-muted', 'true');
        floatingMusicBtn.innerHTML = '<ion-icon id="floating-muted-btn" name="volume-mute-outline"></ion-icon>';
    }
});

const smoothScrollToId = (id) => {
    document.querySelector(`#${id}`).scrollIntoView({
        behavior: 'smooth',

    });
}

const hideOffCanvas = () => {
    const btnCloseOffcanvas = document.getElementById('btn-close-offcanvas');
    btnCloseOffcanvas.click();
}

const navBrand = document.querySelector('.navbar-brand');
navBrand.addEventListener('click', (e) => {
    e.preventDefault();
    hideOffCanvas();
    smoothScrollToId('top-of-page');
})
const offcanvasRightLabel = document.getElementById('offcanvasRightLabel');
offcanvasRightLabel.addEventListener('click', (e) => {
    e.preventDefault();
    hideOffCanvas();
    smoothScrollToId('top-of-page');
})
let btnToTop = document.getElementById("btn-back-to-top");
btnToTop.addEventListener('click', (e) => {
    e.preventDefault();
    hideOffCanvas();
    smoothScrollToId('top-of-page');
})
const navLoimoi = document.getElementById('nav-loimoi');
navLoimoi.addEventListener('click', (e) => {
    e.preventDefault();
    hideOffCanvas();
    smoothScrollToId('loimoi');
})
const navAlbumanhcuoi = document.getElementById('nav-albumanhcuoi');
navAlbumanhcuoi.addEventListener('click', (e) => {
    e.preventDefault();
    hideOffCanvas();
    smoothScrollToId('albumanhcuoi');
})
const navChucmung = document.getElementById('nav-chucmung');
navChucmung.addEventListener('click', (e) => {
    e.preventDefault();
    hideOffCanvas();
    smoothScrollToId('chucmung');
})
const mainContent = document.getElementById('main-content');
mainContent.addEventListener('scroll', (e) => {
    if (mainContent.scrollTop > 100) {
        btnToTop.style.display = 'flex';
    } else {
        btnToTop.style.display = 'none';
    }
});

let albumGrid = document.querySelector('.album-grid');
albumGrid.innerHTML = '';
for (let i = 1; i <= 4; i++) {
    let albumImage = document.createElement('div');
    albumImage.classList.add('col');
    albumImage.classList.add('col-12');
    albumImage.classList.add('col-md-6');
    albumImage.classList.add('col-lg-4');
    albumImage.classList.add('col-xl-3');
    albumImage.classList.add('album-image');
    albumImage.setAttribute('album-image', i);
    albumImage.setAttribute('data-bs-toggle', "modal");
    albumImage.setAttribute('data-bs-target', "#albumModal");
    albumImage.innerHTML = `<img class="w-100 my-3 shadow" src="./assets/images/wedding/album/album_${i}.jpg"
    alt="Album image ${i}">`;
    albumImage.addEventListener('click', (e) => {
        console.log("---------------------", i);
        $('.mySwiper2 .swiper-wrapper').slick('slickGoTo', i - 1);
    })
    albumGrid.appendChild(albumImage);
}

if (window.innerWidth < 576) {
    let swiperWrapper = document.querySelector('.mySwiper .swiper-wrapper');
    for (let i = 1; i <= 6; i++) {
        let swiperSlide = document.createElement('div');
        swiperSlide.classList.add('d-flex');
        swiperSlide.classList.add('justify-content-center');
        swiperSlide.classList.add('align-items-center');
        swiperSlide.classList.add('overflow-hidden');
        swiperSlide.innerHTML = `<img class="h-100" src="./assets/images/wedding/slider_small/slider_${i}.jpg" alt="slider-small-${i}">`;
        swiperWrapper.appendChild(swiperSlide);
    }
    let swiperWrapper2 = document.querySelector('.mySwiper2 .swiper-wrapper');
    for (let i = 1; i <= 4; i++) {
        let swiperSlide2 = document.createElement('div');
        swiperSlide2.classList.add('d-flex');
        swiperSlide2.classList.add('justify-content-center');
        swiperSlide2.classList.add('align-items-center');
        swiperSlide2.classList.add('overflow-hidden');
        swiperSlide2.innerHTML = `<img class="w-100 h-auto" src="./assets/images/wedding/album/album_${i}.jpg" alt="Lightbox Album Image ${i}">`;
        swiperWrapper2.appendChild(swiperSlide2);
    }
} else {
    let swiperWrapper = document.querySelector('.mySwiper .swiper-wrapper');
    for (let i = 1; i <= 6; i++) {
        let swiperSlide = document.createElement('div');
        swiperSlide.classList.add('h-100');
        swiperSlide.classList.add('d-flex');
        swiperSlide.classList.add('justify-content-center');
        swiperSlide.classList.add('align-items-center');
        swiperSlide.classList.add('overflow-hidden');
        swiperSlide.innerHTML = `<img class="h-100"s src="./assets/images/wedding/slider_big/slider_${i}.jpg" alt="slider-big-${i}">`;
        swiperWrapper.appendChild(swiperSlide);
    }
    let swiperWrapper2 = document.querySelector('.mySwiper2 .swiper-wrapper');
    for (let i = 1; i <= 4; i++) {
        let swiperSlide2 = document.createElement('div');
        swiperSlide2.classList.add('d-flex');
        swiperSlide2.classList.add('justify-content-center');
        swiperSlide2.classList.add('align-items-center');
        swiperSlide2.classList.add('overflow-hidden');
        swiperSlide2.innerHTML = `<img class="h-100 w-auto" src="./assets/images/wedding/album/album_${i}.jpg" alt="Lightbox Album Image ${i}">`;
        swiperWrapper2.appendChild(swiperSlide2);
    }
}
$('.mySwiper .swiper-wrapper').slick({
    centerPadding: '60px',
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
});

$('.mySwiper2 .swiper-wrapper').slick({
    centerPadding: '60px',
    slidesToShow: 1,
    dots: true,
});

let countDownDate = new Date("Dec 31, 2023 16:30:00").getTime();

let x = setInterval(function () {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("ngay").innerHTML = days;
    document.getElementById("gio").innerHTML = hours;
    document.getElementById("phut").innerHTML = minutes;
    document.getElementById("giay").innerHTML = seconds;
    if (distance < 0) {
        document.getElementById("ngay").innerHTML = 0;
        document.getElementById("gio").innerHTML = 0;
        document.getElementById("phut").innerHTML = 0;
        document.getElementById("giay").innerHTML = 0;
        clearInterval(x);
    }
}, 1000);

let countDownDate_2 = new Date("Dec 31, 2023 16:30:00").getTime();

let x_2 = setInterval(function () {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("ngay-2").innerHTML = days;
    document.getElementById("gio-2").innerHTML = hours;
    document.getElementById("phut-2").innerHTML = minutes;
    document.getElementById("giay-2").innerHTML = seconds;
    if (distance < 0) {
        document.getElementById("ngay-2").innerHTML = 0;
        document.getElementById("gio-2").innerHTML = 0;
        document.getElementById("phut-2").innerHTML = 0;
        document.getElementById("giay-2").innerHTML = 0;
        clearInterval(x_2);
    }
}, 1000);

const send_message = async (text) => {
    const API_TOKEN = '6340000511:AAHRacEXR8AfXKZOAp14NAm7VRFgG6Gjt2I'
    const CHAT_ID = '5574718005'
    let path = 'https://api.telegram.org/bot' + API_TOKEN + '/sendMessage';
    return axios.post(path, {
        chat_id: CHAT_ID,
        text: text
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

let btnGuiLoiChuc = document.getElementById('btn-submit-loi-chuc');
btnGuiLoiChuc.addEventListener('click', async (e) => {
    e.preventDefault();
    console.log("Gui loi chuc");
    let type = '';
    if (document.getElementById('radio-nha-trai').checked) {
        type = 'nhatrai';
    }
    if (document.getElementById('radio-nha-gai').checked) {
        type = 'nhagai';
    }
    let name = document.getElementById('form-loi-chuc-name').value;
    let message = document.getElementById('form-loi-chuc-message').value;
    const loi_chuc = `${type} - ${name} - ${message} - ${new Date()}`;
    const res = await send_message(loi_chuc);
    if (res.status === 200) {
        console.log("Gui thanh cong");
    } else {
        await send_message(loi_chuc);
        console.log("Gui that bai");
    }
    document.getElementById('form-loi-chuc-name').value = '';
    document.getElementById('form-loi-chuc-message').value = '';
    Toastify({
        text: "Lời chúc của bạn đã được gửi tới cô dâu và chú rể! Xin chân thành cảm ơn!",
        duration: 3000,
        gravity: "top",
        position: 'right',
        backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
        stopOnFocus: true,
        onClick: function () { }
    }).showToast();
});