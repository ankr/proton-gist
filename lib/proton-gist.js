'use strict';

var post = function (isPublic) {
    var url = 'https://api.github.com/gists';
    var xmlhttp = new XMLHttpRequest();

    var data = {
        "description": "",
        "public": isPublic,
        "files": {
            "file1.txt": {
                "content": JSON.stringify(atom.workspace.activePaneItem.buffer.cachedText)
            }
        }
    };

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 201) {
            var response = JSON.parse(xmlhttp.responseText);
            alert(response.html_url);
            console.log(response.html_url);
        }
    };

    xmlhttp.open('POST', url, true);
    xmlhttp.send(JSON.stringify(data));
};

module.exports = {
    init : function (editor) {
        atom.workspaceView.command('proton-gist:public', function () {
            console.log("Public");
            post(true);
        });

        atom.workspaceView.command('proton-gist:secret', function () {
            console.log("Private");
            post(false);
        });
    }
};
