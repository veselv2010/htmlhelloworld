const issues = [
    { name: 'Disappearing beatmaps', isOpen: true },
    { name: 'Disappearing beatmaps', isOpen: false },
];

function AddNewIssue() {
    const issueName = prompt("Issue name", "IssueName");
    issues[issues.length] = {"name": issueName, "isOpen": "true"};

    RenderIssues();
}

function DeleteIssue(callerButton){
    const id = String(callerButton.id).split("_")[1];
    issues.splice(Number(id), 1);

    RenderIssues();
}

function RenderIssues() {
    document.getElementById("mainBody").innerHTML = null;
    let openCounter = 0, closedCounter = 0;
    for (const elem in issues) {
        const currentElem = issues[elem];

        if (!currentElem.isOpen) {
            closedCounter += 1;
            continue;
        }

        document.getElementById("mainBody").innerHTML += `<div class='issue'>
            <div class='flexRow'>
                <img class="deleteIssueButton" src="img/bin.png" id=delete_${elem} onclick=DeleteIssue(this)>
                <a href='issues.html' class='issueName'>${issues[elem].name}</a>
            </div>
            <div class='flexRow'>
                <span class='issueInfo'>#ofIssue opened by</span>
                <a href='issues.html' class='issueInfo'>userName</a>
            </div>
        </div>`;

        openCounter += 1;
    }

    document.getElementById("openIssuesCounter").innerText = openCounter + " Open";
    document.getElementById("closedIssuesCounter").innerText = closedCounter + " Closed";
}