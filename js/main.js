var streamers = ["freecodecamp", "storbeck", "terakilobyte", "habathcx", "RobotCaleb", "thomasballinger", "noobs2ninjas", "beohoff",  "brunofin", "comster404", "pajlada"];

$(document).ready(function (){

  for(var i = 0; i < streamers.length; i++){
    getData(streamers[i]);
  }

  $('#online').on('click', function(){
    $('.streamerList').hide(200, function(){
      $('.streamer-online').show(200);
    });
    $('.active').removeClass('active');
    $(this).addClass('active');
  });

  $('#offline').on('click', function (){
    $('.streamer-online').hide(function(){
      $('.streamer-offline').show(200);
    });
    $('.active').removeClass('active');
    $(this).addClass('active');
  });

  $('#all').on('click', function (){
    $('.streamerList').show(200);

    $('.active').removeClass('active');
    $(this).addClass('active');
  });

});


function getData(streamerName){
  $.getJSON('https://api.twitch.tv/kraken/streams/' + streamerName + '?callback=?', function(data) {
    console.log(data);

    if( data.stream ){
      $('body').append(
        "<div class='streamerList streamer-online'>" +
        "<img src=" + data.stream.channel.logo + " />" +
        "<div class='inline'><h1>" + data.stream.channel.display_name + " is playing " +
        data.stream.channel.game +"</h1>" +
        "<h3>" + data.stream.channel.status +"</h3></div>" +
        "<div style='display: inline-block; float: right;'><a href='" + data.stream.channel.url + "' target='_blank'><img style='margin:0' src=" + data.stream.preview.medium + "/></a>" +
        "<h4>" + data.stream.viewers + " viewers </h4>"  +
        "</div></div>"
      );
    }else if (data.stream === null) {
      $('body').append(
        "<div class='streamerList streamer-offline'>" +
        "<h1>" + streamerName +" is currently not streaming.</h1>" +
        "</div>"
      );
    }else if (data.error) {
      $('body').append(
        "<div class='streamerList streamer-offline streamer-notExist'>" +
        "<h1>" + data.message +
        "</div>"
      );
    }


  });
}
