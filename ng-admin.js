$(function(){
    $(".al-sidebar-list-item").addClass("ba-sidebar-item-expanded");
    $("a.collapse-menu-link").on("click",function(){
        var $ng2 = $(".ng2");
        if($ng2.hasClass("menu-collapsed")){
            $ng2.removeClass("menu-collapsed");
        }else {
            $ng2.addClass("menu-collapsed");
        }
    })
    $(".al-sidebar-list").on("mouseover",function(){
        var $slimScrollBar = $(".slimScrollBar");
        $slimScrollBar.css("display","block")
        $slimScrollBar.animate({"opacity":"0"},1100,function(){
            $slimScrollBar.css({"display":"none","opacity":"0.4"})
        })
    })
    $(".al-sidebar-list").on("mouseover","a",function(){
        var $this = $(this);
        var $slimScrollDiv = $(".slimScrollDiv");
        var top = $this.offset().top - $slimScrollDiv.offset().top;
        var height = $this.height();
        $(".sidebar-hover-elem").css({top:top,height:height});
    })
    $("#al-sidebar-list").on("mouseout",function(){
        $(".sidebar-hover-elem").css({top:-200,height:42})
    })
    $("#al-sidebar-list").on("click",".ba-sidebar-sublist-item",function(){
        var $this = this;
        $(".ba-sidebar-sublist-item").removeClass("selected");
        $(this).addClass("selected").removeClass("with-sub-menu")

    })
    $("#al-sidebar-list").on("click",".al-sidebar-list-item>.al-sidebar-list-link",function(){
        var $this = $(this);
        var $ul = $this.next();


        var subMenu = $this.parent(".with-sub-menu");

        if(subMenu.hasClass("ba-sidebar-item-expanded")){
            $ul.attr("data-height",$ul.height());
            subMenu.removeClass("ba-sidebar-item-expanded");
            $ul.css({"display":"block","overflow":"hidden"})
            $ul.animate({height:"0"},500);
        }else {
            subMenu.addClass("ba-sidebar-item-expanded");
            $ul.animate({height:$ul.attr("data-height")},500);
        }
    })
    if($("body").width() <= 1200){
        $(".ng2").addClass("menu-collapsed");
    }
    window.onresize = function(){
        if($("body").width() <= 1200){
            $(".ng2").addClass("menu-collapsed");
        }else {
            $(".ng2").removeClass("menu-collapsed");
        }
    }
})