const content = document.getElementById('content');

function showHome() {
  content.innerHTML = `
    <div class="profile-card fade">
      <img src="rayan.jpg" alt="Rayan Khidir Ahmed">
      <h2>Rayan Khidir Ahmed</h2>
      <p>Digital Creator</p>
      <p>IT Enthusiast</p>
      <div class="social-links">
        <a href="#" onclick="showSocial()">See Social Links</a>
      </div>
    </div>
  `;
  fadeEffect();
}

function showSocial() {
  content.innerHTML = `
    <div class="profile-card fade">
      <img src="rayan.jpg" alt="Rayan Khidir Ahmed" style="width:80px; height:80px; margin-bottom:10px;">
      <h2>Follow Me</h2>
      <div class="social-links fade">
        <a href="https://www.facebook.com/rayan.khidir.79" target="_blank">Facebook</a>
        <a href="https://www.instagram.com/rayanit14?igsh=NGRsaTRuN3BmYTR1&utm_source=qr" target="_blank">Instagram</a>
        <a href="https://www.tiktok.com/@miroit14?_t=ZS-90pQNSu8qmN&_r=1" target="_blank">TikTok</a>
        <a href="https://t.me/rayanit14" target="_blank">Telegram</a>
        <a href="mailto:rayankhidir14@gmail.com" class="social-links">Email</a>
      </div>
    </div>
  `;
  fadeEffect();
}

function showAbout() {
  content.innerHTML = `
    <div class="profile-card fade">
      <h2>About Me</h2>
      <p>Hello! I am <strong>Rayan Khidir Ahmed</strong>, a passionate IT enthusiast and digital creator.</p>
      <p>I love programming, web development, and exploring new technologies.</p>
      <p>This profile showcases my social media links and my journey in the programming world.</p>
      <p>Whether it’s coding, learning, or building projects, I enjoy turning ideas into reality.</p>
    </div>
  `;
  fadeEffect();
}

// Function to animate fade-in
function fadeEffect() {
  const fadeElements = document.querySelectorAll('.fade');
  fadeElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    setTimeout(() => {
      el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }, 50);
  });
}

// Load Home page by default
showHome();

