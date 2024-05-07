<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
class HomeController extends Controller
{
    public function sizing(): Response
    {
        return Inertia::render('Auth/Sizing');
    }
    public function showOutfit(): Response
    {
        $data = User::all();
        return Inertia::render('Auth/ShowOutfit')
        ->with('data', $data);
    }

    public function deliveryOutfit(): Response
    {
        $data = User::all();
        return Inertia::render('Auth/Deliver')
        ->with('data', $data);
    }
}