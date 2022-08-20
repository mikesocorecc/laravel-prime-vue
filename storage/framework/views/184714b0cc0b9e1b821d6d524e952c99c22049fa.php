<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">
	<title>Laravel vue | tailwindcss</title>
 
	<?php echo app('Illuminate\Foundation\Vite')('resources/css/app.css'); ?>
</head>
<body>
	<div id="app"></div> 

	
	<?php echo app('Illuminate\Foundation\Vite')('resources/js/app.js'); ?>
</body>
</html><?php /**PATH C:\laragon\www\laravel-prime-vue\resources\views/app.blade.php ENDPATH**/ ?>