function newIssue(){
    let issueName = prompt("Issue name", "IssueName");
    document.getElementById("mainBody").innerHTML += "<div class='issue'>" +
    "<div class='flexRow'>"+
        "<a href='issues.html' class='issueName'>"+issueName+"</a>"+
    "</div>"+
    "<div class='flexRow'>"+
        "<span class='issueInfo'>#ofIssue opened by</span>"+
        "<a href='issues.html' class='issueInfo'>userName</a>"+
    "</div>"+
"</div>";

    let oldText = document.getElementById("openIssuesCounter").innerText;
    let issuesCount = Number(oldText.split(" ")[0]);
    issuesCount += 1;
    document.getElementById("openIssuesCounter").innerText = issuesCount + " Open";
}