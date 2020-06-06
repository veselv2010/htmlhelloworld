var issues = [
    'Disappearing beatmaps',
];

function newIssue(){
    let issueName = prompt("Issue name", "IssueName");
    issues.push(issueName);

    renderIssues();
}

function renderIssues(){
    document.getElementById("mainBody").innerHTML = null;

    for(elem in issues){
        document.getElementById("mainBody").innerHTML += "<div class='issue'>" +
        "<div class='flexRow'>"+
            "<a href='issues.html' class='issueName'>"+issues[elem]+"</a>"+
        "</div>"+
        "<div class='flexRow'>"+
            "<span class='issueInfo'>#ofIssue opened by</span>"+
            "<a href='issues.html' class='issueInfo'>userName</a>"+
        "</div>"+
    "</div>";
    }

    document.getElementById("openIssuesCounter").innerText = issues.length + " Open";
}