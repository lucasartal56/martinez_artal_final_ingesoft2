// Obtención de elementos del DOM
const botonObtenerUsuario = document.getElementById('botonObtenerUsuario');
const per_nombre = document.getElementById('per_nombre');
const nombreUsuarioInput = document.getElementById('nombreUsuarioInput');

// Función para consultar la API de GitHub
const obtenerUsuario = async () => {
  console.log('Iniciando solicitud a la API de GitHub...');


  // Obtener el nombre de usuario desde el input
  const usuario = nombreUsuarioInput.value.trim();
  
  if (usuario === '') {
    alert('Por favor, ingrese un nombre de usuario.');
    return;
  }

  try {
    const respuesta = await fetch(`https://api.github.com/users/${usuario}`, {
      method: 'GET',
    });

    if (respuesta.ok) {
      const datos = await respuesta.json();
      console.log('Respuesta de la API recibida:', datos);
      per_nombre.textContent = `Nombre: ${datos.name || 'No disponible'}`;
  
      console.log(datos);
      
      
     
      alert('¡Datos de usuario encontrados!');
    } else {
      console.log('Error al obtener la información del usuario, estado:', respuesta.status);
      per_nombre.textContent = 'Error al obtener la información';
      
  
      

      alert('Usuario no encontrado o error al obtener la información.');
    }
  } catch (error) {
    console.error('Error al consultar la API de GitHub:', error);
    per_nombre.textContent = 'Error al obtener la información';

    alert('Error al consultar la API de GitHub.');
  }
};

// Evento al hacer clic en el botón
botonObtenerUsuario.addEventListener('click', obtenerUsuario);
