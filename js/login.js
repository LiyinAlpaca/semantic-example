$(function() {
    $('#signIn').hide();
    $('#toSignUp').click(function(event) {
        $('#signIn').transition('scale');
        $('#signUp').transition('scale');
    });
    $('#toSignIn').click(function(event) {
        $('#signUp').transition('scale');
        $('#signIn').transition('scale');
    });
});