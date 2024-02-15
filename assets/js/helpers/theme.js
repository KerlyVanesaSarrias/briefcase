
const checkboxElementTheme = document.getElementById('darkmode-toggle');

function changeTheme(e) {
    console.log(e)
    const { checked } = e.target;
    const styleRoot = document.documentElement.style;
    if(checked) {
        styleRoot.setProperty('--bg-color-section1', '#0d1b2a');
        styleRoot.setProperty('--color-black', '#eee');
        styleRoot.setProperty('--bg-color-section2', '#0d1b2a');
        
    } else {
        styleRoot.setProperty('--bg-color-section1', '#eee');
        styleRoot.setProperty('--color-black', '#000');
        styleRoot.setProperty('--bg-color-section2', '#fafafa');
    }
}

checkboxElementTheme.addEventListener('change', changeTheme);

export default changeTheme;