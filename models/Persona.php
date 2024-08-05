<?php
require_once 'Conexion.php';

class Persona extends Conexion
{
    public $per_id;
    public $per_nombre;
    public $per_telefono;
    public $per_correo;


    public function __construct($args = [])
    {
        $this->per_id = $args['per_id'] ?? null;
        $this->per_nombre = $args['per_nombre'] ?? '';
        $this->per_telefono = $args['per_telefono'] ?? '';
        $this->per_correo = $args['per_correo'] ?? '';

    }

    public function guardar()
    {
        $sql = "INSERT INTO personas (per_nombre, per_telefono, per_correo) values('$this->per_nombre','$this->per_telefono','$this->per_correo')";
        $resultado = self::ejecutar($sql);
        return $resultado;
    }
    
}
