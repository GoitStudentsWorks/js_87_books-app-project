const list = document.querySelector('.list-support')
let number = 1

const arraySopportUA = [
  {
    title: 'Save the Children',
    url:'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: '../img/support-img/image 1.png',
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: '../img/support-img/image 2.png',
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: '../img/support-img/image 3.png',
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: '../img/support-img/image 4.png',
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: '../img/support-img/image 5.png',
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: '../img/support-img/image 6.png',
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: '../img/support-img/image 7.png',
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: '../img/support-img/image 8.png',
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: '../img/support-img/image 9.png',
  },
]

function createCharityElement(charity) {
  const formattedNumber = String(number).padStart(2, '0');
  number += 1; 
  return `
    <li class="el-support">
    <p class='number'>${formattedNumber}</p>
      <a href="${charity.url}" class="a-support" target="_blank">
        <img src="${charity.img}" alt="${charity.title}" class="img-support">
      </a>
    </li>
  `;
}

export function load() {
  list.innerHTML = arraySopportUA.map((charity) => createCharityElement(charity)).join('');
}
