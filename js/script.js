function openTab(evt, tabName, content) {
    var i, tabContent, tabLinks;
  
    // Hide all tab content
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }
  
    // Remove the 'active' class from all tab links
    tabLinks = document.getElementsByClassName("tab");
    for (i = 0; i < tabLinks.length; i++) {
      tabLinks[i].classList.remove("active");
    }
  
    // Show the specific tab content
    document.getElementById(tabName).classList.add("active");
    document.getElementById(tabName).style.display = "block"; // Display the tab content
    document.getElementById("tabContent").innerHTML = '<h3>' + tabName + ' Content</h3><p>' + content + '</p>';
    document.getElementById("tabContent").style.display = "block"; // Display the content area
  }
  