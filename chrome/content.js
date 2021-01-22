function createCopyIssueButton() {
    let a = document.createElement('a')
    a.className = "aui-button toolbar-trigger extesion-copy-button"
    a.id = "copy-issue-button"
    a.innerHTML = `
    <span class="icon aui-icon aui-icon-small">
        <svg height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true">
            <path fill-rule="evenodd" d="M5.75 1a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-4.5zm.75 3V2.5h3V4h-3zm-2.874-.467a.75.75 0 00-.752-1.298A1.75 1.75 0 002 3.75v9.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 13.25v-9.5a1.75 1.75 0 00-.874-1.515.75.75 0 10-.752 1.298.25.25 0 01.126.217v9.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-9.5a.25.25 0 01.126-.217z">
            </path>
        </svg>
    </span>
    `;

    a.href = "javascript:void(0);"
    a.onclick = function() {
        copyIssueToClipboard()
    }

    return a
}

function addCopyIssueButton() {
    let existingButton = document.getElementById("copy-issue-button")
    if (existingButton) {
        existingButton.parentNode.removeChild(existingButton)
    }

    let container = document.getElementById("opsbar-jira.issue.tools")
    container.insertBefore(createCopyIssueButton(), container.firstChild)
}

function getIssueUrlSummaryText() {
    let issueKeyNode = document.getElementById("key-val")
    let summaryNode = document.getElementById("summary-val")
    let key = issueKeyNode.innerText
    let url = issueKeyNode.href
    let summary = summaryNode.innerText
    return `${url} ${summary}`
}

function copyIssueToClipboard() {
    navigator.clipboard.writeText(getIssueUrlSummaryText())
}

function addCopyCommandListener() {
    document.addEventListener('copy', function(e) {
        let selection = window.getSelection().toString()
        if (selection.length == 0) {
            copyIssueToClipboard()
            e.preventDefault();
        }
    })
}

function main() {
    addCopyIssueButton()
    addCopyCommandListener()
}

main()