// --- CARD RENDER LOGIC ---
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('marine-container');

    const renderCards = () => {
        let htmlContent = '';
        
        marineAnimals.forEach(animal => {
            const tagsHtml = animal.tags.map(tag => 
                `<span class="px-3 py-1 text-[10px] uppercase tracking-widest font-medium rounded-full bg-[#1c1d21]/80 text-gray-200 border border-gray-600/50 backdrop-blur-md shadow-lg">${tag}</span>`
            ).join('');

            let videoElementHTML = '';
            if (animal.videoProvider === 'youtube') {
                videoElementHTML = `
                    <!-- Removed scale animation. Video stays locked at 300% to fill the frame steadily -->
                    <iframe 
                        src="https://www.youtube.com/embed/${animal.videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${animal.videoId}&start=${animal.videoStart || 0}&playsinline=1" 
                        class="absolute top-1/2 left-1/2 w-[300%] h-[300%] max-w-none -translate-x-1/2 -translate-y-1/2 transition-opacity duration-700 ease-out opacity-0 group-hover:opacity-100 z-10 pointer-events-none" 
                        frameborder="0" allow="autoplay; encrypted-media">
                    </iframe>
                `;
            } else {
                videoElementHTML = `
                    <video src="${animal.videoSrc}" muted loop playsinline class="animal-video absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out opacity-0 group-hover:opacity-100 z-10 pointer-events-none"></video>
                `;
            }

            htmlContent += `
                <div class="liquid-glass-card flex flex-col h-full cursor-pointer group card-wrapper">
                    
                    <!-- Media Container: Locked at h-64 to prevent aspect ratio shifting (no group-hover:h-80) -->
                    <div class="w-full h-64 relative z-10 p-2">
                        <div class="w-full h-full rounded-[20px] overflow-hidden relative bg-[#1c1d21] flex items-center justify-center shadow-inner">
                            
                            <div class="absolute inset-0 bg-[#1c1d21]/30 group-hover:bg-transparent transition-colors duration-700 z-30 pointer-events-none"></div>
                            
                            <!-- Default Image: Removed scale animations for a steady fade -->
                            <img src="${animal.imageSrc}" alt="${animal.name}" class="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out group-hover:opacity-0 z-20 pointer-events-none">
                            
                            <!-- The Video -->
                            ${videoElementHTML}
                        </div>
                    </div>
                    
                    <!-- Text Content -->
                    <div class="relative z-10 flex-grow p-6 pt-2 flex flex-col transition-all duration-700">
                        <div class="mb-4">
                            <h2 class="text-3xl font-light tracking-wide text-white mb-1 drop-shadow-lg group-hover:text-blue-300 transition-colors">${animal.name}</h2>
                            <p class="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4">${animal.scientificName}</p>
                            <p class="text-gray-200 text-sm leading-relaxed font-light">${animal.description}</p>
                        </div>
                        
                        <div class="relative z-10 flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/10">
                            ${tagsHtml}
                        </div>
                    </div>
                </div>
            `;
        });

        container.innerHTML = htmlContent;
        
        const cards = document.querySelectorAll('.card-wrapper');
        cards.forEach(card => {
            const video = card.querySelector('.animal-video'); 
            
            card.addEventListener('mouseenter', () => {
                if (video) video.play();
            });
            
            card.addEventListener('mouseleave', () => {
                if (video) {
                    video.pause();
                    video.currentTime = 0; 
                }
            });
        });
    };

    renderCards();
});