(function()
{
    "use strict";

    var _options = {
            title: '提示信息',
            content: '',

            contentClass: 'popup-dialog',

            width: undefined,
            height: undefined,

            submitText: '确定',
            cancelText: '取消',

            window: window,// top,
            appendTo: window.document.body, // top.document.body,

            operation: false,
            overlay: true,
            cancelButton: false,
            submitButton: true,
            // 旧模版
            templates: {
                layout:'<div class="pooup-bscrim" style="">\
                        <div class="popup-mask"></div>\
                        <div class="popup-box" style="z-index: 10000;">\
                            <header>\
                                <h2>{{title}}</h2>\
                                <a href="javascript:void(0);" class="close" onclick="$(this).parent().parent().parent().remove();"><i class="icon-uniE119"></i></a>\
                            </header>\
                            <div class="popup-content">{{content}}</div>{{operation}}\
                        </div>\
                    </div>',
                operation: '<footer>{{submitButton}}{{cancelButton}}</footer>',
                overlay: '<div class="popup-overlay"></div>',
                cancelButton: '<a href="javascript:void(0);" class="btn" role="cancel">{{cancelText}}</a>',
                submitButton: '<a href="javascript:void(0);" class="btn fr" role="submit">{{submitText}}</a>'
            },
            
            selectors: {
                'close': 'a.popup-close',
                'cancel': '[role=cancel]',
                'submit': '[role=submit]',
                'header': '.popup-title',
                'container': '.popup-scrim'
            }

            // templates: {
            //     layout: '<div class="mask show"> <div class="mask-inner"> <div class="lightbox"> <header> <h4>{{title}}</h4><a class="close light-box-close"><i class="icon-close"></i></a> </header> <div class="body">{{content}}</div>{{operation}} </div> </div> </div>',
            //     operation: '<div class="footer">{{submitButton}} {{cancelButton}}</div>',
            //     overlay: '<div class="popup-overlay"></div>',
            //     cancelButton: '<a class="btn btn-red fl cancel">{{cancelText}}</a>',
            //     submitButton: '<a class="btn btn-green fr submit">{{submitText}}</a>'
            // },

            // selectors: {
            //     'close': 'a.close',
            //     'cancel': 'a.cancel',
            //     'submit': 'a.submit',
            //     'header': 'header',
            //     'container': '.lightbox'
            // }
        };

    function Dialog(options){
        this.init(options);
    };

    window.Dialog = Dialog;

    Dialog.fn = Dialog.prototype = {
        constructor: Dialog,

        $element: null,

        init: function(options)
        {
            this.options = $.extend(true, {}, _options);
            this.options = $.extend(true, this.options, options);

            this.append();
            
            return this;
        },

        _prepareTemplate: function()
        {
            var _templates = this.options.templates,
                template = _templates.layout;

            template = template
                    .replace('{{overlay}}', this.options.overlay ? _templates.overlay : '')
                    .replace('{{operation}}', this.options.operation ? _templates.operation : '')
                    .replace('{{cancelButton}}', this.options.cancelButton ? _templates.cancelButton : '')
                    .replace('{{submitButton}}', this.options.submitButton ? _templates.submitButton : '')
                    .replace('{{submitText}}', this.options.submitText || '确定')
                    .replace('{{cancelText}}', this.options.cancelText || '取消')
                    .replace('{{title}}', this.title())
                    .replace('{{content}}', this.content());

            this.$element = $(template);
        },

        _bindEvents: function()
        {
            var self = this,
                submit = this.$element.find(this.options.selectors.submit),
                cancel = this.$element.find(this.options.selectors.cancel);
            
            if($().draggable)
            {
                this.$element.find(this.options.selectors.container)
                        .draggable({handle: this.options.selectors.header, cursor: 'move'});
            }

            this.$element.find(this.options.selectors.close).click(function()
            {
                self.onDestroy();
                self.destroy();
            });

            submit.click(function()
            {
                self.onSubmit();
            });

            cancel.click(function()
            {
                self.onCancel();
            });
        },

        initPosition: function()
        {
            var $wrap = this.$element.find(this.options.selectors.container),
                top = ($(this.options.window).height() - $wrap.height()) / 2;
                top = top < 0 ? 0 : top;

            $wrap.css({
                // left: ($(this.options.window).width() - $wrap.width()) / 2,
                top: top
            });

            return this;
        },

        initSize: function()
        {
            if(this.options.width)
            {
                var $wrap = this.$element.find(this.options.selectors.container);

                $wrap.width(this.options.width);
            }

            if(this.options.height)
            {
                var $wrap = this.$element.find(this.options.selectors.container);

                $wrap.height(this.options.height);
            }

            return this;
        },

        title: function()
        {
            return this.options.title;
        },

        content: function()
        {
            var content = this.options.content;

            if(this.options.contentClass)
            {
                content = '<div class="' + this.options.contentClass + '">' 
                        + content + '</div>';
            }

            return content;
        },

        append: function()
        {
            this._prepareTemplate();

            this.$element.appendTo(this.options.appendTo || 'body');

            this._bindEvents();


            // 旧模版需要控制尺寸和位置
            this.initSize();
            this.initPosition();

            var self = this;
            $(this.options.window).resize(function()
            {
                self.initPosition();
            });
        },

        destroy: function()
        {
            this.$element.remove();
            this.onDestroy();
        },

        onSubmit: function()
        {
            this.destroy();
        },

        onCancel: function()
        {
            this.destroy();
        },

        onDestroy: function()
        {
            
        }
    };
})();
