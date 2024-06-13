function myFunction() {
    // Declare variables
    const input = document.getElementById("myInput");
    const filter = input.value.toUpperCase();
    const table = document.getElementById("myTable");
    const tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows
    for (let i = 0; i < tr.length; i++) {
      let found = false;  // Flag to indicate a match in any column
  
      // Check all columns within the row
      for (let j = 0; j < tr[i].children.length; j++) {
        const td = tr[i].children[j];
        const txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          found = true;
          break;  // Exit inner loop if a match is found in any column
        }
      }
  
      // Display or hide row based on search result
      tr[i].style.display = found ? "" : "none";
    }
  }
  