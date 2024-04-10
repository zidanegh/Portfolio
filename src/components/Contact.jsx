import { useState } from "react";
import React from "react";

export default function Contact() {
  const [result, setResult] = useState("Envoyer votre message");

  const onSubmit = async (event) => {
    event.preventDefault();
    setButtonText("Envoi en cours..."); // Change button text when form is submitted
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "76b314ad-435f-444a-ab73-3e6ff9093198");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }

    // Reset button text after a short delay
    setTimeout(() => {
      setResult("Envoyer votre message");
    }, 2000); // 3000 milliseconds = 3 seconds
  };

  return (
    <>
      <form onSubmit={onSubmit} className="form" action="">
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Veuillez rentrer votre mail"
            required
          />
        </div>
        <div>
          <label htmlFor="titre">Object</label>
          <input
            type="titre"
            name="titre"
            id="titre"
            placeholder="Veuillez rentrer votre object"
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <input
            type="message"
            name="message"
            id="message"
            placeholder="Veuillez rentrer votre message"
            required
          />
        </div>
        <button type="submit">{result}</button>
      </form>
      <span></span>
    </>
  );
}
