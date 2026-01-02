// Install tabs
const installTabs = document.querySelectorAll('.install-tab');
const installCommand = document.querySelector('#installCommand');
const copyButtons = document.querySelectorAll('.copy-btn');

const packageManagers = {
    npm: 'npm install rellx',
    yarn: 'yarn add rellx',
    pnpm: 'pnpm add rellx'
};

installTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        installTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        const packageManager = tab.dataset.package;
        installCommand.textContent = packageManagers[packageManager];
        
        // Update copy button
        copyButtons.forEach(btn => {
            btn.dataset.copy = packageManagers[packageManager];
        });
    });
});

// Copy to clipboard
copyButtons.forEach(btn => {
    btn.addEventListener('click', async () => {
        const text = btn.dataset.copy;
        try {
            await navigator.clipboard.writeText(text);
            const originalContent = btn.innerHTML;
            btn.innerHTML = '<span>✓</span>';
            setTimeout(() => {
                btn.innerHTML = originalContent;
            }, 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
