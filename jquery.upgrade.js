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
          download  = $('<h4 />').html(o.download).appendTo(upgrade),
          browsers  = $('<ul class="browsers" />').appendTo(upgrade);
      
      // Create browser links.
      var c = 0;
      $.each(o.browsers, function(i, b){
        var item = $('<li />').addClass('browser-' + i).css(o.css.icon).css('background-position', '-' + ( c * 72 ) + 'px 0').appendTo(browsers),
            link = $('<a />').attr('href', b.link).text(b.name).appendTo(item);
        c++;
      });
    }
  };
  
  // Default settings.
  $.upgrade.defaults = {
    pass: false,
    fail: ( $.browser == 'msie' && $.browser.version == 6 ),
    cssclass: 'jquery-upgrade',
    appendTo: 'body',
    title: 'This site uses features only available in newer browsers.',
    message: 'To get the best possible experience using our website, we recommend that you use a modern, standards-compliant web browser. A list of the most popular web browsers can be found below.',
    download: 'Just click on the links below to visit the download page for the browser of your choice.',
    browsers: {
      explorer: { name: 'Internet Explorer 9+', link: 'http://microsoft.com/windows/Internet-explorer/default.aspx' },
      firefox: { name: 'FireFox 4+', link: 'http://mozilla.com/firefox' },
      safari: { name: 'Safari 5+', link: 'http://apple.com/safari/download' },
      opera: { name: 'Opera 11+', link: 'http://opera.com/download' },
      chrome: { name: 'Chrome 10+', link: 'http://google.com/chrome' }
    },
    path: 'jquery.upgrade/icons',
    css: {
      upgrade: {
        position: 'absolute',
        top: '150px',
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
      },
      icon: {
        display: 'block',
        float: 'left',
        width: '64px',
        marginRight: '10px',
        paddingTop: '64px',
        listStyle: 'none',
        backgroundImage: 'url(sites/default/libraries/jquery.upgrade/icons/browser_logos-64.png)',
        backgroundRepeat: 'no-repeat'
      }
    }
  };
  
  // Launch default configuration.
  $(function(){ $.upgrade(); });
  
})(jQuery);

