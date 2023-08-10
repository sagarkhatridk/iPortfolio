const addMsg = () => {
  var form = document.getElementById("form-id");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("msg").value;

    console.log({ name, email, subject, message });

    // ***************************************************************************************************
    fetch(`https://backend-production-e796.up.railway.app/api/sendmail/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message, subject }),
    });


    fetch(`https://backend-production-e796.up.railway.app/api/sendmsg/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, subject, message }),
    });

    document.getElementById("sendconf").innerHTML = "<b>Your message has been send. We will contant you soon!<b>";
    setTimeout(() => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("msg").value = "";
    }, 1000);

    setTimeout(() => {
      
      document.getElementById("sendconf").innerHTML = ""
    }, 5000);

  });
};

addMsg();
