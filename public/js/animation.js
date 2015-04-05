/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document)
    .ready(function () {


        var
            changeSides = function () {
                $('.logo.row .ui.shape')
                    .eq(0)
                    .shape('flip over')
                    .end()
                    .eq(1)
                    .shape('flip over')
                    .end()
                    .eq(2)
                    .shape('flip back')
                    .end()
                    .eq(3)
                    .shape('flip back')
                    .end()
                ;
            };

//            $('.right.floated.row .circular.facebook.icon')
//                    .transition('set looping')
//                    .transition('horizontal flip in', 4000)
//                    .transition('horizontal flip out', 3000)
//                    ;
//
//            $('.right.floated.row .circular.twitter.icon')
//                    .transition('set looping')
//
//                    .transition('flash', 3000)
//                    ;
//            $('.right.floated.row .circular.linkedin.icon')
//                    .transition('set looping')
//
//                    .transition('pulse', 3000)
//                    ;
//            $('.right.floated.row .circular.pinterest.icon')
//                    .transition('set looping')
//
//                    .transition('tada', 2000)
//                    ;


        var
            anime = function () {
                $('#content .ui.shape')
                    .eq(0)
                    .shape('flip left')
                    .end()
                    .shape('flip left')
                    .eq(0)
                    .shape('flip up')
                    .shape('flip up')
                    .shape('flip right')
                    .shape('flip right')
                    .shape('flip down')
                    .shape('flip down')
                    .end()
                ;
            };

        $('.ui.checkbox').checkbox({
            onEnable: function () {
                console.log("You Agree");
            },
            onDisable: function () {
                console.log("You Disagree");
            },
            onChange: function () {
                console.log("It's changed");
            }
        });

        $('.dropdown').dropdown({
            onChange: function (value, text) { /*console.log(value, text);*/
            }
        });

        var validation = {
            title: {
                identifier: 'value',
                rules: [
                    {type: 'empty', prompt: 'Please insert title'}
                ]
            },
            firstname: {
                identifier: 'firstname',
                rules: [
                    {type: 'empty', prompt: 'Fill in a first name'}

                ]
            },
            lastname: {
                identifier: 'lastname',
                rules: [
                    {type: 'empty', prompt: 'Fill in a last name'}

                ]
            },
            email: {
                identifier: 'email',
                rules: [
                    {type: 'empty', prompt: 'Fill in a email'},
                    {type: 'length[4]', prompt: 'Your email must be 4 characters long'},
                    {type: 'email', prompt: 'Please fill in a valid email'}
                ]
            },
            message: {
                identifier: 'message',
                rules: [
                    {type: 'empty', prompt: 'Please fill in a message'}
                ]
            },
            agree: {
                identifier: 'tandc',
                rules: [
                    {type: 'checked', prompt: 'Please agree'}
                ]
            }
        };

        var settings = {
            inline: true,
            onFailure: function () {
                console.log('failed');
                return false;
            },
            onSuccess: function () {
                $('#out').slideUp(400);
                $('#formdimmer').addClass('active').delay(1300).fadeOut('fast', function () {
                    $('.ui.shape').shape('flip down');
                });
                return false;
            }
        };

        $('.ui.form').form(validation, settings);

        $('.ui.modal').modal(
            {
                onShow: function () {
                    $('.bar').animate({width: '100%'}, 1300);
                },
                onDeny: function () {
                    console.log('Deny');
                    return false;
                },
                onApprove: function () {
                    console.log('Approve');
                }
            }
        ).modal('setting', 'transition', 'horizontal flip').modal('attach events', '#terms', 'show').modal('attach events', '#closemod', 'hide');
        //                  $anime = $('.column .ui.shape'),
//                    $directionButton = $('.column .direction .button'),
//                    handler
//                   ;

//
//            // event handlers
//            handler = {
//                rotate: function () {
//                    var
//                            $shape = $(this).closest('.buttons').prevAll('.ui.shape').eq(0),
//                            direction = $(this).data('direction') || false,
//                            animation = $(this).data('animation') || false
//                            ;
//                    if (direction && animation) {
//                        $shape
//                                .shape(animation + '.' + direction)
//                                ;
//                    }
//                }
//            };
//
//            // attach events
//            $anime
//                    .shape().ready(handler.rotate)
//                    ;
//            $directionButton
//                    .on('click', handler.rotate);

        var rel = $('body[rel]').attr('rel');
        $('#menu a:eq(' + rel + '), #mobile_menu a:eq(' + rel + ')').addClass('active');

        function updateHeight() {
            visibleHeight = $(document).height() - $(window).height();
        }


        $('.ui.mobile.dropdown.item')
            .dropdown({
                on: 'hover'
            });

        $('#mobile_btn').on('click', function () {
            $('#mobile_menu').sidebar('toggle');
        });

        setInterval(changeSides, 3000);
        setInterval(anime, 7000);

    });