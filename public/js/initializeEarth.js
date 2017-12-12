 var rotate = true;
 var earth;
 var locations = [{
     country: 'Denmark',
     coords: [55.370675, 10.428067],
     text: "<b>Se her hvad der gør det muligt at skabe en global opvarmning?</b><br><input type='submit' value='Klik' name='submit'>"
 }, {
     country: 'Greenland',
     coords: [67.237934, -27.062320],
     text: "<b>Hjælp! Grønlandspumpen er ved at gå i stå..</b><br><input type='submit' value='Klik' name='submit'>"
 }, {
     country: 'Amazonas',
     coords: [-4.068958, -63.318593],
     text: "<b>Se hvilke konsekvenser global opvarmning skaber!</b><br><input type='submit' value='Klik' name='submit'>"
 }, {
     country: 'China',
     coords: [39.919591, 116.386436],
     text: "<b>Så meget bliver atmosfæren forurenet, hvad kan vi gøre for at stoppe det?</b><br><input type='submit' value='Klik' name='submit'>"
 }];
 var markers = [];
 var data = JSON.parse(localStorage.getItem('page_count'));
 var page_count;
 if (data == null) {
     page_count = 0;
 } else {
     page_count = data;
 }

 function initialize() {
     earth = new WE.map('earth_div');
     earth.setView([22.364383, 9.406219], 3);
     WE.tileLayer('http://data.webglearth.com/natural-earth-color/{z}/{x}/{y}.jpg', {
         tileSize: 256,
         bounds: [
             [-85, -180],
             [85, 180]
         ],
         minZoom: 0,
         maxZoom: 1,
         attribution: 'WebGLEarth example',
         tms: true
     }).addTo(earth);

     startStopRotation();

     for (var i = 0; i < locations.length; i++) {
         var marker = WE.marker(locations[i].coords).addTo(earth); //'images/grey_marker.png', 30, 41
         if (i == page_count) {
             marker.bindPopup(locations[i].text, {
                 maxWidth: 150,
                 closeButton: true
             });
         } else {
             marker.bindPopup(locations[i].country, {
                 maxWidth: 150,
                 closeButton: true
             });
         }
         markers[i] = marker;
     }

     if (page_count < 4) {
         markers[page_count].openPopup();
     }
 }