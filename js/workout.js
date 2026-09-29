// js/workout.js
document.addEventListener('DOMContentLoaded', () => {
    
    const workoutModal = document.getElementById('workoutModal');
    const openModalBtns = [document.getElementById('openWorkoutModal'), document.getElementById('openWorkoutModalBtn')];
    const closeModal = document.getElementById('closeModal');
    
    if (workoutModal && closeModal) {
        openModalBtns.forEach(btn => {
            if(btn) {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    workoutModal.classList.add('active');
                });
            }
        });
        
        closeModal.addEventListener('click', () => {
            workoutModal.classList.remove('active');
        });
        
        window.addEventListener('click', (e) => {
            if (e.target === workoutModal) {
                workoutModal.classList.remove('active');
            }
        });
    }

    const addWorkoutForm = document.getElementById('addWorkoutForm');
    if (addWorkoutForm) {
        addWorkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Workout added successfully!');
            workoutModal.classList.remove('active');
            // In a real app, this would append to the table or reload.
        });
    }

    // Delete confirmation
    const deleteBtns = document.querySelectorAll('.action-btn.delete');
    deleteBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if(confirm('Are you sure you want to delete this workout?')) {
                const tr = e.target.closest('tr');
                if(tr) tr.remove();
            }
        });
    });
});
