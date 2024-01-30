mapboxgl.accessToken = 'pk.eyJ1Ijoib2hnb2QiLCJhIjoiY2xyenp4OHJzMXl5NzJrbzNnaXhlcW95MCJ9.rAlhazL7uhEejmkHxXaf6A';

const restaurants = [
    {
        name: "Gourmet Haven",
        geotag: [-122.4194, 37.7749], // San Francisco coordinates
        description: "A delightful experience of gourmet cuisine.",
        images: ["path/to/image1.jpg", "path/to/image2.jpg", "path/to/image3.jpg"]
    },
    {
        name: "Seafood Delight",
        geotag: [-122.431297, 37.773972], // San Francisco coordinates
        description: "Fresh and tasty seafood dishes straight from the ocean.",
        images: ["path/to/image4.jpg", "path/to/image5.jpg", "path/to/image6.jpg"]
    }
];

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/ohgod/clrzzgzm7001101od8effa9bd',
    center: [-122.4194, 37.7749],
    zoom: 12
});

restaurants.forEach(restaurant => {
    const el = document.createElement('div');
    el.className = 'marker';
    el.style.backgroundImage = 'url(Pin2.png)'; 
    el.style.width = '50px'; // Marker width
    el.style.height = '50px'; // Marker height
    el.style.backgroundSize = 'cover';

    const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
        <div class="popup-content">
            <h2>${restaurant.name}</h2>
            <p>${restaurant.description}</p>
            ${restaurant.images.map(img => `<img src="${img}" alt="${restaurant.name} photo">`).join('')}
        </div>
    `);

    new mapboxgl.Marker(el)
        .setLngLat(restaurant.geotag)
        .setPopup(popup)
        .addTo(map);
});
