define(function (require) {
    // var basePath = "https://devd.io/";

    var basePath = "https://olifink.github.io/tshirt-plugin/";

    var plugin = {
        init: function (pI, data) {

            // setTimeout(function () {
            console.log("plugin init");

            var that = this;

            this.pI = pI;
            this.panel = null;


            pI.createPanel({
                title: "T-Shirt",
                navIcon: basePath + "tshirt.svg",
                onShow: function () {
                    console.log("onShow Panel");

                    // if (that.panel == null) {
                    //     that.panel = new WndPanelView({
                    //         closeCb: function () {
                    //             pI.closePanel();
                    //         }.bind(this)
                    //     });


                    //     that.panel.render(data.key);
                    //     that.panel.startup();
                    //     that.panel.show();
                    // }
                    // else {
                        that.panel.show();
                    // }

                },
                onHide: function () {
                    console.log("onHide Panel");
                    that.panel.hide();
                }
            });

            var myPanel = pI.getPanel();
            myPanel.innerHTML = '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSekKJvvFuVTW4wnKoHd81RK7xE8V2ZvUTIGpyEu71sPkfhqEg/viewform?embedded=true" width="320" height="'+(window.innerHeight-80)+'" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>';

            // myPanel.parentNode.setAttribute("style", "display:none");

            // }, 0);
        }
    };



    return plugin;
});
