
export async function POST(req) {
  try {

    if (req.method !== "POST") {
      return new Response(JSON.stringify({ error: "Método no permitido (405)" }), {
        status: 405,
        headers: { "Content-Type": "application/json" },
      });
    }

    const data = await req.json(); 
    console.log("Datos recibidos:", data);

    return new Response(JSON.stringify({ message: "Formulario enviado con éxito" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error en el servidor:", error);
    return new Response(JSON.stringify({ error: "Error interno en el servidor" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

