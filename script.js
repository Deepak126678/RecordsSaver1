/**
 * @param click storing login form value in the Constant  by their id on submit
 */
document.getElementById("submitBtn").addEventListener("click", () => {
    const name = document.getElementById("User").value;
    const age = document.getElementById("Age").value;
    const familyName = document.getElementById("FamilyName").value;
    const Userdate = document.getElementById("Userdate").value;
    /**
     * condition cheak for not empty
     */

    if (!name || !age || !familyName) {
        alert("Please fill out all fields.");
        return;
    }
    /**
     * creating object for Storing data
     */

    const firstPageUser = {
        name: name,
        age: age,
        familyName: familyName,
        Userdate:Userdate,
    };
    /**
     * storing data in web storage
     */

    
    localStorage.setItem("FirstPageUser", JSON.stringify(firstPageUser));

    /**
     * Redirecting to next page
     */
    window.location.href = "page2.html";
});