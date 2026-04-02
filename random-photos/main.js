const imageContainerEl = document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", () => {
    // console.log("done");
    createImage();
});

function createImage() {
    let imageNum = 12;
    for (let i = 0; i < imageNum; i++) {
         const imageEl = document.createElement("img");
  imageEl.src = `https://picsum.photos/200/300?random=${Math.floor(Math.random() * 2000)}`;
  imageContainerEl.appendChild(imageEl);
    }
}
