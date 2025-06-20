// === Preview Slider (News Cards) ===
const track = document.querySelector('.preview-track');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

if (track && leftArrow && rightArrow) {
  leftArrow.addEventListener('click', () => {
    track.scrollBy({ left: -300, behavior: 'smooth' });
  });

  rightArrow.addEventListener('click', () => {
    track.scrollBy({ left: 300, behavior: 'smooth' });
  });
}

// === Award Slider (Player Awards) ===
const awardSections = document.querySelectorAll('.award-category');
const awardLeft = document.querySelector('.award-arrow.left');
const awardRight = document.querySelector('.award-arrow.right');

let awardIndex = 0;

function updateAwards(index) {
  awardSections.forEach((section, i) => {
    section.classList.toggle('active', i === index);
  });
}

if (awardSections.length && awardLeft && awardRight) {
  awardLeft.addEventListener('click', () => {
    awardIndex = (awardIndex - 1 + awardSections.length) % awardSections.length;
    updateAwards(awardIndex);
  });

  awardRight.addEventListener('click', () => {
    awardIndex = (awardIndex + 1) % awardSections.length;
    updateAwards(awardIndex);
  });

  updateAwards(awardIndex);

  // Optional: Enable arrow key navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      awardIndex = (awardIndex + 1) % awardSections.length;
      updateAwards(awardIndex);
    } else if (e.key === 'ArrowLeft') {
      awardIndex = (awardIndex - 1 + awardSections.length) % awardSections.length;
      updateAwards(awardIndex);
    }
  });
}