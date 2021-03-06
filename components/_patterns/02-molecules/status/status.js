(function ($, Drupal) {

  Drupal.behaviors.status = {
    attach: function(context, settings) {

      'use strict';

      $(context).find('.status').each(function() {
        var info = '<div class="icon"><i class="fas fa-info-circle"></i></div>';
        var warning = '<div class="icon"><i class="fas fa-exclamation-triangle"></i></div>';
        var error = '<div class="icon"><i class="fas fa-times-circle"></i></div>';

        if ($(this).hasClass('status--status')) {
          $(this).prepend(info);
        } else if ($(this).hasClass('status--warning')) {
          $(this).prepend(warning);
        } else if ($(this).hasClass('status--error')) {
          $(this).prepend(error);
        }
      });

    }
  }

})(jQuery, Drupal);
