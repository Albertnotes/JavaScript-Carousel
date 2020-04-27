;(function () {
  // Variables
  let active = 0;
  const imgList = document.querySelectorAll('.slider_list > img');
  const dotList = document.querySelectorAll('.slider_dots > li');
  const prev = document.querySelector('.slider_prev');
  const next = document.querySelector('.slider_next');
  const imgTotal = imgList.length; // Carousel max-value
  // init Status
  imgList.forEach((item) => {
    item.style['display'] = 'none';
  })
  imgList[active].style['display'] = 'block';
  dotList[active].classList.add('active');
  // Status function
  const removeStatus = (i) => {
    dotList[i].classList.remove('active');
    imgList[i].style['display'] = 'none';
  }
  const addStatus = (i) => {
    dotList[i].classList.add('active');
    imgList[i].style['display'] = 'block';
  }
  // watch event
  dotList.forEach((item, index) => {
    item.addEventListener('click', () => {
      removeStatus(active);
      active = index;
      addStatus(active);
    })
  })
  prev.addEventListener('click', () => {
    removeStatus(active);
    if (active > 0) {
      active--;
    } else {
      active = imgTotal - 1
    }
    addStatus(active);
  })
  next.addEventListener('click', () => {
    removeStatus(active);
    if (active < imgTotal - 1) {
      active++;
    } else {
      active = 0;
    }
    addStatus(active);
  })
})()
