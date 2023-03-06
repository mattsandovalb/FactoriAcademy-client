<?php

namespace App\Http\Controllers;

use App\Models\exercices;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ExercicesController extends Controller
{
    public function __construct()
    {  
        $this->middleware('auth:api', ['except' => ['index', 'show']]);

    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $exercices = Exercices::all();

        return response()->json([
            'status' => true,
            'exercices' => $exercices
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $exercices = new Exercices();

        $request->validate([
            'title' => 'required',
            'statment' => 'required',
            'instruction' => 'required',
            'documentation1' => 'required',
            'documentation2' => 'required',
            'solution' => 'required',
            'value' => 'required',
           

        ]);

        $exercices->title = $request -> title;
        $exercices->statment = $request ->  statment;
        $exercices->instruction = $request -> instruction;
        $exercices->documentation1 = $request -> documentation1;
        $exercices->documentation2 = $request -> documentation2;
        $exercices->solution = $request -> solution;
        $exercices->value = $request -> value;
       

        $exercices->save();

        return response()->json([
            'status' => true,
            'message' => "Exercice Created successfully!",
            'exercces' => $exercices
        ], 200);
        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\exercices  $exercices
     * @return \Illuminate\Http\Response
     */
    public function show(Exercices $exercices, $id)
    {
        $exercices = Exercices::find($id);
        return $exercices;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\exercices  $exercices
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, exercices $exercices, $id)
    {
        $exercices = Exercices::find($id);

        if (!$exercices) {
            return response()->json(['message' => 'No se encontró el Ejercicio solicitado'], 404);
        }

        $request->validate([
            'title' => 'required',
            'statment' => 'required',
            'instruction' => 'required',
            'documentation1' => 'required',
            'documentation2' => 'required',
            'solution' => 'required',
            'value' => 'required'
        ]);
        $exercices->update([
            'title' => $request->title,
            'statment' => $request->statment,
            'instruction' => $request->instruction,
            'documentation1' => $request->documentation1,
            'documentation2' => $request->documentation2,
            'solution' => $request->solution,
            'value' => $request->value,
        ]);

        return $exercices;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\exercices  $exercices
     * @return \Illuminate\Http\Response
     */
    public function destroy(Exercices $exercices, $id)
    {
     
        $exercices = Exercices::find($id);

        if (is_null($exercices)) {
            return response()->json('No se pudo realizar la peticion', 404);
        } else {
            $exercices->delete();
            return response()->noContent();
            return ('Successful Deleted');
        }
    }
}