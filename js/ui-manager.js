class UIManager {
    constructor() {
        this.gameInstance = null; // Riferimento al game
        this.currentModal = null;
        this.characterCreated = false;
        this.rerollsRemaining = 3;
        this.initializeEventListeners();
    }

    // Metodo per collegare il game instance
    setGameInstance(gameInstance) {
        this.gameInstance = gameInstance;
    }

    initializeEventListeners() {
        // Event listeners per i pulsanti principali
        document.addEventListener('DOMContentLoaded', () => {
            this.setupMainMenuButtons();
            this.setupModalButtons();
        });
    }

    setupMainMenuButtons() {
        const startBtn = document.getElementById('start-adventure');
        const createBtn = document.getElementById('create-character');
        const loadBtn = document.getElementById('load-game');
        const statsBtn = document.getElementById('view-stats');
        const gemsBtn = document.getElementById('view-gems');
        const relBtn = document.getElementById('view-relationships');

        if (startBtn) startBtn.onclick = () => this.startAdventure();
        if (createBtn) createBtn.onclick = () => this.showCharacterCreation();
        if (loadBtn) loadBtn.onclick = () => this.loadGame();
        if (statsBtn) statsBtn.onclick = () => this.showStats();
        if (gemsBtn) gemsBtn.onclick = () => this.showGems();
        if (relBtn) relBtn.onclick = () => this.showRelationships();
    }

    setupModalButtons() {
        // Setup dinamico dei pulsanti modal
        document.addEventListener('click', (e) => {
            if (e.target.id === 'close-modal') {
                this.hideModal();
            }
        });
    }

    showMainMenu() {
        document.getElementById('main-menu').style.display = 'block';
        document.getElementById('game-interface').style.display = 'none';
        this.hideModal();
    }

    startAdventure() {
        if (!this.gameInstance) {
            alert('Errore: Game non inizializzato!');
            return;
        }

        if (!this.gameInstance.player || !this.gameInstance.player.stats) {
            this.showCharacterCreation();
            return;
        }

        document.getElementById('main-menu').style.display = 'none';
        document.getElementById('game-interface').style.display = 'block';
        this.gameInstance.startGame();
    }

    showCharacterCreation() {
        // Generate random stats
        const stats = this.generateRandomStats();
        const epithet = this.getEpithet(stats);
        
        const modalContent = `
            <div class="character-creation">
                <h2>🎭 Crea il tuo Trejano</h2>
                
                <div class="stats-container">
                    <h3>📊 Statistiche Generate:</h3>
                    <div class="stats-grid">
                        <div class="stat-item">
                            <span class="stat-name">💝 Empatia:</span>
                            <span class="stat-value">${stats.empatia}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-name">💪 Forza:</span>
                            <span class="stat-value">${stats.forza}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-name">🏃 Agilità:</span>
                            <span class="stat-value">${stats.agilita}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-name">🧠 Saggezza:</span>
                            <span class="stat-value">${stats.saggezza}</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-name">🎯 Astuzia:</span>
                            <span class="stat-value">${stats.astuzia}</span>
                        </div>
                    </div>
                </div>

                <div class="epithet-container">
                    <h3>👑 Il tuo Appellativo:</h3>
                    <div class="epithet-display">
                        <strong>"Trejano ${epithet}"</strong>
                    </div>
                </div>

                <div class="reroll-info">
                    <p class="reroll-counter">
                        ${this.rerollsRemaining > 1 ? 
                            `🎲 ${this.rerollsRemaining} rigenerazioni rimanenti` : 
                            this.rerollsRemaining === 1 ? 
                                `⚠️ ULTIMA rigenerazione disponibile!` : 
                                `❌ Nessuna rigenerazione rimanente`
                        }
                    </p>
                </div>

                <div class="character-actions">
                    <button id="reroll-stats" class="btn btn-secondary" 
                            ${this.rerollsRemaining <= 0 ? 'disabled' : ''}>
                        🎲 Rigenera Statistiche
                    </button>
                    <button id="accept-character" class="btn btn-primary">
                        ✅ Accetta Personaggio
                    </button>
                    <button id="back-menu" class="btn btn-secondary">
                        ↩️ Torna al Menu
                    </button>
                </div>
            </div>
        `;

        this.showModal(modalContent);
        
        // Store current stats temporarily
        this.tempStats = stats;
        
        // Setup button events
        document.getElementById('reroll-stats').onclick = () => this.rerollStats();
        document.getElementById('accept-character').onclick = () => this.acceptCharacter();
        document.getElementById('back-menu').onclick = () => this.hideModal();
    }

    generateRandomStats() {
        return {
            empatia: Math.floor(Math.random() * 9) + 6,    // 6-14
            forza: Math.floor(Math.random() * 9) + 6,      // 6-14
            agilita: Math.floor(Math.random() * 9) + 6,    // 6-14
            saggezza: Math.floor(Math.random() * 9) + 6,   // 6-14
            astuzia: Math.floor(Math.random() * 9) + 6     // 6-14
        };
    }

    getEpithet(stats) {
        // Find highest stat for epithet
        const maxStat = Math.max(stats.empatia, stats.forza, stats.agilita, stats.saggezza, stats.astuzia);
        
        if (stats.empatia === maxStat) return "il Compassionevole";
        if (stats.forza === maxStat) return "il Forte";
        if (stats.agilita === maxStat) return "il Veloce";
        if (stats.saggezza === maxStat) return "il Saggio";
        if (stats.astuzia === maxStat) return "l'Astuto";
        
        return "il Bilanciato"; // fallback
    }

    rerollStats() {
        if (this.rerollsRemaining <= 0) return;
        
        this.rerollsRemaining--;
        this.showCharacterCreation(); // Regenerate with new stats
    }

    acceptCharacter() {
        console.log("acceptCharacter chiamato");
        console.log("gameInstance:", this.gameInstance);
        
        if (!this.gameInstance) {
            console.error("Game instance non trovato!");
            alert('Errore: Game non inizializzato! Ricarica la pagina.');
            return;
        }

        console.log("tempStats:", this.tempStats);
        
        // Create character with the temporary stats
        this.gameInstance.player = new Character(this.tempStats);
        this.characterCreated = true;
        
        console.log("Personaggio creato:", this.gameInstance.player);
        
        // Hide modal and start game
        this.hideModal();
        this.startAdventure();
    }

    showModal(content) {
        const modal = document.getElementById('modal');
        const modalContent = document.getElementById('modal-content');
        
        modalContent.innerHTML = content;
        modal.style.display = 'flex';
        this.currentModal = modal;
    }

    hideModal() {
        const modal = document.getElementById('modal');
        if (modal) {
            modal.style.display = 'none';
        }
        this.currentModal = null;
    }

    showStats() {
        if (!this.gameInstance || !this.gameInstance.player) {
            this.showCharacterCreation();
            return;
        }

        const player = this.gameInstance.player;
        const modalContent = `
            <div class="stats-display">
                <h2>📊 Statistiche di Trejano</h2>
                
                <div class="stats-grid">
                    <div class="stat-item">
                        <span class="stat-name">💝 Empatia:</span>
                        <span class="stat-value">${player.stats.empatia}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-name">💪 Forza:</span>
                        <span class="stat-value">${player.stats.forza}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-name">🏃 Agilità:</span>
                        <span class="stat-value">${player.stats.agilita}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-name">🧠 Saggezza:</span>
                        <span class="stat-value">${player.stats.saggezza}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-name">🎯 Astuzia:</span>
                        <span class="stat-value">${player.stats.astuzia}</span>
                    </div>
                </div>

                <div class="vital-stats">
                    <div class="vital-item">
                        <span class="vital-name">❤️ Punti Vita:</span>
                        <span class="vital-value">${player.vita}/${player.vitaMax}</span>
                    </div>
                    <div class="vital-item">
                        <span class="vital-name">⭐ Maturità Emotiva:</span>
                        <span class="vital-value">${player.maturita}/10</span>
                    </div>
                </div>

                <button id="close-modal" class="btn btn-primary">Chiudi</button>
            </div>
        `;

        this.showModal(modalContent);
    }

    showGems() {
        if (!this.gameInstance || !this.gameInstance.player) {
            alert('Crea prima un personaggio!');
            return;
        }

        const player = this.gameInstance.player;
        const modalContent = `
            <div class="gems-display">
                <h2>💎 Raccolta Gemme</h2>
                
                <div class="gems-grid">
                    <div class="gem-item ${player.gems.perla ? 'obtained' : 'missing'}">
                        <span class="gem-icon">⚪</span>
                        <span class="gem-name">Perla di Akoia</span>
                        <span class="gem-status">${player.gems.perla ? '✓' : '?'}</span>
                    </div>
                    <div class="gem-item ${player.gems.ametista ? 'obtained' : 'missing'}">
                        <span class="gem-icon">🟣</span>
                        <span class="gem-name">Ametista di Mechrios</span>
                        <span class="gem-status">${player.gems.ametista ? '✓' : '?'}</span>
                    </div>
                    <div class="gem-item ${player.gems.rubino ? 'obtained' : 'missing'}">
                        <span class="gem-icon">🔴</span>
                        <span class="gem-name">Rubino del Fuoco</span>
                        <span class="gem-status">${player.gems.rubino ? '✓' : '?'}</span>
                    </div>
                    <div class="gem-item ${player.gems.zaffiro ? 'obtained' : 'missing'}">
                        <span class="gem-icon">🔵</span>
                        <span class="gem-name">Zaffiro dell'Acqua</span>
                        <span class="gem-status">${player.gems.zaffiro ? '✓' : '?'}</span>
                    </div>
                    <div class="gem-item ${player.gems.smeraldo ? 'obtained' : 'missing'}">
                        <span class="gem-icon">🟢</span>
                        <span class="gem-name">Smeraldo della Terra</span>
                        <span class="gem-status">${player.gems.smeraldo ? '✓' : '?'}</span>
                    </div>
                    <div class="gem-item ${player.gems.topazio ? 'obtained' : 'missing'}">
                        <span class="gem-icon">🟡</span>
                        <span class="gem-name">Topazio dell'Aria</span>
                        <span class="gem-status">${player.gems.topazio ? '✓' : '?'}</span>
                    </div>
                    <div class="gem-item ${player.gems.acquamarina ? 'obtained' : 'missing'}">
                        <span class="gem-icon">🔷</span>
                        <span class="gem-name">Acquamarina</span>
                        <span class="gem-status">${player.gems.acquamarina ? '✓' : '?'}</span>
                    </div>
                    <div class="gem-item ${player.gems.lapislazzulo ? 'obtained' : 'missing'}">
                        <span class="gem-icon">💙</span>
                        <span class="gem-name">Lapislazzulo</span>
                        <span class="gem-status">${player.gems.lapislazzulo ? '✓' : '?'}</span>
                    </div>
                </div>

                <div class="gems-progress">
                    <p>Gemme raccolte: ${Object.values(player.gems).filter(Boolean).length}/8</p>
                </div>

                <button id="close-modal" class="btn btn-primary">Chiudi</button>
            </div>
        `;

        this.showModal(modalContent);
    }

    showRelationships() {
        if (!this.gameInstance || !this.gameInstance.player) {
            alert('Crea prima un personaggio!');
            return;
        }

        const player = this.gameInstance.player;
        const modalContent = `
            <div class="relationships-display">
                <h2>🤝 Relazioni</h2>
                
                <div class="relationships-grid">
                    ${Object.entries(player.relationships).map(([name, value]) => `
                        <div class="relationship-item">
                            <span class="char-name">${this.getCharacterIcon(name)} ${name}</span>
                            <div class="relationship-bar">
                                <div class="bar-background">
                                    <div class="bar-fill ${this.getRelationshipClass(value)}" 
                                         style="width: ${((value + 5) / 10) * 100}%"></div>
                                </div>
                                <span class="relationship-value">${value > 0 ? '+' : ''}${value}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>

                <div class="relationship-legend">
                    <p><span class="enemy">━━</span> Nemico (-5 a -3) | 
                       <span class="neutral">━━</span> Neutrale (-2 a +2) | 
                       <span class="friend">━━</span> Alleato (+3 a +5)</p>
                </div>

                <button id="close-modal" class="btn btn-primary">Chiudi</button>
            </div>
        `;

        this.showModal(modalContent);
    }

    getCharacterIcon(name) {
        const icons = {
            'Neiano': '👨‍🦳',
            'Crise': '🧙‍♂️',
            'Mesis': '🤝',
            'Erhon': '🌙',
            'Ago': '👦',
            'Ouch': '🐉',
            'Quilian': '🦅'
        };
        return icons[name] || '👤';
    }

    getRelationshipClass(value) {
        if (value <= -3) return 'enemy';
        if (value >= 3) return 'friend';
        return 'neutral';
    }

    updateUI() {
        if (!this.gameInstance || !this.gameInstance.player) return;

        const player = this.gameInstance.player;
        
        // Update vita bar
        const vitaBar = document.querySelector('.vita-fill');
        const vitaText = document.querySelector('.vita-text');
        if (vitaBar && vitaText) {
            const vitaPercent = (player.vita / player.vitaMax) * 100;
            vitaBar.style.width = vitaPercent + '%';
            vitaText.textContent = `${player.vita}/${player.vitaMax}`;
        }

        // Update maturità
        const maturitaStars = document.querySelector('.maturita-stars');
        if (maturitaStars) {
            let starsHTML = '';
            for (let i = 0; i < 10; i++) {
                starsHTML += i < player.maturita ? '⭐' : '☆';
            }
            maturitaStars.innerHTML = starsHTML;
        }
    }

    loadGame() {
        alert('Funzione di caricamento non ancora implementata!');
    }

    // Utility per i test di abilità
    showRollResult(result) {
        const resultClass = result.success ? 'success' : 'failure';
        const resultText = result.success ? 'SUCCESSO!' : 'FALLIMENTO!';
        
        const resultHTML = `
            <div class="roll-result ${resultClass}">
                <h3>${resultText}</h3>
                <p>Lancio: ${result.roll} + Abilità: ${result.total - result.roll} = <strong>${result.total}</strong></p>
                <p>${result.description}</p>
            </div>
        `;
        
        // Mostra temporaneamente il risultato
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = resultHTML;
        tempDiv.style.position = 'fixed';
        tempDiv.style.top = '50%';
        tempDiv.style.left = '50%';
        tempDiv.style.transform = 'translate(-50%, -50%)';
        tempDiv.style.zIndex = '9999';
        tempDiv.style.backgroundColor = 'rgba(0,0,0,0.9)';
        tempDiv.style.color = 'white';
        tempDiv.style.padding = '20px';
        tempDiv.style.borderRadius = '10px';
        
        document.body.appendChild(tempDiv);
        
        setTimeout(() => {
            document.body.removeChild(tempDiv);
        }, 3000);
    }
}

// Global function per facilitare i test
function doAccept() {
    if (window.ui) {
        window.ui.acceptCharacter();
    } else {
        console.error("UI Manager non trovato!");
    }
}
