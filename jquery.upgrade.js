;(function($){
  
  $.upgrade = function(settings) {
    var o = $.extend({}, $.upgrade.defaults, settings);
    
    // Check if browser has passed or failed.
    if ( !o.pass || o.fail ) $(document).ready(_init);
    
    // Initialize messages.
    function _init() {
      var container = $(o.appendTo),

          // Message template.
          upgrade   = $('<div />').addClass(o.cssclass).css(o.css.upgrade).appendTo(container),
          title     = $('<h2 />').html(o.title).css(o.css.title).appendTo(upgrade),
          message   = $('<p />').html(o.message).appendTo(upgrade),
          download  = $('<h3 />').html(o.download).appendTo(upgrade),
          browsers  = $('<ul class="browsers" />').appendTo(upgrade);

      // Create browser links.
      $.each(o.browsers, function(i, b){
        var item = $('<li />').addClass('browser-' + i).appendTo(browsers),
            link = $('<a />').attr('href', b.link).text(b.name).appendTo(item);
      });
    }
  };
  
  // Default settings.
  $.upgrade.defaults = {
    pass: false,
    fail: ( $.browser == 'msie' && $.browser.version == 6 ),
    cssclass: 'jquery-upgrade',
    appendTo: 'body',
    title: 'Did you know that your Internet Explorer is out of date?',
    message: 'To get the best possible experience using our website we recommend that you upgrade to a newer version or other web browser. A list of the most popular web browsers can be found below.',
    download: 'Just click on the icons to get the download page',
    browsers: {
      explorer: { name: 'Internet Explorer 9+', link: 'http://microsoft.com/windows/Internet-explorer/default.aspx' },
      firefox: { name: 'FireFox 4+', link: 'http://mozilla.com/firefox' },
      safari: { name: 'Safari 5+', link: 'http://apple.com/safari/download' },
      opera: { name: 'Opera 11+', link: 'http://opera.com/download' },
      chrome: { name: 'Chrome 10+', link: 'http://google.com/chrome' }
    },
    css: {
      upgrade: {
        position: 'absolute',
        top: ( ( document.documentElement.clientHeight - 200 ) / 2 ) + 'px',
        left: '50%',
        width: '500px',
        padding: '20px',
        marginLeft: '-250px',
        fontSize: '0.75em',
        backgroundColor: '#ffffff',
        border: '1px solid #e5e5e5',
        zIndex: 1000
      },
      title: {
        marginTop: '0px'
      }
    }
  };
  
  // Launch default configuration.
  $(function(){ $.upgrade(); });
  
})(jQuery);

