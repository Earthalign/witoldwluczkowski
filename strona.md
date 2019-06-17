<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta charset="utf-8" />
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
<title>Witold Wluczkowski Site</title>
<link rel="stylesheet" href="style4.css">
* {
  box-sizing:border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.container {
  padding: 64px;
}

.row:after {
  content: "";
  display: table;
  clear: both
}

.column-66 {
  float: left;
  width: 66.66666%;
  padding: 20px;

}

.column-33 {
  float: left;
  width: 33.33333%;
  padding: 20px;

}

.large-font {
  font-size: 48px;

}

.xlarge-font {
  font-size: 64px
}

.button {
  border: none;
  color: white;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  background-color: #4CAF50;

}

img {
  display: block;
  height: auto;
  max-width: 100%;

}

@media screen and (max-width: 1000px) {
  .column-66,
  .column-33 {
    width: 100%;
    text-align: center;

  }
  img {
    margin: auto;

  }
}
</style>
</head>
</body>

<style>
* {box-sizing: border-box;}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;

}

.header {
  overflow: hidden;
  background-color: #f1f1f1;
  padding: 20px 10px;
  color: #FFFFFF;

}

.header a {
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;


}

.header a.logo {
  font-size: 25px;
  font-weight: bold;

}

.header a:hover {
  background-color: #ddd;
  color: black;

}

.header a.active {
  background-color: dodgerblue;
  color: white;


}

.header-right {
  float: right;

}

@media screen and (max-width: 500px) {
  .header a {
    float: none;
    display: block;
    text-align: left;

  }

  .header-right {
    float: none;

  }
}


footer {clear:both;
background:#E5E5E5;
color:#000;
margin:25px 0;
padding:15px 0 15px 50px;
}
<body>

<div class="header">
  <a href="strona2.html" class="logo">WITERLOO </a>
  <div class="header-right">
  <a class="active" href="strona2.html">Home</a>
  <a href="portfolio.html">Portfolio</a>
  <a href="contact2.html">Contact</a>
  <a class="active" href="blog.html">Blog</a>
  <a href="strona.html">DonttComeHere</a>
  <a href="catzone.html">CatZone</a>
  <a class="active" href="aboutme.html">AboutMe</a>


  </div>
</div>
<div class="container">
  <div class="row">
    <div class="column-66">

      <h1 class="xlarge-font"><b>Welcome to my site! </b></h1>
     <h1 class="large-font" style="color:MediumSeaGreen;"><b>Why you should check everything on this website? </b></h1>
      <p><span style="font-size:36px">If you are interested of some of this things you should</span>  </p>
    <a class="button" href="aboutme.html" target="_blank"> But first, meet me! </a>
  </div>
    <div class="column-33">

    </div>

  </div>
</div>

<!-- Clarity Section -->
<div class="container" style="background-color:#f1f1f1">
  <div class="row">
    <div class="column-33">
      <img src="tlo8.jpg" alt="App" width="300" height="400">
    </div>
    <div class="column-66">
      <h1 class="xlarge-font"><b>New Technology! </b></h1>
      <h1 class="large-font" style="color:red;"><b>From yesterday to tomorrow </b></h1>
      <p><span style="font-size:24px"> If you like new technology </span>
      You definitely must check other sites of this website, don't be shy, after that, let me know what do you think! </p>
      <a class="button" href="https://www.facebook.com/Witek.Wluczkowski" style="background-color:red"> CLICK HERE!  </a>
    </div>
  </div>
</div>

<!-- The App Section -->
<div class="container">
  <div class="row">
    <div class="column-66">
      <h1 class="xlarge-font"><b>Great Coffee!</b></h1>
      <h1 class="large-font" style="color:MediumSeaGreen;"><b>Speciallity Coffee</b></h1>
      <p><span style="font-size:36px">If you like to drink good coffee</span>
        You are on good site, just check whole website, and see what i prepare for you! </p>
      <a class="button" href="portfolio.html" > Visit my gallery  </a>
    </div>
    <div class="column-33">
<img src="shot.jpg" width="400" height="300">

    </div>
  </div>
</div>

</body>
</html>

<!-- Clarity Section -->
<div class="container" style="background-color:#f1f1f1">
  <div class="row">
    <div class="column-33">
      <img src="mak6.jpg" alt="App" width="335" height="471">
    </div>
    <div class="column-66">
      <h1 class="xlarge-font"><b>Great Tech!</b></h1>
      <h1 class="large-font" style="color:red;"><b>Great technology for work and usually live </b></h1>
      <p><span style="font-size:24px"> You like Apple or other interesting brands? </span> Definitely check what i have for you, you will fell like in heaven (or something like that)   </p>
      <a class="button" href="https://devillecloud.com" style="background-color:red">Check great tech  </a>
    </div>
  </div>
</div>

<footer>
<center>
  <p>
copyright ©. all right reserved for WitoldWluczkowski.   If you want copy that site, tell me and wait for my permisson
</p>
<b> @ilike @cats @goodCoffee @goodbeer </b>
</center>

</footer>
