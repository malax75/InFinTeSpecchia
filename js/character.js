// CHARACTER SYSTEM - IN FIN TE SPECCHIA
// Sistema completo con limite rigenerazioni (3 max)

class Character {
    constructor() {
        this.name = 'Trejano';
        this.appellativo = '';
        
        // Sistema rigenerazioni
        this.rerollsUsed = 0;
        this.maxRerolls = 3;
        
        // Genera statistiche random 6-14 (regole originali)
        this.stats = this.generateRandomStats();
        
        // Sistema vita: 20 + 2d8 (regole originali)
        this.maxVita = 20 + this.rollDice(8) + this.rollDice(8);
        this.vita = this.maxVita;
        
        // Maturità emotiva (0-10)
        this.maturita = 0;
        
        // Inventario base
        this.inventario = {
            oggetti: ['Vestiti da pescatore', 'Rete da pesca', 'Piccola barca'],
            gemme: [],
            armi: [],
            speciali: []
        };
        
        // Determina appellativo automatico dalla stat dominante
        this.determinaAppellativo();
        
        console.log('👤 Personaggio creato:', this.name, this.appellativo, this.stats);
        console.log(`🎲 Rigenerazioni disponibili: ${this.getRemainingRerolls()}/${this.maxRerolls}`);
    }

    // ===== SISTEMA RIGENERAZIONI =====
    canRegenerate() {
        return this.rerollsUsed < this.maxRerolls;
    }
    
    getRemainingRerolls() {
        return this.maxRerolls - this.rerollsUsed;
    }
    
    getRerollMessage() {
        const remaining = this.getRemainingRerolls();
        if (remaining === 0) {
            return "❌ Nessuna rigenerazione rimasta";
        } else if (remaining === 1) {
            return "🚨 ULTIMA rigenerazione disponibile!";
        } else {
            return `🎲 ${remaining} rigenerazioni rimanenti`;
        }
    }

    // ===== GENERAZIONE STATISTICHE (REGOLE ORIGINALI) =====
    generateRandomStats() {
        // Ogni statistica: random da 6 a 14 (come nel codice Python originale)
        return {
            empatia: this.rollStatRange(6, 14),
            forza: this.rollStatRange(6, 14),
            agilita: this.rollStatRange(6, 14),
            saggezza: this.rollStatRange(6, 14),
            astuzia: this.rollStatRange(6, 14)
        };
    }
    
    rollStatRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    rollDice(faces) {
        return Math.floor(Math.random() * faces) + 1;
    }

    // ===== APPELLATIVO AUTOMATICO (REGOLE ORIGINALI) =====
    determinaAppellativo() {
        // Trova la statistica più alta
        const statMax = Object.keys(this.stats).reduce((a, b) => 
            this.stats[a] > this.stats[b] ? a : b
        );
        
        // Appellativi originali dal codice Python
        const appellativi = {
            'empatia': "il Compassionevole",
            'forza': "il Vigoroso", 
            'agilita': "il Veloce",
            'saggezza': "il Saggio",
            'astuzia': "l'Astuto"
        };
        
        this.appellativo = appellativi[statMax];
        console.log(`📋 Appellativo determinato: ${this.appellativo} (${statMax}: ${this.stats[statMax]})`);
    }

    // ===== RIGENERAZIONE COMPLETA CON LIMITE =====
    regenerateStats() {
        if (!this.canRegenerate()) {
            console.log('⚠️ Limite rigenerazioni raggiunto');
            if (window.game && window.game.ui) {
                window.game.ui.showMessage('❌ Nessuna rigenerazione rimasta!', 'error');
            }
            return false;
        }
        
        // Incrementa contatore
        this.rerollsUsed++;
        
        // Rigenera tutto secondo le regole originali
        this.stats = this.generateRandomStats();
        this.maxVita = 20 + this.rollDice(8) + this.rollDice(8);
        this.vita = this.maxVita;
        this.determinaAppellativo();
        
        const remaining = this.getRemainingRerolls();
        
        console.log(`🔄 Rigenerazione ${this.rerollsUsed}/${this.maxRerolls} utilizzata`);
        console.log('📊 Nuove stats:', this.stats, 'Vita:', this.vita, 'Appellativo:', this.appellativo);
        
        // Mostra messaggio appropriato
        if (window.game && window.game.ui) {
            if (remaining === 0) {
                window.game.ui.showMessage('🚨 Ultima rigenerazione utilizzata!', 'warning');
            } else if (remaining === 1) {
                window.game.ui.showMessage('⚠️ Solo 1 rigenerazione rimasta', 'warning');
            } else {
                window.game.ui.showMessage(`🎲 ${remaining} rigenerazioni rimanenti`, 'info');
            }
        }
        
        return true;
    }

    // ===== GESTIONE STATISTICHE =====
    modifyStat(statName, delta) {
        if (!this.stats[statName]) {
            console.error(`Statistica ${statName} non esistente`);
            return false;
        }
        
        const oldValue = this.stats[statName];
        this.stats[statName] = Math.max(1, Math.min(20, this.stats[statName] + delta));
        
        console.log(`📊 ${statName}: ${oldValue} → ${this.stats[statName]} (${delta > 0 ? '+' : ''}${delta})`);
        
        // Ricalcola appellativo se necessario
        if (delta !== 0) {
            this.determinaAppellativo();
        }
        
        return true;
    }
    
    getStatLevel(statName) {
        const value = this.stats[statName];
        if (value >= 18) return 'Leggendario';
        if (value >= 15) return 'Eccellente';
        if (value >= 12) return 'Buono';
        if (value >= 9) return 'Medio';
        if (value >= 6) return 'Basso';
        return 'Terribile';
    }

    // ===== SISTEMA MATURITÀ =====
    gainMaturita(amount) {
        const oldMaturita = this.maturita;
        this.maturita = Math.max(0, Math.min(10, this.maturita + amount));
        
        if (this.maturita > oldMaturita) {
            console.log(`⭐ Maturità aumentata: ${oldMaturita} → ${this.maturita}`);
            this.checkMaturitaMilestones(oldMaturita, this.maturita);
        }
    }
    
    checkMaturitaMilestones(oldLevel, newLevel) {
        const milestones = [
            { level: 3, message: 'Hai compreso il vero significato della perdita.' },
            { level: 5, message: 'Accetti il peso del destino sulle tue spalle.' },
            { level: 7, message: 'Comprendi cosa significa essere un vero leader.' },
            { level: 10, message: 'Hai raggiunto la saggezza suprema.' }
        ];
        
        milestones.forEach(milestone => {
            if (oldLevel < milestone.level && newLevel >= milestone.level) {
                if (window.game && window.game.ui) {
                    window.game.ui.showMessage(`🌟 ${milestone.message}`, 'milestone');
                }
            }
        });
    }
    
    getMaturitaStars() {
        const filled = '★'.repeat(this.maturita);
        const empty = '☆'.repeat(10 - this.maturita);
        return filled + empty;
    }

    // ===== SISTEMA VITA =====
    takeDamage(amount, source = 'sconosciuto') {
        const oldVita = this.vita;
        this.vita = Math.max(0, this.vita - amount);
        
        console.log(`💔 Danno da ${source}: -${amount} vita (${oldVita} → ${this.vita})`);
        
        if (this.vita === 0) {
            console.log('💀 Vita azzerata - Game Over trigger');
            if (window.game && window.game.ui) {
                window.game.ui.showGameOver();
            }
        }
        
        return this.vita;
    }
    
    heal(amount, source = 'guarigione') {
        const oldVita = this.vita;
        this.vita = Math.min(this.maxVita, this.vita + amount);
        
        console.log(`💚 ${source}: +${amount} vita (${oldVita} → ${this.vita})`);
        return this.vita;
    }

    // ===== GESTIONE INVENTARIO =====
    addToInventory(item, category = 'oggetti') {
        if (!this.inventario[category]) {
            this.inventario[category] = [];
        }
        
        this.inventario[category].push(item);
        console.log(`🎒 Aggiunto: ${item} (${category})`);
        
        // Effetti speciali per gemme
        if (category === 'gemme') {
            this.onGemAcquired(item);
        }
        
        return true;
    }
    
    removeFromInventory(item, category = 'oggetti') {
        if (!this.inventario[category]) return false;
        
        const index = this.inventario[category].indexOf(item);
        if (index > -1) {
            this.inventario[category].splice(index, 1);
            console.log(`🗑️ Rimosso: ${item} (${category})`);
            return true;
        }
        return false;
    }
    
    hasItem(item, category = null) {
        if (category) {
            return this.inventario[category] && this.inventario[category].includes(item);
        }
        
        // Cerca in tutte le categorie
        for (const cat of Object.values(this.inventario)) {
            if (Array.isArray(cat) && cat.includes(item)) {
                return true;
            }
        }
        return false;
    }
    
    onGemAcquired(gemName) {
        console.log(`💎 Gemma acquisita: ${gemName}`);
        
        // Effetti speciali per gemme specifiche
        const gemEffects = {
            'Perla di Akoia': () => this.modifyStat('empatia', 1),
            'Ametista di Mechrios': () => this.modifyStat('saggezza', 1),
            'Rubino di Reudhos': () => this.modifyStat('forza', 2),
            'Smeraldo di Saar': () => this.gainMaturita(1)
        };
        
        if (gemEffects[gemName]) {
            gemEffects[gemName]();
        }
    }

    // ===== SERIALIZZAZIONE =====
    serialize() {
        return {
            name: this.name,
            appellativo: this.appellativo,
            stats: { ...this.stats },
            maxVita: this.maxVita,
            vita: this.vita,
            maturita: this.maturita,
            inventario: JSON.parse(JSON.stringify(this.inventario)),
            rerollsUsed: this.rerollsUsed,
            maxRerolls: this.maxRerolls
        };
    }
    
    static deserialize(data) {
        const character = new Character();
        character.name = data.name;
        character.appellativo = data.appellativo;
        character.stats = data.stats;
        character.maxVita = data.maxVita;
        character.vita = data.vita;
        character.maturita = data.maturita;
        character.inventario = data.inventario;
        character.rerollsUsed = data.rerollsUsed || 0;
        character.maxRerolls = data.maxRerolls || 3;
        
        return character;
    }
    
    // ===== DISPLAY INFO =====
    getFullDescription() {
        return {
            name: `${this.name} ${this.appellativo}`,
            vita: `${this.vita}/${this.maxVita}`,
            maturita: this.getMaturitaStars(),
            stats: Object.entries(this.stats).map(([name, value]) => ({
                name: name.charAt(0).toUpperCase() + name.slice(1),
                value: value,
                level: this.getStatLevel(name)
            })),
            inventario: this.inventario,
            totalGems: this.inventario.gemme.length,
            rerollsRemaining: this.getRemainingRerolls(),
            rerollMessage: this.getRerollMessage(),
            canReroll: this.canRegenerate()
        };
    }
}
