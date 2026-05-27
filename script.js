document.addEventListener('DOMContentLoaded', () => {
    const promptModal = document.getElementById('promptModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const promptTextElement = document.getElementById('promptText');
    const copyPromptBtn = document.getElementById('copyPromptBtn');

    // ================= 1. PROMPT MODAL CONTROLS =================
    document.querySelectorAll('.openPromptBtn').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            const customText = button.getAttribute('data-prompt');
            if (promptTextElement) {
                promptTextElement.textContent = customText;
            }
            if (promptModal) {
                promptModal.classList.remove('hidden');
            }
        });
    });

    if (closeModalBtn && promptModal) {
        closeModalBtn.addEventListener('click', () => {
            promptModal.classList.add('hidden');
        });
    }

    if (copyPromptBtn && promptTextElement) {
        copyPromptBtn.addEventListener('click', () => {
            const textToCopy = promptTextElement.textContent;
            navigator.clipboard.writeText(textToCopy).then(() => {
                const originalText = copyPromptBtn.innerText;
                copyPromptBtn.innerText = "COPIED!";
                setTimeout(() => {
                    copyPromptBtn.innerText = originalText;
                }, 2000);
            });
        });
    }

    // ================= 2. NEW ENGAGEMENT CONTROLS =================

    // Like Action Toggle
    document.querySelectorAll('.like-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('active');
            const span = btn.querySelector('span');
            const svg = btn.querySelector('svg');
            
            if (btn.classList.contains('active')) {
                btn.style.color = '#ff4757';
                svg.setAttribute('fill', '#ff4757');
                span.textContent = 'Liked!';
            } else {
                btn.style.color = '';
                svg.setAttribute('fill', 'none');
                span.textContent = 'Like';
            }
        });
    });

    // Dynamic Comment Prompt Action
    document.querySelectorAll('.comment-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const userComment = prompt("Type your comment below:");
            if (userComment && userComment.trim() !== "") {
                const span = btn.querySelector('span');
                btn.style.color = '#3498db';
                span.textContent = '1 Comment';
                alert("Comment posted successfully!");
            }
        });
    });

    // Save Action Toggle
    document.querySelectorAll('.save-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('active');
            const span = btn.querySelector('span');
            const svg = btn.querySelector('svg');
            
            if (btn.classList.contains('active')) {
                btn.style.color = '#f1c40f';
                svg.setAttribute('fill', '#f1c40f');
                span.textContent = 'Saved!';
            } else {
                btn.style.color = '';
                svg.setAttribute('fill', 'none');
                span.textContent = 'Save';
            }
        });
    });
});