const apiKey = "at_hZBgmP58hl18TyYo1sYN3Obny1Ldq";

var map = L.map("map", {
  layers: [
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
    }),
  ],
  center: [0, 0],
  zoom: 9,
});

document.addEventListener("DOMContentLoaded", () => {
  const submit = document.getElementById("submit-btn");
  const input = document.getElementById("ip-add-input");

  async function getData() {
    try {
      const response = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey} &ipAddress=${input.value}`
      );
      const data = await response.json();

      displayData(data);
      updateMap(data);
    } catch {
      console.error(data);
    }
  }

  submit.addEventListener("click", getData);

  function displayData(data) {
    const ipAdd = (document.getElementById("ip-address").innerText = data.ip);
    const timezone = (document.getElementById(
      "timezone"
    ).innerText = `UTC ${data.location.timezone}`);
    const ips = (document.getElementById("ips").innerText = data.isp);
    const location = (document.getElementById("location").innerText =
      data.location.country + ", " + data.location.city);
  }

  function updateMap(data) {
    let latlng = L.latLng(data.location.lat, data.location.lng);

    let myIcon = L.icon({
      iconUrl: "images/icon-location.svg",
      iconAnchor: [22, 94],
    });
    map.panTo(latlng);
    L.marker(latlng, { icon: myIcon }).addTo(map);

    map.setZoom(16);
  }
  getData();
});
