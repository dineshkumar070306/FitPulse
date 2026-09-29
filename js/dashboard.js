// js/dashboard.js
document.addEventListener('DOMContentLoaded', () => {
    // Chart Defaults
    Chart.defaults.color = '#a0a4b8';
    Chart.defaults.font.family = "'Inter', sans-serif";
    
    const primaryColor = '#d4ff00';
    const primaryHover = 'rgba(212, 255, 0, 0.2)';

    // Weekly Activity Chart
    const activityCtx = document.getElementById('activityChart');
    if (activityCtx) {
        new Chart(activityCtx, {
            type: 'bar',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: 'Active Minutes',
                    data: [45, 60, 30, 75, 50, 90, 45],
                    backgroundColor: primaryHover,
                    borderColor: primaryColor,
                    borderWidth: 1,
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.05)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }

    // Mini Weight Chart
    const weightCtx = document.getElementById('weightMiniChart');
    if (weightCtx) {
        new Chart(weightCtx, {
            type: 'line',
            data: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                datasets: [{
                    label: 'Weight',
                    data: [70.5, 69.8, 69.1, 68.4],
                    borderColor: '#00e5ff',
                    backgroundColor: 'rgba(0, 229, 255, 0.1)',
                    borderWidth: 2,
                    tension: 0.4,
                    fill: true,
                    pointRadius: 3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.parsed.y + ' kg';
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        display: false,
                        min: 67
                    },
                    x: {
                        display: false
                    }
                }
            }
        });
    }
});
