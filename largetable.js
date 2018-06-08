(function( $ ) {
    $.fn.largetable = function() {
        var scrollbarsHeight;

        // Add CSS rules
        function addCSS(rule) {
            var css = document.createElement("style");
            css.type = "text/css";
            css.innerHTML = rule;
            document.body.appendChild(css);
        }

        // Fix shadow covering scollbars
        function fixShadowsHeight($scroller) {
            scrollbarsHeight = (function(div) {
                return div.offsetHeight - div.clientHeight;
            })($scroller.get(0));
            if (scrollbarsHeight) {
                addCSS(".largetable:before, .largetable:after { bottom: " + scrollbarsHeight + "px; }");
            }
        }

        // Function to render shadows
        function renderShadows() {
            var pos = $(this).scrollLeft();
            var $container = $(this).parent(".largetable");
            $container.toggleClass("largetable-shadow-left", pos > 0);
            $container.toggleClass("largetable-shadow-right", pos < $(this).find("table").width() - $(this).width());
        }

        // Init
        this.each(function() {
            var $table = $(this);

            if (!$table.is("table")) return;

            $table.wrap("<div class='largetable'>");
            $table.wrap("<div class='largetable-scroller'>");
            var $scroller = $table.parent(".largetable-scroller");

            if (!scrollbarsHeight) {
                fixShadowsHeight($scroller);
            }

            renderShadows.bind($scroller)();
            $scroller.scroll(renderShadows);
        });

        return this;
    };
}( jQuery ));
