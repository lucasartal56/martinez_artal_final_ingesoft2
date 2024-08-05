// Obtención de elementos del DOM
const listaPaises = document.getElementById('listaPaises');
const codigoArea = document.getElementById('codigoArea');

// Función para obtener la lista de países y sus códigos de área
const obtenerPaises = async () => {
  try {
    const respuesta = await fetch('https://restcountries.com/v3.1/all?fields=name,idd');
    if (respuesta.ok) {
      const datos = await respuesta.json();
      console.log('Datos de países obtenidos:', datos);

      // Ordenar los países alfabéticamente por nombre
      datos.sort((a, b) => a.name.common.localeCompare(b.name.common));

      // Rellenar el select con los nombres de los países
      datos.forEach(pais => {
        const opcion = document.createElement('option');
        opcion.value = pais.idd.root + (pais.idd.suffixes ? pais.idd.suffixes[0] : '');
        opcion.textContent = pais.name.common;
        listaPaises.appendChild(opcion);
      });
    } else {
      console.log('Error al obtener la lista de países, estado:', respuesta.status);
      alert('Error al obtener la lista de países.');
    }
  } catch (error) {
    console.error('Error al consultar la API de REST Countries:', error);
    alert('Error al consultar la API de REST Countries.');
  }
};

// Evento para mostrar el código de área del país seleccionado
listaPaises.addEventListener('change', () => {
  const codigo = listaPaises.value;
  if (codigo) {
    codigoArea.textContent = `Código de área: ${codigo}`;
  } else {
    codigoArea.textContent = '';
  }
});

// Llamada a la función para obtener la lista de países al cargar la página
obtenerPaises();
