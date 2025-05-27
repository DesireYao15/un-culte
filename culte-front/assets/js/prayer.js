document.addEventListener('DOMContentLoaded', () => {
    console.log('Page Prière chargée');
    
    const prayerForm = document.getElementById('prayerForm');
    
    if (prayerForm) {
        prayerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(prayerForm);
            const requestText = formData.get('request');
            const isAnonymous = formData.get('anonymous') === 'on';
            const name = isAnonymous ? 'Anonyme' : (formData.get('name') || 'Anonyme');
            
            // Ici vous enverrez les données au backend
            console.log('Demande de prière:', { name, requestText });
            
            // Afficher un message de confirmation
            alert('Votre demande de prière a été envoyée. Merci !');
            prayerForm.reset();
            
            // Ajouter la prière au mur (temporairement)
            addPrayerToWall(requestText, name);
        });
    }
    
    function addPrayerToWall(text, author) {
        const prayerWall = document.querySelector('.prayers-list');
        if (!prayerWall) return;
        
        const prayerItem = document.createElement('div');
        prayerItem.className = 'prayer-item';
        
        const prayerText = document.createElement('p');
        prayerText.className = 'prayer-text';
        prayerText.textContent = `"${text}"`;
        
        const prayerMeta = document.createElement('p');
        prayerMeta.className = 'prayer-meta';
        prayerMeta.textContent = `${author} - À l'instant`;
        
        prayerItem.appendChild(prayerText);
        prayerItem.appendChild(prayerMeta);
        
        prayerWall.prepend(prayerItem);
    }
});