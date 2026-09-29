USE fitpulse;

-- Insert a demo user (password is 'password123')
INSERT INTO users (id, full_name, email, password, age, gender, height, weight) 
VALUES (1, 'John Doe', 'john@example.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 28, 'Male', 180.5, 75.0);

-- Insert demo workouts
INSERT INTO workouts (user_id, exercise_name, category, sets, reps, weight, duration, calories_burned, workout_date)
VALUES 
(1, 'Bench Press', 'Strength', 4, 10, 80.0, 45, 300, CURDATE() - INTERVAL 2 DAY),
(1, 'Treadmill Running', 'Cardio', 0, 0, 0.0, 30, 400, CURDATE() - INTERVAL 1 DAY),
(1, 'Deadlift', 'Strength', 3, 8, 100.0, 50, 350, CURDATE());

-- Insert demo water intake
INSERT INTO water_intake (user_id, amount, intake_date)
VALUES 
(1, 1500, CURDATE() - INTERVAL 2 DAY),
(1, 2000, CURDATE() - INTERVAL 1 DAY),
(1, 1800, CURDATE());

-- Insert demo weight history
INSERT INTO weight_history (user_id, weight, record_date)
VALUES 
(1, 78.0, CURDATE() - INTERVAL 30 DAY),
(1, 77.0, CURDATE() - INTERVAL 20 DAY),
(1, 76.0, CURDATE() - INTERVAL 10 DAY),
(1, 75.0, CURDATE());

-- Insert demo fitness goals
INSERT INTO fitness_goals (user_id, goal_type, target_value, current_value, unit, deadline, status)
VALUES 
(1, 'Weight Loss', 70.0, 75.0, 'kg', CURDATE() + INTERVAL 60 DAY, 'in_progress'),
(1, 'Steps', 10000, 8426, 'steps', CURDATE(), 'in_progress');

-- Insert daily activity
INSERT INTO daily_activity (user_id, steps, activity_date)
VALUES 
(1, 7500, CURDATE() - INTERVAL 2 DAY),
(1, 9200, CURDATE() - INTERVAL 1 DAY),
(1, 8426, CURDATE());

-- Insert an admin user (password is 'admin123')
INSERT INTO admins (username, password)
VALUES ('admin', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi');
