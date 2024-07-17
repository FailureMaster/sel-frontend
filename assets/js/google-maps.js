/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: 43.891668, lng: -79.024112 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 10,
    center: position,
    disableDefaultUI: true,
    mapId: google.maps.MapTypeId.ROADMAP,
  });

  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "User Address",
  });
  
}

initMap();