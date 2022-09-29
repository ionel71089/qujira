function createCopyIssueButton() {
    let a = document.createElement('a')
    a.className = "aui-button toolbar-trigger extesion-copy-button"
    a.id = "copy-issue-button"
    a.innerHTML = `
    <span>
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

function createCcbButton() {
    let a = document.createElement('a')
    a.className = "aui-button toolbar-trigger extesion-copy-button"
    a.id = "copy-ccb-button"
    a.innerHTML = `
    <span>
        <svg width="16" height="16" version="1.1" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <g transform="matrix(0.047619, 0, 0, 0.053489, -8.666582, -6.967489)">
            <path d="m350 130.26c-17.824 0-34.914 7.0781-47.516 19.68-12.605 12.602-19.684 29.695-19.684 47.52h134.4c0-17.824-7.0781-34.918-19.684-47.52-12.602-12.602-29.691-19.68-47.516-19.68zm151.2 151.2h-50.398v-41.945-1.3438l37.238-37.238c3.9961-4.2891 5.4688-10.352 3.8867-15.992-1.5859-5.6445-5.9961-10.055-11.637-11.637-5.6445-1.5859-11.703-0.11328-15.992 3.8828l-37.238 37.238h-153.89l-37.238-37.238h-0.003906c-4.2891-3.9961-10.352-5.4688-15.992-3.8828-5.6445 1.582-10.055 5.9922-11.637 11.637-1.5859 5.6406-0.11328 11.703 3.8828 15.992l37.016 37.184v1.3438 41.945l-50.398-0.003906c-6.0039 0-11.551 3.2031-14.551 8.4023-3 5.1953-3 11.602 0 16.801 3 5.1953 8.5469 8.3984 14.551 8.3984h50.398c0.023437 12.68 2.457 25.242 7.168 37.016-0.78906 0.4375-1.5352 0.94531-2.2383 1.5117l-47.543 47.543c-3.9961 4.2891-5.4688 10.352-3.8867 15.992 1.5859 5.6445 5.9922 10.055 11.637 11.637 5.6445 1.5859 11.703 0.11328 15.992-3.8828l43.68-43.68c15.289 17.598 36.207 29.355 59.191 33.262v-166.54h33.602v166.54c22.957-3.9062 43.852-15.641 59.137-33.207l43.68 43.68c4.2852 3.9961 10.348 5.4688 15.992 3.8867 5.6406-1.5859 10.051-5.9961 11.637-11.637 1.582-5.6445 0.10938-11.703-3.8867-15.992l-47.543-47.543c-0.70312-0.57031-1.4531-1.0742-2.2422-1.5156 4.7344-11.77 7.1875-24.328 7.2266-37.016h50.398c6.0039 0 11.551-3.1992 14.551-8.3984s3-11.602 0-16.801-8.5469-8.3984-14.551-8.3984z"/>
          </g>
        </svg>
    </span>
    `;

    a.href = "javascript:void(0);"
    a.onclick = function() {
        copyCcbInfoToClipboard()
    }

    return a
}

function addCcbButton() {
    let existingButton = document.getElementById("copy-ccb-button")
    if (existingButton) {
        existingButton.parentNode.removeChild(existingButton)
    }

    let container = document.getElementById("opsbar-jira.issue.tools")
    container.insertBefore(createCcbButton(), container.firstChild)
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

function getIssueCcbText() {
    let priority = document.getElementById("priority-val").innerText
    let version = document.getElementById("fixfor-val").innerText
    return `CCB: ${priority}, ${version}`
}

function copyCcbInfoToClipboard() {
    navigator.clipboard.writeText(getIssueCcbText())
}

function addCopyCommandListener() {
    document.addEventListener('copy', function(e) {
        let selection = document.getSelection().toString()
        if (selection.length == 0) {
            copyIssueToClipboard()
            e.preventDefault();
        }
    })
}

function addCutCommandListener() {
    document.addEventListener('cut', function(e) {
        let selection = window.getSelection().toString()
        if (selection.length == 0) {
            copyCcbInfoToClipboard()
            e.preventDefault();
        }
    })
}

addCopyCommandListener()
addCutCommandListener()

function addButtons() {
    addCopyIssueButton()
    addCcbButton()
}

function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.getElementById(selector)) {
                resolve(document.getElementById(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

waitForElm('opsbar-jira.issue.tools').then((elm) => {
    addButtons()
});

new MutationObserver(function(mutations) {
    addButtons()
}).observe(
    document.querySelector('title'),
    { subtree: true, characterData: true, childList: true }
);

function createDailyTimer() {
    let div = document.createElement('div')
    div.className = 'timer-container'
    div.id = 'timer-container'
    div.innerHTML = `
    <div class="timerDisplay">
        00 : 00 : 00 : 000
    </div>
    <div class="timer-buttons">
        <button id="pauseTimer">Pause</button>
        <button id="startTimer">Start</button>
        <button id="resetTimer">Reset</button>
    </div>
    `
    return div
}

let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let int = null;
let timerRef = null;

function addDailyTimer() {
    let existingTimer = document.getElementById('timer-container')
    if (existingTimer) {
        existingTimer.parentNode.removeChild(existingTimer)
    }

    let pageDiv = document.getElementById('page')
    let timer = createDailyTimer()
    pageDiv.appendChild(timer)

    timerRef = document.querySelector('.timerDisplay');

    document.getElementById('startTimer').addEventListener('click', ()=>{
        startTimer()
    });
    
    document.getElementById('pauseTimer').addEventListener('click', ()=>{
        pauseTimer()
    });
    
    document.getElementById('resetTimer').addEventListener('click', ()=>{
        resetTimer()
    });

    document.addEventListener("visibilitychange", function() {
        if (document.visibilityState === 'visible') {
            // startTimer()
        } else {
            pauseTimer()
        }
    });

    startTimer()
}

function pauseTimer() {
    clearInterval(int);
}

function resetTimer() {
    clearInterval(int);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    timerRef.innerHTML = '00 : 00 : 00 : 000 ';
}

function startTimer() {
    if(int!==null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer,10);
}

function displayTimer() {
    milliseconds+=10;
    if(milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}

function shouldAddTimer() {
    let url = window.location.href
    if (url.includes('/secure/RapidBoard.jspa?rapidView=') && url.includes('quickFilter=')) {
        return true
    }
    return false
}

waitForElm('page').then((elm) => {
    if (shouldAddTimer()) {
        addDailyTimer()
    }    
});

