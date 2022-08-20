<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="csrf-token" content="{{ csrf_token() }}">
	<title>Laravel vue | tailwindcss</title>
 
	@vite('resources/css/app.css')
</head>
<body>
	<div id="app"></div> 

	{{-- <script async defer src="https://buttons.github.io/buttons.js"></script>
	<script src="https://demo.themesberg.com/windster/app.bundle.js"></script> --}}
	@vite('resources/js/app.js')
</body>
</html>