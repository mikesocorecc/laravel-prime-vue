<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="csrf-token" content="{{ csrf_token() }}">
	<title>How To Install Vue 3 in Laravel 9 with Vite</title>
	<link rel="stylesheet" href="{{ asset('template/css/bootstrap.min.css') }}"/>
	<link rel="stylesheet" href="{{ asset('template/css/style.css') }}"/>
	<link rel="stylesheet" href="{{ asset('template/css/components.css') }}"/>
 
	@vite('resources/css/app.css')
</head>
<body>
	<div id="app"></div>


	<script src="{{ asset('template/js/jquery.min.js') }}"></script>
	<script src="{{ asset('template/js/popper.js') }}"></script>
	<script src="{{ asset('template/js/tooltip.js') }}"></script>
	<script src="{{ asset('template/js/bootstrap.min.js') }}"></script>
	<script src="{{ asset('template/js/jquery.nicescroll.min.js') }}"></script>
	<script src="{{ asset('template/js/moment.min.js') }}"></script>
	
	<script src="{{ asset('template/js/stisla.js') }}"></script>
	<script src="{{ asset('template/js/scripts.js') }}"></script>
	<script src="{{ asset('template/js/custom.js') }}"></script>
	@vite('resources/js/app.js')
</body>
</html>