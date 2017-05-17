<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>COACHELLA MOMENTS</title>
    <link rel="icon" type="image/png" href="img/favicon.png">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i" rel="stylesheet">
    <script src="https://use.fontawesome.com/a391b5c69b.js"></script>
    <link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
    <nav class="main-nav desktop mobile">
        <input id="menu" type="checkbox" />
        <label for="menu" class="menu">
            <span>Menu</span>
        </label>
        <div class="nav-items">
            <a href="#home" class="nav-item home"><p><span>Home</span></p></a>
            <a href="#info" class="nav-item info"><p><span>Info</span></p></a>
            <a href="#top-list" class="nav-item top-list"><p><span>Top List</span></p></a>
            <a href="#coachella" class="nav-item coachella"><p><span>Coachella</span></p></a>
            <a href="#most-recent" class="nav-item most-recent"><p><span>Most Recent</span></p></a>
        </div>
    </nav>

    <section id="home" class="home">
        <div class="heading">
            <h1>#coachellamoment</h1>
            <a href="#info" class="info">
                <img src="img/scroll.png" alt="scoll button">
            </a>
        </div> <!-- .heading -->
    </section> <!-- .banner -->

    <section id="info" class="info">
        <img src="img/people.png" alt="Coachella visistors" class="info-img">
        <div class="bg-block">
            <div class="text-block">
                <h2>Share your best Coachella moment!</h2>
                <p>Find your best moment from last year's Coachella and share it with the world! Use #coachellamoment to tag your image on Instagram, no later than Friday, June 2nd. The Coachella moment with most likes by the end of the contenst wins two free tickets to next year's festival!</p>
                <span><a href="https://www.instagram.com/">Start sharing now</a></span>
            </div>
        </div>
    </section>

    <section id="top-list" class="top-list">
        <h2>Most popular</h2>
        <div class="posts">
            <!-- Posts-->
        </div> <!-- .posts -->
    </section> <!-- .top-list -->

    <section id="coachella" class="coachella">
        <div class="img-block">
            <img src="img/coachella2.jpg">
        </div>
        <div class="text-block animated-text">
            <h2>Coachella festival</h2>
            <p>Ready to make your Coachella experience exceptional? Everything you want to know before you hit the desert can be found in our Coachella Guides. From Passes and Travel to Camping and Cuisine, we’ve got you covered.</p>
            <button id="visit-coachella">Visit Coachella official</button>
        </div>
    </section>

    <section id="most-recent" class="most-recent">
        <h2>Latests posts</h2>
        <div class="posts">
            <!-- Posts-->
        </div> <!-- .posts -->
    </section> <!-- .top-list -->

    <footer class="footer">
        <div class="palm">
            <?php //include 'php/palmtree.php'; ?>
        </div>
        <div class="logo">
            <img src="img/logo.png" alt="logo">
            <p>COACHELLA VALLEY MUSIC AND ARTS FESTIVAL</p>
        </div>
        <div class="social">
            <i class="fa fa-facebook-official"></i>
            <i class="fa fa-instagram"></i>
            <i class="fa fa-youtube-square"></i>
            <i class="fa fa-twitter-square"></i>
        </div>
        <a href="#home" class="to-top">&#8743;</a>
    </footer>

    <!-- Script -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript" src="js/all.js"></script>
</body>
</html>