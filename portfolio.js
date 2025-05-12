function contactMe() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  }
  
  function sendMessage() {
    const name = document.getElementById('name').value;
    alert("Thank you, " + name + ". Your message has been sent!");
    return false; // Prevent form from submitting for demo
  }
  