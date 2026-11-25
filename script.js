const blowBtn = document.getElementById("blowBtn");
if (blowBtn) {
  blowBtn.addEventListener("click", () => {
    document.getElementById("flame").classList.add("out");
    document.getElementById("flame").style.display = "none";
    blowBtn.textContent = "Candles blown! ♡";
    blowBtn.disabled = true;
    document.getElementById("hint").textContent = "Make your wish come true! ✨";
    document.getElementById("revealPanel").classList.add("show");
    launchConfetti();
  });
}
const photoInput = document.getElementById("sisterPhoto");
if (photoInput) {
  photoInput.addEventListener("change", () => {
    const file = photoInput.files && photoInput.files[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) { alert("Please choose an image."); return; }
    const image = document.getElementById("memoryImage");
    image.src = URL.createObjectURL(file);
    image.hidden = false;
    document.getElementById("photoPrompt").hidden = true;
  });
}
const celebrateBtn = document.getElementById("celebrateBtn");
if (celebrateBtn) celebrateBtn.addEventListener("click", launchConfetti);

function launchConfetti() {
  const colors = ["#ff6fa8", "#ffd18a", "#fff0f5", "#d68cff"];
  const emojis = ["💖", "🌸", "🦋", "🎀", "🥳", "✨", "💕", "🎂"];
  for (let i = 0; i < 18; i++) {
    const emoji = document.createElement("span");
    emoji.textContent = emojis[i % emojis.length];
    emoji.style.cssText = `position:fixed;z-index:100;top:35%;left:${Math.random()*90+5}vw;font-size:25px;pointer-events:none`;
    document.body.appendChild(emoji);
    const drift = (Math.random() - .5) * 180;
    emoji.animate([{transform:"translateY(0) scale(.6)",opacity:0},{transform:`translate(${drift}px,-230px) scale(1.4)`,opacity:1},{transform:`translate(${drift*1.4}px,-360px) scale(.8)`,opacity:0}],{duration:1800,easing:"ease-out"});
    setTimeout(() => emoji.remove(), 1900);
  }
  for (let i = 0; i < 90; i++) {
    const bit = document.createElement("span");
    bit.style.cssText = `position:fixed;z-index:99;top:-14px;left:${Math.random()*100}vw;width:8px;height:13px;background:${colors[i%colors.length]};border-radius:2px;pointer-events:none`;
    document.body.appendChild(bit);
    const drift = (Math.random()-.5)*280, duration = 1800 + Math.random()*1800;
    bit.animate([{transform:"translateY(0) rotate(0)",opacity:1},{transform:`translate(${drift}px,105vh) rotate(${Math.random()*900}deg)`,opacity:.15}],{duration,easing:"cubic-bezier(.2,.7,.3,1)"});
    setTimeout(()=>bit.remove(),duration+100);
  }
}
