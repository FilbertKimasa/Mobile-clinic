const navOpen = document.querySelector('.bars');
const closeMenu = document.querySelector('.close-btn');
const mobileNav = document.querySelector('.menu');
const navLinkClose = document.querySelectorAll('.menu li');

// moibile navigation begin
navOpen.addEventListener('click', () => {
  mobileNav.classList.add('nav-active');
});

const closeMobileNav = () => {
  // mobileNav.style.display = "";
  mobileNav.classList.remove('nav-active');
  document.body.style.overflow = 'auto';
};

closeMenu.addEventListener('click', closeMobileNav);
navLinkClose.forEach((link) => {
  link.addEventListener('click', () => {
    navLinkClose.forEach(() => mobileNav.classList.remove('nav-active'));
  });
});

// miobile navigation end

// team begin
const team = [
  {
    index: '0',
    name: 'Dr. Felix Maega',
    image: './images/photos/doctor 5.png',
    title: 'Chief of Surgery',
    description:
      'Member of the American College of Surgeons (ACS) and Board-certified by the American Board of Surgery',
  },
  {
    index: '1',
    name: 'Dr. Emily Patel',
    image: './images/photos/doctor 4.png',
    title: 'Team Leader, Medicine',
    description:
      ' Medical Doctorate (M.D.), and completed her residency training at a renowned teaching hospital.',
  },
  {
    index: '2',
    name: 'Dr. Johnson Johnson',
    image: './images/photos/doctor3.png',
    title: 'Pediatrics Spcialist',
    description:
      'specialized training in pediatrics, Dr. Johnson brings over a decade of expertise to her practice.',
  },
  {
    index: '3',
    name: 'Dr. Isabella Brooks',
    image: './images/photos/lab tech.png',
    title: 'Pediatrics Spcialist',
    description:
      'clinical psychopath and mental health specialist with a passion for helping individuals achieve emotional well-being. With over a decade of experience in the field',
  },
  {
    index: '4',
    name: 'Dr. Michael Ramirez',
    image: './images/photos/lab-tech-1.png',
    title: 'Pediatrics Spcialist',
    description:
      "Bachelor's degree in Medical Laboratory Science and several years of hands-on experience, ensures reliable laboratory test results.",
  },
  {
    index: '5',
    name: 'Dr. Olivia Carter',
    image: './images/photos/pharmacist.png',
    title: 'Pharmaceutical Team Leader',
    description:
      'Doctor of Pharmacy (Pharm.D.) degree and specialized training in clinical pharmacy, she brings a wealth of expertise to her practice.',
  },
];

const teamSection = document.querySelector('.team');
const teamWraperDiv = document.createElement('div');
teamWraperDiv.classList.add('team-wraper');
if (teamWraperDiv) {
  for (let i = 0; i < team.length; i += 1) {
    const temCardDiv = document.createElement('div');
    temCardDiv.classList.add('team-card');
    temCardDiv.innerHTML = `<div class="photo">
      <img
        src="${team[i].image}"
        alt="profile picture"
        class="profile-picture"
      />
    </div>
    <div class="profile">
      <h3>${team[i].name}</h3>
      <p class="min-datails">${team[i].title}</p>
      <p class="details">
        ${team[i].description}
      </p>
    </div>`;
    teamWraperDiv.appendChild(temCardDiv);
  }
  teamSection.appendChild(teamWraperDiv);
}
