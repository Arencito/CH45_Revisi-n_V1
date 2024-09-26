const baseEndpoint = 'https://api.github.com'; // Punto de partida de la API de GitHub
const usersEndpoint = `${baseEndpoint}/users`; // Endpoint para los usuarios
const $n = document.querySelector('.name'); // Elemento para mostrar el nombre
const $b = document.querySelector('.blog'); // Elemento para mostrar el blog
const $l = document.querySelector('.location'); // Elemento para mostrar la ubicación (no usado en este ejemplo)

async function displayUser(username) {
  $n.textContent = 'cargando...'; // Muestra que estamos cargando información
  try {
    const response = await fetch(`${usersEndpoint}/${username}`); // Hace la petición a la API
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`); // Si hay un error, lo lanza
    }
    const data = await response.json(); // Convierte la respuesta a formato JSON
    $n.textContent = `${data.name}`; // Muestra el nombre del usuario
    $b.textContent = `${data.blog}`; // Muestra el blog del usuario
    $l.textContent = `${data.location}`; // Muestra la ubicación del usuario (no usado en este ejemplo)
  } catch (err) {
    handleError(err); // Llama a la función de error si algo sale mal
  }
}

function handleError(err) {
  console.log('¡Oh no!'); // Mensaje para indicar que hubo un problema
  console.log(err); // Muestra el error en la consola
  $n.textContent = `Algo salió mal: ${err}`; // Muestra un mensaje de error en la pantalla
}

displayUser('stolinski'); // Llama a la función para mostrar un usuario específico
