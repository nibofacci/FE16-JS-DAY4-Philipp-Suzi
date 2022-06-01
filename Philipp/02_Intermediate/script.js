const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));

const giftButtons = document.querySelectorAll(".gift-btn");

const clickGift = (e) => {
    console.log(e.target.src)
    e.target.src = "images/santa-claus.png"
}

const changeBackground = (e) => {
    const r = randomBetween(0, 127);
    const g = randomBetween(0, 127);
    const b = randomBetween(0, 127);
    const rand_rgb = `rgb(${r},${g},${b})`; // Collect all to a css color string
    document.body.style.backgroundColor = rand_rgb
}

giftButtons.forEach(elem => {
    elem.addEventListener("click", clickGift)
    elem.addEventListener("click", changeBackground)
});
