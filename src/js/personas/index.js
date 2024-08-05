const btnGuardar = document.getElementById('btnGuardar')
const tablaPersonas = document.getElementById('tablaPersonas')
const formulario = document.querySelector('form')

const getPersonas = async (alerta='si') => {
    console.log(alerta)
    const nombre = formulario.per_nombre.value.trim()
    const telefono = formulario.per_telefono.value.trim()
    const correo = formulario.per_correo.value.trim()

    const url = `/martinez_artal_final_ingesoft2/controllers/personas/index.php?per_nombre=${nombre}&per_telefono=${telefono}&per_correo=${correo}`
    const config = {
        method: 'GET'
    }

    try {
        const respuesta = await fetch(url, config);
        const data = await respuesta.json();
        console.log(data);

        tablaPersonas.tBodies[0].innerHTML = ''
        const fragment = document.createDocumentFragment()
        let contador = 1;

        if (respuesta.status == 200) {
            if(alerta =='si'){

                Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    icon: "success",
                    title: 'Personas Encontradas',
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                }).fire();
                
            }
            if (data.length > 0) {
                data.forEach(persona => {
                    const tr = document.createElement('tr')
                    const celda1 = document.createElement('td')
                    const celda2 = document.createElement('td')
                    const celda3 = document.createElement('td')
                    const celda4 = document.createElement('td')
                       
                    celda1.innerText = contador;
                    celda2.innerText = persona.per_nombre;
                    celda3.innerText = persona.per_telefono;
                    celda4.innerText = persona.per_correo;
                    
                    tr.appendChild(celda1)
                    tr.appendChild(celda2)
                    tr.appendChild(celda3)
                    tr.appendChild(celda4)
             
                    fragment.appendChild(tr);

                    contador++
                });

            } else {
                const tr = document.createElement('tr')
                const td = document.createElement('td')
                td.innerText = 'No hay Personas Disponiblas'
                td.colSpan = 5;

                tr.appendChild(td)
                fragment.appendChild(tr)
            }
        } else {
            console.log('hola');
        }

        tablaPersonas.tBodies[0].appendChild(fragment)
    } catch (error) {
        console.log(error);
    }
}

// getPersonas();


const guardarPersona = async (e) => {
    e.preventDefault();
    btnGuardar.disabled = true;
    const url = '/martinez_artal_final_ingesoft2/controllers/personas/index.php'
    const formData = new FormData(formulario)
    formData.append('tipo', 1)
    formData.delete('per_id')
    const config = {
        method: 'POST',
        body: formData
    }

    try {
        const respuesta = await fetch(url, config);
        const data = await respuesta.json();
        const { mensaje, codigo, detalle } = data
        Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            icon: "success",
            title: mensaje,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        }).fire();
        // alert(mensaje)

        if (codigo == 1 && respuesta.status == 200) {
            getPersonas(alerta ='no');
            formulario.reset();
        } else {
            console.log(detalle);
        }

    } catch (error) {
        console.log(error);
    }
    btnGuardar.disabled = false;
}


getPersonas() 

formulario.addEventListener('submit', guardarPersona)

