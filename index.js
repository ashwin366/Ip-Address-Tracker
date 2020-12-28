const button = document.querySelector(".btn");
mapboxgl.accessToken = 'pk.eyJ1IjoiYXNod2luMzY2IiwiYSI6ImNrajVwNW1rZjB6Z24yc2szNzg2ZnNmdHEifQ.GcyQ-gNRy8i8sRWZJRKVPw';

button.addEventListener("click", function(){
  var ip = document.querySelector(".ip-input").value;
  var api_key = "at_8fSl78MxAysnROSCLVwatObbSiFvV";
  $(function() {
    $.ajax({
      url: "https://geo.ipify.org/api/v1",
      data: {
        apiKey: api_key,
        ipAddress: ip
      },
      success: function(data) {
        console.log(data.location);
        var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [data.location.lng, data.location.lat],
        zoom:13
      });

        var marker = new mapboxgl.Marker().setLngLat([data.location.lng, data.location.lat]).addTo(map);

      }
    });
  });
})
