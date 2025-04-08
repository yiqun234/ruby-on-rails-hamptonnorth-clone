// Entry point for the app

// Logo data
const logos = [
  { src: 'https://hamptonnorth.com/wp-content/uploads/2024/03/5e9647402657b44e29c070ff_Anduril-New-Logo.png', alt: 'Anduril' },
  { src: 'https://hamptonnorth.com/wp-content/uploads/2024/03/Subway_2016_logo.svg_.png', alt: 'Subway' },
  { src: 'https://hamptonnorth.com/wp-content/uploads/2024/03/649b83bdf5ffed205f5e0db8_64419799bc60941e1e956b93_DTEX_Logo_070721_Positive_RGB_NotAg5B825D.png', alt: 'DTEX' },
  { src: 'https://hamptonnorth.com/wp-content/uploads/2024/03/Onapsis-Aletrnate-Logo-@2x.png', alt: 'Onapsis' },
  { src: 'https://hamptonnorth.com/wp-content/uploads/2024/10/9c9de017-3473-4ec5-90a3-60496ff1b984.png', alt: 'Lodestone' },
  { src: 'https://hamptonnorth.com/wp-content/uploads/2024/03/f36a96d0-68ec-4111-aef1-57bedd7481e8.png', alt: 'Group1001' },
  { src: 'https://hamptonnorth.com/wp-content/uploads/2024/03/UpdaterPro_dark_vvqqya-e1712138013918.png', alt: 'Updater' },
];

// Testimonial data
const testimonials = [
  { testimonial: "Hampton North is receptive of my style to be really clear up front but they're also really great at the second piece of [taking in] all that feedback and iterate off of that", name: "Conor Sherman", title: "CISO at Updater", videoUrl: "https://www.youtube.com/embed/TrYE1ntvUa0", thumbnail: "/images/youtube/1.jpg" },
  { testimonial: "Ruby and Hampton North, both changed how I will look at recruiters, and they've kind of raised the bar of what I expect.", name: "Derek McCullough", title: "Information Security Officer at Bradken", videoUrl: "https://www.youtube.com/embed/hYitYMhac2s", thumbnail: "/images/youtube/2.jpg" },
  { testimonial: "Stuart personally drove me to that interview in Irvine from LA. And that just left the hugest impression on me because what recruiter has that level of involvement in your success?", name: "Jake Peterson", title: "Senior Security Engineer", videoUrl: "https://www.youtube.com/embed/WVx4SEGhE04", thumbnail: "/images/youtube/3.jpg" },
  { testimonial: "Stuart is an incredible communicator. He doesn't leave things sitting and wondering, and he'll let you know when things are slow on one side or the other, he's very clear about it.", name: "Shane James", title: "Head of Global Customer Success Management at Onapsis", videoUrl: "https://www.youtube.com/embed/pPbR3jYCM-Q", thumbnail: "/images/youtube/4.jpg" },
  { testimonial: "I actually had a little more of the imposter syndrome…Ross as the recruiter really helped make me feel confident that I was the right person for the position as well.", name: "Marc Seitz", title: "Senior Security Program Manager, ex-Zoom", videoUrl: "https://www.youtube.com/embed/yOgEAOaUnR4", thumbnail: "/images/youtube/5.jpg" }
];


document.addEventListener('turbo:load', function() {
  console.log(123123);
  setupNavigation();
  setupLogos();
  setupVideoModal();
  setupTestimonials();
});

function setupNavigation() {
  const toggleNavBtn = document.getElementById('toggle-nav-btn');
  const closeNavBtn = document.getElementById('close-nav-btn');
  const navOverlay = document.getElementById('nav-overlay');
  const sideNav = document.getElementById('side-nav');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');

  if (!toggleNavBtn || !closeNavBtn || !navOverlay || !sideNav) return;

  toggleNavBtn.addEventListener('click', () => {
    sideNav.classList.toggle('translate-x-full');
    navOverlay.classList.toggle('hidden');
    document.body.style.overflow = sideNav.classList.contains('translate-x-full') ? '' : 'hidden';

    // Toggle icons
    if (menuIcon && closeIcon) {
      menuIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
    }
  });

  function closeNav() {
    sideNav.classList.add('translate-x-full');
    navOverlay.classList.add('hidden');
    document.body.style.overflow = '';

    // Reset icons
    if (menuIcon && closeIcon) {
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    }
  }

  closeNavBtn.addEventListener('click', closeNav);
  navOverlay.addEventListener('click', closeNav);

  // Close nav when clicking on a nav link
  sideNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeNav);
  });
}

function setupLogos() {
  const logoContainer = document.getElementById('logo-container');
  if (!logoContainer) return;

  // Create logo elements
  const createLogoElements = (keyPrefix) => {
    return logos.map((logo, index) => {
      const logoDiv = document.createElement('div');
      logoDiv.className = 'px-8';
      logoDiv.setAttribute('key', `${keyPrefix}-${index}`);

      const img = document.createElement('img');
      img.src = logo.src;
      img.alt = logo.alt;
      img.className = 'object-contain max-h-12 w-[150px]';

      logoDiv.appendChild(img);
      return logoDiv;
    });
  };

  // Add first set of logos
  createLogoElements('logo1').forEach(logo => logoContainer.appendChild(logo));

  // Add second set of logos (for continuous scroll effect)
  createLogoElements('logo2').forEach(logo => logoContainer.appendChild(logo));
}

function setupTestimonials() {
  const swiperContainer = document.querySelector('.testimonial-swiper');
  if (!swiperContainer) return;

  const swiperWrapper = swiperContainer.querySelector('.swiper-wrapper');
  if (!swiperWrapper) return;

  // Create slides for each testimonial
  testimonials.forEach((item, index) => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';

    slide.innerHTML = `
      <div class="text-left px-4 md:px-8 lg:px-16">
        <div class="mb-8">
          <div class="flex justify-start mb-4">
            ${Array(5).fill().map(() => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-white mx-0.5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354l-4.596 2.883c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" /></svg>').join('')}
          </div>
          <p class="text-xl md:text-2xl italic mb-6 max-w-3xl mx-auto">
            "${item.testimonial}"
          </p>
          <p class="font-semibold text-lg">${item.name}</p>
          <p class="text-sm opacity-80">${item.title}</p>
        </div>
        <div class="relative w-full max-w-md aspect-video rounded shadow-lg mx-auto overflow-hidden bg-black testimonial-video-container" data-index="${index}">
          <div class="absolute top-0 left-0 right-0 z-20 p-3 flex items-center justify-between bg-gradient-to-b from-black/70 to-transparent">
            <div class="flex items-center gap-2">
              <div class="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-xs text-gray-700 font-bold">H|N</div>
              <span class="text-white text-sm font-medium truncate">
                Hampton North Testimonial: ${item.name.split(' ')[0]}...
              </span>
            </div>
            <button class="text-white opacity-70 hover:opacity-100">...</button>
          </div>
          <img src="${item.thumbnail}" alt="Thumbnail for ${item.name}'s testimonial" class="rounded cursor-pointer z-0 object-cover w-full h-full" />
          <div class="absolute inset-0 bg-opacity-30 flex items-center justify-center rounded group cursor-pointer group-hover:bg-opacity-40 transition duration-300 z-10 play-testimonial" data-video-url="${item.videoUrl}" data-index="${index}">
            <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%" class="w-20 h-20">
              <path class="ytp-large-play-button-bg" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f03"></path>
              <path d="M 45,24 27,14 27,34" fill="#fff"></path>
            </svg>
          </div>
        </div>
      </div>
    `;

    swiperWrapper.appendChild(slide);
  });

  // Initialize Swiper
  if (typeof Swiper !== 'undefined') {
    const swiper = new Swiper('.testimonial-swiper', {
      spaceBetween: 50,
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 7000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      pagination: false,
      navigation: {
        nextEl: '.testimonial-swiper-button-next',
        prevEl: '.testimonial-swiper-button-prev',
      }
    });

    // Handle testimonial video play
    document.querySelectorAll('.play-testimonial').forEach(button => {
      button.addEventListener('click', function() {
        const container = this.closest('.testimonial-video-container');
        const videoUrl = this.getAttribute('data-video-url');
        const index = parseInt(this.getAttribute('data-index'), 10);

        const iframe = document.createElement('iframe');
        iframe.src = `${videoUrl}?autoplay=1&modestbranding=1&rel=0`;
        iframe.title = "YouTube video player";
        iframe.frameBorder = "0";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        iframe.referrerPolicy = "strict-origin-when-cross-origin";
        iframe.allowFullscreen = true;
        iframe.className = "absolute inset-0 w-full h-full";

        container.innerHTML = '';
        container.appendChild(iframe);

        // Stop autoplay
        swiper.autoplay.stop();
      });
    });
  } else {
    console.error('Swiper is not defined. Make sure to include the Swiper library.');
  }
}

function setupVideoModal() {
  const openVideoBtn = document.getElementById('open-video-modal');
  const videoModal = document.getElementById('video-modal');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const modalVideo = document.getElementById('modal-video');

  if (!openVideoBtn || !videoModal || !closeModalBtn || !modalVideo) return;

  function openModal() {
    videoModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    modalVideo.play().catch(error => {
      console.error("Modal video autoplay failed:", error);
    });
  }

  function closeModal() {
    videoModal.classList.add('hidden');
    document.body.style.overflow = '';
    modalVideo.pause();
    modalVideo.currentTime = 0;
  }

  openVideoBtn.addEventListener('click', openModal);
  closeModalBtn.addEventListener('click', closeModal);
  videoModal.addEventListener('click', function(e) {
    if (e.target === videoModal) {
      closeModal();
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded');

  // 如果turbo:load没有触发，手动调用函数
  if (typeof setupNavigation === 'function' &&
      !document.documentElement.getAttribute('data-turbo-loaded')) {
    console.log('Manually initializing');
    setupNavigation();
    setupLogos();
    setupVideoModal();
    setupTestimonials();

    document.documentElement.setAttribute('data-turbo-loaded', 'true');
  }
});
