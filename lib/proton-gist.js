'use strict';

var post = function (isPublic) {
    var request = new XMLHttpRequest();
    var response = null;
    var url = 'https://api.github.com/gists';
    var editor = atom.workspace.activePaneItem;

    var data = {
        "description": "",
        "public": isPublic,
        "files": {
            "file1.txt": {
                "content": editor.buffer.cachedText
            }
        }
    };

    request.onreadystatechange = function() {
        if (request.readyState === 4) {
            if (request.status !== 201) {
                alert('Something went wrong when creating gist - check console!');
                console.log(request);
                return;
            }

            response = JSON.parse(request.responseText);
            editor.insertText('\n' + response.html_url);
        }
    };

    request.open('POST', url, true);
    request.send(JSON.stringify(data));
};

module.exports = {
    init : function (editor) {
        atom.workspaceView.command('proton-gist:public', function () {
            post(true);
        });

        atom.workspaceView.command('proton-gist:private', function () {
            post(false);
        });
    }
};
