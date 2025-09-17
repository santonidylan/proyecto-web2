// Simple JS for form validation and small interactions
document.addEventListener('DOMContentLoaded', function(){
  var form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      // basic validation
      var valid = form.checkValidity();
      if(!valid){
        form.classList.add('was-validated');
        return;
      }
      // Simulate submit
      alert('Formulario enviado. (Simulación)');
      form.reset();
    });
  }
});