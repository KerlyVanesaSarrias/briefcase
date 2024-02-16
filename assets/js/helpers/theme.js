
const checkboxElementTheme = document.getElementById('darkmode-toggle');

function changeTheme(e) {
    console.log(e)
    const { checked } = e.target;
    const styleRoot = document.documentElement.style;
    if(checked) {
        styleRoot.setProperty('--bg-color-section1', '#0d1b2a');
        styleRoot.setProperty('--bg-color-skills', '#343a40');
        styleRoot.setProperty('--color-black', '#eee');
        styleRoot.setProperty('--bg-color-section2', '#0d1b2a');
        styleRoot.setProperty('--card', '#343a40');
        
        
    } else {
        styleRoot.setProperty('--bg-color-section1', '#eee');
        styleRoot.setProperty('--color-black', '#000');
        styleRoot.setProperty('--bg-color-section2', '#fafafa');
        styleRoot.setProperty('--bg-color-skills', '#d1d1d1');
        styleRoot.setProperty('--card', '#d1d1d1');
    }
}

checkboxElementTheme.addEventListener('change', changeTheme);

export default changeTheme;