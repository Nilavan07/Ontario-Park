document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality
    const tabs = document.querySelectorAll('.campsite-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Dropdown functionality
    const dropdowns = document.querySelectorAll('.dropdown');
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.matches('.dropbtn')) {
            dropdowns.forEach(dropdown => {
                const content = dropdown.querySelector('.dropdown-content');
                if (content.style.display === 'block') {
                    content.style.display = 'none';
                }
            });
        }
    });

    // Toggle dropdowns
    dropdowns.forEach(dropdown => {
        const btn = dropdown.querySelector('.dropbtn');
        const content = dropdown.querySelector('.dropdown-content');
        
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const isOpen = content.style.display === 'block';
            document.querySelectorAll('.dropdown-content').forEach(d => {
                d.style.display = 'none';
            });
            content.style.display = isOpen ? 'none' : 'block';
        });
    });

    // Form submission
    const searchBtn = document.querySelector('.inline-search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const parkArea = document.getElementById('park-area').value;
            const arrival = document.getElementById('date-arrival').value;
            const departure = document.getElementById('date-departure').value;
            
            if (!parkArea) {
                alert('Please select a park area');
                return;
            }
            
            if (!arrival || !departure) {
                alert('Please select both arrival and departure dates');
                return;
            }
            
            // Proceed with search
            console.log('Search criteria:', { 
                parkArea,
                arrival, 
                departure,
                people: document.getElementById('people').value,
                equipment: document.getElementById('equipment').value
            });
            alert('Searching for available campsites...');
        });
    }
    
    // Newsletter subscription
    const subscribeBtn = document.querySelector('.subscribe-btn');
    if (subscribeBtn) {
        subscribeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const input = document.querySelector('.newsletter-input');
            if (input.value.trim() === '') {
                alert('Please enter your name');
                input.focus();
                return;
            }
            alert(`Thank you for subscribing, ${input.value}!`);
            input.value = '';
        });
    }
    
    // Park cards interaction
    const parkCards = document.querySelectorAll('.park-card');
    parkCards.forEach(card => {
        card.addEventListener('click', function(e) {
            if (!e.target.classList.contains('view-details-btn')) {
                const parkName = this.querySelector('.park-card-title').textContent;
                alert(`More information about ${parkName} would be displayed here.`);
            }
        });
        
        const viewDetailsBtn = card.querySelector('.view-details-btn');
        if (viewDetailsBtn) {
            viewDetailsBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                const parkName = this.previousElementSibling.textContent;
                alert(`More details about ${parkName} would be shown here.`);
            });
        }
    });
});