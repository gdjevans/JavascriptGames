const task3Element = document.getElementById('task-3');

function welcome() {
    alert('Welcome');
}

function username(name) {
    alert(`Hi ${name}`);
}

welcome();

username('Dave');

task3Element.addEventListener('click', welcome);

const string1 = 'Hi Dave';
const string2 = 'You are logged in';
const string3 = 'welcome to the portal';

function welcomeText(start, middle, end) {
    return `${start}, ${middle} ${end}`;
}

alert(welcomeText(string1, string2, string3));