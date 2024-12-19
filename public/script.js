async function generateAnswer() {
    const question = document.getElementById('question').value;
    const loading = document.getElementById('loading');
    const answerDiv = document.getElementById('answer');
    
    if (!question) {
        alert('Please enter a question!');
        return;
    }

    loading.style.display = 'block';
    answerDiv.innerHTML = '';

    try {
        const response = await fetch('/api/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ question })
        });

        const data = await response.json();
        answerDiv.innerHTML = data.content[0].text;
    } catch (error) {
        answerDiv.innerHTML = "Something went wrong. Possibly the gerbils went on strike. Please try again! If that doesn't work talk to the gerbils.";
        console.error('Error:', error);
    }

    loading.style.display = 'none';
}

