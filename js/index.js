const storeScroll = () => {
  document.documentElement.dataset.scroll =
    window.scrollY > 5 ? 'not-top' : 'top';
};
document.addEventListener('scroll', storeScroll);
storeScroll();
