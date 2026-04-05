emailjs.init({
  publicKey: "n_qc-vIobMbE0UmGg",
});

lucide.createIcons();

const form = document.getElementById("subscribe-form");
const btn = document.getElementById("btn");
const message = document.getElementById("message");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  btn.innerText = "Sending...";
  btn.disabled = true;
  message.innerText = "";

  try {
    await emailjs.sendForm("service_p3rb2d1", "template_co3g57b", form);
    message.className = "mt-4 text-sm font-medium text-brand-green";
    message.innerText = "Check your email!";
    form.reset();
  } catch (error) {
    console.error("EmailJS Error:", error);
    message.className = "mt-4 text-sm font-medium text-brand-red";
    message.innerText = "Something went wrong.";
  } finally {
    btn.innerText = "Subscribe";
    btn.disabled = false;
  }
});
