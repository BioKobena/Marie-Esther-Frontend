const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Envoi en cours...';

   const serviceID = 'service_aj2qxzi';
   const templateID = 'template_k5mvojh';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Envoi en cours...';
      Toastify({
        text: "Message envoyé avec succès",
        duration: 30000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "green",
        },
        onClick: function(){} // Callback after click
      }).showToast();
      form.reset();
      
    }, (err) => {
        btn.value = 'Envoi en cours';
        Toastify({
          text: "Vérifiez vos coordonnées...",
          duration: 10000,
          newWindow: true,
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "right", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "red",
          },
          onClick: function(){} // Callback after click
        }).showToast();
    });
});