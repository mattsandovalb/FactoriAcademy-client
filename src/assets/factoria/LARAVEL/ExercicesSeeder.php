<?php

namespace Database\Seeders;

use App\Models\Exercices;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ExercicesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //HTML EXERCICES
        Exercices::factory()->create([
            'title' => 'Introduccion a HTML',
            'instruction' => 'Copia exactamente en el editor de codigo la Estructura de HTLML ignora los espacios en blanco',
            'documentation1' => 'https://www.w3schools.com/html/default.asp',
            'documentation2' => 'https://www.w3schools.com/html/html_intro.asp',
            'value' => 50,

        ]);
        Exercices::factory()->create([
            'title' => 'Etiquetas de HTML',
            'instruction' => 'Dentro del body de nuestro html, crea un titulo con <h1> que diga (Hola Mundo), un subtitulo con <h2> que contenga (Esta es mi primera web en Html) y un párrafo con <p> que contenga tu nombre y tus apellidos',
            'documentation1' => 'https://www.w3schools.com/html/html_elements.asp',
            'documentation2' => 'https://www.w3schools.com/html/html_headings.asp',
            'value' => 50,

        ]);
        //CSS EXERCICES
        Exercices::factory()->create([
            'title' => 'Introduccion a CSS',
            'instruction' => 'Con la class .h1 cambia el color de Negro a Rojo',
            'documentation1' => 'https://www.w3schools.com/css/default.asp',
            'documentation2' => 'https://www.w3schools.com/css/css_intro.asp',
            'value' => 50,

        ]);
        Exercices::factory()->create([
            'title' => 'Classes en CSS',
            'instruction' => 'Con la class .h1 cambia el color de Negro a Rojo',
            'documentation1' => 'https://www.w3schools.com/css/default.asp',
            'documentation2' => 'https://www.w3schools.com/css/css_intro.asp',
            'value' => 50,
        ]);
    }
}
