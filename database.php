<?php

  $config = require 'config.php';

  $userdb = $config['DB_USER'];
  $passworddb = $config['DB_PASSWORD'];
  $host = $config['DB_HOST'];
  $dbname = $config['DB_NAME'];

  try {
    $db = new PDO("mysql:host=$host;dbname=$dbname", $userdb, $passworddb);
  } catch (PDOException $e) {
    die("Erreur : " . $e->getMessage());
  }

?>