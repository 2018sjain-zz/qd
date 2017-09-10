cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-qrscanner.QRScanner",
        "file": "plugins/cordova-plugin-qrscanner/www/www.min.js",
        "pluginId": "cordova-plugin-qrscanner",
        "clobbers": [
            "QRScanner"
        ]
    },
    {
        "id": "org.apache.cordova.dialogs.notification",
        "file": "plugins/org.apache.cordova.dialogs/www/notification.js",
        "pluginId": "org.apache.cordova.dialogs",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "id": "org.apache.cordova.inappbrowser.inappbrowser",
        "file": "plugins/org.apache.cordova.inappbrowser/www/inappbrowser.js",
        "pluginId": "org.apache.cordova.inappbrowser",
        "clobbers": [
            "window.open"
        ]
    },
    {
        "id": "phonegap-plugin-barcodescanner.BarcodeScanner",
        "file": "plugins/phonegap-plugin-barcodescanner/www/barcodescanner.js",
        "pluginId": "phonegap-plugin-barcodescanner",
        "clobbers": [
            "cordova.plugins.barcodeScanner"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-browsersync": "0.1.1",
    "cordova-plugin-compat": "1.1.0",
    "cordova-plugin-swift-support": "3.1.1",
    "cordova-plugin-qrscanner": "2.5.0",
    "cordova-plugin-whitelist": "1.3.2",
    "org.apache.cordova.dialogs": "0.3.0",
    "org.apache.cordova.inappbrowser": "0.6.0",
    "phonegap-plugin-barcodescanner": "4.0.2"
};
// BOTTOM OF METADATA
});