const button = document.querySelector(".btn");

button.addEventListener("click", function(){
  var ip = document.querySelector(".ip-input").value;
  
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
