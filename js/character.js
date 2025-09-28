// CHARACTER SYSTEM - IN FIN TE SPECCHIA
// Gestione personaggio, statistiche, inventario e crescita

class Character {
    constructor(customStats = null) {
        this.name = 'Trejano';
        this.appellativo = '';
        
        // Genera statistiche base (6-14)
        this.stats = customStats || this.generateRandomStats();
        
        // Sistema vita: 20 + 2d8
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
        
        console.log('👤 Personaggio creato:', this.name, this.stats);
    }

    // ===== GENERAZIONE STATISTICHE =====
    generateRandomStats() {
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

    // ===== CREAZIONE PERSONAGGIO GUIDATA =====
    static createCustomCharacter(choices) {
        const stats = {
            empatia: 8,
            forza: 8,
            agilita: 8,
            saggezza: 8,
            astuzia: 8
        };
        
        let puntiBonus = 12; // Punti da distribuire
        
        // Applica scelte background
        if (choices.background === 'pescatore') {
            stats.forza += 2;
            stats.agilita += 1;
            puntiBonus -= 3;
        } else if (choices.background === 'sognatore') {
            stats.empatia += 2;
            stats.saggezza += 1;
            puntiBonus -= 3;
        } else if (choices.background === 'esploratore') {
            stats.agilita += 2;
            stats.astuzia += 1;
            puntiBonus -= 3;
        }
        
        // Distribuisci punti rimanenti secondo preferenze
        const preferences = choices.statPreferences || {};
        for (const [stat, points] of Object.entries(preferences)) {
            if (puntiBonus >= points && stats[stat] + points <= 14) {
                stats[stat] += points;
                puntiBonus -= points;
            }
        }
        
        // Distribuisci punti rimanenti casualmente
        while (puntiBonus > 0) {
            const statNames = Object.keys(stats);
            const randomStat = statNames[Math.floor(Math.random() * statNames.length)];
            if (stats[randomStat] < 14) {
                stats[randomStat]++;
                puntiBonus--;
            }
        }
        
        const character = new Character(stats);
        character.appellativo = choices.appellativo || 'il Pescatore';
        
        return character;
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
                // Trigger evento maturità raggiunta
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
            inventario: JSON.parse(JSON.stringify(this.inventario))
        };
    }
    
    static deserialize(data) {
        const character = new Character(data.stats);
        character.name = data.name;
        character.appellativo = data.appellativo;
        character.maxVita = data.maxVita;
        character.vita = data.vita;
        character.maturita = data.maturita;
        character.inventario = data.inventario;
        
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
            totalGems: this.inventario.gemme.length
        };
    }
}
