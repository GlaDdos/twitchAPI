var streamers = ["freecodecamp", "storbeck", "terakilobyte", "habathcx", "RobotCaleb", "thomasballinger", "noobs2ninjas", "beohoff"];

$(document).ready(function (){

  getData('adam13531');

});


function getData(streamerName){
  $.getJSON('https://api.twitch.tv/kraken/streams/' + streamerName + '?callback=?', function(data) {
    console.log(data);

    $('body').append(
      "<div class='streamerList streamer-online'>" +
      "<img src=" + data.stream.channel.logo + " />" +
      "<div class='inline'><h1>" + data.stream.channel.display_name + " is playing " +
      data.stream.channel.game +"</h1>" +
      "<h3>" + data.stream.channel.status +"</h3>" +
      "<div class='inline'><img src=" + data.stream.preveiew.medium + "/>" +
      "<h4>" + data.stream.channel.viewers + "viewers </h4>"  +
      "</div></div></div>"
    );

    console.log("streamer name: " + data.stream.channel.display_name);
    console.log("streamer logo: " + data.stream.channel.logo);
    console.log("streamer viewers: " + data.stream.viewers);
    console.log("channel status: "+ data.stream.channel.status);
    console.log("channel link: " + data.stream.channel.url);
    console.log("playing: " + data.stream.channel.game);
    console.log("channel preview: " + data.stream.preview.medium);
  });
}
