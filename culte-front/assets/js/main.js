// Chargement du verset du jour
document.addEventListener('DOMContentLoaded', () => {
    // Ici vous pourrez ajouter un appel API plus tard
    console.log('Application frontend prête !');
    
    // Exemple de mise à jour dynamique
    setTimeout(() => {
        document.getElementById('verse-text').textContent = '"Venez à moi, vous tous qui êtes fatigués et chargés..."';
        document.getElementById('verse-reference').textContent = 'Matthieu 11:28';
    }, 3000);
});