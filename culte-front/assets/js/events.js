document.addEventListener('DOMContentLoaded', () => {
    console.log('Page Événements chargée');
    
    // Ici vous pourrez ajouter la logique pour :
    // - Charger les événements depuis une API
    // - Gérer les inscriptions
    // - Filtrer les événements
    
    // Exemple de gestion des clics sur les boutons
    document.querySelectorAll('.register-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const eventTitle = e.target.closest('.event-card').querySelector('h3').textContent;
            alert(`Inscription à "${eventTitle}" sera implémentée ici`);
        });
    });
});