'use strict';
console.log("java script berhasil dijalankan");

// NYALAKAN OPEN INVITATION
const openBtn = document.getElementById("bukaUndangan");
const cover = document.getElementById("cover");
const content = document.getElementById("contentUtama");
const music = document.getElementById("bgMusic");

// KLIK OPEN INVITATION
openBtn.addEventListener("click", () => {
  cover.classList.add("hide");
  content.classList.add("show");
  music.classList.add("show");
  document.body.style.overflow = "auto";
  music.play();
})


// CONTROL MUSIC
let isPlaying = true;

musicBtn.addEventListener("click", () => {
  if (isPlaying) {
    music.pause();
    musicBtn.innerHTML =
      '<i class="fa-solid fa-play"></i>'
  } else {
    music.play();
    musicBtn.innerHTML =
      '<i class="fa-solid fa-pause"></i>'
  }

  isPlaying = !isPlaying;
});


// NYALAKAN ANIMASI MASUK SETIAP SECTION
const hiddenElement = document.querySelectorAll(
  '.fade-down, .fade-up, .fade-left, .fade-right, .fade-in, .zoom-in'
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});
hiddenElement.forEach((el) => {
  observer.observe(el);
});


// HITUNG MUNDUR ACARA 
const targetDate = new Date("October 12, 2026 18:30:00").getTime();
setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hour = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minute = Math.floor(
    (distance % (1000 * 60 * 60)) / (1000 * 60)
  );
  const second = Math.floor(
    (distance % (1000 * 60)) / 1000
  );

  document.getElementById("hari").innerHTML = days;
  document.getElementById("jam").innerHTML = hour;
  document.getElementById("menit").innerHTML = minute;
  document.getElementById("detik").innerHTML = second;
}, 1000);

// BUTTON NEXT & PREVIEW
const fotoUtama = document.getElementById("mainImage");
const thumbnail = document.querySelectorAll(".thumbnail");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let currentIndex = 0;

function showImage(index) {
  fotoUtama.src = thumbnail[index].src;

  // hapus active dari semua thumbnail
  thumbnail.forEach((thumb) => {
    thumb.classList.remove("active")
  });
  // tambahkan acitve pada thumbnail
  thumbnail[index].classList.add("active");
}

prevBtn.addEventListener("click", () => {
  if (currentIndex == 0) {
    currentIndex = thumbnail.length - 1
  } else {
    currentIndex--
  };
  showImage(currentIndex);
});
nextBtn.addEventListener("click", () => {
  if (currentIndex == thumbnail.length - 1) {
    currentIndex = 0
  } else {
    currentIndex++
  };
  showImage(currentIndex);
});

//NYALAKAN ADD TO CALENDER
const wedding = {
  title: "wedding muhammad irfan & sarmila",
  year: 2026,
  month: 12,
  day: 1,
  startHour: 8,
  startMinute: 0,
  endHour: 11,
  endMinute: 0,
  location: "gedung",
  description: "Ditunggu kehadirannya."
}

const startDate =
  `${wedding.year}
${String(wedding.month).padStart(2, '0')}
T
${String(wedding.startHour).padStart(2, '0')}
${String(wedding.startMinute).padStart(2, '0')}
00`;

const endDate =
  `${wedding.year}
${String(wedding.month).padStart(2, '0')}
T
${String(wedding.endHour).padStart(2, '0')}
${String(wedding.endMInute).padStart(2, '0')}
00`;

const calendarLink =
  `https://calendar.google.com/calendar/render?action=TEMPLATE
&text=${encodeURIComponent(wedding.title)}
&dates=${startDate}/${endDate}
&details=${encodeURIComponent(wedding.description)}
&location=${encodeURIComponent(wedding.location)}
`;

document.getElementById("btnCalender").href = calendarLink;


// PARAMETER URL 
const urlParams = new URLSearchParams(window.location.search);

// PARAMETER TO
const guestName = urlParams.get("to");
const coverGuest = document.getElementById("guestName");
const guestInput = document.getElementById("guestInput");

if (guestName) {
  coverGuest.textContent = guestName;
  guestInput.value = guestName;
} else {
  coverGuest.textContent = "Tamu Undangan";
  guestInput.value = "";
}

// // LOKASI EVENT
// const lokasi = {
//     akad: {
//         name: "masjid al hijrah",
//         adress: "jl xxxxx",
//         maps: "https://maps.app.goo.gl/xxxxxxxx"
//     },

//     resepsi: {
//         name: "Gedung xxx",
//         adress: "jl xxxxx",
//         maps: "https://maps.app.goo.gl/xxxxxxxx"
//     }
// }

// const akadName = document.getElementById("akadName");
// const akadAddres = document.getElementById("akadAdrees");
// const akadBtn = document.getElementById("akadMapsBtn");

// akadName.textContent = lokasi.akad.name;
// akadAddres.innerHTML = lokasi.akad.adress;


// akadBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     window.open(lokasi.akad.maps, "_blank");
// });

// const resepsiName = document.getElementById("resepsiName");
// const resepsiAddres = document.getElementById("resepsiName");
// const resepsiBtn = document.getElementById("resepsiMapsBtn");

// resepsiName.textContent = lokasi.resepsi.name;
// resepsiName.innerHTML = lokasi.resepsi.adress;

// resepsiBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     window.open(lokasi.resepsi.maps, "_blank");
// });

// // ICON PENUTUP
// const tutupIcon = {
//     instagram: "https://www.instagram.com/milkhey.system?igsh=bmIzdmRjanBkNjM2"
// }

// const milkhey = document.getElementById("milkhey")
// milkhey.href = tutupIcon.instagram;


// BUTTON WEDDING GIFT
const btnGift = document.getElementById("giftbtn");
const giftContent = document.querySelector(".gift-content");

btnGift.addEventListener("click", () => {

  giftContent.classList.toggle("show");

});

// RSVP
const form = document.querySelector(".form-rsvp");

// const guestInput = document.getElementById("guestInput");
const wishInput = document.getElementById("wishInput");
const attendanceInput = document.getElementById("attendanceInput");
// BACKDEND
const API_URL = "https://script.google.com/macros/s/AKfycbyL99HASkizA7vNlxUkT9ivU3PntcEhIn-QZQE048R3bRFGXSgea79Q4fKvt_hMo0f9/exec";

const floatingArea = document.getElementById("floatingArea");
const floatingWish = document.getElementById("floatingWish");
const wishWrapper = document.getElementById("wishWrapper");
const cards = document.querySelectorAll(".wish-card");
const messages = document.querySelectorAll(".wish-message");
const senders = document.querySelectorAll(".wish-sender");
const jumlah = document.querySelectorAll(".jumlah");

console.log(messages.length);
console.log(senders.length);


let wishes = [];
let currentWish = 0;
let floatingInterval = null;
let lastTotalWish = 0;

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const ucapan = wishInput.value.trim();
  if (ucapan.length > 80) {
    alert("Ucapan maksimal 80 karakter");
    return;
  }

  const formData = new FormData();
  formData.append("nama", guestInput.value);
  formData.append("ucapan", ucapan);
  formData.append("kehadiran", attendanceInput.value);
  const body = {
    nama: guestInput.value,
    ucapan: ucapan,
    kehadiran: attendanceInput.value
  };

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      body: formData
    });
    const result = await response.json();
    console.log(result);
    await getWish();
    wishInput.value = "";
    attendanceInput.selectedIndex = 0;
  } catch (err) {
    console.error(err);
  }
});

async function getWish() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    jumlah[0].textContent = data.totalUcapan ?? 0;
    jumlah[1].textContent = data.hadir ?? 0;
    jumlah[2].textContent = data.tidakHadir ?? 0;
    wishes = data.comments;

    console.log("response: ", data);
    wishes = data.comments;
    console.log("comment: ", wishes);
    console.log("jumlah: ", wishes.length);
    console.log(wishes);
    if (floatingInterval == null && wishes.length > 0) {
      startFloatingWish();
    }
  } catch (err) {
    console.err(err);
  }
}

function showWish(card, index) {
  console.log("showWish dipanggil");
  console.log("card :", card);
  console.log("index :", index);
  console.log("data :", wishes[index]);

  if (!wishes[index]) return;
  messages[card].textContent = wishes[index].ucapan;
  senders[card].textContent = "- " + wishes[index].nama;

  console.log(messages[card].textContent);
  console.log(senders[card].textContent);

}

function showFloatingWish() {
  floatingWish.classList.add("show");
}
function hideFloatingWish() {
  floatingWish.classList.remove("show");
}

const floatingObserv = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      showFloatingWish();
      startFloatingWish();
    } else {
      hideFloatingWish();
      stopFloatingWish();
    }
  });
}, {
  threshold: 0.2
});
floatingObserv.observe(floatingArea);

function animateWish() {

  if (wishes.length <= 1) return;

  cards[0].classList.add("hide");
  cards[1].classList.add("hide");
  setTimeout(() => {
    currentWish++;

    if (currentWish >= wishes.length) {
      currentWish = 0;
    }
    showWish(0, currentWish);
    let next = currentWish + 1;
    if (next >= wishes.length) {
      next = 0;
    }
    showWish(1, next);
    cards[0].classList.remove("hide");
    cards[1].classList.remove("hide");
    cards[0].classList.add("show");
    cards[1].classList.add("show");

  }, 300);

}
function startFloatingWish() {

  if (floatingInterval) return;

  if (wishes.length == 0) return;

  currentWish = 0;

  showWish(0, 0);

  if (wishes.length > 1) {
    cards[1].style.display = "block";
    showWish(1, 1);
  } else {
    cards[1].style.display = "none";
  }
  cards.forEach(card => {
    card.classList.add("show");
  });

  floatingInterval = setInterval(animateWish, 3000);

}


function stopFloatingWish() {
  clearInterval(floatingInterval);
  floatingInterval = null;
}

getWish();
setTimeout(() => {
  startFloatingWish();
}, 1000);

console.log(messages);
console.log(senders)

// WEDDING GIFT
function copyRekening(id) {
  const rekening = document.getElementById(id).textContent;
  navigator.clipboard.writeText(rekening);
  alert("Nomor rekening berhasil disalin");
}