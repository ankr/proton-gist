ProtonView = require './lib/proton-gist.coffee'

module.exports =
  protonView: null

  activate: (state) ->
    @protonView = new ProtonView()

  deactivate: ->
    @protonView.destroy()

  serialize: ->
    testViewState: @protonView.serialize()
