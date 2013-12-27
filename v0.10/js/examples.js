$(document).ready(function() {
  var countrySource = ttDatasetAdapter.create({
    prefetch: '../data/countries.json',
    limit: 10
  }).initialize();

  $('.example-countries .typeahead').typeahead({
    sections: {
      name: 'countries',
      source: countrySource
    }
  });

  var repoSource = ttDatasetAdapter.create({
    prefetch: '../data/repos.json',
  }).initialize();

  var repoSuggestionTemplate = Handlebars.compile([
    '<p class="repo-language">{{language}}</p>',
    '<p class="repo-name">{{name}}</p>',
    '<p class="repo-description">{{description}}</p>'
  ].join(''));

  $('.example-twitter-oss .typeahead').typeahead({
    sections: {
      name: 'twitter-oss',
      source: repoSource,
      templates: {
        suggestion: repoSuggestionTemplate
      }
    }
  });

  var arabicSource = ttDatasetAdapter.create({
    local: [
      "الإنجليزية",
      "نعم",
      "لا",
      "مرحبا",
      "کيف الحال؟",
      "أهلا",
      "مع السلامة",
      "لا أتكلم العربية",
      "لا أفهم",
      "أنا جائع"
    ]
  }).initialize();

  $('.example-arabic .typeahead').typeahead({
    hint: false,
    sections: {
      name: 'arabic',
      source: arabicSource
    }
  });


  var nbaSource = ttDatasetAdapter.create({
    prefetch: '../data/nba.json'
  }).initialize();

  var nhlSource = ttDatasetAdapter.create({
    prefetch: '../data/nhl.json'
  }).initialize();

  $('.example-sports .typeahead').typeahead({
    sections: [
      {
        name: 'nba-teams',
        source: nbaSource,
        templates: {
          header: '<h3 class="league-name">NBA Teams</h3>'
        }
      },
      {
        name: 'nhl-teams',
        source: nhlSource,
        templates: {
          header: '<h3 class="league-name">NHL Teams</h3>'
        }
      }
    ]
  });

  var filmSource = ttDatasetAdapter.create({
    remote: '../data/films/queries/%QUERY.json',
    prefetch: '../data/films/post_1960.json',
  }).initialize();

  var filmSuggestionTemplate = Handlebars.compile(
    '<p><strong>{{value}}</strong> – {{year}}</p>'
  );

  $('.example-films .typeahead').typeahead({
    highlight: true,
    sections: {
      source: filmSource,
      templates: {
        suggestion: filmSuggestionTemplate
      }
    }
  });
});
