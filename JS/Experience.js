
    const form = document.getElementById('form');
    const experienceList = document.getElementById('experience-list');

    function loadExperiences() {
        const experiences = JSON.parse(localStorage.getItem('experiences')) || [];
        experiences.forEach(addExperienceToDOM);
    }

    function saveExperiences(experiences) {
        localStorage.setItem('experiences', JSON.stringify(experiences));
    }

    function addExperienceToDOM(exp) {
        const div = document.createElement('div');
        div.classList.add('experience');
        div.innerHTML = `
            <h3>${exp.name}</h3>
            <p>${exp.experience}</p>
            ${exp.image ? `<img class="img-comment" src="${exp.image}" alt="User experience image">` : ''}
            <p><button class="delete-btn">Delete</button><p>`;
            
        div.querySelector('.delete-btn').addEventListener('click', () => {
            const experiences = JSON.parse(localStorage.getItem('experiences')) || [];
            const index = experiences.findIndex(e => e.name === exp.name && e.experience === exp.experience && e.image === exp.image);
            if (index !== -1) {
                experiences.splice(index, 1);
                saveExperiences(experiences);
                div.remove();
            }
        });
        experienceList.appendChild(div);
    }

    form.addEventListener('submit', (event) => {
        const name = form.name.value;
        const experience = form.experience.value;
        const imageInput = form.image.files[0];

        if (imageInput) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const newExperience = { name, experience, image: e.target.result };
                const experiences = JSON.parse(localStorage.getItem('experiences')) || [];
                experiences.push(newExperience);
                saveExperiences(experiences);
                addExperienceToDOM(newExperience);
            };
            reader.readAsDataURL(imageInput);
        } else {
            const newExperience = { name, experience, image: '' };
            const experiences = JSON.parse(localStorage.getItem('experiences')) || [];
            experiences.push(newExperience);
            saveExperiences(experiences);
            addExperienceToDOM(newExperience);
        }
        form.reset();
    });

    loadExperiences();