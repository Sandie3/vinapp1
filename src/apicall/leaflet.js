import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

let mymap;

// Create map
export const createMap = ( cord = [ 0, 0 ]) => {
    mymap = L.map('mapcontainer').setView(cord, 4);

    L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        { attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors' }
    ).addTo(mymap);
}

// Delete map
export const delMap = () => {
    mymap.off();
    mymap.remove();
}

// Change map position
export const changeView = (cord) => {
    mymap.setView(cord, 4)
}