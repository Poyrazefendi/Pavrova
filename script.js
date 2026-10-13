const bannerUrl = "https://i.ibb.co/YFtWX8dw/MG-3271.jpg";
const profileUrl = "https://i.ibb.co/rYZP5gb/EAF173-AC-20-E7-4-AEF-827-D-6-A09-EC59-D321.png";
const faviconUrl = "https://i.ibb.co/TBCszGGv/MG-3406.jpg";
const displayName = "Pavrova";
const description = "Sessizce İçeri";

const socialLinks = {
  business: "https://wa.me/4915219174575",
  whatsapp: "https://wa.me/905016677588",
  instagram: "https://instagram.com/alapatros",
	tiktok: "https://tiktok.com/@pavrova",
  telegram: "https://t.me/pavrova",
};

const platforms = {
  business: { label: "WhatsApp Business", icon: "fa-whatsapp" },
  whatsapp: { label: "WhatsApp", icon: "fa-whatsapp"},
  instagram: { label: "Instagram", icon: "fa-instagram" },
  tiktok: { label: "TikTok", icon: "fa-tiktok" },
  telegram: { label: "Telegram", icon: "fa-telegram" },
};

function isUrl(value) {
  return /^(https?:\/\/|data:image\/)/i.test(value);
}

function applyImage(element, url) {
  if (!isUrl(url)) return;
  element.addEventListener("error", function() {
    element.removeAttribute("src");
  }, { once: true });
  element.src = url;
}

function createSocialLink(key, url) {
  const platform = platforms[key];

  const link = document.createElement("a");
  link.className = "social";
  link.href = url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";

  const icon = document.createElement("i");
  icon.className = "fa-brands " + platform.icon;
  icon.setAttribute("aria-hidden", "true");

  const label = document.createElement("span");
  label.textContent = platform.label;

  link.appendChild(icon);
  link.appendChild(label);

  return link;
}

function renderSocials() {
  const container = document.getElementById("socials");

  for (const key in socialLinks) {
    const url = socialLinks[key];
    if (platforms[key] && url) {
      const linkElement = createSocialLink(key, url);
      container.appendChild(linkElement);
    }
  }
}

function applyProfile() {
  applyImage(document.getElementById("banner"), bannerUrl);
  applyImage(document.getElementById("avatar"), profileUrl);

  document.getElementById("name").textContent = displayName;
  document.getElementById("description").textContent = description;
  document.title = displayName;

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.content = description;
  }

  if (isUrl(faviconUrl)) {
    document.getElementById("favicon").href = faviconUrl;
  }
}

function showPage() {
  setTimeout(function() {
    document.body.classList.add("ready");
  }, 1600);
}

applyProfile();
renderSocials();
showPage();
