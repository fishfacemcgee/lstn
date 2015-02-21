(function() {
'use strict';

angular.module('lstn.filters', [])

.filter('duration', [function() {
  return function(value) {
    var output = [];
    var duration = moment.duration(value, 'seconds');

    var seconds = duration.seconds();
    if (seconds) {
      output.unshift(seconds + 's');
    }

    var minutes = duration.minutes();
    if (minutes) {
      output.unshift(minutes + 'm');
    }

    var hours = duration.hours();
    if (hours) {
      output.unshift(hours + 'h');
    }

    var days = duration.days();
    if (days) {
      output.unshift(days + 'd');
    }

    var months = duration.months();
    if (months) {
      output.unshift(months + 'mo');
    }

    var years = duration.years();
    if (years) {
      output.unshift(years + 'y');
    }

    if (output.length === 0) {
      return '0s';
    }

    return output.join(' ');
  };
}])

.filter('timeFromNow', [function() {
  return function(date) {
    return moment(date).fromNow();
  };
}])
.filter('truncate', function() {
  return function(input, targetLength, separator) {
    targetLength = parseInt(targetLength, 10);

    if (!input || input.length <= targetLength) {
      return input;
    }

    separator = separator || '...';

    var length = targetLength - separator.length;

    return input.substr(0, length) + separator;
  };
})

.filter('middlecut', function() {
  return function(input, targetLength, separator) {
    targetLength = parseInt(targetLength, 10);

    if (!input || input.length <= targetLength) {
      return input;
    }

    separator = separator || '...';

    var charactersLength = targetLength - separator.length,
      frontCharacters = Math.ceil(charactersLength / 2),
      backCharacters = Math.floor(charactersLength / 2);

    return input.substr(0, frontCharacters) +
      separator +
      input.substr(input.length - backCharacters);
  };
});

})();
