{{ '//code.jquery.com/jquery-3.6.0.min.js' | script_tag }}
{{ 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js' | script_tag }}

put theme.js / theme.liquid
<script>
  $(document).ready(function(){
    $('.main_images').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.thumb_images'
    });
    $('.thumb_images').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.main_images',
      dots: false,
      centerMode: true,
      focusOnSelect: true
    });
  });
</script>
