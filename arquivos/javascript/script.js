jQuery(function() {
    jQuery(".slide").jCarouselLite({
        btnNext: ".next",
        btnPrev: ".prev"
    });

    jQuery( 'input[type="text"]' ).resetDefaultValue()

});

jQuery.fn.resetDefaultValue = function() {
    function _clearDefaultValue() {
        var _$ = jQuery(this);
        if ( _$.val() == this.defaultValue ) {
            _$.val('');
        }
    };
    function _resetDefaultValue() {
        var _$ = jQuery(this);
        if ( _$.val() == '' ) {
            _$.val(this.defaultValue);
        }
    };
    return this.click(_clearDefaultValue).focus(_clearDefaultValue).blur(_resetDefaultValue);
};
