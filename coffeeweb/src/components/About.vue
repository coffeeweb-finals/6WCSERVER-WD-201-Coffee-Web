<template>
  <div class="About">
    <title>{{title}}</title>

    

      <section>
        <div class="main">
            <div class="header">
                <div class="bg">
                    <div class="content">
                        <h1>
                            About Us
                        </h1>
                        <p>Coffee Web was built in 2001 where every classic coffee happens here. We started on a small business place in the culinary capital of the Philippines, Angeles City. We strive hard to dedicate our passion to making coffee and serving
                            people wholeheartedly. Since then, the Cafe is now operating for almost 20 years and has many branches around the Philippines. We made this far because of the love and support of our beloved customers.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="mission" id="mission">
        <div class="infoBx">
            <h2>Mission</h2>
            <p>
                Our Mission is to provide the world's best freshly roasted coffee, pastry, and pasta to our customers while providing excellent service at a price that is fair to both the producers and our customers.</p>
        </div>
        <div class="infoBx">
            <img src="../assets/pouringcoffee.png" alt="coffee1">
        </div>
        <div class="infoBx">
            <h2>Vision</h2>
            <p>Our vision is to be a world-class and even better Café, serving more customers around the world delicious coffee, pastry, and pasta.</p>
        </div>
    </section>

    <section class="menu_items" id="menu">
        <br/>
        <br/>
        <center>
            <h2>AUTHORS</h2>
        </center>

        <div class="itemBx">
            <div class="box">
                <img src="../assets/jed.jpeg" alt="img_jed">
                <div class="infobx">
                    <h4>Jed Bartolome</h4>
                    <p> I am Jed Miguel Bartolome, a 2nd year student Major in Web Development and my hobbies are creating HTML and CSS code and also I am an aspiring Software Engineer and a Doctor in the future. I am the cutest and handsome student in WD-201.</p>
                </div>
            </div>
            <div class="box">
                <img src="../assets/dhana.jpeg" alt="img_dhana">
                <div class="infobx">
                    <h4>Dhana Bermudez</h4>
                    <p> I am Dhana Grace Bermudez, a 2nd year major in Web Development student. I am a software engineer in the making. I want to learn and explore technologies that can help us to have a better and efficient world.</p>
                </div>
            </div>
            <div class="box">
                <img src="../assets/quinny.jpeg" alt="img_quinny">
                <div class="infobx">
                    <h4>Quinny Lacsina</h4>
                    <p> I am Quinny Joyce Ann Lacsina, a 2nd year major in Web Development student. My goal is to be a Software Engineer someday. My motto in life is to never stop learning.</p>
                </div>
            </div>
                        <div class="box">
                <img src="../assets/shem.jpeg" alt="img_jed">
                <div class="infobx">
                    <h4>Shem Baytan</h4>
                    <p> I am Shem Ardelee Pioleen Baytan, co-owner of Coffee Web. I love discovering new ways on how to mix and brew coffee, and would like nothing more but to sit down reading a book while drinking one.</p>
                </div>
            </div>
            <div class="box">
                <img src="../assets/kisses.jpeg" alt="img_dhana">
                <div class="infobx">
                    <h4>Kisses Reyes</h4>
                    <p> I am Kisses Shannen Reyes, the marketing specialist of Coffee Web, who likes to learn the trends that will be beneficial to the shop. Since I like coffee, I explored various menu and specialties that I can share with.</p>
                </div>
            </div>
            <div class="box">
                <img src="../assets/almario.jpeg" alt="img_quinny">
                <div class="infobx">
                    <h4>Almario Guzman</h4>
                    <p> My name is Almario Guzman III, a co-owner of Coffee Web. I wanted to personally welcome you to Coffee Web on behalf of our entire team. Thank you for supporting Coffee Web we are grateful that you choose Coffee Web and hope you enjoy our products.</p>
                </div>
            </div>
        </div>

    </section>

    <footer>
        <address>
           <br/>
           <p class="copyright">	
            &#9749;COFFEE WEB 2022&#169; All rights reserved</p>
        </address>
     </footer>
    
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      
      title: 'About'
      
    }
    
  }
}
</script>


<style scoped>
    .content {
        background-size: cover;
        border: 4px solid #d7b17e;
        padding: 10px 25 px;
        border-radius: 6px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .header{
      background-image:url(../assets/bg.jpg);
      background-position: center;
      background-size:cover ;
      background-repeat: no-repeat;
      height: 95vh;
      align-items: center;
    }
    
    address {
        clear: both;
        width: 100%;
        height: 8vh;
    }
    
    .menu_items {
        min-height: 100vh;
        width: 100%;
    }
    
    
    .menu_items .itemBx {
        background-image:url(../assets/wp.jpg);
        background-position: center;
        background-size:cover ;
        background-repeat: no-repeat;
        height: 95vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
    
    .menu_items .itemBx .box {
        margin-left: 50px;
        margin-top: 50px;
        border-radius: 10px;
        height: 250px;
        width: 500px;
        display: flex;
    }
    
    .menu_items .itemBx .box img {
        height: 100px;
        width: 100px;
        object-fit: cover;
        border-radius: 10px;
        margin: 10px;
    }
    
    .content {
        background: rgba(0,0,0,0.5);
        position: absolute;
        color: white;
        text-align: center;
    }

    .content p {
        color: white;
    }
    
    .content h1 {
        font-size: 50px;
        bottom: 0;
    }
    
    h1 {
        text-align: center;
    }
    
    .content p {
        bottom: 0;
        padding: 0px 100px;
        font-size: 20px;
    }
    
    .box p {
        text-align: center;
    }
    
    .bg {
        height: 95vh;
    }
    
    .mission {
        width: 100%;
        min-height: 100vh;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    
    .mission .infoBx {
        max-width: 400px;
    }
    
    .mission .infoBx h2 {
        font-size: 2.5em;
    }
    
    .mission .infoBx p {
        font-size: 1.5em;
    }
    
    .mission img {
        width: 500px;
        object-fit: cover;
    }
    
    .menu_items h2 {
        color: white;
    }
    
    .menu_items {
        background-image: url(/Pictures/wp.jpg);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        height: 95vh;
    }
    
    .menu_items .itemBx .box {
        background: #fff;
        justify-content: center;
        align-items: center;
    }
    
    .menu_items .itemBx .box .infobx h4 {
        font-size: 1.5em;
    }
    
    .menu_items .itemBx .box .infobx p {
        font-size: 0.8em;
    }
    
    .menu_items .itemBx .box .infobx h5 {
        font-size: 1.3em;
    }

    p{
        color:#5c8f52;
        padding: 10px 15px;
        text-align: center;
    }

    footer {
        width: 100%;
        height: 60%;
        bottom: 0;
        background-color: #DEDEDE;
        color: brown;
        padding: 30px;
        font-size: 15px;
        line-height: 20px;
    }
    
    .row2 {
        width: 50%;
        margin: auto;
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: space-between;
    }
    
    .col {
        flex-basis: 25%;
        padding: 2px;
    }
    
    .col:nth-child(2),
    col:nth-child(3) {
        flex-basis: 15%;
    }
    
    .logo {
        width: 100%;
        height: 100%;
    }
    
    .col h3 {
        width: fit-content;
        margin-bottom: 40px;
        position: relative;
    }
    
    .fab {
        width: 30px;
        height: 40px;
        border-radius: 50%;
        text-align: center;
        line-height: 40px;
        font-size: 20px;
        color: #000;
        margin-right: 15px;
        cursor: pointer;
    }
    
    .row2 i {
        margin-right: 10px;
    }
    
    hr {
        width: 90%;
        border: 0;
        border-bottom: 1px solid #ccc;
        margin: 20px auto;
    }
    
    .copyright {
        text-align: center;
    }
</style>