<?php

  require_once("database.php");

  if ($_SERVER["REQUEST_METHOD"] === "POST") {
    if (!isset($_POST['email']) || empty($_POST['email'])) {
      echo "Adresse e-mail invalide.";
      exit;
    }
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      echo "Adresse e-mail non valide.";
      exit;
    }
    try {
      $stmt = $db->prepare("SELECT COUNT(*) FROM email WHERE email = ?");
      $stmt->execute([$email]);
      if ($stmt->fetchColumn() > 0) {
        echo "Cet e-mail est déjà inscrit.";
        exit;
      }
      $stmt = $db->prepare("INSERT INTO email (email) VALUES (?)");
      if ($stmt->execute([$email])) {
        echo "Inscription réussie !";
      } else {
        echo "Erreur lors de l'inscription.";
      }
    } catch (PDOException $e) {
      $e->getMessage();
    }
  } else {
      echo "Requête invalide.";
  }
  
?>