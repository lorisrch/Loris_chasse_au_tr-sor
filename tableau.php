<?php
$name = $_POST['nom'];
$scoreGame = $_POST['score'];
$server ="@IP"
$dbname = "myDBPDO";
$username = "user Jeu";
$password ="password";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password );
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "INSERT INTO tableScore (nom, score) VALUES ($name, $scoreGame)";
    $conn->exec($sql);
    echo "Enregistrement du score";
}   catch(PDOException $e) {
    echo $sql . "<br>" . $e->getMessage();
}

$conn = null;
?>
