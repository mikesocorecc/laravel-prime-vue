<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
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
                'status' => false,
                'msg' => 'Credenciales incorrectas'
            ], 201);
        }
        $token = $user->createToken('FerreSurWebToken')->plainTextToken;
        $refreshToken = $user->createToken('FerreSurWebToken')->plainTextToken;
        $user->role = 'admin';
        $user->ability = [
          [
            "action" => 'manage',
            "subject" => 'all'
          ]
        ];
        Log::debug($user);   
        $response = [
            'userData' => $user,
            'accessToken' => $token,
            'refreshToken' => $refreshToken,
            'status' => true,
            'msg' => 'Ingreso correcto'
        ];
        /*
        const response = {
        userData,
        accessToken,
        refreshToken,
      }
        users: [
    {
      id: 1,
      fullName: 'John Doe',
      username: 'johndoe',
      password: 'admin',
      // eslint-disable-next-line global-require
      avatar: require('@/assets/images/avatars/13-small.png'),
      email: 'admin@demo.com',
      role: 'admin',
      ability: [
        {
          action: 'manage',
          subject: 'all',
        },
      ],
      extras: {
        eCommerceCartItemsCount: 5,
      },
    }
  ],
        */
        return response($response, 201);
    }


    public function refresh(Request $request){
        $request->user()->tokens()->delete();

        return response()->json([
            'access_token' => $request->user()->createToken('api')->plainTextToken,
        ]);
    }
}
