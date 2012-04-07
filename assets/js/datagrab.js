(function ($, undefined) {

  function addRepo(repo) {
    if (repo.language == null || repo.language == undefined) {
        repo.language = '';
    }
    var $item = $("<li>").addClass("repo grid-1 " + (repo.language || '').toLowerCase());
    var $link = $("<a>").attr("href", repo.html_url).appendTo($item);
    if (repo.fork) {
        $link.append($("<h2>").text(repo.name).append($("<img>").attr('src', 'assets/img/fork.png')));	
    } else {
        $link.append($("<h2>").text(repo.name));
    }        
    $link.append($("<h3>").text(repo.language));
    $link.append($("<p>").text(repo.description));
    $item.appendTo("#repos");
  }

  $.getJSON("https://api.github.com/users/jessex/repos?callback=?", function (result) {
    var repos = result.data;

    $(function () {
      $("#num-repos").text(repos.length);

      // Convert pushed_at to Date.
      $.each(repos, function (i, repo) {
        repo.pushed_at = new Date(repo.pushed_at);

        var weekHalfLife  = 1.146 * Math.pow(10, -9);

        var pushDelta    = (new Date) - Date.parse(repo.pushed_at);
        var createdDelta = (new Date) - Date.parse(repo.created_at);

        var weightForPush = 1;
        var weightForWatchers = 1.314 * Math.pow(10, 7);

        repo.hotness = weightForPush * Math.pow(Math.E, -1 * weekHalfLife * pushDelta);
        repo.hotness += weightForWatchers * repo.watchers / createdDelta;
      });

      // Sort by highest # of watchers.
      repos.sort(function (a, b) {
        if (a.hotness < b.hotness) return 1;
        if (b.hotness < a.hotness) return -1;
        return 0;
      });

      $.each(repos, function (i, repo) {
        addRepo(repo);
      });

      // Sort by most-recently pushed to.
      repos.sort(function (a, b) {
        if (a.pushed_at < b.pushed_at) return 1;
        if (b.pushed_at < a.pushed_at) return -1;
        return 0;
      });
    });
  });
  
  $.getJSON("https://api.github.com/users/jessex/gists?callback=?", function (result) {
    var gists = result.data;
  
    $(function () {
        $("#num-gists").text(gists.length);
    });
  });  
})(jQuery);

