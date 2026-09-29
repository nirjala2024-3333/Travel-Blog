 $('nav').on('mouseenter', function () {
      $('#this').css('color', 'white')
    });

    $('nav').on('mouseleave', function () {
      $('#this').css('color', 'rgb(255, 128, 0)')
    });

    $('#contactForm').on('submit', function (e) {
      e.preventDefault();
      $('#successMsg').text('Thank you for reaching out! We will get back to you soon.');
      $('#contactForm')[0].reset();
    });