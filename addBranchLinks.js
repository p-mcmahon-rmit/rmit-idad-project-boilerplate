const linksSections = document.getElementById("branch-links");

// load in our JSON asynchronously
fetch('./published-branches.json')
    .then(response => response.json())
    .then(publishedBranches => publishedBranches.branches.forEach(createBranchLink))
    .catch(error => console.log(error));

function createBranchLink(branchName){
    const branchLink = document.createElement("a");
    branchLink.href = branchName;
    branchLink.textContent = branchName;
    branchLink.target ="_blank";
    linksSections.appendChild(branchLink);
}