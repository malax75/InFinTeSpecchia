// GAME ENGINE - IN FIN TE SPECCHIA
// Core gameplay system - VERSIONE CORRETTA

class TrejanoGame {
    constructor() {
        this.player = null;
        this.currentParagraph = 1;
        this.ui = null;
        this.storyData = window.StoryData;
        this.gameState = {
            volume: 1,
            flags: {},
            relationships: {},
            shownParagraphs: new Set()
        };
        
        console.log('🌙 TrejanoGame inizializzato');
    }
    
    // ===== INIZIALIZZAZIONE GIOCO =====
    startNewGame() {
        this.player = new Character();
        this.gameState.flags = {
            'game_started': true,
            'neiano_partito': false,
            'perla_riconosciuta': false,
            'village_destroyed': false,
            'crise_trust': 0
        };
        
        this.gameState.relationships = {
            'neiano': 4,
            'mesis': 0,
            'crise': 0
        };

        this.ui.updateAllDisplays(this.player, this.gameState);
        this.showParagraph(1);
        console.log('🎮 Nuovo gioco iniziato');
    }

    // ===== SISTEMA TEST ABILITÀ =====
    rollTest(statName, difficulty = 10, description = "") {
        if (!this.player.stats[statName]) {
            console.error(`Statistica ${statName} non trovata`);
            return null;
        }

        const roll = Math.floor(Math.random() * 8) + 1;
        const statValue = this.player.stats[statName];
        const maturitaBonus = this.getMaturitaBonus(statName);
        const total = statValue + roll + maturitaBonus;
        const success = total >= difficulty;

        const result = {
            stat: statName,
            statValue: statValue,
            roll: roll,
            maturitaBonus: maturitaBonus,
            total: total,
            difficulty: difficulty,
            success: success,
            description: description
        };

        this.ui.showTestResult(result);
        console.log(`🎲 Test ${statName}: ${statValue}+${roll}+${maturitaBonus}=${total} vs ${difficulty} → ${success ? 'SUCCESSO' : 'FALLIMENTO'}`);
        
        return result;
    }

    getMaturitaBonus(statName) {
        const maturita = this.player.maturita;
        if (statName === 'empatia' || statName === 'saggezza') {
            if (maturita >= 8) return 2;
            if (maturita >= 5) return 1;
        }
        return 0;
    }

    // ===== GESTIONE PARAGRAFI - CORRETTA =====
    showParagraph(paragraphId, forceShow = false) {
        if (!forceShow && this.gameState.shownParagraphs.has(paragraphId)) {
            this.ui.showChoicesOnly(paragraphId, this.gameState);
            return;
        }

        // ACCESSO DIRETTO - senza getParagraph()
        const paragraph = this.storyData[paragraphId];
        if (!paragraph) {
            console.error(`Paragrafo ${paragraphId} non trovato`);
            return;
        }

        const processedContent = this.processContent(paragraph, this.gameState);
        
        this.gameState.shownParagraphs.add(paragraphId);
        this.currentParagraph = paragraphId;
        
        this.ui.showParagraph(processedContent, this.gameState);
        
        console.log(`📖 Mostrato paragrafo ${paragraphId}`);
    }

    processContent(paragraph, gameState) {
        let content = paragraph.text;
        
        // Sostituzioni basate su flags e stats
        content = content.replace(/\{player_name\}/g, this.player.name || 'Trejano');
        content = content.replace(/\{maturita\}/g, this.player.maturita);
        
        // Sostituzioni condizionali
        if (gameState.flags.neiano_partito) {
            content = content.replace(/\{neiano_status\}/g, 'partito misteriosamente');
        } else {
            content = content.replace(/\{neiano_status\}/g, 'ancora con te');
        }

        return {
            ...paragraph,
            content: content
        };
    }

    // ===== GESTIONE SCELTE - CORRETTA =====
    makeChoice(choiceIndex, paragraphId) {
        // ACCESSO DIRETTO - senza getParagraph()
        const paragraph = this.storyData[paragraphId];
        if (!paragraph || !paragraph.choices[choiceIndex]) {
            console.error(`Scelta ${choiceIndex} non valida per paragrafo ${paragraphId}`);
            return;
        }

        const choice = paragraph.choices[choiceIndex];
        console.log(`✅ Scelta: ${choice.text}`);

        // Applica conseguenze della scelta
        this.applyChoiceConsequences(choice);

        // Vai al prossimo paragrafo usando nextParagraph
        if (choice.nextParagraph) {
            this.showParagraph(choice.nextParagraph);
        } else if (choice.action) {
            this.executeAction(choice.action);
        }
    }

    applyChoiceConsequences(choice) {
        if (!choice.consequences) return;

        const cons = choice.consequences;

        // Modifiche statistiche
        if (cons.stats) {
            for (const [stat, change] of Object.entries(cons.stats)) {
                this.player.modifyStat(stat, change);
            }
        }

        // Modifiche maturità
        if (cons.maturita) {
            this.player.gainMaturita(cons.maturita);
        }

        // Modifiche relazioni
        if (cons.relationships) {
            for (const [npc, change] of Object.entries(cons.relationships)) {
                this.modifyRelationship(npc, change);
            }
        }

        // Modifiche flags
        if (cons.flags) {
            for (const [flag, value] of Object.entries(cons.flags)) {
                this.gameState.flags[flag] = value;
            }
        }

        // Oggetti inventario
        if (cons.addItems) {
            cons.addItems.forEach(item => this.player.addToInventory(item));
        }

        // Aggiorna UI dopo le modifiche
        this.ui.updateAllDisplays(this.player, this.gameState);
    }

    executeAction(action) {
        switch (action) {
            case 'character_creation':
                this.ui.showCharacterCreation();
                break;
            case 'save_game':
                this.saveGame();
                break;
            case 'test_empatia':
                this.rollTest('empatia', 12, 'Cerchi di capire i sentimenti di Neiano');
                break;
            case 'test_forza':
                this.rollTest('forza', 10, 'Provi a sollevare la rete da pesca');
                break;
            default:
                console.log(`Azione ${action} non implementata`);
        }
    }

    // ===== GESTIONE RELAZIONI =====
    modifyRelationship(npc, delta) {
        if (!this.gameState.relationships[npc]) {
            this.gameState.relationships[npc] = 0;
        }
        
        this.gameState.relationships[npc] = Math.max(-5, 
            Math.min(5, this.gameState.relationships[npc] + delta)
        );
        
        console.log(`💝 Relazione con ${npc}: ${this.gameState.relationships[npc]}`);
    }

    // ===== SALVATAGGIO =====
    saveGame() {
        const saveData = {
            player: this.player.serialize(),
            gameState: {
                ...this.gameState,
                shownParagraphs: Array.from(this.gameState.shownParagraphs)
            },
            currentParagraph: this.currentParagraph,
            timestamp: new Date().toISOString(),
            version: '1.0'
        };

        try {
            localStorage.setItem('trejano_save', JSON.stringify(saveData));
            this.ui.showMessage('💾 Gioco salvato con successo!', 'success');
            console.log('💾 Gioco salvato');
        } catch (error) {
            this.ui.showMessage('❌ Errore nel salvataggio', 'error');
            console.error('Errore salvataggio:', error);
        }
    }

    loadGame() {
        try {
            const saveData = JSON.parse(localStorage.getItem('trejano_save'));
            if (!saveData) {
                this.ui.showMessage('❌ Nessun salvataggio trovato', 'error');
                return false;
            }

            this.player = Character.deserialize(saveData.player);
            this.gameState = {
                ...saveData.gameState,
                shownParagraphs: new Set(saveData.gameState.shownParagraphs)
            };
            this.currentParagraph = saveData.currentParagraph;

            this.ui.updateAllDisplays(this.player, this.gameState);
            this.showParagraph(this.currentParagraph, true);
            
            this.ui.showMessage('✅ Gioco caricato!', 'success');
            console.log('📁 Gioco caricato');
            return true;
        } catch (error) {
            this.ui.showMessage('❌ Errore nel caricamento', 'error');
            console.error('Errore caricamento:', error);
            return false;
        }
    }
}

window.TrejanoGame = TrejanoGame;

// ===== INIZIALIZZAZIONE GLOBALE =====
let game;

document.addEventListener('DOMContentLoaded', function() {
    if (window.ui) {
        game = new TrejanoGame();
        ui.setGameInstance(game);
        game.ui = ui;
        window.game = game;
        console.log('🚀 Game engine caricato');
    }
});
