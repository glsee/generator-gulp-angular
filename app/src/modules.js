'use strict';

var _ = require('lodash');

module.exports = function(GulpAngularGenerator) {

  /**
   * Compute Angular's module to load and format the dependency list to insert
   */
  GulpAngularGenerator.prototype.computeModules = function computeModules() {
    var ngModules = this.props.angularModules.map(function (module) {
      return module.module;
    });

    ngModules = ngModules.concat([
      this.props.resource.module,
      this.props.router.module,
      this.props.ui.module,
      this.props.bootstrapComponents.module,
      this.props.foundationComponents.module
    ]);

    this.modulesDependencies = ngModules
      .filter(_.isString)
      .map(function (dependency) {
        return '\'' + dependency + '\'';
      })
      .join(', ');
  };

};
