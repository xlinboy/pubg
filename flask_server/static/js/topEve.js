    function topbar() {
        var thisHeight = $(window).scrollTop()
        var top = $('#top')
        var bg = $('#banner_link')
        {#console.log(thisHeight)#}
        if (thisHeight > 100 && thisHeight < 300) {
            var hei = (thisHeight - 100) / 200
            // {#top.css('background-color', 'hsla(0, 0%, 0%, ' + hei + ')');#}
            $('.t').css('color', 'rgb(' + (100-hei) * 255 + ', ' + (100-hei) * 255 + ', ' + (100-hei) * 255 + ')')
        }
        else if (thisHeight < 100) {
            // {#top.css('background-color', 'hsla(0, 0%, 0%, 0)');#}
            $('.t').css('color', '#fff')
        }
        else if (thisHeight > 300) {
            // {#top.css('background-color', 'hsla(0, 0%, 0%, 1)');#}
            $('.t').css('color', '#000')
        }
        if (thisHeight > 255) {
            bg.css('top', '-250px')
            bg.css('left', '0px')
            bg.css('right', '0px')
            bg.css('position', 'fixed')
            $('#main').css('margin-top', '300px')
            // {#$('#CheckDIY').css('top', '100px')#}
            // {#$('#CheckDIY').css('left', '50px')#}
            // {#$('#CheckDIY').css('width', '50px')#}
            // {#$('#CheckDIY').css('position', 'fixed')#}
        } else {
            bg.css('top', '0px')
            bg.css('left', '0px')
            bg.css('right', '0px')
            bg.css('position', 'relative')
            $('#main').css('margin-top', '0px')
            // {#$('#CheckDIY').css('width', 'auto')#}
            // {#$('#CheckDIY').css('position', 'static')#}
        }
    }

    $(window).scroll(function () {
        topbar()
    });
    topbar()