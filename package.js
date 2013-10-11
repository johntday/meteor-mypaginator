Package.describe({
  summary: "A paginated subscription for a collection."
});

Package.on_use(function (api, where) {
  api.add_files('mypaginator.js', 'client');
});
