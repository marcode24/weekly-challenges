<?php

class Person {
    public $name;
    public $age;
    public $birthDate;
    public $programmingLanguages;

    public function __construct($name, $age, $birthDate, $programmingLanguages) {
        $this->name = $name;
        $this->age = $age;
        $this->birthDate = $birthDate;
        $this->programmingLanguages = $programmingLanguages;
    }

    public static function fromJSON($jsonFileName) {
        $jsonData = json_decode(file_get_contents($jsonFileName), true);
        return new Person(
            $jsonData['name'],
            $jsonData['age'],
            $jsonData['birthDate'],
            $jsonData['programmingLanguages']
        );
    }

    public static function fromXML($xmlFileName) {
        $xmlData = simplexml_load_file($xmlFileName);
        $name = (string)$xmlData->name;
        $age = (int)$xmlData->age;
        $birthDate = (string)$xmlData->birthDate;
        $programmingLanguages = [];
        foreach ($xmlData->programmingLanguages->language as $language) {
            $programmingLanguages[] = (string)$language;
        }
        return new Person($name, $age, $birthDate, $programmingLanguages);
    }

    public function display() {
        echo "Nombre: {$this->name}\n";
        echo "Edad: {$this->age}\n";
        echo "Fecha de Nacimiento: {$this->birthDate}\n";
        echo "Lenguajes de Programación: " . implode(', ', $this->programmingLanguages) . "\n";
    }
}

// Datos a almacenar
$data = [
    'name' => 'Marco Cruz',
    'age' => date('Y') - 2001,
    'birthDate' => '2001-08-24',
    'programmingLanguages' => ['JavaScript', 'TypeScript', 'C#', 'PHP'],
];

// Crear archivo JSON
$jsonFileName = 'data.json';
file_put_contents($jsonFileName, json_encode($data, JSON_PRETTY_PRINT));
echo "Archivo JSON creado: {$jsonFileName}\n";

// Crear archivo XML
$xmlFileName = 'data.xml';
$xmlContent = new SimpleXMLElement('<?xml version="1.0" encoding="UTF-8"?><person></person>');
$xmlContent->addChild('name', $data['name']);
$xmlContent->addChild('age', $data['age']);
$xmlContent->addChild('birthDate', $data['birthDate']);
$programmingLanguages = $xmlContent->addChild('programmingLanguages');
foreach ($data['programmingLanguages'] as $lang) {
    $programmingLanguages->addChild('language', $lang);
}
$xmlContent->asXML($xmlFileName);
echo "Archivo XML creado: {$xmlFileName}\n";

echo "\nContenido del archivo JSON:\n";
echo file_get_contents($jsonFileName);

echo "\nContenido del archivo XML:\n";
echo file_get_contents($xmlFileName);

$personFromJson = Person::fromJSON($jsonFileName);
echo "\nDatos desde JSON:\n";
$personFromJson->display();

$personFromXml = Person::fromXML($xmlFileName);
echo "\nDatos desde XML:\n";
$personFromXml->display();

unlink($jsonFileName);
unlink($xmlFileName);
echo "\nArchivos borrados.\n";
