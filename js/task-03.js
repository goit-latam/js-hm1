const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector('.gallery');
// const imagesList = images
//   .map(element => `<li><img src="${element.url}" alt="${element.alt}" width=300 height=200 ></li>`)
//   .join('');
// imagesEl.insertAdjacentHTML('afterbegin', imagesList);

// // los estilos son opcionales
// imagesEl.style.display = 'flex';
// imagesEl.style.listStyleType = 'none';
// imagesEl.style.justifyContent = 'center';

const galleryHTML = images
  .map(image => {
    const img = `
    <li>
      <img  src="${image.url}" alt="${image.alt}">
    </li>
  `;
    return img;
  })
  .join('');
gallery.insertAdjacentHTML('beforeend', galleryHTML);
