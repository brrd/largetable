if(!jQuery) {
    throw Error("largetable requires jQuery");
}

window.largetable = function (tableSelector) {
    tableSelector = tableSelector || "table";
    var scrollbarsHeight;

    // Add CSS rules
    function addCSS (rule) {
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = rule;
        document.body.appendChild(css);
    }

    // Fix shadow covering scollbars
    function fixShadowsHeight () {
        scrollbarsHeight = (function(div) {
            return div.offsetHeight - div.clientHeight;
        })($scroller.get(0));
        if (scrollbarsHeight) {
            addCSS(".largetable:before, .largetable:after { bottom: " + scrollbarsHeight + "px; }");
        }
    }

    $(function() {
        var $tables = $(tableSelector);

        var renderShadows = function () {
            var pos = $(this).scrollLeft();
            var $container = $(this).parent(".largetable");
            $container.toggleClass("largetable-shadow-left", pos > 0);
            $container.toggleClass("largetable-shadow-right", pos < $(this).find("table").width() - $(this).width());
        };

        $tables.each(function() {
            $table = $(this);
            $table.wrap("<div class='largetable'>");
            $table.wrap("<div class='largetable-scroller'>");
            $scroller = $table.parent(".largetable-scroller");

            if (scrollbarsHeight == null) {
                fixShadowsHeight();
            }

            renderShadows.bind($scroller)();
            $scroller.scroll(renderShadows);
        });

    });
};
