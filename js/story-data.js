// STORY DATA - IN FIN TE SPECCHIA
// Paragrafi e contenuti narrativi del Volume I

class StoryData {
    constructor() {
        this.paragraphs = this.initializeParagraphs();
        console.log('📚 Story Data caricato:', Object.keys(this.paragraphs).length, 'paragrafi');
    }

    getParagraph(id) {
        return this.paragraphs[id] || null;
    }

    initializeParagraphs() {
        return {
            1: {
                id: 1,
                title: "🌅 L'Alba del Destino",
                content: `Ti chiami Trejano e vivi nel piccolo villaggio di pescatori di Treja, nelle terre di Saar. 
                Oggi è un giorno come tanti altri: ti alzi all'alba, prepari le reti e ti avvii verso il lago per la pesca quotidiana.
                
                Tuo padre adottivo Neiano, un uomo saggio dai capelli bianchi, ti osserva mentre sistemi l'attrezzatura. 
                C'è qualcosa di diverso nel suo sguardo stamattina... come se volesse dirti qualcosa di importante.
                
                <em>"Trejano,"</em> ti chiama con voce calma, <em>"vieni qui un momento. C'è qualcosa di cui dobbiamo parlare."</em>`,
                choices: [
                    {
                        text: "🎣 \"Prima devo finire di preparare le reti, padre.\"",
                        nextParagraph: 2,
                        consequences: {
                            stats: { "astuzia": 1 },
                            relationships: { "neiano": -1 }
                        }
                    },
                    {
                        text: "👂 \"Certo, padre. Ti ascolto sempre volentieri.\"",
                        nextParagraph: 3,
                        consequences: {
                            stats: { "empatia": 1 },
                            relationships: { "neiano": 1 }
                        }
                    },
                    {
                        text: "🤔 \"C'è qualcosa che non va? Sembri preoccupato.\"",
                        nextParagraph: 4,
                        requirements: { stats: { "empatia": 8 } },
                        consequences: {
                            stats: { "empatia": 1, "saggezza": 1 },
                            relationships: { "neiano": 2 }
                        }
                    }
                ]
            },

            2: {
                id: 2,
                title: "Il Richiamo del Dovere",
                content: `Neiano annuisce comprensivo mentre tu continui a sistemare le reti. 
                È sempre stato paziente con te, anche quando metti il lavoro prima delle sue parole.
                
                <em>"Va bene, figlio mio. Il lago può aspettare qualche minuto in più. Quello che ho da dirti... 
                beh, cambierà molte cose."</em>
                
                Finisci rapidamente di preparare l'attrezzatura, ma le sue parole ti hanno incuriosito. 
                Quando ti volti verso di lui, noti che tiene in mano qualcosa di piccolo e brillante.`,
                choices: [
                    {
                        text: "❓ \"Che cos'è quello che hai in mano?\"",
                        nextParagraph: 5
                    },
                    {
                        text: "👥 \"Padre, ultimamente sei strano. Cosa sta succedendo?\"",
                        nextParagraph: 6,
                        requirements: { stats: { "saggezza": 9 } }
                    }
                ]
            },

            3: {
                id: 3,
                title: "L'Ascolto del Cuore",
                content: `Il volto di Neiano si illumina di un sorriso caloroso. Ti fa cenno di sederti accanto a lui 
                su un vecchio tronco che usate spesso per le vostre conversazioni serali.
                
                <em>"Sapevo di poterti sempre contare su di te, Trejano. Sei cresciuto molto in questi anni... 
                forse più di quanto tu stesso realizzi."</em>
                
                Estrae dalla tasca qualcosa che non hai mai visto prima: una piccola pietra bianca, 
                perfettamente levigata, che sembra brillare di luce propria nel sole mattutino.`,
                choices: [
                    {
                        text: "✨ \"È bellissima! Da dove viene?\"",
                        nextParagraph: 7
                    },
                    {
                        text: "🧐 \"Sembra... magica. È una gemma?\"",
                        nextParagraph: 8,
                        requirements: { stats: { "saggezza": 10 } }
                    }
                ]
            },

            4: {
                id: 4,
                title: "L'Intuizione del Cuore",
                content: `Gli occhi di Neiano si velano di tristezza, ma anche di orgoglio. 
                La tua capacità di leggere i suoi sentimenti lo commuove profondamente.
                
                <em>"Hai sempre avuto un dono speciale, Trejano. Riesci a vedere oltre le apparenze, 
                a percepire quello che gli altri nascondono nel cuore. Sì... sono preoccupato."</em>
                
                Si siede pesantemente e tira fuori una piccola pietra bianca che sembra pulsare di vita propria.
                
                <em>"Sono preoccupato perché è arrivato il momento. Il momento che ho sempre temuto e sperato insieme."</em>`,
                choices: [
                    {
                        text: "💔 \"Padre, mi stai spaventando. Che momento?\"",
                        nextParagraph: 9
                    },
                    {
                        text: "🤝 \"Qualunque cosa sia, affronteremo insieme.\"",
                        nextParagraph: 10,
                        consequences: {
                            relationships: { "neiano": 1 },
                            maturita: 1
                        }
                    }
                ]
            },

            5: {
                id: 5,
                title: "La Rivelazione",
                content: `Neiano apre il palmo della mano, rivelando completamente la pietra bianca. 
                È più bella di qualsiasi cosa tu abbia mai visto: perfettamente sferica, 
                con una superficie che sembra contenere la luce del sole e della luna insieme.
                
                <em>"Questo, mio caro figlio, è il motivo per cui ti ho trovato diciotto anni fa. 
                Non eri un bambino abbandonato... eri un bambino nascosto. Nascosto per proteggerti."</em>
                
                Il mondo sembra fermarsi. Le sue parole echeggiano nella tua mente come tuoni lontani.`,
                choices: [
                    {
                        text: "😱 \"Cosa vuoi dire? Non sono tuo figlio?\"",
                        nextParagraph: 11,
                        consequences: { maturita: 1 }
                    },
                    {
                        text: "🎭 \"Proteggemi da cosa? Da chi?\"",
                        nextParagraph: 12
                    }
                ]
            },

            6: {
                id: 6,
                title: "La Saggezza Percepita",
                content: `Neiano sospira profondamente. La tua perspicacia lo ha sempre colpito, 
                ma oggi sembra quasi dolorosa.
                
                <em>"Sì, sono strano. Sono strano perché so che questo potrebbe essere l'ultimo giorno 
                che passiamo insieme come abbiamo sempre fatto."</em>
                
                Mostra la pietra bianca che teneva nascosta.
                
                <em>"È arrivato il momento di rivelarti chi sei veramente, Trejano. E con questa rivelazione... 
                tutto cambierà."</em>`,
                choices: [
                    {
                        text: "⚡ \"Chi sono veramente? Non capisco...\"",
                        nextParagraph: 13
                    },
                    {
                        text: "🌟 \"Sono pronto, padre. Dimmi tutto.\"",
                        nextParagraph: 14,
                        requirements: { maturita: 2 },
                        consequences: { maturita: 1 }
                    }
                ]
            },

            7: {
                id: 7,
                title: "L'Origine Misteriosa",
                content: `<em>"Viene da molto lontano, figlio mio. Da un tempo in cui i regni di Limb erano uniti 
                sotto un'unica corona, e questa pietra... questa pietra era il simbolo di quell'unità."</em>
                
                Neiano accarezza delicatamente la superficie della gemma.
                
                <em>"Si chiama Perla di Akoia, ed è una delle otto gemme sacre. Tu, Trejano, 
                sei l'erede legittimo di questo potere."</em>`,
                choices: [
                    {
                        text: "👑 \"Erede? Ma io sono solo un pescatore!\"",
                        nextParagraph: 15
                    },
                    {
                        text: "💎 \"Otto gemme? Esistono altre pietre come questa?\"",
                        nextParagraph: 16,
                        consequences: { stats: { "saggezza": 1 } }
                    }
                ]
            },

            8: {
                id: 8,
                title: "Il Riconoscimento Magico",
                content: `Gli occhi di Neiano si spalancano per la sorpresa, poi si riempiono di orgoglio.
                
                <em>"Incredibile... hai riconosciuto la sua natura magica al primo sguardo. 
                Sì, Trejano, è molto più di una semplice gemma. È una Perla di Akoia, 
                una delle otto gemme del potere che un tempo univano i regni di Limb."</em>
                
                <em>"E tu... tu sei l'ultimo discendente della stirpe reale dell'Opale."</em>`,
                choices: [
                    {
                        text: "🤯 \"Stirpe reale? Ma questo è impossibile!\"",
                        nextParagraph: 17,
                        consequences: { maturita: 2 }
                    },
                    {
                        text: "🔮 \"Sento qualcosa... la pietra mi chiama.\"",
                        nextParagraph: 18,
                        requirements: { stats: { "saggezza": 12 } },
                        action: "test_saggezza"
                    }
                ]
            }
        };
    }
}

// ===== INIZIALIZZAZIONE =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('📖 Story Data caricato');
});
