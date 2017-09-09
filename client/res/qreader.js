// Start a scan. Scanning will continue until something is detected or
// `QRScanner.cancelScan()` is called.
QRScanner.scan(displayContents);

function displayContents(err, text){
  if(err){
    // an error occurred, or the scan was canceled (error code `6`)
  } else {
    // The scan completed, display the contents of the QR code:
    alert(text);
  }
}

// Make the webview transparent so the video preview is visible behind it.
QRScanner.show();
// Be sure to make any opaque HTML elements transparent here to avoid
// covering the video.
