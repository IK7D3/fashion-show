<?php

namespace App\Http\Controllers;

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
        return Inertia::render('Auth/ShowOutfit');
    }
}
