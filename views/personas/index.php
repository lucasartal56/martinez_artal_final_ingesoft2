<?php include_once '../../includes/header.php' ?>
<div class="container mt-5">
    <h1 class="text-center">Formulario de Usuarios</h1>
    <div class="row justify-content-center mb-3">
        <form class="col-lg-6 border bg-light p-3 rounded">
            <input type="hidden" name="per_id" id="per_id">
            <div class="row mb-3">
                <div class="col">
                    <label for="nombreUsuarioInput">Ingrese el nombre de usuario de GitHub:</label>
                    <input class="form-control" type="text" id="nombreUsuarioInput"/>
                    <button class="btn btn-primary" id="botonObtenerUsuario">Obtener Usuario</button>
                </div>
            </div>
            <div class="row mb-3">
                <div id="tarjetaUsuario" class="col">
                    <p id="per_nombre">Nombre de Usuario</p>
                </div>
            </div>
            <div class="row mb-3">
                <div id="verPais" class="col">
                    <h5>Selecciona un país</h5>
                    <select id="listaPaises" class="form-control">
                        <option value="">Seleccione un país</option>
                    </select>
                    <p id="codigoArea"></p>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col">
                    <label for="per_telefono">Telefono</label>
                    <input type="text" name="per_telefono" id="per_telefono" class="form-control" required>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col">
                    <label for="per_correo">Correo Electrónico</label>
                    <input type="email" name="per_correo" id="per_correo" class="form-control" required>
                </div>
            </div>
            <div class="row justify-content-center mb-3">
                <div class="col">
                    <button type="submit" id="btnGuardar" class="btn btn-primary w-100">Guardar</button>
                </div>
            </div>
        </form>
    </div>
    <div class="row justify-content-center">
        <div class="col-lg-8 table-responsive">
            <h2 class="text-center">Lista Personas</h2>
            <table class="table table-bordered table-hover" id="tablaPersonas">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Nombre</th>
                        <th>Telefono</th>
                        <th>Correo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colspan="5">No hay personas disponibles</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
<script defer src="/martinez_artal_final_ingesoft2/src/js/funciones.js"></script>
<script defer src="/martinez_artal_final_ingesoft2/src/js/funciones.js"></script>
<script defer src="/martinez_artal_final_ingesoft2/src/js/script.js"></script>
<script defer src="/martinez_artal_final_ingesoft2/src/js/personas/index.js"></script>
<?php include_once '../../includes/footer.php' ?>