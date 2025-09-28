 // UI MANAGER - IN FIN TE SPECCHIA  
// Versione corretta con collegamenti funzionanti

class UIManager {
    constructor() {
        this.elements = {
            storyContent: document.getElementById('story-content'),
            choices: document.getElementById('choices'),
            vitaText: document.getElementById('vita-text'),
            maturitaText: document.getElementById('maturita-text'),
            testResult: document.getElementById('test-result'),
            testDescription: document.getElementById('test-description'),
            testDetails: document.getElementById('test-details'),
            testOutcome: document.getElementById('test-outcome')
        };
        
        this.currentModal = null;
        console.log('🎨 UI Manager inizializzato');
    }

    // ===== DISPLAY PARAGRAFI =====
    showParagraph(paragraph, gameState) {
        this.hideTestResult();
        
        this.fadeOut(this.elements.storyContent, () => {
            this.elements.storyContent.innerHTML = `
                <h2>${paragraph.title || 'Capitolo'}</h2>
                <div class="story-text">${paragraph.content}</div>
            `;
            
            this.generateChoices(paragraph, gameState);
            this.fadeIn(this.elements.storyContent);
        });
    }
    
    showChoicesOnly(paragraphId, gameState) {
        const paragraph = window.game.storyData.getParagraph(paragraphId);
        if (paragraph) {
            this.generateChoices(paragraph, gameState);
        }
    }

    generateChoices(paragraph, gameState) {
        if (!paragraph.choices || paragraph.choices.length === 0) {
            this.elements.choices.innerHTML = `
                <button class="choice-button" onclick="game.showParagraph(${paragraph.nextParagraph || 1})">
                    ▶️ Continua
                </button>
            `;
            return;
        }

        let choicesHTML = '';
        paragraph.choices.forEach((choice, index) => {
            if (this.isChoiceAvailable(choice, gameState)) {
                const requirementText = this.getChoiceRequirementText(choice);
                choicesHTML += `
                    <button class="choice-button" onclick="game.makeChoice(${index}, ${paragraph.id})">
                        ${choice.text}
                        ${requirementText}
                    </button>
                `;
            }
        });

        this.elements.choices.innerHTML = choicesHTML;
    }
    
    isChoiceAvailable(choice, gameState) {
        if (!choice.requirements) return true;
        
        const req = choice.requirements;
        
        if (req.stats) {
            for (const [stat, minValue] of Object.entries(req.stats)) {
                if (window.game.player.stats[stat] < minValue) {
                    return false;
                }
            }
        }
        
        if (req.maturita && window.game.player.maturita < req.maturita) {
            return false;
        }
        
        if (req.flags) {
            for (const [flag, value] of Object.entries(req.flags)) {
                if (gameState.flags[flag] !== value) {
                    return false;
                }
            }
        }
        
        return true;
    }
    
    getChoiceRequirementText(choice) {
        if (!choice.requirements) return '';
        
        const req = choice.requirements;
        let reqText = '';
        
        if (req.stats) {
            const statReqs = Object.entries(req.stats)
                .map(([stat, min]) => `${stat.charAt(0).toUpperCase() + stat.slice(1)} ${min}+`)
                .join(', ');
            reqText += ` <small style="color: var(--accent-sapphire);">[${statReqs}]</small>`;
        }
        
        if (req.maturita) {
            reqText += ` <small style="color: var(--primary-gold);">[Maturità ${req.maturita}+]</small>`;
        }
        
        return reqText;
    }

    // ===== DISPLAY TEST ABILITÀ =====
    showTestResult(result) {
        this.elements.testDescription.textContent = result.description;
        
        this.elements.testDetails.innerHTML = `
            <div style="display: flex; justify-content: space-around; margin: 10px 0;">
                <span>📊 ${result.stat.charAt(0).toUpperCase() + result.stat.slice(1)}: ${result.statValue}</span>
                <span>🎲 Dado: ${result.roll}</span>
                <span>⭐ Bonus: +${result.maturitaBonus}</span>
            </div>
            <div style="font-size: 1.2rem; font-weight: bold;">
                Totale: ${result.total} vs Difficoltà: ${result.difficulty}
            </div>
        `;
        
        this.elements.testOutcome.innerHTML = result.success 
            ? '<span style="color: var(--accent-emerald);">🎉 SUCCESSO!</span>'
            : '<span style="color: var(--accent-ruby);">💥 FALLIMENTO!</span>';
        
        this.elements.testResult.className = `test-result ${result.success ? 'success' : 'failure'}`;
        this.elements.testResult.style.display = 'block';
        
        setTimeout(() => this.hideTestResult(), 5000);
    }
    
    hideTestResult() {
        this.elements.testResult.style.display = 'none';
    }

    // ===== AGGIORNAMENTI STATUS =====
    updateAllDisplays(player, gameState) {
        this.updateVitaDisplay(player);
        this.updateMaturitaDisplay(player);
    }
    
    updateVitaDisplay(player) {
        const percentage = (player.vita / player.maxVita) * 100;
        let colorEmoji = '❤️';
        
        if (percentage <= 30) colorEmoji = '💔';
        else if (percentage <= 60) colorEmoji = '🧡';
        
        this.elements.vitaText.textContent = `${colorEmoji} Vita: ${player.vita}/${player.maxVita}`;
    }
    
    updateMaturitaDisplay(player) {
        const stars = player.getMaturitaStars();
        this.elements.maturitaText.innerHTML = `⭐ Maturità: ${stars}`;
    }

    // ===== MODALI =====
    showStats() {
        if (!window.game.player) return;
        
        const player = window.game.player;
        const desc = player.getFullDescription();
        
        const statsHTML = desc.stats.map(stat => `
            <div style="display: flex; justify-content: space-between; margin: 5px 0;">
                <span>${stat.name}:</span>
                <span>${stat.value} <small>(${stat.level})</small></span>
            </div>
        `).join('');
        
        this.showModal('📊 Statistiche Personaggio', `
            <div style="text-align: center; margin-bottom: 15px;">
                <h3>${desc.name}</h3>
                <p>Vita: ${desc.vita} | Maturità: ${player.maturita}/10</p>
            </div>
            <div style="background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px;">
                ${statsHTML}
            </div>
        `);
    }
    
    showGems() {
        if (!window.game.player) return;
        
        const gemme = window.game.player.inventario.gemme;
        const gemmeConosciute = [
            { nome: 'Perla di Akoia', emoji: '⚪🤍', posseduta: gemme.includes('Perla di Akoia') },
            { nome: 'Ametista di Mechrios', emoji: '♦️🟣', posseduta: gemme.includes('Ametista di Mechrios') },
            { nome: 'Rubino di Reudhos', emoji: '♦️🔴', posseduta: gemme.includes('Rubino di Reudhos') },
            { nome: 'Smeraldo di Saar', emoji: '♦️🟢', posseduta: gemme.includes('Smeraldo di Saar') },
            { nome: 'Zaffiro dei Cieli', emoji: '♦️🔵', posseduta: gemme.includes('Zaffiro dei Cieli') },
            { nome: 'Topazio del Sole', emoji: '♦️🟡', posseduta: gemme.includes('Topazio del Sole') },
            { nome: 'Acquamarina', emoji: '♦️🔷', posseduta: gemme.includes('Acquamarina') },
            { nome: 'Misteriosa', emoji: '❓⚪', posseduta: gemme.includes('Pietra bianca misteriosa') }
        ];
        
        const gemHTML = gemmeConosciute.map(gem => `
            <div style="display: flex; justify-content: space-between; align-items: center; margin: 8px 0;">
                <span>${gem.emoji} ${gem.nome}</span>
                <span>${gem.posseduta ? '✅' : '❓'}</span>
            </div>
        `).join('');
        
        this.showModal('💎 Raccolta Gemme', `
            <div style="background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px;">
                ${gemHTML}
            </div>
            <p style="text-align: center; margin-top: 15px;">
                <strong>Raccolte: ${gemme.length}/8</strong>
            </p>
        `);
    }
    
    showRelationships() {
        if (!window.game.gameState) return;
        
        const relationships = window.game.gameState.relationships;
        const relHTML = Object.entries(relationships).map(([npc, value]) => {
            const emoji = this.getRelationshipEmoji(value);
            const description = this.getRelationshipDescription(value);
            const barFill = Math.round(((value + 5) / 10) * 10);
            const bar = '━'.repeat(Math.max(0, barFill)) + '●' + '━'.repeat(Math.max(0, 10 - barFill));
            
            return `
                <div style="margin: 10px 0;">
                    <div style="display: flex; justify-content: space-between;">
                        <span>${emoji} ${npc.charAt(0).toUpperCase() + npc.slice(1)}</span>
                        <span>${description}</span>
                    </div>
                    <div style="font-family: monospace; color: var(--primary-gold);">
                        ${bar} (${value})
                    </div>
                </div>
            `;
        }).join('');
        
        this.showModal('🤝 Relazioni', `
            <div style="background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px;">
                ${relHTML}
            </div>
        `);
    }
    
    getRelationshipEmoji(value) {
        if (value >= 4) return '💖';
        if (value >= 2) return '😊';
        if (value >= 1) return '🙂';
        if (value === 0) return '😐';
        if (value >= -2) return '😒';
        if (value >= -4) return '😠';
        return '💀';
    }
    
    getRelationshipDescription(value) {
        if (value >= 4) return 'Amore/Amicizia';
        if (value >= 2) return 'Fiducia';
        if (value >= 1) return 'Simpatia';
        if (value === 0) return 'Neutrale';
        if (value >= -2) return 'Diffidenza';
        if (value >= -4) return 'Ostilità';
        return 'Nemico mortale';
    }

    // ===== CREAZIONE PERSONAGGIO =====
    showCharacterCreation() {
        const tempCharacter = new Character();
        window.tempCharacter = tempCharacter;
        this.displayCharacterCreationModal(tempCharacter);
    }

    displayCharacterCreationModal(character) {
        const desc = character.getFullDescription();
        
        const statsHTML = desc.stats.map(stat => `
            <div style="display: flex; justify-content: space-between; margin: 5px 0; padding: 5px; background: rgba(0,0,0,0.3); border-radius: 4px;">
                <span><strong>${stat.name}:</strong></span>
                <span>${stat.value} <small style="color: var(--primary-gold);">(${stat.level})</small></span>
            </div>
        `).join('');
        
        const rerollButtonHTML = character.canRegenerate() 
            ? `<button class="choice-button" onclick="doRegenerate()" style="background: linear-gradient(135deg, var(--accent-sapphire) 0%, var(--primary-gold) 100%);">
                🎲 Rigenera Statistiche<br>
                <small>${character.getRerollMessage()}</small>
               </button>`
            : `<button class="choice-button" style="background: #666; cursor: not-allowed;" disabled>
                ❌ Rigenerazioni Esaurite<br>
                <small>Usa questo personaggio</small>
               </button>`;
        
        this.showModal('⚔️ Creazione Personaggio', `
            <div style="text-align: center; margin-bottom: 15px;">
                <h3>${desc.name}</h3>
                <p><strong>Vita:</strong> ${desc.vita} | <strong>Maturità:</strong> ${character.maturita}/10</p>
            </div>
            
            <div style="background: rgba(0,0,0,0.3); padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                <h4 style="color: var(--primary-gold); margin-bottom: 10px;">📊 Statistiche Generate:</h4>
                ${statsHTML}
            </div>
            
            <div style="margin-bottom: 15px; text-align: center; color: var(--text-warm);">
                <p><em>Il tuo appellativo è determinato dalla statistica più alta.</em></p>
                <p style="color: var(--primary-gold); margin-top: 10px;">${character.getRerollMessage()}</p>
            </div>
            
            ${rerollButtonHTML}
            
            <button class="choice-button" onclick="doAccept()" style="background: linear-gradient(135deg, var(--accent-emerald) 0%, var(--primary-gold) 100%);">
                ✅ Accetta questo Personaggio<br>
                <small>Inizia l'avventura</small>
            </button>
            
            <button class="choice-button" onclick="doClose()" style="background: linear-gradient(135deg, var(--accent-ruby) 0%, var(--secondary-bronze) 100%);">
                ❌ Torna al Menu<br>
                <small>Annulla creazione</small>
            </button>
        `);
    }

    regenerateCharacter() {
        const character = window.tempCharacter;
        
        if (!character || !character.regenerateStats()) {
            this.showMessage('❌ Impossibile rigenerare!', 'error');
            return;
        }
        
        this.displayCharacterCreationModal(character);
        this.showMessage('🎲 Statistiche rigenerate!', 'success');
    }

    acceptCharacter() {
        const character = window.tempCharacter;
        
        if (!character) {
            this.showMessage('❌ Errore nella creazione del personaggio', 'error');
            return;
        }
        
        window.game.player = character;
        
        window.game.gameState.flags = {
            'game_started': true,
            'neiano_partito': false,
            'perla_riconosciuta': false,
            'village_destroyed': false,
            'crise_trust': 0
        };
        
        window.game.gameState.relationships = {
            'neiano': 4,
            'mesis': 0,
            'crise': 0
        };
        
        delete window.tempCharacter;
        
        this.hideModal();
        window.game.ui.updateAllDisplays(window.game.player, window.game.gameState);
        window.game.showParagraph(1);
        
        this.showMessage(`🌟 Benvenuto, ${character.name} ${character.appellativo}!`, 'success');
    }

    // ===== SISTEMA MODALI =====
    showModal(title, content) {
        this.hideModal();
        
        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h2>${title}</h2>
                    <button class="modal-close" onclick="doClose()">✕</button>
                </div>
                <div class="modal-body">
                    ${content}
                </div>
            </div>
        `;
        
        if (!document.querySelector('#modal-styles')) {
            const styles = document.createElement('style');
            styles.id = 'modal-styles';
            styles.textContent = `
                .modal-overlay {
                    position: fixed; top: 0; left: 0; right: 0; bottom: 0;
                    background: rgba(0,0,0,0.8); display: flex;
                    align-items: center; justify-content: center; z-index: 1000;
                }
                .modal-content {
                    background: var(--background-parchment); border: 2px solid var(--primary-gold);
                    border-radius: 12px; max-width: 90vw; max-height: 90vh; overflow-y: auto;
                }
                .modal-header {
                    background: var(--primary-gold); color: var(--background-dark);
                    padding: 15px; display: flex; justify-content: space-between; align-items: center;
                }
                .modal-body { padding: 20px; }
                .modal-close {
                    background: none; border: none; font-size: 1.5rem; cursor: pointer;
                    color: var(--background-dark);
                }
            `;
            document.head.appendChild(styles);
        }
        
        document.body.appendChild(modal);
        this.currentModal = modal;
    }
    
    hideModal() {
        if (this.currentModal) {
            this.currentModal.remove();
            this.currentModal = null;
        }
    }

    // ===== MESSAGGI =====
    showMessage(message, type = 'info') {
        const messageEl = document.createElement('div');
        messageEl.className = `game-message ${type}`;
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
        if (type === 'milestone') messageEl.style.borderColor = 'var(--primary-gold)';
        if (type === 'warning') messageEl.style.borderColor = 'var(--secondary-bronze)';
        
        document.body.appendChild(messageEl);
        
        setTimeout(() => messageEl.style.opacity = '1', 10);
        setTimeout(() => {
            messageEl.style.opacity = '0';
            setTimeout(() => messageEl.remove(), 300);
        }, 3000);
    }
    
    showGameOver() {
        this.showModal('💀 Game Over', `
            <div style="text-align: center;">
                <h3>Il viaggio di Trejano si conclude qui...</h3>
                <p>Ma ogni fine è un nuovo inizio.</p>
                <button class="choice-button" onclick="location.reload()">
                    🔄 Ricomincia l'Avventura
                </button>
            </div>
        `);
    }

    // ===== EFFETTI VISIVI =====
    fadeOut(element, callback) {
        element.style.transition = 'opacity 0.3s ease';
        element.style.opacity = '0';
        setTimeout(() => {
            if (callback) callback();
        }, 300);
    }
    
    fadeIn(element) {
        setTimeout(() => {
            element.style.opacity = '1';
        }, 50);
    }
}

// ===== INIZIALIZZAZIONE E FUNZIONI GLOBALI =====
let ui;

document.addEventListener('DOMContentLoaded', function() {
    ui = new UIManager();
    console.log('🎨 UI Manager caricato');
});

// Funzioni globali per i pulsanti (collegamenti corretti)
function doRegenerate() {
    ui.regenerateCharacter();
}

function doAccept() {
    ui.acceptCharacter();
}

function doClose() {
    ui.hideModal();
            }
