var meta = document.createElement('meta');
meta.name = "viewport";
meta.content = "width=device-width, initial-scale=1";
document.getElementsByTagName('head')[0].appendChild(meta);

var script = document.createElement('script');
script.src = "https://example.com/your-script.js";
document.getElementsByTagName('head')[0].appendChild(script);
(function() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.setAttribute('data-cmp-ab', '1');
    script.src = 'https://cdn.consentmanager.net/delivery/autoblocking/e7168f9ce18a3.js';
    script.setAttribute('data-cmp-host', 'c.delivery.consentmanager.net');
    script.setAttribute('data-cmp-cdn', 'cdn.consentmanager.net');
    script.setAttribute('data-cmp-codesrc', '16');
    document.head.appendChild(script);
})();

(function() {
    var gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-3MLX5P0FLD';
    document.head.appendChild(gtagScript);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
        dataLayer.push(arguments);
    }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', 'G-3MLX5P0FLD');
})();
