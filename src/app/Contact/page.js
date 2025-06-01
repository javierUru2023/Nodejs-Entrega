"use client";
import React, { useState } from "react";

function generateMetadata({ params, searchParams }, parents) {
  return {
    title: "Contáctenos",
    description:
      "Póngase en contacto con nosotros para consultas, soporte o más información sobre nuestros productos.",
    domain: "https://karrosautopartes.com",
    keywords: "contacto, soporte, autopartes, consultas, Karros Autopartes",
  };
}

export default function ContactPage() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.id]: e.target.value,
    });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:3000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const result = await response.json();
    console.log("Respuesta del servidor:", result);

    if (response.ok) {
      alert("Formulario enviado con éxito!");
      setValues({ name: "", email: "", message: "" });
    } else {
      alert("Hubo un error al enviar el formulario.");
    }
  } catch (error) {
    console.error("Error al enviar los datos:", error);
    alert("Ocurrió un error. Inténtalo nuevamente.");
  }
};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-400">
      <h1 className="text-4xl font-bold mb-4">Contáctenos</h1>
      <p className="text-lg text-gray-700 max-w-2xl text-center">
        Para consultas, soporte o más información sobre nuestros productos, no
        dude en ponerse en contacto con nosotros. Estamos aquí para ayudarle a
        encontrar las mejores autopartes para su vehículo.
      </p>

      <form className="w-full max-w-md mt-8" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            value={values.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            placeholder="Su nombre"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            value={values.email}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            placeholder="Su correo electrónico"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Mensaje
          </label>
          <textarea
            id="message"
            value={values.message}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            placeholder="Escriba su mensaje aquí..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Enviar
        </button>
      </form>

      <a href="#" className="text-amber-100 mt-4">Contacto@KarrosAutopartes.com</a>
    </div>
  );
}
