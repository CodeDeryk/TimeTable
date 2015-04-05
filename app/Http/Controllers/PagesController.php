<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;

class PagesController extends Controller
{

    //

    public function about()
    {

        $name = "Derek Jamabo";
        return view('pages.about')->with([
            'first' => 'Derek',
            'last' => 'Jamabo'

        ]);
    }

    public function me()
    {
        # code...
        return view('pages.me');
    }

}
