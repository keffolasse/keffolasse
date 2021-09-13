import lottieWeb from 'https://cdn.skypack.dev/lottie-web';

var animation = lottieWeb.loadAnimation({
  container: document.getElementById('demo'),
  path: 'https://maxst.icons8.com/vue-static/landings/animated-icons/icons/pause/pause.json',
  renderer: 'svg',
  loop: true,
  autoplay: true,
  name: "Demo Animation",
});
