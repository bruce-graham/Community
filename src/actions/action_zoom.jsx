export function sendZoom(zoom) {
  console.log('Sending Zoom Property', zoom);
  return {
    type: 'ZOOM',
    payload: zoom
  };
 }