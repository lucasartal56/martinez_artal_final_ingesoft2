<?php
require '../../models/Persona.php';
header('Content-Type: application/json; charset=UTF-8');

$metodo = $_SERVER['REQUEST_METHOD'];
$tipo = $_REQUEST['tipo'];

// echo json_encode($_GET);
// exit;
try {
    switch ($metodo) {
        case 'POST':
            $persona = new Persona($_POST);
            switch ($tipo) {
                case '1':

                    $ejecucion = $persona->guardar();
                    $mensaje = "Guardado Satisfactoriamente";
                    break;

                default:

                    break;
            }

            http_response_code(200);
            echo json_encode([
                "mensaje" => $mensaje,
                "codigo" => 1,

            ]);
            break;

        case 'GET':
            http_response_code(200);
            $persona = new Persona($_GET);
            echo json_encode($personas);
            break;

        default:
            http_response_code(405);
            echo json_encode([
                "mensaje" => "Método inválido",
                "codigo" => 9,
            ]);
            break;
    }
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        "detalle" => $e->getMessage(),
        "mensaje" => "Error de ejecución",
        "codigo" => 0,
    ]);
}

exit;
