<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    public function login(Request $request){
        $fields = $request->validate([
            'email' => 'required|string',
            'password' => 'required|string'
        ]);
        // Check user
        $user = User::where('email', $fields['email'])->first();
        // Check pass
        if (!$user || !Hash::check($fields['password'], $user->password)) {
            return response([
                'res' => false,
                'msg' => 'Credenciales incorrectas'
            ], 401);
        }
        $token = $user->createToken('FerreSurWebToken')->plainTextToken;
        $response = [
            'user' => $user,
            'token' => $token,
            'status' => true,
            'msg' => 'Ingreso correcto'
        ];
        return response($response, 201);
    }
}
