import React, { useState, useEffect } from "react";

const AddressForm = () => {
  const [address, setAddress] = useState("");
  const [map, setMap] = useState(null);

  useEffect(() => {
    // Load the Google Maps API with a callback function
    const loadGoogleMapsScript = () => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyD_RZinZEp_F_YXpKOolcoaVRozY1APwAM&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      document.head.appendChild(script);
    };

    loadGoogleMapsScript();

    return () => {
      // Cleanup: remove the script when the component unmounts
      const script = document.querySelector('script[src*="maps.googleapis.com"]');
      if (script) {
        script.remove();
      }
    };
  }, []);

  const initMap = () => {
    // Your initMap function remains the same
    const mapOptions = {
      center: { lat: 0, lng: 0 },
      zoom: 8,
    };

    const newMap = new window.google.maps.Map(document.getElementById("map"), mapOptions);
    setMap(newMap);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  
    // Use the Google Places API to get the location based on the address entered
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: event.target.value }, (results, status) => {
      if (status === "OK" && results[0]) {
        const location = results[0].geometry.location;
        map.setCenter(location); // Set the map center to the new location
        new window.google.maps.Marker({ map, position: location }); // Add a marker to the map
      }
    });
  };
  

  // The rest of your component remains the same

  return (
    <div>
      <div>
        <label>Enter your address:</label>
        <input
          type="text"
          value={address}
          onChange={handleAddressChange}
          placeholder="Enter your address"
        />
      </div>
      <div id="map" style={{ height: "400px", width: "100%" }}></div>
    </div>
  );
};

export default AddressForm;
