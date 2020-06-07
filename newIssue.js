const issues = [
    { name: 'Disappearing beatmaps', isOpen: true },
    { name: 'Disappearing beatmaps', isOpen: false },
];

function addNewIssue() {
    const issueName = prompt("Issue name", "IssueName");
    issues.push({name: issueName, isOpen: true});

    renderIssues();
}

function deleteIssue(callerButton){
    const id = callerButton.getAttribute("data-id");
    issues.splice(Number(id), 1);

    renderIssues();
}

function renderIssues() {
    document.getElementById("mainBody").innerHTML = null;
    let openCounter = 0, closedCounter = 0;
    for (const elem in issues) {
        const currentElem = issues[elem];

        if (!currentElem.isOpen) {
            closedCounter += 1;
            continue;
        }

        document.getElementById("mainBody").innerHTML += `<div class='issue flexColumn'>
            <div class='flexRow'>
                <img class="deleteIssueButton" src="img/bin.png" data-id=${elem} onclick="deleteIssue(this)">
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