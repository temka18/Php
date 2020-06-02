<header class="page-header">
    <div class="page-header__inner">
        <nav class="nav">
            <ul class="nav-menu">
                <?php
                    foreach ($navigation_array as $item) {
                        echo '<li><a href="'.$item['link'].'">'.$item['text'].'</a></li>';
                    }
                ?>
            </ul>
        </nav>
        <?php include 'themeSwitcher.php'; ?>
    </div>
</header>