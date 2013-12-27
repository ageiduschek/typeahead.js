$(document).ready(function() {
  var repoSource, suggestionTemplate, haunt;

  repoSource = ttDatasetAdapter.create({
    prefetch: 'data/repos.json'
  }).initialize();

  suggestionTemplate = Handlebars.compile([
    '<p class="repo-language">{{language}}</p>'
  , '<p class="repo-name">{{name}}</p>'
  , '<p class="repo-description">{{description}}</p>'
  ].join(''))

  $('.typeahead').typeahead({
    sections: {
      name: 'repos',
      source: repoSource,
      templates: {
        suggestion: suggestionTemplate
      }
    }
  });

  haunt = ghostwriter.haunt({
    input: '#main-typeahead'
  , interval: 500
  , manuscript: [
      ghostwriter.noop
    , 'Boots'
    , ghostwriter.backspace.repeat(3)
    , 'wer'
    , ghostwriter.down.repeat(2)
    , ghostwriter.enter
    , ghostwriter.selectAll
    , 'FlIgHt'
    , ghostwriter.selectAll
    , 'type'
    , ghostwriter.right
    , ghostwriter.esc
    , ghostwriter.selectAll
    ]
  });

  $('.btn-demo').on('click', function(e) {
    e.stopPropagation();

    $(this).addClass('is-pressed');
    haunt.start();
  });

  $(document).on('click keydown', function(e) {
    !e.ghostwriter && haunt.pause();
  });
});
