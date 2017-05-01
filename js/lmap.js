  var mymap = L.map('map',  { dragging: !L.Browser.mobile}).setView([41.9867, 21.44631], 13);
  //var mymap = L.map('map').setView([41.997502, 21.427023], 17);

  var locate = L.control.locate({
      markerClass: L.marker,
      drawCircle: false,
      strings: {
          title: "Mijalkov.locate"
      }
  }).addTo(mymap);

  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

    ///tree pins
  var greenIcon = L.icon({
    iconUrl: "images/tree1.png",
    iconSize:[25, 50], // size of the icon
    iconAnchor: [22, 94] // point of the icon which will correspond to marker's location
  });

var trees = [

  //gologanov
  L.marker([41.99743, 21.39682], {icon: greenIcon}),
  L.marker([41.99742, 21.3970], {icon: greenIcon}),

  L.marker([41.99757, 21.39496], {icon: greenIcon}),
  L.marker([41.99728, 21.39713], {icon: greenIcon}),

  //bul k ohridski
  L.marker([  41.99672, 21.42777], {icon: greenIcon}),
  L.marker([ 41.9967, 21.42778], {icon: greenIcon}),
  L.marker([ 41.9968, 21.42779], {icon: greenIcon}),
  L.marker([ 41.9969, 21.42779], {icon: greenIcon}),
  L.marker([ 41.9970, 21.42779], {icon: greenIcon}),

        //davor
  L.marker([ 41.99683, 21.42771], {icon: greenIcon}),
  L.marker([ 41.99681, 21.42773], {icon: greenIcon}),
  L.marker([ 41.99678, 21.42775], {icon: greenIcon}),
  L.marker([ 41.99681, 21.42772], {icon: greenIcon}),
  L.marker([ 41.99678, 21.42774], {icon: greenIcon}),
  L.marker([ 41.99664, 21.42773], {icon: greenIcon}),
  L.marker([ 41.99655, 21.42775], {icon: greenIcon}),
  L.marker([ 41.99665, 21.42771], {icon: greenIcon}),
  L.marker([ 41.99609, 21.42772], {icon: greenIcon}),
  L.marker([ 41.99655, 21.42768], {icon: greenIcon}),
  L.marker([ 41.99614, 21.4277], {icon: greenIcon}),
  L.marker([ 41.99597, 21.42772], {icon: greenIcon}),
  L.marker([ 41.99659, 21.42767], {icon: greenIcon}),
  L.marker([ 41.99603, 21.42769], {icon: greenIcon}),
  L.marker([ 41.99594, 21.42763], {icon: greenIcon}),
  L.marker([ 41.99605, 21.42772], {icon: greenIcon}),
  L.marker([ 41.99599, 21.42767], {icon: greenIcon}),
  L.marker([ 41.99599, 21.42773], {icon: greenIcon}),
  L.marker([ 41.99585, 21.42765], {icon: greenIcon}),
  L.marker([ 41.99569, 21.42769], {icon: greenIcon}),
  L.marker([ 41.9966, 21.42766], {icon: greenIcon}),
  L.marker([ 41.99666, 21.42773], {icon: greenIcon}),
  L.marker([ 41.99596, 21.42773], {icon: greenIcon}),
  L.marker([ 41.9964, 21.42529], {icon: greenIcon}),
  L.marker([ 41.99628, 21.42524], {icon: greenIcon}),
  L.marker([ 41.99582, 21.42519], {icon: greenIcon}),
  L.marker([ 41.99545, 21.42592], {icon: greenIcon}),
  L.marker([ 41.99704, 21.42542], {icon: greenIcon}),
  L.marker([ 41.99575, 21.42766], {icon: greenIcon}),
  L.marker([ 41.9955, 21.42765], {icon: greenIcon}),
  L.marker([ 41.9954, 21.42768], {icon: greenIcon}),
  L.marker([ 41.9973, 21.42755], {icon: greenIcon}),
  L.marker([ 41.99547, 21.42635], {icon: greenIcon}),
  L.marker([ 41.99557, 21.42523], {icon: greenIcon}),
  L.marker([ 41.99537, 21.42774], {icon: greenIcon}),
  L.marker([ 41.99765, 21.42549], {icon: greenIcon}),
  L.marker([ 41.99657, 21.42775], {icon: greenIcon}),


  //merni stanici try later to fix this
  //L.marker([42.00269, 21.42316])
];
  var tree1Layer = L.layerGroup(trees).addTo(mymap);

//heatmap

var heat = L.heatLayer([
        [42.00269, 21.42316],
        [41.998975, 21.389450],
        [42.003768,21.394638],
        [42.003309,21.408075],
        [41.987726,21.456481],
        [42.003768,21.394638],
        [41.995238146587674,21.402708292007443],
        [41.987726,21.456481]],{radius: 80}).addTo(mymap);



var polygonTaftalidze = L.polygon([
  [41.98892, 21.3888],
  [41.9955, 21.35979],
  [42.00914, 21.37285],
  [42.0002, 21.39926]
]).setStyle({fillColor: '#668F00', fillOpacity: 0.6,color: '#668F00'}).addTo(mymap);


var polygonKarpos3 = L.polygon([
  [42.00914, 21.37285],
  [42.0002, 21.39926],
  [42.01066, 21.40278],
   [42.0187, 21.38574]
]).setStyle({fillColor: '#A57A00', fillOpacity: 0.6,color: '#A57A00'}).addTo(mymap);
var polygonKarpos2 = L.polygon([
  [42.00021, 21.39926],
  [41.99835, 21.41471],
  [42.00884, 21.42034],
  [42.01066, 21.40278]
]).setStyle({fillColor: '#A59800', fillOpacity: 0.6,color: '#A59800'}).addTo(mymap);
var polygonKapistec = L.polygon([
[41.98292, 21.4081],
[41.98892, 21.38881],
[42.0002, 21.39926],
[41.99834, 21.41471]
]).setStyle({fillColor: '#F64E00', fillOpacity: 0.6,color: '#F64E00'}).addTo(mymap);

var polygonCentar = L.polygon([
[41.97456, 21.42427],
[41.98292, 21.40809],
[41.99834, 21.41471],
[42.00884, 21.42034],
[42.00432, 21.44415]
]).setStyle({fillColor: '#6C9000', fillOpacity: 0.6,color: '#6C9000'}).addTo(mymap);

var polygonAerodrom = L.polygon([
[41.97456, 21.42427],
[42.00432, 21.44415],
[41.99474, 21.51068],
[41.98147, 21.51995],
[41.94371, 21.5043],
[41.96296, 21.4312]
]).setStyle({fillColor: '#F64E00', fillOpacity: 0.6,color: '#F64E00'}).addTo(mymap);

  //samo za zemanje koordinati
/*
  mymap.on('click', function(e) {
    alert(e.latlng);
  });
*/