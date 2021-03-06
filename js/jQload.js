/*
 * jQload v0.1  
 */
(function( $ ){
    
    $.fn.jQload = function(status) 
    {
        var $_jQloadOverview = $('<div class="jQload-overview"><i class="jQload-icon"></i></div>'),
            _popup           = $('body > .jQload-overview').length;

        if( this.selector === 'window' && status === 'show' && _popup === 0 ){

            $d = $(document);

            $_jQloadOverview.height( $d.height() ).width( $d.width() );

            $('body').append( $_jQloadOverview );

            $(window).resize(function(){
                
                var $popup = $('body > .jQload-overview'),
                    $d     = $(document);

                $popup.removeAttr('style');

                $popup.height( $d.height() ).width( $d.width() );
                
            });

        } else if( this.selector === 'window' && status === 'hide' ){
            $('body > .jQload-overview').remove();
        }
        else {
            return this.each(function() {
                if( $(this).find('.jQload-overview').length === 0 && status === 'show' ){

                    $(this).append( $_jQloadOverview );

                } 
                else if( status === 'hide' ) {
                    $(this).find('.jQload-overview').remove();
                }

            });   
        }  
    };  

})(jQuery);