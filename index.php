<?php include 'inc/variables.php'; ?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Головна</title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="icon" type="image/png"  href="img/favicon.png">
		<link rel="stylesheet" href="css/style.css"/>
		<script src="js/script.js"></script>
	</head>
	<body>
        <?php include 'inc/header.php'; ?>
		<main class="page-main info">
            <p class="title">Основні посилання на сайті</p>
            <?php
                $shuffled_array = $navigation_array;
                shuffle($shuffled_array);
            ?>
            <ul class="page-main-links">
                <?php
                    foreach ($shuffled_array as $item) {
                        echo '<li><a href="'.$item['link'].'">'.$item['text'].'</a></li>';
                    }
                ?>
            </ul>
		</main>
        <?php include 'inc/footer.php'; ?>
	</body>
</html>