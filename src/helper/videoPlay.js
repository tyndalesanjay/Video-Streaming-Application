let options = {
    root: null,
    rootMargin:'0px',
    threshold: 1.0
  }
  let callback = (entries, observer) => {
    entries.array.forEach(entry => {
      if(entry.target.id == 'myVideo') {
        if(entry.isIntersecting) {
            entry.target.play();
        } else {
            entry.target.pause()
        }
      }
    });
  }
  let observer = new IntersectionObserver(callback, options);
  observer.observe(document.querySelector('#myVideo'));