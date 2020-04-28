;(function () {
  // Variables
  let active = 0;
  const imgList = [...document.querySelectorAll('.slider_list > img')];
  const dotList = [...document.querySelectorAll('.slider_dots > li')];
  const prev = document.querySelector('.slider_prev');
  const next = document.querySelector('.slider_next');
  const imgTotal = imgList.length; // Carousel max-value

  // init Status
  imgList.forEach((item) => {
    item.style['display'] = 'none';
  })
  imgList[active].style['display'] = 'block';
  dotList[active].classList.add('active');

  /**
   * Status function
   * @param {*} i active 變數
   */
  const removeStatus = (i) => {
    dotList[i].classList.remove('active'); // 移除 active Class
    imgList[i].style['display'] = 'none'; // 不顯示 active索引值的圖片
    imgList[i].classList.remove('js-fadeIn'); // 移除淡入效果
  }
  const addStatus = (i) => {
    dotList[i].classList.add('active'); // 增加 active Class
    imgList[i].style['display'] = 'block'; // 顯示 active索引值的圖片
    imgList[i].classList.add('js-fadeIn'); // 增加淡入效果
  }
  const clickCount = (i) => active = (i + imgTotal) % imgTotal;
  /**
   * Event 監聽
   */
  dotList.forEach((item, index) => {
    item.addEventListener('click', () => {
      clearInterval(auto);
      removeStatus(active);
      active = index;
      addStatus(active);
    })
  })
  prev.addEventListener('click', () => {
    clearInterval(auto);
    removeStatus(active);
    clickCount(active - 1);
    addStatus(active);
  })
  next.addEventListener('click', () => {
    clearInterval(auto);
    removeStatus(active);
    clickCount(active + 1);
    addStatus(active);
  })
  const auto = window.setInterval(() => {
    removeStatus(active);
    clickCount(active + 1);
    addStatus(active);
  }, 5000)
})()
