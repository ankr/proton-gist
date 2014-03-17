# proton-gist

Easily submit gists from within your [Atom](http://atom.io) editor.

Will take the content of the currently active editor window and create it as an [gist](http://gist.github.com), once the gist is created the link is automatically added to your clipboard.
Also it uses the name of the current file (*untitled* for non-saved files) as the file name for the gist, so named files will use correct highlighting when viewed.

## Shortcuts

`ctrl+alt+o` will create a **public** gist.

`ctrl+alt+p` will create a **private** gist.

## Authorization
To create gists on your github account you first [generate a new token](https://github.com/settings/tokens/new) and add to the object in `~/.atom/config.cson` as the `protonGist.githubToken` property:

```
"protonGist":
  "githubToken": "xxxxxxxxxxxxxxx"
```
