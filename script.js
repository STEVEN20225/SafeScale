(function(){
            // Initializing with your public key
            emailjs.init("SDmBddR20TPgnL5E7");
        })();

        lucide.createIcons();

        const form = document.getElementById("subscribe-form");
        const btn = document.getElementById("btn");
        const message = document.getElementById("message");

        form.addEventListener("submit", function(e) {
            e.preventDefault();

            btn.innerText = "Sending...";
            btn.disabled = true;
            message.innerText = "";

            // Using your Service ID and Template ID
            emailjs.sendForm(
                "service_og4vvur",
                "template_5k0akf9",
                this
            )
            .then(() => {
                message.className = "mt-4 text-sm font-medium text-brand-green";
                message.innerText = "Check your email!";
                form.reset();
            })
            .catch((error) => {
                message.className = "mt-4 text-sm font-medium text-brand-red";
                message.innerText = "Something went wrong.";
                console.error("EmailJS Error:", error);
            })
            .finally(() => {
                btn.innerText = "Subscribe";
                btn.disabled = false;
            });
        });

        
