<!DOCTYPE html>
<html lang="en">
<head>
    <title>kampanj</title>
    <meta charset="utf-8">
    <link href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
    <!-- TODO: Rensa klasser/IDn som inte används (invänta fix för scroll indicator) -->

    <nav class="main-nav">
        <a href="#home" class="nav-item home"><p><span>Home</span></p></a>
        <a href="#info" class="nav-item info"><p><span>Info</span></p></a>
        <a href="#top-list" class="nav-item top-list"><p><span>Top List</span></p></a>
        <a href="#coachella" class="nav-item coachella"><p><span>Coachella</span></p></a>
        <a href="#most-recent" class="nav-item most-recent"><p><span>Most Recent</span></p></a>
    </nav>

    <section id="home" class="home new-page">
        <div class="heading">
            <h1>#hashtag</h1>
        </div> <!-- .heading -->
    </section> <!-- .banner -->

    <section id="info" class="info new-page">
        <img src="img/people.png" alt="Coachella visistors">
        <div class="color-block">
            <div class="text-block">
                <h2>What's your best Coachella moment?</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam tu hanc copiosiorem etiam soles dicere. Atqui reperies, inquit, in hoc quidem pertinacem; Et ille ridens: Video, inquit, quid agas; Summum ením bonum exposuit vacuitatem doloris; Duo Reges: constructio interrete.</p>
            </div>
        </div>
    </section>

    <section id="top-list" class="top-list new-page">
        <h2>Most popular</h2>
        <div class="posts">
            <!-- Posts-->
        </div> <!-- .posts -->
    </section> <!-- .top-list -->

    <section id="coachella" class="coachella new-page">
        <div class="img-block">
            <img src="../img/coachella2.jpg">
        </div>
        <div class="text-block">
            <h2>Coachella festival</h2>
            <p>Ready to make your Coachella experience exceptional? Everything you want to know before you hit the desert can be found in our Coachella Guides. From Passes and Travel to Camping and Cuisine, we’ve got you covered.</p>
            <button id="visit-coachella">Visit Coachella official</button>
        </div>
    </section>

    <section id="most-recent" class="most-recent new-page">
        <h2>Latests posts</h2>
        <div class="posts">
            <!-- Posts-->
        </div> <!-- .posts -->
    </section> <!-- .top-list -->

    <footer>
        <p>Footer</p>
        <a href="#home" class="to-top">To Top</a>
    </footer>

    <!-- Script -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript" src="js/all.js"></script>
</body>
</html>