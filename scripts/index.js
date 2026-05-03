const images = document.querySelectorAll('img');
const image_texts = document.querySelectorAll('p');

images.forEach(image => {
    image.addEventListener("mouseover", ()=> {
        let index = Array.from(images).indexOf(image);
        image.classList.add("box-shadow-images");
        image_texts[index].classList.add("image-text-view");
})
})

images.forEach(image => {
    image.addEventListener("mouseout", ()=> {
        let index = [...images].indexOf(image);
        image.classList.remove("box-shadow-images");
        image_texts[index].classList.remove("image-text-view");
        
})
})

