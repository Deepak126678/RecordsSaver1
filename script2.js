/**
 * Logout Function to clear the web storage  and redirecting to the login page
**/
document.getElementById("logout").addEventListener("click", () => {
    window.location.href = "index.html";
    window.localStorage.clear();
});
/**
 * @param DOMContentLoaded  when all the html content is loaded then apply the js callback
 **/
document.addEventListener("DOMContentLoaded", () => {
    const userList = document.getElementById("userList");
    const userDetails = document.getElementById("userDetails");
    const addUserBtn = document.getElementById("addUserBtn");
    const addUserdiv = document.getElementById("addUserModal");
    const Delete = document.getElementById("Deletel");
    const saveUserBtn = document.getElementById("saveUserBtn");
    const cancelButton = document.getElementById("cancelBtn");
    /**
     * arrey object to  store object data
     */

    const users = JSON.parse(localStorage.getItem("Users")) || [];
    /**
     * for storing the data in arrey in string from jason
     */

    const firstPageUser = JSON.parse(localStorage.getItem("FirstPageUser"));
    if (firstPageUser) {
        users.push(firstPageUser);
        localStorage.setItem("Users", JSON.stringify(users));
        localStorage.removeItem("FirstPageUser");
    }
    /**
     * Function to  display user 
     */

    function displayUsers() {
        userList.innerHTML = "<h3>User List</h3>";
        users.forEach((user, index) => {
            const userName = document.createElement("h3");
            userName.className = "user-name";
            userName.textContent = user.name;
            userName.dataset.index = index;
            userList.appendChild(userName);
        });
    }
    /**
     * @param mouseover when the mouse hovers around the object  
     * the details of that index is visible 
     */
    /**
     * 
     */

    userList.addEventListener("mouseover", (event) => {
        if (event.target.classList.contains("user-name")) {
          let userIndex = 0;
          for (let i = 1; i <= userList.children.length; i++) {
            if (userList.children[i] === event.target) {
                /**
                 * The index of the element in which the mouse is hovered
                 */


              userIndex = i-1;
              break;
            }
          }
          /**
           * constant user for displaying user hovering data
           */
          const user = users[userIndex];
          userDetails.innerHTML = `
            <p>Name: ${user.name}</p>
            <p>Age: ${user.age}</p>
            <p>Family Name: ${user.familyName}
            </p>
            <p>Userdate: ${user.Userdate}
          `;
          document.getElementById("")
        }
      });
    /**
     * eventlistner  for hiding the details
     */
   

    userList.addEventListener("mouseout", () => {
        userDetails.textContent = "Person Details.";
    });
    /**
     * For displaying the the new form div
     */

    addUserBtn.addEventListener("click", () => {
        addUserdiv.style.display = "block";
    });
    


    cancelButton.addEventListener("click", () => {
        addUserModal.style.display = "none";
    });
    /**
     
     * @param click for saving new person data
     */


    saveUserBtn.addEventListener("click", () => {
        const name = document.getElementById("newUserName").value;
        const age = document.getElementById("newUserAge").value;
        const familyName = document.getElementById("newUserFamilyName").value;
        const Userdate = document.getElementById("Userdate").value;

       /**
        * @name @age @familyname is if null The alert is shown
        */

        if (!name || !age || !familyName ) {
            alert("Please fill out all fields.");
            return;
        }
        /**
         * @user exist condition cheak
         */

        const userExists = users.some(user => user.name.toLowerCase() === name.toLowerCase());

        if (userExists) {
            alert("This user is already registered.");
            return;
        }

        const newUser = {
            name: name,
            age: age,
            familyName: familyName,
            Userdate:Userdate
           


        
            
        };
        /**
         * @param newUser new user is pushed into the user arrey
         * form div is set to none
         */
       

        users.push(newUser);
        localStorage.setItem("Users", JSON.stringify(users));

        addUserModal.style.display = "none";
        displayUsers();

        document.getElementById("newUserName").value = "";
        document.getElementById("newUserAge").value = "";
        document.getElementById("newUserFamilyName").value = "";
    });

    displayUsers();
});