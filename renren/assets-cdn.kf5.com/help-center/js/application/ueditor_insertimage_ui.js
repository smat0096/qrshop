(function()
{
    /**
     * UEditor 自定义图片上传 UI
     * 
     */
    var uiName = 'custominsertimage',
        template = '<div class="image-upload">' +
                '<div class="kf5-upload-drop-area" style="position: relative; overflow: hidden; direction: ltr;">' +
                    '<span>拖动图片到此或点击上传</span>' +
                    '<input type="file" name="file" style="position: absolute; right: 0px; top: 0px; font-family: Arial; width: 400px; height: 60px; margin: 0px; padding: 0px; cursor: pointer; opacity: 0;">' +
                '</div>' +
            '</div>' +
            '<ul class="editor-image-upload"></ul>';


    UE.ui['custominsertimage'] = function(editor){
        //注册按钮执行时的command命令，使用命令默认就会带有回退操作
        editor.registerCommand(uiName, {
            execCommand: function() {
                customInsertImage(editor)
            }
        });

        //创建一个button
        var btn = new UE.ui.Button({
            // 按钮的名字
            name: uiName,
            // 提示
            title: '插入图片',
            // 添加额外样式，指定icon图标，这里默认使用一个重复的icon
            cssRules: 'background-position: 0 -573px;',
            // 点击时执行的命令
            onclick: function() {
                // 这里可以不用执行命令,做你自己的操作也可
                editor.execCommand(uiName);
            }
        });

        // 当点到源码编辑时，按钮要做的状态反射
        editor.addListener('selectionchange', function() {
            var state = editor.queryCommandState(uiName);
            if (state == -1) {
                btn.setDisabled(true);
                btn.setChecked(false);
            } else {
                btn.setDisabled(false);
                btn.setChecked(state);
            }
        });
        // 因为你是添加button,所以需要返回这个button
        return btn;
    };


    //点击【插入图片】
    function customInsertImage(editor){
        var uploading = 0,
            dialog = new Dialog({
                width: 800,
                title: '上传图片',
                contentClass: 'popup-attachment clearfix',
                content: template,
                operation: true,
                submitButton: true,
                cancelButton: true,
                submitText: '插入图片',
                cancelText: '删除',
                templates: {
                    cancelButton: '<a href="javascript:void(0);" class="btn red" role="cancel">{{cancelText}}</a>'
                }
            });
        dialog.$element.find('.popup-content').css({
            'max-height':'430px',
            'overflow-y':'scroll'
        });

        function loadImageByStep(arr, index, range, callback)
        {
            var max = Math.min(arr.length, index + range);
            for(; index < max; index++)
            {
                callback(arr[index]);
            }

            return index;
        }

        //
        var historyXHR = $.get('/posts/ImageHistoryJSON', function(data) {
            if(!data || !data.length)
            {
                return;
            }

            function loadImage(image)
            {
                var img = document.createElement('img'),
                    $imageItem = $('<li class="image-item"><div class="attach-loading">加载中...</div></li>');

                img.src = image.url;
                $(img).attr('token', image.token);

                dialog.$element.find('.editor-image-upload').append($imageItem);
                img.onload = function()
                {
                    img.onload = null;
                    $imageItem.html('').append(img);
                };
                img.onerror = function()
                {
                    img.onerror = null;
                    $imageItem.html('<div class="attach-loading">加载失败</div>');
                    // $imageItem.remove();
                };

                $(historyXHR).on('finished', function()
                {
                    img.src = '';
                });
            }

            var offset = 0;
            offset = loadImageByStep(data, offset, 15, loadImage);

            // 触发 resize 自动居中
            $(window).trigger('resize');

            dialog.$element.find('.popup-content').on('scroll', function(e) {
                if(this.scrollHeight - $(this).scrollTop() - $(this).height() < 100)
                {
                    offset = loadImageByStep(data, offset, 15, loadImage);
                }
            });
        }, 'json');


        dialog.onSubmit = function(){
            if(uploading)
            {
                return false;
            }
            var imagesQueue = [];

            dialog.$element.find('.image-item.active').each(function()
            {
                var data = {};
                data.src = $(this).find('img').get(0).src;
                imagesQueue.push(data);
            });

            if(imagesQueue.length)
            {
                editor.execCommand('insertimage', imagesQueue);
                this.destroy();
            }
            else
            {
                showNotice('未选中任何图片！',false);
            }
        };


        dialog.onDestroy = function() {
            historyXHR.abort();
            $(historyXHR).triggerHandler('finished');
        };


        dialog.onCancel = function() {
            var deleteQueue = [];
            dialog.$element.find('.image-item.active').each(function()
            {
                deleteQueue.push($(this).find('img').attr('token'));
            });

            if(deleteQueue.length)
            {
                $.post('/posts/DelUeImages', {tokens: deleteQueue.join(',')}, function(data)
                {
                    if(data == 'success')
                    {
                        dialog.$element.find('.image-item.active').remove();
                    }
                });
            }
            else
            {
                showNotice('未选中任何图片！',false);
            }
        };

        dialog.$element.on('click', '.image-item', function()
        {
            if($(this).find('img').length)
            {
                $(this).toggleClass('active');
            }
        });

        function imageUploadStart(id, fileName)
        {
            var $lastItem = $('<li class="image-item"><div class="attach-loading">上传中...</div></li>')
                    .attr('queueId', id);

            ++uploading;
            
            dialog.$element.find('.editor-image-upload').prepend($lastItem);
        }

        function imageUploadSuccess(id, fileName, data)
        {
            var src = data.url,
                imgItem = '<img src="' + src + '" token="' + data.token + '">';

            --uploading;

            dialog.$element
                .find('.image-item').filter('[queueId=' + id + ']')
                .html(imgItem);
        }

        function imageUploadFail(id, fileName)
        {
            --uploading;
            dialog.$element
                .find('.image-item').filter('[queueId=' + id + ']')
                .html('Failed');
        }

        new qq.FileUploader({
            element: dialog.$element.find('.image-upload').get(0),
            allowedExtensions: ['png', 'jpg', 'gif'],
            allowDragDrap: true,
            addToList: false,
            template: '<div class="kf5-uploader">'
                        + '<div class="kf5-upload-drop-area"><span>拖动文件到此或点击上传</span></div>'
                        + '<ul class="kf5-upload-list" style="display: none;"></ul>' 
                    + '</div>',
            classes: {
                button: 'kf5-upload-drop-area',
                drop: 'kf5-upload-drop-area',
                dropActive: 'kf5-upload-drop-area-active',
                list: 'kf5-upload-list',

                file: 'kf5-upload-file',
                spinner: 'kf5-upload-spinner',
                size: 'kf5-upload-size',
                cancel: 'kf5-upload-cancel',

                // added to list item when upload completes
                // used in css to hide progress spinner
                success: 'kf5-upload-success',
                fail: 'kf5-upload-fail'
            },
            action: "/attachments/upload",

            onSubmit: function(id, fileName)
            {
                imageUploadStart(id, fileName);
            },

            onComplete: function(id, fileName, data)
            {
                if(data.id)
                {
                    imageUploadSuccess(id, fileName, data);
                }
                else
                {
                    imageUploadFail(id, fileName);
                }
            },

            debug: false
        });
    }
})();