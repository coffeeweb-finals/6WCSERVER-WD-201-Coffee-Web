<template>
  <div class="Home">
    <title>{{title}}</title>
    
      <div class="header">
        <div class="bg">
        </div>
      </div>

      <br/>
      <br/>
      <br/>
      <hr>
      <br/>
      <br/>
      

      <div class="content2">
        <h4>
          <strong>THE FRESH COFFEE IN TOWN IS NOW SERVING</strong>
        </h4>
            
        <div class="videobg">
            <video width="720" height="500" autoplay="autoplay" loop>
              <source src="../assets/barista.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video>

            <audio autoplay>
              <source src="../assets/sound.mp3" type="audio/mp3">
              Your browser does not support the audio element.
            </audio> 
        </div>
      </div>

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
  name: 'Home',
  data () {
    return {
      
      title: 'Home'
      
    }
    
  }
}
</script>


<style scoped>
  *{
    margin: 0;
    padding: 0;
    font-family:Georgia, 'Times New Roman', Times, serif;
  }
  .header{
      background-image:url(../assets/wallpaper1.jpg);
      background-position: center;
      background-size:cover ;
      background-repeat: no-repeat;
      height: 95vh;
      align-items: center;
    }
  .bg{
      text-align: center;
      margin-top: 0%;  
  }

  .content{
    background: rgba(0,0,0,0.5);
    position: absolute;
    color:white;
    text-align: center;
    background-size: cover;
    border: 4px solid #d7b17e;
    padding: 10px 25 px;
    border-radius: 6px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  hr{
    height: 5px;
    background-color: #57291F;
    width: 60%;
    margin-left: 20%;
  }
  .content2{
      color:#a14415;
      padding: 1px 15px;
  }
  h4{
    text-align: center;
  }
  video{
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-top: 0%;
  }
  p{
    color:#5c8f52;
    padding: 10px 15px;
    text-align: center;
  }
  address{
    height: 8vh;
    width: 100%;
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
</style>

