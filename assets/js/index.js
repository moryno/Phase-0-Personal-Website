
// FUNCTION TO CALCULATE YEAR
const footer = () => {
    const year = new Date().getFullYear();
    const footerText = document.getElementById("footerText");
    footerText.textContent = `Copyright ⓒ ${year}`;
}
footer ();





