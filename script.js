function openTab(event, tabName) {
    var tabs = document.querySelectorAll('.tab');
    tabs.forEach(function(tab) {
      tab.classList.remove('clicked');
    });
    event.currentTarget.classList.add('clicked');
    
    var tabLinks = {
      'tab1': 'https://example.com/tab1',
      'tab2': 'https://example.com/tab2',
      'tab3': 'https://example.com/tab3',
      'tab4': 'https://example.com/tab4'
    };
  
    window.open(tabLinks[tabName], '_blank'); // Open specific link in a new tab
  }
  
  function revealInfo(tabName) {
    var infoDiv = document.getElementById(tabName + '-info');
    infoDiv.style.display = 'block';
  