<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">
	<title>How To Install Vue 3 in Laravel 9 with Vite</title>
	<link rel="stylesheet" href="<?php echo e(asset('template/css/bootstrap.min.css')); ?>"/>
	<link rel="stylesheet" href="<?php echo e(asset('template/css/style.css')); ?>"/>
	<link rel="stylesheet" href="<?php echo e(asset('template/css/components.css')); ?>"/>
 
	<?php echo app('Illuminate\Foundation\Vite')('resources/css/app.css'); ?>
</head>
<body>
	<div id="app"></div>


	<script src="<?php echo e(asset('template/js/jquery.min.js')); ?>"></script>
	<script src="<?php echo e(asset('template/js/popper.js')); ?>"></script>
	<script src="<?php echo e(asset('template/js/tooltip.js')); ?>"></script>
	<script src="<?php echo e(asset('template/js/bootstrap.min.js')); ?>"></script>
	<script src="<?php echo e(asset('template/js/jquery.nicescroll.min.js')); ?>"></script>
	<script src="<?php echo e(asset('template/js/moment.min.js')); ?>"></script>
	
	<script src="<?php echo e(asset('template/js/stisla.js')); ?>"></script>
	<script src="<?php echo e(asset('template/js/scripts.js')); ?>"></script>
	<script src="<?php echo e(asset('template/js/custom.js')); ?>"></script>
	<?php echo app('Illuminate\Foundation\Vite')('resources/js/app.js'); ?>
</body>
</html><?php /**PATH C:\laragon\www\laravel-prime-vue\resources\views/app.blade.php ENDPATH**/ ?>