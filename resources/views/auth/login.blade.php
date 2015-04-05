@extends('reuse')

@section('content')

    <div class="ui huge centered header">
        Time Table Management System
    </div><br><br>

    <div class="ui four column centered grid">
        <div class="column">
            @if (count($errors) > 0)
                <div class="ui error message">
                    <strong>Whoops!</strong> There were some problems with your input.<br>
                    <ul>
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            @endif
            <form class="ui form segment" role="form" method="POST" action="{{ url('/auth/login') }}">
                <input type="hidden" name="_token" value="{{ csrf_token() }}">

                <div class="grouped inline fields">
                    <label>Sign in as:</label>

                    <div class="field">
                        <div class="ui radio checkbox">
                            <input type="radio" name="actor">
                            <label>Coordinator</label>
                        </div>
                    </div>
                    <div class="field">
                        <div class="ui radio checkbox">
                            <input type="radio" name="actor">
                            <label>Adviser</label>
                        </div>
                    </div>
                </div>
                <div class="ui drop">

                </div>

                <div class="field">
                    <label>Username</label>

                    <div class="ui left icon input">
                        <input placeholder="Username" name="username" type="text" value="{{old('username')}}">
                        <i class="user icon"></i>
                    </div>
                </div>

                <div class="field">
                    <label>Password</label>

                    <div class="ui left icon input">
                        <i class="lock icon"></i>
                        <input type="password" name="password">

                    </div>
                </div>

                <input type="submit" class="ui blue button" value="Login">

            </form>
        </div>
    </div>

@endsection