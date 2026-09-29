 $('nav').on('mouseenter', function(){
      $('#this').css('color','white')
    })

    $('nav').on('mouseleave', function(){
      $('#this').css('color','rgb(255, 128, 0)')
    })

    $(document).ready(function () {
      $('#category').on('change', function () {
        const selected = $(this).val();

        $('.tip-post').each(function () {
          const cat = $(this).data('category');

          if (selected === 'all' || cat === selected) {
            $(this).show();
          } else {
            $(this).hide();
          }
        });
      });
    });