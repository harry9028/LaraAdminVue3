
<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body class="hold-transition sidebar-mini text-sm">
    <div id="app">
        <nav class="main-header navbar navbar-expand navbar-success border-bottom">
            <!-- Left navbar links -->
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link white" data-widget="pushmenu" href="#"><i class="fas fa-bars"></i></a>
                </li>
            </ul>

            <!-- SEARCH FORM -->
            {{-- <div class="input-group input-group-sm col-md-6">
                <input class="form-control form-control-navbar" @keyup="searchit" v-model="search" type="search" placeholder="Search" aria-label="Search">
                <div class="input-group-append">
                <button class="btn btn-navbar btn-success" @click="searchit">
                    <i class="fa fa-search"></i>
                </button>
                </div>
            </div> --}}
        </nav>
        <aside class="main-sidebar sidebar-dark-primary elevation-4">
            <!-- Brand Logo -->
            <a href="#" class="brand-link">
            <img src="img/logo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
                style="opacity: .8">
            <span class="brand-text font-weight-light">TMBILL</span>
            </a>

            <!-- Sidebar -->
            <div class="sidebar">
            <!-- Sidebar user panel (optional) -->
            <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                <div class="image">
                <!-- <img src="public/img/customer-support.png" class="img-circle elevation-2" alt="User Image"> -->

                <img src="public/img/profile/{{ Auth::user()->photo }}" class="img-circle elevation-2" alt="User Image">
                </div>
                <div class="info">
                <a href="#" class="d-block">{{ Auth::user()->name }}</a>
                </div>
            </div>

            <!-- Sidebar Menu -->
             <sidebar></sidebar>
            <nav>
                <ul class="nav nav-pills nav-sidebar flex-column nav-child-indent" data-widget="treeview" role="menu" data-accordion="false">
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('logout') }}"
                            onclick="event.preventDefault();
                                        document.getElementById('logout-form').submit();">
                                        <i class="fas fa-power-off red"></i> 
                            {{ __('Logout') }}
                        </a>

                        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                            @csrf
                        </form>

                    </li>
                </ul>
            </nav>
            <!-- /.sidebar-menu -->
            </div>
            <!-- /.sidebar -->
        </aside>
        <router-view></router-view>
        <footer class="main-footer">
            <!-- To the right -->
            <div class="float-right d-none d-sm-inline">
            Version 3.2.1
            </div>
            <!-- Default to the left -->
            <strong>Copyright &copy; 
            {{ date('Y') }} - {{ date('Y', strtotime('+1 year')) }}
            <a href="https://www.techmainstay.com/">TechMainstay</a>.</strong>
        </footer>
    </div>
    @auth
    <script>
        window.user = @json(auth()->user());
    </script>
    @endauth
</body>
</html>