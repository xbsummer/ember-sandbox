var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    cssModules: {
      plugins: [
        require('postcss-import'),
        require('postcss-extend'),
        require('postcss-cssnext')
      ],
      virtualModules: {
        'ui-colors': {
          'ui-red': '#f44336',
          'ui-pink': '#e91e63',
          'ui-purple': '#9c27b0',
          'ui-deep-purple': '#673ab7',
          'ui-indigo': '#3f51b5',
          'ui-blue': '#2196f3',
          'ui-light-blue': '#03a9f4',
          'ui-cyan': '#00bcd4',
          'ui-teal': '#009688',
          'ui-green': '#4caf50',
          'ui-light-green': '#8bc34a',
          'ui-lime': '#cddc39',
          'ui-yellow': '#ffeb3b',
          'ui-amber': '#ffc107',
          'ui-orange': '#ff9800',
          'ui-deep-orange': '#ff5722',
          'ui-brown': '#795548',
          'ui-gray': '#9e9e9e',
          'ui-blue-gray': '#607d8b'
        }
      }
    },
    nodeAssets: {
      hack: {
        srcDir: 'dist',
        import: {
          include: [
            { path: 'standard.css', prepend: true },
            { path: 'hack.css', prepend: true }
          ]
        }
      }
    }
  });

  return app.toTree();
};
