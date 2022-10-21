(function ( $ ) {

  var settings = {};

  $.cookieMessage = function (options) {
      var defaults = {
          mainMessage: "",
          acceptButton: "Accept",
          politicButton: "Privacy Politic",
          expirationDays: 20,
          backgroundColor: '#666',
          fontSize: '12px',
          fontColor: '#000',
          btnBackgroundColor: '#00b07a',
          btnBackgroundColorSecondary: '#003352',
          btnFontSize: '12px',
          btnFontColor: 'white',
          btnFontColorSecondary: 'white',
          fontWeight: '700',
          linkFontColor: '#CCC',
          cookieName: 'cookieMessage'
      };

      settings = $.extend( {}, defaults, options );
      ready();
  }

  function ready() {
      var coo = getCookie(settings.cookieName);
      if (coo != "true") {
          $(document).ready(function() {
              setTimeout(cookieMessageGenerate, 10000);
          })
      }
  }

  function setCookie(c_name, value, exdays) {
      var exdate = new Date();
      exdate.setDate(exdate.getDate() + exdays);
      var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
      document.cookie = c_name + "=" + c_value;
  }

  function getCookie(c_name) {
      var i, x, y, ARRcookies = document.cookie.split(";");
      for (i = 0; i < ARRcookies.length; i++) {
          x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
          y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
          x = x.replace(/^\s+|\s+$/g, "");
          if (x == c_name) {
              return unescape(y);
          }
      }
  }

  function cookieMessageGenerate() {
      var html =
          '<div class="cookie-overlay"></div>'+  
          '<div id="cookie-msg">'+
          '<span class="msg">'+settings.mainMessage+
          '<a href="" class="btn-aceptar">'+settings.acceptButton+'</a>'+
          '<a href="politica-de-privacidade">'+settings.politicButton+'</a>'+
          '</span></div>';

      $("body").append(html);

      let url = window.location.href;
      if(url != 'http://localhost/alphaveterinaria/politica-de-privacidade'){
        $("body").css('overflow-y', 'hidden');
      }
      

      $("#cookie-msg").css({
          'position': 'fixed',
          'bottom': '0',
          'text-align': 'center',
          'line-height': '20px',
          'padding': '30px',
          'background-color': settings.backgroundColor,
          'color': settings.fontColor,
          'font-size': settings.fontSize,
          'z-index': '9999999',
          'box-shadow': 'rgb(66 66 66 / 27%) 0px 3px 20px',
          'left': '0',
          'right': '0',
          'margin-left': 'auto',
          'margin-right': 'auto',
          'transition': 'all .3s ease-in-out'
      });

    //   if(window.innerWidth > 992){
    //     $("#cookie-msg").css({
    //         'width': '70%',
    //     });
    //   }else{
    //     $("#cookie-msg").css({
    //         'width': '100%',
    //     });
    //   }

      $("#cookie-msg .msg").css({
          'font-size': '12px'
      });

      $(".cookie-overlay").css({
        'position': 'fixed',
        'display': 'block',
        'width': '100%',
        'height': '100%',
        'top': '0',
        'left': '0',
        'right': '0',
        'bottom': '0',
        'background': '#0000008a',
        'z-index': '999999',
        'transition': 'all .3s ease-in-out'
      });


      $("#cookie-msg a").css({
        'padding': '15px 30px',
        'border-radius': '30px',
        'background-color': settings.btnBackgroundColorSecondary,
        'color': settings.btnFontColor,
        'font-size': settings.btnFontSize,
        'font-weight': settings.fontWeight,
        'text-decoration': 'none',
      });

      $("#cookie-msg a.btn-aceptar").css({
          'padding': '15px 30px',
          'margin-right': '10px',
          'border-radius': '30px',
          'background-color': settings.btnBackgroundColor,
          'color': settings.btnFontColor,
          'font-size': settings.btnFontSize,
          'font-weight': settings.fontWeight,
          'text-decoration': 'none',
      });

      $("#cookie-msg a.btn-aceptar").on("click", function(){
          var coo = setCookie(settings.cookieName, true, settings.expirationDays);
          $(".cookie-overlay").remove();
          $("#cookie-msg").remove();
          $("body").css('overflow-y', 'scroll');

          return false;
      })
  }

}( jQuery ));


// Jquery Cookie Mensage

$.cookieMessage({
    'mainMessage': 'Usamos cookies para, entre outras coisas, obter dados e permitir o funcionamento da nossa plataforma, melhorando sua experiência. <br> Também compartilhamos informações com terceiros para facilitar o uso de todas as nossas funcionalidades. </br></br></br>',
    'acceptButton': 'Entendi!',
    'politicButton': 'Política de Privacidade',
    'fontSize': '12px',
    'backgroundColor': '#FFF',
    'border': '1px solid #CCC',
    'height': '60px',
    'padding': '30px',
    'z-index': '999999',
    'transition': 'all .3s ease-in-out'
});