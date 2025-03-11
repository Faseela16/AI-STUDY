const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Dummy AI-based study plan logic (for simplicity)
app.post('/study-plan', (req, res) => {
    const { subject, studyTime } = req.body;

    // AI logic: Customize the study plan based on the subject and study time
    let topic = '';
    let duration = studyTime;
    let optimal_time = '';

    if (subject === 'Math') {
        topic = 'Algebra';
        optimal_time = studyTime > 3 ? 'Morning' : 'Evening';
    } else if (subject === 'Science') {
        topic = 'Physics';
        optimal_time = studyTime > 2 ? 'Morning' : 'Afternoon';
    } else if (subject === 'History') {
        topic = 'World Wars';
        optimal_time = studyTime > 1 ? 'Late Afternoon' : 'Evening';
    } else if (subject === 'java') {
        topic = 'object-oriented programming';
        optimal_time = studyTime > 1 ? 'Afternoon' : 'Morning';
    } else if (subject === 'Python') {
        topic = 'Variables and Data Types';
        optimal_time = studyTime > 2 ? 'Afternoon' : 'Morning';
    } else if (subject === 'C') {
        topic = 'Functions';
        optimal_time = studyTime > 2 ? 'Evening' : 'Morning';
    } else if (subject === 'C++') {
        topic = 'Inheritance';
        optimal_time = studyTime > 2 ? 'Evening' : 'Morning'; 
    } else if (subject === 'English') {
        topic = 'Grammer';
        optimal_time = studyTime > 2 ? 'Afternoon' : 'Morning'; 
    }
    res.json({ subject, topic, duration, optimal_time });
});

// Start the server
app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
