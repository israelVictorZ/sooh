(function () {
    "use strict";
    var tipography = "Ubuntu";
    var CTA = "Olá! Vamos iniciar uma conversa pelo WhatsApp?";
    var description = "";
    var btnText = "Iniciar conversa";
    var usersWhats = [
        { Name: "Nome da Empresa", Phone: "+55 11 00000-0000", UnmaskedPhone: "5511000000000", Message: "Olá, vi seu site e gostaria de saber mais sobre os serviços da Nome da Empresa!", ButtonText: null, Photo: "../src/img/favicon.png" },
    ];
    var usersHTML = "";
    usersWhats.map(function (user, i) {
        var html =
            '<div class="wc--float-ballon--user"><img src="' +
            (user.Photo ? user.Photo : "https://blob.contato.io/gerador-de-chat/img/avatar-default.jpg") +
            '" alt="" class="wc--float-ballon--user---thumb" /><div class="wc--float-ballon--user--content"><span class="wc--float-ballon--user--content---name">' +
            user.Name +
            '</span><span class="wc--float-ballon--user--content---phone">' +
            user.Phone +
            '</span><a href="https://api.whatsapp.com/send?phone=' +
            user.UnmaskedPhone +
            "&text=" +
            user.Message +
            '" target="_blank" class="wc--float-ballon--user--content---button">' +
            btnText +
            "</a></div></div>";
        usersHTML = usersHTML + html;
    });
    var HTML =
        '<button class="wc--button-fab"><div class="wc--icon"><img src="../src/img/whatsapp-brands.svg" alt="icon-chat" width="31px" /></div></button><div class="wc--float-ballon"><button class="wc-float-ballon--button-close">+</button><span class="wc--float-ballon--title">Conversar pelo WhatsApp</span><div class="wc--float-ballon--content"><p class="wc--float-ballon--text">' +
        CTA +
        '</p><p class="wc--float-ballon--text wc--float-ballon--text--small">' +
        description +
        "</p>" +
        usersHTML +
        "</div></div>";
    var containerWidget = document.createElement("div");
    var att = document.createAttribute("id");
    att.value = "whatsclub-widget";
    containerWidget.setAttributeNode(att);
    containerWidget.innerHTML = HTML;
    var style =
        "@import url(https://fonts.googleapis.com/css?family=" +
        tipography +
        ":400,600,700);#whatsclub-widget{position:fixed;bottom:40px;right:40px;z-index:999999;font-family:" +
        tipography +
        ",sans-serif}#whatsclub-widget *{font-family:" +
        tipography +
        ",sans-serif}#whatsclub-widget>.wc--button-fab{max-width:64px;min-width: 64px;min-height:64px;max-height:64px;position:absolute;bottom:0;right:0;outline:0;border-radius:100%;border:none;background:#25d366!important;box-shadow:0 12px 18px rgba(37,211,102,.24);transition:all .4s ease}#whatsclub-widget>.wc--button-fab:hover{bottom:6px;box-shadow:0 12px 24px rgba(37,211,102,.72);transition:all .4s ease}#whatsclub-widget>.wc--button-fab>.wc--icon{display:flex;align-items:center;justify-content:center;}#whatsclub-widget>.wc--button-fab>.wc--icon>.wc--icon--svg{fill:#fff!important}#whatsclub-widget>.wc--button-fab---open{background:#fff!important;transition:all .4s ease}#whatsclub-widget>.wc--button-fab---open>.wc--icon>.wc--icon--svg{fill:#25d366!important;transition:all .4s ease}#whatsclub-widget>.wc--float-ballon{position:absolute;display:flex;flex-direction:column;width:260px;max-width:calc(100vw - 40px - 64px - 12px - 10vw);bottom:16px;right:calc(64px + 12px);padding:0;background:#fff!important;box-shadow:0 12px 18px rgba(0,0,0,.12),0 -6px 64px rgba(0,0,0,.06);border-radius:12px;transition:all .4s ease;opacity:0;transform:translateY(40px);animation:showBallon .6s ease forwards;animation-delay:2s}#whatsclub-widget>.wc--float-ballon.wc--float-ballon---open{width:320px;max-height:calc(100vh - 40px - 10vh);transition:all .4s ease;animation-delay:0s}#whatsclub-widget>.wc--float-ballon.wc--float-ballon---close{display:none}#whatsclub-widget>.wc--float-ballon>.wc-float-ballon--button-close{position:absolute;width:24px;height:24px;display:flex;align-items:center;justify-content:center;background:0 0;border:none;outline:0;right:6px;top:4px;opacity:.38;color:#8788ab;    font-size:21px;transform:rotate(45deg);transform:-webkit-rotate(45deg);}#whatsclub-widget>.wc--float-ballon>.wc-float-ballon--button-close .wc-float-ballon--button-close--icon{width:100%;height:100%}#whatsclub-widget>.wc--float-ballon>.wc-float-ballon--button-close:hover{opacity:.8}#whatsclub-widget>.wc--float-ballon:not(:hover)>.wc-float-ballon--button-close{opacity:1}#whatsclub-widget>.wc--float-ballon.wc--float-ballon---open>.wc-float-ballon--button-close{display:none}#whatsclub-widget>.wc--float-ballon>.wc--float-ballon--ass{display:none;}#whatsclub-widget>.wc--float-ballon:not(.wc--float-ballon---open)>.wc--float-ballon--ass{display: none;}#whatsclub-widget>.wc--float-ballon>.wc--float-ballon--content{display:flex;flex-direction:column;flex-grow:1;max-height:calc(100vh - 40px - 10vh - 64px);overflow:auto;padding:16px;justify-content:flex-start}#whatsclub-widget>.wc--float-ballon>.wc--float-ballon--content>.wc--float-ballon--text{width:100%;font-size:16px;line-height:20px;margin:0}#whatsclub-widget>.wc--float-ballon>.wc--float-ballon--content>.wc--float-ballon--text--small{font-size:14px;line-height:19px;display:block}#whatsclub-widget>.wc--float-ballon:not(.wc--float-ballon---open)>.wc--float-ballon--content>.wc--float-ballon--text--small{display:none}#whatsclub-widget>.wc--float-ballon---open>.wc--float-ballon--content>.wc--float-ballon--text{margin:0 0 24px 0}#whatsclub-widget>.wc--float-ballon>.wc--float-ballon--title{background:#25d266!important;height:54px;overflow:hidden;border-radius:12px 12px 0 0;display:flex;align-items:center;padding:0 16px;color:#fff!important;font-size:18px;border-bottom:solid 1px #ededed}#whatsclub-widget>.wc--float-ballon:not(.wc--float-ballon---open)>.wc--float-ballon--title{display:none}#whatsclub-widget>.wc--float-ballon.wc--float-ballon>.wc--float-ballon--content>.wc--float-ballon--user{display:flex;background:#fff;box-shadow:0 4px 8px rgba(0,0,0,.12);border-radius:2px;margin-bottom:16px}#whatsclub-widget>.wc--float-ballon:not(.wc--float-ballon---open)>.wc--float-ballon--content>.wc--float-ballon--user{display:none}#whatsclub-widget>.wc--float-ballon.wc--float-ballon>.wc--float-ballon--content>.wc--float-ballon--user:last-child{margin-bottom:0}#whatsclub-widget>.wc--float-ballon.wc--float-ballon>.wc--float-ballon--content>.wc--float-ballon--user>.wc--float-ballon--user---thumb{width:48px;height:48px;border-radius:50%;object-fit:cover;margin:12px 0 0 12px}#whatsclub-widget>.wc--float-ballon.wc--float-ballon>.wc--float-ballon--content>.wc--float-ballon--user>.wc--float-ballon--user--content{flex-grow:1;padding:12px}#whatsclub-widget>.wc--float-ballon.wc--float-ballon>.wc--float-ballon--content>.wc--float-ballon--user>.wc--float-ballon--user--content>.wc--float-ballon--user--content---name{font-size:16px;font-weight:600;color:rgba(0,0,0,.6)}#whatsclub-widget>.wc--float-ballon.wc--float-ballon>.wc--float-ballon--content>.wc--float-ballon--user>.wc--float-ballon--user--content>.wc--float-ballon--user--content---phone{font-size:12px;color:rgba(0,0,0,.6);display:block}#whatsclub-widget>.wc--float-ballon.wc--float-ballon>.wc--float-ballon--content>.wc--float-ballon--user>.wc--float-ballon--user--content>.wc--float-ballon--user--content---button{display:flex;width:100%;height:36px;background:#075e54!important;color:#fff!important;align-items:center;justify-content:center;border-radius:4px;font-size:14px;line-height:1;margin-top:8px;box-shadow:0 8px 16px rgba(7,94,84,.24);transition:all .3s ease}#whatsclub-widget>.wc--float-ballon.wc--float-ballon>.wc--float-ballon--content>.wc--float-ballon--user>.wc--float-ballon--user--content>.wc--float-ballon--user--content---button:hover{box-shadow:0 12px 24px rgba(7,94,84,.38);transform:translateY(-6px);transition:all .3s ease}#whatsclub-widget>.wc--float-ballon:not(.wc--float-ballon---open)>.wc--button-whatsapp{display:none}@keyframes showBallon{from{opacity:0;transform:translateY(40px)}to{opacity:1;transform:translateY(0)}}@media screen and (max-width:980px){#whatsclub-widget{bottom:20px;right:20px}#whatsclub-widget>.wc--float-ballon{max-width:calc(100vw - 20px - 64px - 12px - 10vw)}}@media screen and (max-width:400px){#whatsclub-widget>.wc--button-fab{min-width:54px;max-width:54px;min-height:54px;max-height:54px}#whatsclub-widget>.wc--float-ballon{max-width:calc(100vw - 20px - 54px - 8px - 5vw);right:calc(54px + 8px)}#whatsclub-widget>.wc--float-ballon>.wc--float-ballon--title{font-size:15px}#whatsclub-widget>.wc--float-ballon.wc--float-ballon>.wc--float-ballon--content>.wc--float-ballon--user{flex-wrap:wrap}#whatsclub-widget>.wc--float-ballon.wc--float-ballon>.wc--float-ballon--content>.wc--float-ballon--user>.wc--float-ballon--user---thumb{width:24px;height:24px}#whatsclub-widget>.wc--float-ballon.wc--float-ballon>.wc--float-ballon--content>.wc--float-ballon--user>.wc--float-ballon--user--content{width:100%;padding-top:4px}}";
    var cssWidget = document.createElement("style");
    cssWidget.innerHTML = style;
    document.addEventListener("DOMContentLoaded", function () {
        document.body.insertAdjacentElement("beforeend", containerWidget);
        document.body.insertAdjacentElement("beforeend", cssWidget);
        var wcWidget = document.getElementById("whatsclub-widget");
        var buttonFAB = wcWidget.getElementsByClassName("wc--button-fab")[0];
        var iconButtonFAB = buttonFAB.getElementsByClassName("wc--icon")[0];
        var ballon = wcWidget.getElementsByClassName("wc--float-ballon")[0];
        var iconWhats = iconButtonFAB.innerHTML;
        var iconClose =
            '<svg version="1.1" class="wc--icon--svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 47.971 47.971" width="20px" height="20px" style="enable-background:new 0 0 47.971 47.971;" xml:space="preserve"><g><path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88 c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242 C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879 s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>';
        var buttonCloseBallon = ballon.getElementsByClassName("wc-float-ballon--button-close")[0];
        var closeBallon = function () {
            buttonFAB.classList.remove("wc--button-fab---open");
            ballon.classList.remove("wc--float-ballon---open");
            ballon.classList.add("wc--float-ballon---close");
            iconButtonFAB.innerHTML = iconWhats;
        };
        var openBallon = function () {
            buttonFAB.classList.add("wc--button-fab---open");
            ballon.classList.add("wc--float-ballon---open");
            ballon.classList.remove("wc--float-ballon---close");
            iconButtonFAB.innerHTML = iconClose;
        };
        buttonFAB.addEventListener("click", function () {
            buttonFAB.classList.contains("wc--button-fab---open") ? closeBallon() : openBallon();
        });
        buttonCloseBallon.addEventListener("click", function () {
            closeBallon();
        });
    });
})();
