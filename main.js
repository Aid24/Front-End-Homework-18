function getRandomImage() {
  const randomNumber = Math.floor(Math.random() * 9) + 1;
  const imagePath = `images/${randomNumber}.jpg`;
  const image = document.createElement('img');
  image.src = imagePath;
  return image;
}
