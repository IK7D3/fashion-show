<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(Request $request) : Response
    {

        //  dd($request);
            $user = User::create([
            'name' => $request->input('fname'),
            'lastname'=> $request->input('lname'),
            'phone' => $request->input('phone'),
            'schoolname' => $request->input('school'),
            'level' => $request->input('foundation'),
            'deposit' => $request->input('deposit'),
            'clotheCount' => $request->input('numberUniform'),
            'clotheSize' => $request->input('sizeUniform'),
            'pantsCount' => $request->input('numberPants'),
            'pantsSize' => $request->input('sizePants'),
            'maskedCount' => $request->input('numberScarf'),
            'maskedSize' => $request->input('sizeScarf'),
            'sportsweardCount' => $request->input('numberJogging'),
            'sportsweardSize' => $request->input('sizeJogging'),
            'description' => $request->input('discription'),
         ]);
         $user -> save();
         
         return Inertia::render('Auth/Sizing')->with('currentUser', $user);
    }

    /**
     * Handle an incoming registration request.
     *
     */
    // public function store(Request $request): RedirectResponse
    // {
    //     $request->validate([
    //         'name' => 'required|string|max:255',
    //         'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
    //         'password' => ['required', 'confirmed', Rules\Password::defaults()],
    //     ]);

    //     $user = User::create([
    //         'name' => $request->name,
    //         'email' => $request->email,
    //         'password' => Hash::make($request->password),
    //     ]);

    //     event(new Registered($user));

    //     Auth::login($user);

    //     return redirect(route('dashboard', absolute: false));
    // }
}