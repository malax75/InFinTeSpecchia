// UI MANAGER - IN FIN TE SPECCHIA PARTE 1/2
// SOSTITUISCI TUTTO IL FILE ui-manager.js CON PARTE 1 + PARTE 2

class UIManager {
    constructor() {
        this.gameInstance = null;
        this.currentModal = null;
        this.characterCreated = false;
        this.rerollsRemaining = 3;
        this.initializeEventListeners();
    }

    setGameInstance(gameInstance) {
        this.gameInstance = gameInstance;
    }

    initializeEventListeners() {
        document.addEventListener('DOMContentLoaded', () => {
            this.setupModalButtons();
        });
    }

    setupModalButtons() {
        document.addEventListener('click', (e) => {
            if (e.target.id === 'close-modal') {
                this.hideModal();
            }
        });
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

        console.log('🎮 Avventura iniziata con:', this.gameInstance.player.name);
        this.gameInstance.showParagraph(1);
    }

    // ===== CREAZIONE PERSONAGGIO =====
    showCharacterCreation() {
        const stats = this.generateRandomStats();
        const epithet = this.getEpithet(stats);

        this.tempStats = stats;
        
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
                    <button id="reroll-stats" class="choice-button" 
                            ${this.rerollsRemaining <= 0 ? 'disabled style="opacity:0.5; cursor:not-allowed;"' : ''}>
                        🔄 Rigenera Statistiche
                    </button>
                    <button id="accept-character" class="choice-button">
                        ✅ Accetta e Inizia
                    </button>
                </div>
            </div>
        `;

        this.showModal(modalContent);

        // Event listeners per i pulsanti
        setTimeout(() => {
            const rerollBtn = document.getElementById('reroll-stats');
            const acceptBtn = document.getElementById('accept-character');

            if (rerollBtn) {
                rerollBtn.onclick = () => this.rerollCharacter();
            }
            if (acceptBtn) {
                acceptBtn.onclick = () => this.acceptCharacter();
            }
        }, 100);
    }

    generateRandomStats() {
        return {
            empatia: Math.floor(Math.random() * 9) + 6,
            forza: Math.floor(Math.random() * 9) + 6,
            agilita: Math.floor(Math.random() * 9) + 6,
            saggezza: Math.floor(Math.random() * 9) + 6,
            astuzia: Math.floor(Math.random() * 9) + 6
        };
    }

    getEpithet(stats) {
        const maxStat = Object.keys(stats).reduce((a, b) => stats[a] > stats[b] ? a : b);
        const epithets = {
            'empatia': 'il Compassionevole',
            'forza': 'il Vigoroso',
            'agilita': 'il Veloce',
            'saggezza': 'il Saggio',
            'astuzia': "l'Astuto"
        };
        return epithets[maxStat];
    }

    rerollCharacter() {
        if (this.rerollsRemaining <= 0) {
            this.showMessage('❌ Nessuna rigenerazione rimasta!', 'error');
            return;
        }

        this.rerollsRemaining--;
        this.showCharacterCreation();
    }

    acceptCharacter() {
        if (!this.gameInstance) {
            alert('Errore: Game non inizializzato!');
            return;
        }

        this.gameInstance.player = new Character(this.tempStats);
        this.characterCreated = true;
        this.enableStartButton();
        this.disableCreateButton();
        
        this.hideModal();
        this.startAdventure();
    }

    enableStartButton() {
        const startBtn = document.getElementById('start-adventure-btn');
        const statusDiv = document.getElementById('game-status');
        
        if (startBtn) {
            startBtn.disabled = false;
            startBtn.style.opacity = '1';
            startBtn.style.cursor = 'pointer';
        }
        
        if (statusDiv) {
            statusDiv.innerHTML = '🎮 Pronto per l\'avventura!';
            statusDiv.style.color = 'var(--accent-emerald)';
        }
    }

    disableCreateButton() {
        const createBtn = document.querySelector('button[onclick="showCharacterCreation()"]');
        if (createBtn) {
            createBtn.disabled = true;
            createBtn.style.opacity = '0.5';
            createBtn.style.cursor = 'not-allowed';
            createBtn.textContent = '✅ Personaggio Creato';
        }
    }

    // ===== MODALE =====
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

    // ===== GESTIONE SCHERMATE =====
    showGameScreen() {
        const storyContent = document.getElementById('story-content');
        if (storyContent) {
            const loadingMsg = storyContent.querySelector('.loading-message');
            if (loadingMsg) {
                loadingMsg.style.display = 'none';
            }
        }
        console.log('🎮 Schermata di gioco visualizzata');
    }

    // ===== MESSAGGI (METODO DELLA CLASSE) =====
    showMessage(message, type = 'info') {
        const messageEl = document.createElement('div');
        messageEl.className = `temp-message ${type}`;
        messageEl.textContent = message;
        messageEl.style.cssText = `
            position: fixed; top: 20px; right: 20px; z-index: 999;
            background: var(--background-dark); color: var(--text-warm);
            border: 2px solid var(--primary-gold); border-radius: 8px;
            padding: 15px; max-width: 300px; opacity: 0;
            transition: opacity 0.3s ease;
        `;
        
        if (type === 'error') messageEl.style.borderColor = 'var(--accent-ruby)';
        if (type === 'success') messageEl.style.borderColor = 'var(--accent-emerald)';
        if (type === 'warning') messageEl.style.borderColor = 'var(--secondary-bronze)';
        if (type === 'milestone') {
            messageEl.style.borderColor = 'var(--primary-gold)';
            messageEl.style.fontSize = '1.1rem';
            messageEl.style.fontWeight = 'bold';
        }
        
        document.body.appendChild(messageEl);
        
        setTimeout(() => messageEl.style.opacity = '1', 10);
        setTimeout(() => {
            messageEl.style.opacity = '0';
            setTimeout(() => messageEl.remove(), 300);
        }, type === 'milestone' ? 5000 : 3000);
    }

    // ===== PARAGRAFI E SCELTE =====
    showParagraph(content, gameState) {
        const storyContent = document.getElementById('story-content');
        if (storyContent) {
            storyContent.innerHTML = `
                <h2>${content.title || 'Continua la tua avventura'}</h2>
                <div class="story-text">${content.content}</div>
            `;
        }
        
        this.showChoices(content.choices || []);
    }

    showChoices(choices) {
        const choicesContainer = document.getElementById('choices');
        if (choicesContainer && choices.length > 0) {
            choicesContainer.innerHTML = choices.map((choice, index) => 
                `<button class="choice-button" onclick="makeChoice(${index})">
                    ${choice.text}
                </button>`
            ).join('');
        }
    }

    showChoicesOnly(paragraphId, gameState) {
        const paragraph = this.gameInstance.storyData[paragraphId];
        if (paragraph && paragraph.choices) {
            this.showChoices(paragraph.choices);
        }
    }

    // ===== TEST ABILITÀ =====
    showTestResult(result) {
        const testResult = document.getElementById('test-result');
        if (!testResult) return;

        const resultClass = result.success ? 'success' : 'failure';
        const resultText = result.success ? '✅ SUCCESSO!' : '❌ FALLIMENTO!';
        
        testResult.className = `test-result ${resultClass}`;
        testResult.style.display = 'block';
        
        document.getElementById('test-description').textContent = result.description;
        document.getElementById('test-details').textContent = 
            `🎲 Dado: ${result.roll} | 📊 ${result.stat}: ${result.statValue} | ⭐ Bonus: ${result.maturitaBonus}`;
        document.getElementById('test-outcome').innerHTML = 
            `<strong>Totale: ${result.total} vs Difficoltà: ${result.difficulty}</strong><br>${resultText}`;

        setTimeout(() => {
            testResult.style.display = 'none';
        }, 4000);
    }

    // ===== PULSANTE SALVATAGGIO =====
    showSaveButton() {
        if (document.getElementById('save-game-btn')) return;
        
        const sidebar = document.querySelector('.sidebar');
        if (!sidebar) return;
        
        const saveBtn = document.createElement('button');
        saveBtn.id = 'save-game-btn';
        saveBtn.className = 'sidebar-btn save-btn';
        saveBtn.innerHTML = '💾 Salva';
        saveBtn.onclick = () => {
            if (window.game) {
                window.game.saveGame();
            }
        };
        
        sidebar.insertBefore(saveBtn, sidebar.firstChild);
    }

    hideSaveButton() {
        const saveBtn = document.getElementById('save-game-btn');
        if (saveBtn) saveBtn.remove();
    }

    updateAllDisplays(player, gameState) {
        const vitaBar = document.getElementById('vita-fill');
        const vitaText = document.getElementById('vita-text');
        const maturitaStars = document.getElementById('maturita-stars');
        
        if (vitaBar && vitaText) {
            const vitaPercent = (player.vita / player.maxVita) * 100;
            vitaBar.style.width = vitaPercent + '%';
            vitaText.textContent = `${player.vita}/${player.maxVita}`;
        }
        
        if (maturitaStars) {
            let stars = '';
            for (let i = 0; i < 10; i++) {
                stars += i < player.maturita ? '⭐' : '☆';
            }
            maturitaStars.textContent = stars;
        }
        
        console.log('🔄 UI aggiornata dopo caricamento');
    }

    // UI MANAGER PARTE 2/2 - INCOLLA DOPO LA PARTE 1

    // ===== STATS, GEMME, INVENTARIO, RELAZIONI =====
    showStats() {
        if (!this.gameInstance || !this.gameInstance.player) {
            this.showCharacterCreation();
            return;
        }

        const player = this.gameInstance.player;
        const modalContent = `
            <div class="stats-display">
                <h2>📊 Statistiche di ${player.name} ${player.appellativo}</h2>
                
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
                        <span class="vital-value">${player.vita}/${player.maxVita}</span>
                    </div>
                    <div class="vital-item">
                        <span class="vital-name">⭐ Maturità Emotiva:</span>
                        <span class="vital-value">${player.maturita}/10 ${player.getMaturitaStars()}</span>
                    </div>
                </div>

                <button id="close-modal" class="choice-button">Chiudi</button>
            </div>
        `;

        this.showModal(modalContent);
    }

    showGems() {
        if (!this.gameInstance || !this.gameInstance.player) {
            alert('Crea prima un personaggio!');
            return;
        }

        const gemme = this.gameInstance.player.inventario.gemme;
        
        const modalContent = `
            <div class="gems-display">
                <h2>💎 Raccolta Gemme</h2>
                
                ${gemme.length === 0 ? `
                    <div style="text-align: center; padding: 40px;">
                        <div style="font-size: 4rem;">💎</div>
                        <h3>Nessuna Gemma Raccolta</h3>
                        <p><em>Le gemme sono il potere dei regni di Limb...</em></p>
                    </div>
                ` : `
                    <div class="gems-grid">
                        ${gemme.map(gem => `
                            <div class="gem-item">
                                💎 <strong>${gem}</strong>
                            </div>
                        `).join('')}
                    </div>
                    <p style="text-align: center; margin-top: 20px;">
                        <strong>Gemme raccolte: ${gemme.length}/8</strong>
                    </p>
                `}

                <button id="close-modal" class="choice-button">Chiudi</button>
            </div>
        `;

        this.showModal(modalContent);
    }

    showInventory() {
        if (!this.gameInstance || !this.gameInstance.player) {
            alert('Crea prima un personaggio!');
            return;
        }

        const player = this.gameInstance.player;
        const inventario = player.inventario;
        
        const totalItems = inventario.oggetti.length + inventario.armi.length + inventario.speciali.length;
        
        let modalContent;
        
        if (totalItems === 0) {
            modalContent = `
                <div class="inventory-display">
                    <h2>🎒 Inventario</h2>
                    
                    <div style="text-align: center; padding: 40px;">
                        <div style="font-size: 4rem;">🎒</div>
                        <h3>Inventario Vuoto</h3>
                        <p><em>I tuoi averi sono pochi, ma il cuore è ricco di speranze...</em></p>
                    </div>

                    <button id="close-modal" class="choice-button">Chiudi</button>
                </div>
            `;
        } else {
            modalContent = `
                <div class="inventory-display">
                    <h2>🎒 Inventario</h2>
                    
                    <div style="text-align: center; margin-bottom: 20px;">
                        <p><strong>Oggetti posseduti: ${totalItems}</strong></p>
                    </div>
                    
                    ${inventario.oggetti.length > 0 ? `
                        <div style="margin-bottom: 15px;">
                            <h3>🛍️ Oggetti Comuni</h3>
                            ${inventario.oggetti.map(item => `
                                <div style="padding: 5px 0; border-bottom: 1px solid var(--border-medieval);">
                                    📦 ${item}
                                </div>
                            `).join('')}
                        </div>
                    ` : ''}
                    
                    ${inventario.armi.length > 0 ? `
                        <div style="margin-bottom: 15px;">
                            <h3>⚔️ Armi ed Equipaggiamento</h3>
                            ${inventario.armi.map(item => `
                                <div style="padding: 5px 0; border-bottom: 1px solid var(--border-medieval);">
                                    ⚔️ ${item}
                                </div>
                            `).join('')}
                        </div>
                    ` : ''}
                    
                    ${inventario.speciali.length > 0 ? `
                        <div style="margin-bottom: 15px;">
                            <h3>✨ Oggetti Speciali</h3>
                            ${inventario.speciali.map(item => `
                                <div style="padding: 5px 0; border-bottom: 1px solid var(--border-medieval);">
                                    ✨ ${item}
                                </div>
                            `).join('')}
                        </div>
                    ` : ''}

                    <button id="close-modal" class="choice-button">Chiudi</button>
                </div>
            `;
        }

        this.showModal(modalContent);
    }
    
    showRelationships() {
        if (!this.gameInstance || !this.gameInstance.player) {
            alert('Crea prima un personaggio!');
            return;
        }

        const gameState = this.gameInstance.gameState;
        if (!gameState.relationships) {
            gameState.relationships = {};
        }

        const modalContent = `
            <div class="relationships-display">
                <h2>🤝 Relazioni</h2>
                
                <div class="relationships-grid">
                    ${Object.entries(gameState.relationships).map(([name, value]) => `
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
                    <p><span style="color: var(--accent-ruby);">━━</span> Nemico (-5 a -3) | 
                       <span style="color: var(--text-warm);">━━</span> Neutrale (-2 a +2) | 
                       <span style="color: var(--accent-emerald);">━━</span> Alleato (+3 a +5)</p>
                </div>

                <button id="close-modal" class="choice-button">Chiudi</button>
            </div>
        `;

        this.showModal(modalContent);
    }

    getCharacterIcon(name) {
        const icons = {
            'neiano': '👨‍🦳',
            'crise': '🧙‍♂️',
            'mesis': '🤝',
            'erhon': '🌙',
            'ago': '👦',
            'ouch': '🐉',
            'quilian': '🦅'
        };
        return icons[name.toLowerCase()] || '👤';
    }

    getRelationshipClass(value) {
        if (value <= -3) return 'enemy';
        if (value >= 3) return 'friend';
        return 'neutral';
    }

    // ===== AGGIORNAMENTI UI =====
    updateAllDisplays(player, gameState) {
        if (player) {
            const vitaText = document.getElementById('vita-text');
            if (vitaText) {
                vitaText.textContent = `❤️ Vita: ${player.vita}/${player.maxVita}`;
            }
            
            const maturitaText = document.getElementById('maturita-text');
            if (maturitaText) {
                maturitaText.innerHTML = `⭐ Maturità: ${player.getMaturitaStars()}`;
            }
        }
    }

    showGameOver() {
        this.showModal(`
            <div style="text-align: center;">
                <h2>💀 Game Over</h2>
                <p>Il viaggio di Trejano si conclude qui...</p>
                <p>Ma ogni fine è un nuovo inizio.</p>
                <button class="choice-button" onclick="location.reload()">
                    🔄 Ricomincia l'Avventura
                </button>
            </div>
        `);
    }
}

// Esporta globalmente
window.UIManager = UIManager;

// ===== INIZIALIZZAZIONE UI =====
let ui;

document.addEventListener('DOMContentLoaded', function() {
    ui = new UIManager();
    window.ui = ui;
    console.log('🎨 UI Manager caricato');
});
