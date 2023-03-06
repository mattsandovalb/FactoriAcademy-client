<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Exercices>
 */
class ExercicesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'title' => fake()->title(20),
            'statment' => fake()->text(200),
            'instruction' => fake()->text(10),
            'documentation1' => fake()->url(),
            'documentation2' => fake()->url(),
            'solution' => fake()->text(6),
            'value' => fake()->boolean(1),
            'course_id' => fake()->numerify(1),
    ];
    }
}
