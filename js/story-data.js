// STORY DATA - IN FIN TE SPECCHIA
// Paragrafi del Volume I con sistema di scelte e conseguenze

const StoryData = {
    1: {
        id: 1,
        title: "L'Alba di un Nuovo Giorno",
        content: `<p>Il sole stava sorgendo sulle palafitte di Treja, tingendo di rosa le acque del fiume. Trejano, con i suoi capelli bianchi come neve che contrastavano con la sua giovane età di diciassette anni, si svegliò al suono familiare del fiume che scorreva sotto la sua casa.</p>
        
        <p>Neiano, suo padre adottivo, era già sveglio. Lo sentiva muoversi nella stanza accanto, preparando le reti per la pesca mattutina. Ma c'era qualcosa di diverso nell'aria quella mattina. Un silenzio strano, come se il mondo trattenesse il respiro.</p>
        
        <p>Trejano si alzò e uscì sulla veranda di legno. Il villaggio di pescatori si stava lentamente risvegliando. Alcune barche erano già sul fiume, le loro sagome scure contro l'acqua luminosa.</p>
        
        <p>«Trejano!» La voce di Neiano lo chiamò dall'interno. «Vieni qui, figlio mio. Dobbiamo parlare.»</p>
        
        <p>C'era qualcosa nel tono di quella voce. Qualcosa che Trejano non aveva mai sentito prima. Non era preoccupazione. Non era paura. Era... decisione.</p>`,
        choices: [
            {
                text: "Entra subito, incuriosito",
                nextParagraph: 2,
                stats: null
            },
            {
                text: "Resta un momento a guardare l'alba",
                nextParagraph: 3,
                stats: null
            }
        ],
        flags: null
    },
    2: {
        id: 2,
        title: "Il Colloquio",
        content: `<p>Trejano entrò nella stanza principale della palafitta. Neiano era seduto al tavolo di legno grezzo, le mani giunte davanti a sé. I suoi occhi, solitamente pieni di calore, erano pensierosi.</p>
        
        <p>«Siediti» disse Neiano, indicando la sedia di fronte a lui.</p>
        
        <p>Trejano obbedì, il cuore che batteva un po' più forte del normale. Neiano non era mai così serio, nemmeno quando doveva rimproverarlo per qualche marachella.</p>
        
        <p>«Trejano» iniziò Neiano, la voce bassa ma ferma. «Ieri mi hai detto che vuoi diventare un cavaliere.»</p>
        
        <p>Era vero. Il giorno prima, mentre riparavano le reti insieme, Trejano aveva condiviso il suo sogno. Un sogno che custodiva da anni: lasciare il villaggio, cercare avventure, diventare qualcuno di importante. Un cavaliere che difendesse i deboli, che vivesse storie degne di essere raccontate.</p>
        
        <p>Neiano aveva ascoltato in silenzio, annuendo di tanto in tanto. Ma non aveva detto nulla. Non fino ad ora.</p>`,
        choices: [
            {
                text: "«Sì, padre. È quello che voglio davvero»",
                nextParagraph: 4,
                stats: null
            },
            {
                text: "«Era solo un sogno...»",
                nextParagraph: 5,
                stats: null
            }
        ],
        flags: {
            set: { 'dialogo_cavaliere': true }
        }
    },
    3: {
        id: 3,
        title: "L'Ultimo Momento di Pace",
        content: `<p>Trejano rimase sulla veranda ancora un momento, respirando l'aria fresca del mattino. Il fiume scorreva placido, portando con sé piccoli pezzi di legno e foglie. Una libellula dalle ali iridescenti si posò sul parapetto accanto a lui.</p>
        
        <p>Guardò verso l'orizzonte. Oltre le colline, oltre il fiume, c'era un mondo che non conosceva. Un mondo di città, castelli, cavalieri e draghi. Un mondo che lo chiamava.</p>
        
        <p>«Trejano!» La voce di Neiano, più insistente ora.</p>
        
        <p>Il ragazzo sospirò. Quel momento di pace era finito. Si voltò e entrò nella casa, lasciandosi alle spalle l'alba e i suoi sogni silenziosi.</p>`,
        choices: [
            {
                text: "➡️ Entra da Neiano",
                nextParagraph: 2,
                stats: null
            }
        ],
        flags: {
            modify: { 'momento_riflessivo': true }
        }
    },
    4: {
        id: 4,
        title: "La Rivelazione di Neiano - Parte 1",
        content: `<p>Neiano annuì lentamente, come se si fosse aspettato quella risposta.</p>
        
        <p>«Lo so» disse. «L'ho sempre saputo. Fin da quando eri bambino, guardavi l'orizzonte con quegli occhi... quegli occhi che cercavano qualcosa che Treja non poteva darti.»</p>
        
        <p>Si alzò e andò alla finestra, guardando fuori verso il fiume.</p>
        
        <p>«Trejano, c'è una cosa che devo dirti. Qualcosa che avrei dovuto dirti anni fa, forse. Ma... non ero pronto. E tu non eri pronto.»</p>
        
        <p>Si voltò. I suoi occhi erano lucidi.</p>
        
        <p>«Io non sono tuo padre.»</p>
        
        <p>Le parole caddero nel silenzio come pietre nell'acqua. Trejano sapeva di essere adottato - i suoi capelli bianchi in un villaggio dove tutti avevano capelli scuri lo rendevano ovvio - ma sentirlo dire così, così direttamente, gli tolse il respiro.</p>
        
        <p>«Lo so, padre» riuscì a dire. «Ma tu sei l'unico padre che io abbia mai...»</p>
        
        <p>«Aspetta» lo interruppe Neiano. «C'è di più. Molto di più.»</p>`,
        choices: [
            {
                text: "➡️ Ascolta in silenzio",
                nextParagraph: 5,
                stats: null
            }
        ],
        flags: {
            set: { 'rivelazione_iniziata': true }
        }
    },
    5: {
        id: 5,
        title: "La Strada che Non Porta da Nessuna Parte",
        content: `<p>Neiano tornò a sedersi, le mani che tremavano leggermente.</p>
        
        <p>«Diciassette anni fa, ti ho trovato. Non qui, a Treja. Ma sulla strada. Quella strada.» Indicò verso est, verso la strada che tutti nel villaggio conoscevano ma che nessuno percorreva. La strada che, secondo le leggende locali, non portava da nessuna parte.</p>
        
        <p>«Eri solo un neonato, avvolto in una coperta bianca. Accanto a te c'era... c'era una perla. Una perla più grande di qualsiasi cosa avessi mai visto. Brillava di una luce propria, anche al buio.»</p>
        
        <p>Trejano sentì un brivido lungo la schiena.</p>
        
        <p>«Quella perla... l'ho nascosta. L'ho nascosta perché sapevo che se qualcuno l'avesse vista, se qualcuno avesse saputo... ti avrebbero portato via. Ti avrebbero ucciso, Trejano. Le leggi di Limb sono chiare: nessuno può possedere una gemma che non sia del proprio regno.»</p>
        
        <p>«Ma io... io non appartengo a nessun regno» disse Trejano, confuso.</p>
        
        <p>«Esatto» rispose Neiano. «Ed è per questo che devo partire.»</p>`,
        choices: [
            {
                text: "«Partire? Dove? Perché?»",
                nextParagraph: 6,
                stats: null
            }
        ],
        flags: {
            set: { 'storia_perla_raccontata': true }
        }
    },
    6: {
        id: 6,
        title: "La Partenza",
        content: `<p>«Devo andare a cercare risposte» disse Neiano. «Risposte su chi sei. Risposte su quella perla. E risposte su... su cosa sta per succedere.»</p>
        
        <p>«Ma... dove? Per quanto tempo?»</p>
        
        <p>Neiano guardò ancora la strada, quella strada che non portava da nessuna parte.</p>
        
        <p>«Non posso dirtelo ancora» disse piano. «Ma tornerò. Tornerò al terzo tramonto da oggi, e allora... allora ti racconterò una storia. Una storia vera, Trejano. La storia più vera che tu abbia mai ascoltato. E dopo che l'avrai sentita, deciderai tu. Deciderai tu se vuoi davvero essere un cavaliere, se vuoi davvero seguire questa strada.»</p>
        
        <p>Si alzò e iniziò a preparare un piccolo fagotto. Trejano lo guardava, incapace di muoversi, di parlare. Tutto stava succedendo troppo in fretta.</p>
        
        <p>«Tre giorni» disse Neiano, caricandosi il fagotto sulle spalle. «E ricorda: qualunque cosa accada, io ti amo.»</p>
        
        <p>Poi uscì e iniziò a camminare verso la strada che non portava da nessuna parte.</p>`,
        choices: [
            {
                text: "Guardalo partire in silenzio",
                nextParagraph: 7,
                stats: null
            }
        ],
        flags: {
            set: { 'neiano_parte': true }
        }
    },
    7: {
        id: 7,
        title: "Il Momento della Scelta",
        content: `<p>Trejano guardò Neiano allontanarsi sulla strada. Ogni passo lo portava più lontano, verso l'orizzonte dove la strada spariva tra le colline.</p>
        
        <p>Una parte di lui voleva correre, afferrare il padre, costringerlo a restare, a spiegare tutto subito. Un'altra parte sapeva che doveva lasciarlo andare, che questo faceva parte di qualcosa più grande.</p>
        
        <p>Il vento soffiava tra i capelli bianchi di Trejano, portando con sé il profumo di acqua e terra bagnata. Le palafitte di Treja scricchiolavano piano nel loro eterno dialogo con il fiume.</p>
        
        <p>Tre giorni. Solo tre giorni.</p>
        
        <p>Ma perché sembravano un'eternità?</p>`,
        choices: [
            {
                text: "Corri verso di lui, ma poi ti fermi",
                nextParagraph: 8,
                consequences: {
                    maturita: 1
                }
            },
            {
                text: "Resta fermo, dimostra la tua forza",
                nextParagraph: 9,
                consequences: {
                    stats: { forza: 1 },
                    maturita: 1
                }
            },
            {
                text: "Grida: «Padre, dove vai davvero?»",
                nextParagraph: 10,
                consequences: {
                    stats: { empatia: 1 }
                }
            }
        ],
        flags: null
    },
    8: {
        id: 8,
        title: "Il Passo Non Fatto",
        content: `<p>Trejano iniziò a correre. I piedi nudi battevano sul legno umido della palafitta, poi sulla terra del sentiero.</p>
        
        <p>«Padre!» stava per gridare.</p>
        
        <p>Ma poi si fermò.</p>
        
        <p>Si fermò perché capì, in quel momento, che inseguire Neiano non avrebbe cambiato nulla. Il padre aveva preso la sua decisione, e doveva rispettarla. Anche se non la capiva. Anche se faceva male.</p>
        
        <p>Neiano si voltò, come se avesse percepito il movimento. I loro occhi si incontrarono attraverso la distanza. E in quello sguardo, Trejano vide tutto: l'amore, la paura, la speranza. E qualcos'altro. Qualcosa che sembrava... scusa?</p>
        
        <p>Poi Neiano si voltò e continuò a camminare.</p>`,
        choices: [
            {
                text: "➡️ Torna alla palafitta",
                nextParagraph: 11,
                stats: null
            }
        ],
        flags: {
            modify: { 'tentato_inseguimento': true }
        }
    },
    9: {
        id: 9,
        title: "La Forza del Silenzio",
        content: `<p>Trejano rimase immobile, i pugni serrati ai fianchi. Ogni fibra del suo essere voleva correre, gridare, fermare quella partenza assurda.</p>
        
        <p>Ma non lo fece.</p>
        
        <p>Perché qualcosa dentro di lui - forse la stessa cosa che lo spingeva a sognare cavalieri e draghi - gli diceva che questo era necessario. Che Neiano doveva andare, e lui doveva lasciarlo andare.</p>
        
        <p>Guardò il padre allontanarsi fino a diventare un puntino scuro all'orizzonte. Poi anche quel puntino sparì, inghiottito dalla strada e dalle colline.</p>
        
        <p>Solo allora Trejano si permise di tremare. Solo allora si accorse che stava piangendo.</p>`,
        choices: [
            {
                text: "➡️ Torna alla palafitta",
                nextParagraph: 11,
                stats: null
            }
        ],
        flags: {
            modify: { 'dimostrato_forza': true, 'maturita_emotiva': 1 }
        }
    },
    10: {
        id: 10,
        title: "L'Ultima Domanda",
        content: `<p>«PADRE!» gridò Trejano. «DOVE VAI DAVVERO?»</p>
        
        <p>La sua voce echeggiò tra le palafitte, facendo alzare in volo uno stormo di uccelli acquatici. Alcuni vicini si affacciarono dalle finestre, curiosi.</p>
        
        <p>Neiano si fermò. Per un lungo momento restò immobile, di spalle. Poi, lentamente, si voltò.</p>
        
        <p>Anche da quella distanza, Trejano poteva vedere il dolore sul suo volto.</p>
        
        <p>«Vado a cercare la verità!» gridò di rimando Neiano. «La verità su chi sei! E quando la troverò, tornerò! Te lo prometto, figlio mio! TORNERÒ!»</p>
        
        <p>Poi si voltò di nuovo e riprese a camminare, più veloce ora, come se temesse di non avere il coraggio di andarsene se si fosse fermato ancora.</p>`,
        choices: [
            {
                text: "➡️ Torna alla palafitta",
                nextParagraph: 11,
                stats: null
            }
        ],
        flags: {
            modify: { 'gridato_domanda': true, 'vicini_allarmati': true }
        }
    },
    11: {
        id: 11,
        title: "Il Villaggio si Sveglia",
        content: `<p>Trejano tornò alla palafitta con passi lenti. Il villaggio era completamente sveglio ora. I pescatori stavano uscendo con le loro barche, le donne preparavano il pane, i bambini correvano tra le palafitte giocando.</p>
        
        <p>Tutto era normale. Tutto era come sempre.</p>
        
        <p>Eppure per Trejano nulla sarebbe più stato come prima.</p>
        
        <p>«Ehi, Trejano!» Una voce familiare lo chiamò. Era Ago, il figlio del fabbro, suo amico d'infanzia. Un ragazzo di dieci anni con più energia di quanto il suo piccolo corpo potesse contenere. «Hai visto? Mio padre ha finito la nuova spada! È bellissima! Vuoi venire a vederla?»</p>
        
        <p>Trejano guardò l'amico. Per un momento pensò di raccontargli tutto. Ma poi... cosa avrebbe detto? Che suo padre era partito per una strada che non portava da nessuna parte? Che c'era una perla misteriosa nascosta da qualche parte? Che forse lui, Trejano, non era chi pensava di essere?</p>`,
        choices: [
            {
                text: "«Non ora, Ago. Ho bisogno di stare solo»",
                nextParagraph: 12,
                consequences: {
                    relationships: { ago: -1 }
                }
            },
            {
                text: "«Va bene, andiamo a vedere la spada»",
                nextParagraph: 13,
                consequences: {
                    relationships: { ago: 1 }
                }
            },
            {
                text: "«Ago... posso parlarti di una cosa?»",
                nextParagraph: 14,
                consequences: {
                    stats: { empatia: 1 },
                    relationships: { ago: 2 }
                }
            }
        ],
        flags: {
            set: { 'incontro_ago': true }
        }
    },
    12: {
        id: 12,
        title: "La Solitudine",
        content: `<p>«Oh» disse Ago, la delusione evidente sul viso. «Va bene. Se... se hai bisogno di parlare, sai dove trovarmi.»</p>
        
        <p>Il ragazzino si allontanò correndo, già distratto da qualche nuova avventura.</p>
        
        <p>Trejano entrò nella palafitta vuota. Neiano non c'era più. La sua assenza riempiva ogni angolo della casa come un'ombra silenziosa.</p>
        
        <p>Tre giorni. Doveva solo aspettare tre giorni.</p>
        
        <p>Ma cosa avrebbe fatto in quei tre giorni? Come avrebbe riempito il vuoto, le domande, l'attesa?</p>`,
        choices: [
            {
                text: "➡️ Cerca di riposare",
                nextParagraph: 15,
                stats: null
            }
        ],
        flags: {
            modify: { 'ago_relazione': 0 }
        }
    },
    13: {
        id: 13,
        title: "La Distrazione",
        content: `<p>Trejano seguì Ago verso la fucina. A volte, pensò, era meglio lasciarsi distrarre. A volte pensare troppo faceva solo male.</p>
        
        <p>La fucina era calda e rumorosa. Il padre di Ago, un uomo enorme con le braccia come tronchi d'albero, stava martellando qualcosa sul suo incudine. Il suono del metallo contro metallo riempiva l'aria.</p>
        
        <p>«Guarda!» disse Ago, indicando una spada appesa alla parete. «L'ha finita stamattina!»</p>
        
        <p>Era davvero bella. La lama luccicava alla luce del fuoco, l'elsa era decorata con semplici ma eleganti incisioni.</p>
        
        <p>«È per il comandante della guardia» spiegò Ago con orgoglio. «Mio padre è il miglior fabbro di tutta Saar!»</p>
        
        <p>Trejano annuì, ma la sua mente era altrove. Guardava la spada e pensava: "Questa è un'arma da cavaliere. Questa è ciò che vorrei portare un giorno."</p>
        
        <p>Ma perché Neiano aveva detto quelle cose sulla perla? Perché tutto sembrava così... importante?</p>
        
        <p>«Trejano?» Ago lo guardava curioso. «Stai bene? Sembri strano.»</p>`,
        choices: [
            {
                text: "«Sto bene. È solo che... mio padre è partito»",
                nextParagraph: 14,
                consequences: {
                    stats: { empatia: 1 }
                }
            },
            {
                text: "«Non è niente. Bella spada davvero!»",
                nextParagraph: 15,
                consequences: {
                    stats: { astuzia: 1 }
                }
            }
        ],
        flags: {
            modify: { 'ago_relazione': 1 }
        }
    },
    14: {
        id: 14,
        title: "Confidenze",
        content: `<p>Trejano si ritrovò a raccontare tutto. Le parole uscivano come un fiume in piena: il sogno di diventare cavaliere, la partenza di Neiano, la perla misteriosa, i tre giorni di attesa.</p>
        
        <p>Ago ascoltava a bocca aperta, gli occhi che brillavano di eccitazione.</p>
        
        <p>«Una perla magica!» esclamò quando Trejano ebbe finito. «E una strada misteriosa! È come nelle storie dei bardi!»</p>
        
        <p>«Non è una storia, Ago» disse Trejano. «È la mia vita. Ed è... confuso. Spaventoso.»</p>
        
        <p>«Ma anche emozionante!» insistette Ago. «Pensa! Forse sei un principe perduto! O... o il figlio di un mago! O...»</p>
        
        <p>«O forse sono solo un ragazzo trovato su una strada» lo interruppe Trejano. «Un ragazzo che non sa chi è né dove va.»</p>
        
        <p>Ago si fece serio, un'espressione rara sul suo volto gioviale.</p>
        
        <p>«Sai cosa penso?» disse. «Penso che tra tre giorni scoprirai qualcosa di incredibile. E io sarò qui ad aspettare di sentire la storia.»</p>`,
        choices: [
            {
                text: "➡️ Il primo giorno passa",
                nextParagraph: 15,
                stats: null
            }
        ],
        flags: {
            modify: { 'ago_relazione': 3, 'ago_sa_tutto': true }
        }
    },
    15: {
        id: 15,
        title: "Il Primo Giorno",
        content: `<p>Il primo giorno passò lentamente. Trejano cercò di tenersi occupato - riparò alcune reti, aiutò i vicini a trasportare del legname, pescò nel fiume - ma la sua mente continuava a tornare a Neiano e alla strada misteriosa.</p>
        
        <p>La sera cadde su Treja portando con sé l'umidità del fiume e il canto delle rane. Trejano si ritrovò sulla veranda della palafitta, seduto esattamente dove Neiano era solito sedersi dopo una giornata di pesca.</p>
        
        <p>Guardò verso la strada. Vuota. Nessuna figura familiare che tornava a casa.</p>
        
        <p><em>Due giorni ancora</em>, pensò. <em>Due giorni e poi saprò.</em></p>
        
        <p>Ma quella notte, mentre giaceva nel suo giaciglio ascoltando il fiume scorrere sotto le palafitte, Trejano si accorse di una cosa strana: non riusciva a immaginare quale storia Neiano volesse raccontargli. Ogni volta che ci provava, la mente scivolava via, come se stesse cercando di afferrare l'acqua con le mani.</p>
        
        <p>E questo, più di ogni altra cosa, lo teneva sveglio nella notte.</p>
        
        <p><strong>[CONTINUA - Altri paragrafi in sviluppo]</strong></p>`,
        choices: [
            {
                text: "➡️ Il Secondo Giorno",
                nextParagraph: 16,
                stats: null
            }
        ],
        flags: {
            modify: { 'giorni_attesa': 1 }
        }
    },
    16: {
        id: 16,
        title: "La Notte Senza Sonno",
        content: `<p>Quella notte Trejano non riuscì a dormire. Giaceva nel suo giaciglio di paglia, ascoltando il fiume scorrere sotto le palafitte, il suo eterno mormorio che un tempo lo cullava e ora sembrava sussurrare domande senza risposta.</p>
        
        <p>Pensava a Neiano. Dove era ora? Aveva già imboccato quella strada misteriosa? La strada che non conduceva in nessun luogo, come dicevano tutti nel villaggio.</p>
        
        <p>Ma perché Neiano ci andava, se non portava da nessuna parte?</p>
        
        <p>E quella perla... quella perla più grande di qualsiasi cosa Neiano avesse mai visto. Dove l'aveva nascosta? Perché era così pericolosa?</p>
        
        <p>Le leggi di Limb. Neiano aveva parlato delle leggi di Limb. Nessuno può possedere una gemma che non sia del proprio regno. Ma Trejano non apparteneva a nessun regno. Era solo un ragazzo trovato su una strada.</p>
        
        <p>Quando finalmente l'alba tingeva di rosa le acque del fiume, Trejano si alzò stanco ma inquieto. Due giorni ancora. Due lunghi giorni.</p>`,
        choices: [
            {
                text: "Vai a pescare per distrarti",
                nextParagraph: 17,
                consequences: {
                    stats: { agilita: 1 }
                }
            },
            {
                text: "Cerca di capire dove Neiano ha nascosto la perla",
                nextParagraph: 18,
                consequences: {
                    stats: { astuzia: 1 }
                }
            }
        ],
        flags: {
            set: { 'prima_notte_passata': true }
        }
    },
    17: {
        id: 17,
        title: "La Pesca Solitaria",
        content: `<p>Trejano prese la rete e la barca. L'acqua era fredda e calma, perfetta per pescare anguille. Ma senza Neiano, tutto sembrava diverso.</p>
        
        <p>Suo padre conosceva i posti migliori, sapeva leggere il fiume come altri leggevano i libri. Sapeva dove le anguille si nascondevano, quali movimenti facevano prima di abboccare.</p>
        
        <p>Trejano gettò la rete, aspettò, la ritirò. Vuota. Riprovò. Ancora vuota.</p>
        
        <p>Dopo un'ora aveva catturato solo due piccole anguille, magre e poco appetibili. In altri tempi, con Neiano, ne avrebbero prese dozzine.</p>
        
        <p>Si sedette sulla barca, guardando il villaggio da lontano. Le palafitte sembravano fragili, piccole, vulnerabili. Il suo mondo intero si reggeva su quelle sottili gambe di legno piantate nel fango.</p>
        
        <p>«Trejano!» Una voce lo chiamò dalla riva. Era Ago, che gli faceva cenni entusiasti.</p>`,
        choices: [
            {
                text: "Torna alla riva da Ago",
                nextParagraph: 19,
                consequences: {
                    relationships: { ago: 1 }
                }
            },
            {
                text: "Fai finta di non sentire, continua a pescare",
                nextParagraph: 20,
                consequences: {
                    relationships: { ago: -1 }
                }
            }
        ],
        flags: {
            set: { 'pescato_primo_giorno': true }
        }
    },
    18: {
        id: 18,
        title: "La Ricerca della Perla",
        content: `<p>Trejano tornò nella palafitta. Se Neiano aveva nascosto la perla, doveva essere qui, da qualche parte. Un oggetto così prezioso, così pericoloso... dove lo avresti nascosto tu?</p>
        
        <p>Guardò intorno alla stanza familiare. Il giaciglio di Neiano, ordinato come sempre. Il piccolo tavolo dove mangiavano insieme. Gli attrezzi da pesca appesi alle pareti. L'arazzo che Neiano aveva comprato anni fa da un mercante di passaggio, raffigurante una scena di caccia.</p>
        
        <p>L'arazzo.</p>
        
        <p>Trejano si avvicinò, lo esaminò. Era vecchio, i colori sbiaditi dal tempo. Ma c'era qualcosa di strano nel modo in cui pendeva dal muro. Non era piatto. Come se dietro...</p>
        
        <p>Con mani tremanti, sollevò un angolo dell'arazzo.</p>
        
        <p>Dietro, scavata nel legno della parete, c'era una piccola nicchia. E dentro la nicchia, avvolta in un panno scuro, qualcosa di rotondo.</p>`,
        choices: [
            {
                text: "Prendi l'oggetto e guarda cosa c'è dentro",
                nextParagraph: 21,
                stats: null
            },
            {
                text: "Rimetti a posto l'arazzo, non è il momento",
                nextParagraph: 22,
                consequences: {
                    stats: { saggezza: 1 }
                }
            }
        ],
        flags: {
            set: { 'nicchia_scoperta': true }
        }
    },
    19: {
        id: 19,
        title: "Il Progetto di Ago",
        content: `<p>Trejano remò verso la riva. Ago lo aspettava con un sorriso che sembrava troppo grande per il suo viso da bambino.</p>
        
        <p>«Ho avuto un'idea!» esclamò Ago prima ancora che Trejano scendesse dalla barca. «Un'idea fantastica!»</p>
        
        <p>«Quale idea?» chiese Trejano, cercando di sorridere nonostante la stanchezza.</p>
        
        <p>«Per passare il tempo mentre aspetti tuo padre! Potremmo... potremmo andare ad esplorare!»</p>
        
        <p>«Esplorare cosa?»</p>
        
        <p>«La strada!» disse Ago, abbassando la voce come se stesse rivelando un segreto. «Quella strada. Quella che... sai.»</p>
        
        <p>Trejano sentì un brivido lungo la schiena. La strada che non conduceva in nessun luogo. La strada dove era andato Neiano.</p>
        
        <p>«Ago, quella strada è pericolosa. Tutti lo dicono.»</p>
        
        <p>«Ma non dobbiamo andarci fino in fondo! Solo... solo un po'. Tanto per vedere. Non hai curiosità?»</p>`,
        choices: [
            {
                text: "«Hai ragione, andiamo a vedere»",
                nextParagraph: 23,
                consequences: {
                    stats: { agilita: 1 },
                    relationships: { ago: 2 }
                }
            },
            {
                text: "«No Ago, è troppo pericoloso»",
                nextParagraph: 24,
                consequences: {
                    stats: { saggezza: 1 }
                }
            }
        ],
        flags: {
            set: { 'ago_propone_esplorazione': true }
        }
    },
    20: {
        id: 20,
        title: "La Solitudine Scelta",
        content: `<p>Trejano fece finta di non sentire. Continuò a sistemare la rete, fingendo di essere concentrato sulla pesca. Dalla riva, vide Ago restare immobile per qualche momento, poi allontanarsi a testa bassa.</p>
        
        <p>Si sentì in colpa, ma aveva bisogno di stare solo. Aveva bisogno di pensare. Troppo stava succedendo, troppo velocemente.</p>
        
        <p>Passò il resto della mattinata sul fiume, perdendo la cognizione del tempo. Il sole saliva lento nel cielo, le ombre si accorciavano. Qualche pescatore passava in lontananza, ma nessuno gli si avvicinava. Tutti sapevano che Neiano era partito, e tutti rispettavano il silenzio di Trejano.</p>
        
        <p>Quando finalmente tornò a riva, aveva pescato abbastanza anguille per il pranzo. Ma il cuore era vuoto come le mattine senza Neiano.</p>
        
        <p>Sulla veranda della palafitta, qualcuno aveva lasciato qualcosa. Un piccolo pacchetto avvolto in foglie.</p>`,
        choices: [
            {
                text: "Apri il pacchetto",
                nextParagraph: 25,
                stats: null
            }
        ],
        flags: {
            set: { 'ago_deluso': true }
        }
    },
    21: {
        id: 21,
        title: "La Perla di Akoia",
        content: `<p>Con mani tremanti, Trejano prese il panno dalla nicchia. Era pesante, molto più di quanto si aspettasse. Lo posò sul tavolo e lentamente, quasi con reverenza, lo aprì.</p>
        
        <p>La perla.</p>
        
        <p>Non era come le perle che i pescatori trovavano a volte nei molluschi del fiume. Era... diversa. Enorme, delle dimensioni di un pugno chiuso, perfettamente sferica. E brillava. Anche nella luce fioca della palafitta, brillava di una luce propria, pallida come la luna.</p>
        
        <p>Trejano la toccò. Era calda. Pulsava sotto le sue dita come se fosse viva, come se un cuore battesse al suo interno.</p>
        
        <p>E improvvisamente, fu travolto da una sensazione. Immagini, suoni, emozioni che non erano sue. Vide una donna con una corona, vide un palazzo di marmo bianco, vide l'acqua che brillava sotto una luna enorme. Sentì amore, dolore, speranza, paura.</p>
        
        <p>Lasciò cadere la perla sul tavolo, il cuore che batteva all'impazzata.</p>
        
        <p>Cosa aveva appena visto? Cosa era quella perla?</p>`,
        choices: [
            {
                text: "Avvolgi di nuovo la perla e rimettila nella nicchia",
                nextParagraph: 26,
                consequences: {
                    stats: { saggezza: 2 }
                }
            },
            {
                text: "Tieni la perla con te, potrebbe essere importante",
                nextParagraph: 27,
                consequences: {
                    maturita: 1
                }
            }
        ],
        flags: {
            set: { 'perla_vista': true, 'perla_toccata': true }
        }
    },
    22: {
        id: 22,
        title: "La Saggezza dell'Attesa",
        content: `<p>Trejano rimise a posto l'arazzo con cura. Non era il momento. Neiano aveva nascosto quella cosa per un motivo. Aveva detto che avrebbe spiegato tutto al terzo tramonto.</p>
        
        <p>Doveva fidarsi. Doveva aspettare.</p>
        
        <p>Anche se ogni fibra del suo essere voleva sapere, voleva capire. Anche se la curiosità lo rodeva come un tarlo. Doveva essere paziente.</p>
        
        <p>Suo padre gli aveva sempre insegnato che la pazienza era la virtù più importante per un pescatore. Aspettare il momento giusto per gettare la rete. Aspettare che le anguille abbocchino. Aspettare che il fiume riveli i suoi segreti.</p>
        
        <p>Forse lo stesso valeva per i segreti degli uomini.</p>
        
        <p>Uscì dalla palafitta. Il sole era alto ora, il villaggio in piena attività. Qualcuno lo chiamò dalla riva. Era Ago.</p>`,
        choices: [
            {
                text: "Vai da Ago",
                nextParagraph: 19,
                stats: null
            }
        ],
        flags: {
            set: { 'perla_non_toccata': true, 'pazienza_dimostrata': true }
        }
    },
    23: {
        id: 23,
        title: "Verso la Strada Misteriosa",
        content: `<p>«Va bene» disse Trejano, sorprendendo se stesso. «Ma solo un po'. Solo per vedere dove inizia.»</p>
        
        <p>Il viso di Ago si illuminò. «Davvero? Oh, sarà un'avventura! Come nelle storie che racconta tuo padre!»</p>
        
        <p>I due ragazzi lasciarono il villaggio, dirigendosi verso la periferia dove le palafitte si diradavano. Là, poco distante, iniziava la strada.</p>
        
        <p>Era solo un sentiero, in realtà. Largo quanto un carro, serpeggiava tra l'erba alta e poi, dopo un paio di curve, cominciava ad inerpicarsi sulla collina che si affacciava su Treja.</p>
        
        <p>Nessuno la percorreva. Mai. L'erba cresceva alta ai bordi, e in alcuni punti invadeva il sentiero stesso. Era una strada dimenticata, o forse una strada che tutti avevano scelto di dimenticare.</p>
        
        <p>«È qui» sussurrò Ago, come se parlare troppo forte potesse svegliare qualcosa.</p>
        
        <p>Trejano guardò il sentiero che saliva nella collina, sparendo tra gli alberi. Da qualche parte là sopra, Neiano stava camminando. O forse aveva già raggiunto... cosa? Dove portava davvero quella strada?</p>`,
        choices: [
            {
                text: "Sali sulla collina, segui il sentiero",
                nextParagraph: 28,
                consequences: {
                    stats: { forza: 1 }
                }
            },
            {
                text: "Fermati qui, questo basta",
                nextParagraph: 29,
                consequences: {
                    stats: { saggezza: 1 }
                }
            }
        ],
        flags: {
            set: { 'strada_raggiunta': true }
        }
    },
    24: {
        id: 24,
        title: "Il Rifiuto Saggio",
        content: `<p>«No Ago» disse Trejano con fermezza. «Quella strada è pericolosa. Tutti nel villaggio lo dicono. Mio padre è andato là perché... perché aveva un motivo. Ma noi non dobbiamo andarci.»</p>
        
        <p>Il viso di Ago si afflosciò. «Ma... ma non hai curiosità? Non vuoi sapere dove porta?»</p>
        
        <p>«Certo che ho curiosità. Ma la curiosità non è una buona ragione per mettersi in pericolo.» Trejano mise una mano sulla spalla del bambino. «Mio padre tornerà tra due giorni. E allora, forse, mi racconterà cosa c'è là sopra. E io te lo dirò.»</p>
        
        <p>Ago annuì, anche se era chiaro che era deluso. «Va bene. Ma me lo prometti? Me lo dirai?»</p>
        
        <p>«Te lo prometto.»</p>
        
        <p>I due ragazzi tornarono verso il villaggio. Il sole era alto ora, e faceva caldo. Altri pescatori erano sul fiume, le loro barche punteggiavano l'acqua calma come foglie galleggianti.</p>
        
        <p>La vita continuava. Normale. Tranquilla.</p>
        
        <p>Ma per quanto tempo ancora?</p>`,
        choices: [
            {
                text: "Passa il pomeriggio con Ago",
                nextParagraph: 30,
                consequences: {
                    relationships: { ago: 1 }
                }
            }
        ],
        flags: {
            set: { 'strada_rifiutata': true }
        }
    },
    25: {
        id: 25,
        title: "Il Dono di Ago",
        content: `<p>Trejano prese il pacchetto. All'interno, avvolte con cura, c'erano tre piccole focacce ancora calde. Il pane che faceva la madre di Ago, quello dolce con il miele che Trejano amava tanto.</p>
        
        <p>Un bigliettino, scritto con la grafia incerta di un bambino:</p>
        
        <p><em>"Per quando hai fame. Tuo amico, Ago."</em></p>
        
        <p>Trejano sentì un nodo alla gola. Aveva ignorato Ago, lo aveva ferito, e lui aveva risposto con questo gesto di gentilezza.</p>
        
        <p>A volte, pensò, i bambini capiscono cose che gli adulti dimenticano.</p>
        
        <p>Mangiò una focaccia. Era buonissima, dolce e morbida. E mentre masticava, decise che appena finito sarebbe andato a cercare Ago per ringraziarlo.</p>
        
        <p>Forse non doveva affrontare tutto da solo. Forse aveva bisogno di un amico, anche se quell'amico aveva solo dieci anni.</p>`,
        choices: [
            {
                text: "Vai a cercare Ago",
                nextParagraph: 19,
                consequences: {
                    relationships: { ago: 2 }
                }
            }
        ],
        flags: {
            set: { 'focacce_ricevute': true }
        }
    },
    26: {
        id: 26,
        title: "Il Segreto Custodito",
        content: `<p>Con mani che ancora tremavano leggermente, Trejano avvolse di nuovo la perla nel panno scuro. La ripose nella nicchia e rimise l'arazzo al suo posto.</p>
        
        <p>Quello che aveva visto, quello che aveva sentito... non lo capiva. Ma sapeva che era importante. Sapeva che Neiano aveva ragione a tenerlo nascosto.</p>
        
        <p>Una perla che brillava di luce propria. Una perla che mostrava visioni quando la toccavi. Una perla che pulsava come un cuore vivo.</p>
        
        <p>Questa non era una perla comune. Questa era... magia? Potere? Mistero?</p>
        
        <p>Trejano si sedette al tavolo, la testa tra le mani. Due giorni ancora. Due giorni e Neiano avrebbe spiegato tutto. La perla, la strada, il segreto della sua nascita.</p>
        
        <p>Poteva aspettare. Doveva aspettare.</p>
        
        <p>Ma il peso di quel segreto ora gravava anche su di lui.</p>`,
        choices: [
            {
                text: "Esci dalla palafitta, hai bisogno di aria",
                nextParagraph: 30,
                consequences: {
                    maturita: 1
                }
            }
        ],
        flags: {
            set: { 'segreto_custodito': true }
        }
    },
    27: {
        id: 27,
        title: "La Perla Portata",
        content: `<p>Trejano prese la perla, ancora avvolta nel panno. Pesava più di quanto sembrasse. La mise nella sua borsa, quella che usava per portare il pesce al mercato.</p>
        
        <p>Non sapeva perché lo faceva. Ma quella perla... gli apparteneva, in qualche modo. Neiano l'aveva trovata con lui quando era neonato. Era legata al suo destino, qualunque fosse.</p>
        
        <p>E se Neiano non fosse tornato? Se qualcosa gli fosse successo su quella strada maledetta? Allora la perla sarebbe rimasta nascosta per sempre, e nessuno avrebbe mai saputo la verità.</p>
        
        <p>No. Era meglio tenerla con sé. Dove poteva vederla, proteggerla.</p>
        
        <p>Rimise l'arazzo a posto e uscì dalla palafitta. Il peso della borsa alla cintura era strano, ma rassicurante. Come se portasse con sé un pezzo del suo passato misterioso.</p>
        
        <p>Un pezzo di verità.</p>`,
        choices: [
            {
                text: "Vai al fiume a riflettere",
                nextParagraph: 30,
                consequences: {
                    maturita: 1
                }
            }
        ],
        flags: {
            set: { 'perla_con_se': true }
        }
    },
    28: {
        id: 28,
        title: "I Primi Passi sulla Strada",
        content: `<p>«Andiamo» disse Trejano, e cominciò a salire.</p>
        
        <p>Ago lo seguì, eccitato e un po' spaventato. Il sentiero era ripido, e l'erba alta ai lati sembrava volerli trattenere. Rovi si protendevano verso il centro, graffiando le gambe nude dei ragazzi.</p>
        
        <p>Dopo la prima curva, il villaggio scomparve alla vista. Gli alberi si facevano più fitti. Faggi enormi, i loro tronchi lisci e argentei, le loro chiome che filtravano la luce del sole in raggi dorati.</p>
        
        <p>«È bellissimo» sussurrò Ago.</p>
        
        <p>E lo era. C'era una quiete antica in quel bosco, un silenzio che non era vuoto ma pieno di vita nascosta. Il canto degli uccelli, il fruscio delle foglie, il sussurro del vento.</p>
        
        <p>Trejano guardò avanti. Il sentiero continuava a salire, serpeggiando tra gli alberi. Quanto lontano erano andati? Quanto lontano osavano andare?</p>
        
        <p>E poi vide qualcosa. Sul terreno, proprio al centro del sentiero. Un bastone da pesca. Il bastone da pesca di Neiano.</p>`,
        choices: [
            {
                text: "Raccogli il bastone, è di tuo padre",
                nextParagraph: 30,
                consequences: {
                    maturita: 1,
                    addItems: ['Bastone da pesca di Neiano']
                }
            }
        ],
        flags: {
            set: { 'strada_esplorata': true, 'bastone_trovato': true }
        }
    },
    29: {
        id: 29,
        title: "Il Confine Rispettato",
        content: `<p>«Basta così» disse Trejano. «Abbiamo visto dove inizia. Non dobbiamo andare più lontano.»</p>
        
        <p>Ago protestò debolmente, ma Trejano era fermo. C'era qualcosa in quella strada che lo metteva a disagio. Non era paura, esattamente. Era... rispetto? Cautela?</p>
        
        <p>Quella strada aveva portato via suo padre. Aveva inghiottito vent'uomini del villaggio e ne aveva restituiti solo tredici, confusi e spaventati. Non era un luogo per due ragazzi curiosi.</p>
        
        <p>«Torniamo» disse. «Abbiamo avuto la nostra piccola avventura.»</p>
        
        <p>I due ragazzi tornarono indietro, scendendo la collina. Quando raggiunsero il punto dove il sentiero diventava pianura, Trejano si voltò un'ultima volta.</p>
        
        <p>La strada saliva, sparendo tra gli alberi. Silenziosa. Paziente. Come se aspettasse qualcosa.</p>
        
        <p>O qualcuno.</p>`,
        choices: [
            {
                text: "Torna al villaggio con Ago",
                nextParagraph: 30,
                consequences: {
                    relationships: { ago: 1 }
                }
            }
        ],
        flags: {
            set: { 'confine_rispettato': true }
        }
    },
    30: {
        id: 30,
        title: "Il Tramonto del Primo Giorno",
        content: `<p>Il sole stava calando quando Trejano si ritrovò sulla veranda della palafitta. Lo stesso posto dove si era seduto la sera prima, quando Neiano era ancora lì.</p>
        
        <p>Un giorno era passato. Restavano due giorni. Due giorni e poi Neiano sarebbe tornato. Due giorni e poi avrebbe saputo la verità.</p>
        
        <p>Il cielo si tingeva di rosa e arancione, gli stessi colori che aveva visto quella mattina all'alba. Il fiume rifletteva quei colori, trasformandosi in un nastro di fuoco liquido.</p>
        
        <p>Era bello. Era casa. Era tutto quello che aveva sempre conosciuto.</p>
        
        <p>Ma Trejano aveva la sensazione, chiara e inquietante, che presto tutto questo sarebbe cambiato. Che dopo il ritorno di Neiano, dopo la storia che avrebbe raccontato, niente sarebbe più stato lo stesso.</p>
        
        <p>Il vento soffiò tra i suoi capelli bianchi, portando con sé il profumo della sera. E da qualche parte, lontana ma non troppo, una cornacchia gracchiò tre volte.</p>
        
        <p><strong>Fine del Primo Giorno.</strong></p>`,
        choices: [
            {
                text: "➡️ Il Secondo Giorno",
                nextParagraph: 31,
                stats: null
            }
        ],
        flags: {
            set: { 'primo_giorno_finito': true },
            modify: { 'giorni_attesa': 2 }
        }
    },

    31: {
        id: 31,
        title: "Il Secondo Giorno - Risveglio",
        content: `<p>Trejano si svegliò con la prima luce dell'alba. Aveva dormito poco e male, tormentato da sogni confusi di strade che non portavano da nessuna parte e perle che brillavano nel buio.</p>
        
        <p>Si alzò dal giaciglio con le membra indolenzite. La palafitta era silenziosa, vuota. Il secondo giorno di attesa era cominciato.</p>
        
        <p>Due giorni. Solo due giorni ancora.</p>
        
        <p>Uscì sulla veranda. Il fiume scorreva placido, avvolto nella nebbia mattutina. Alcune barche erano già sull'acqua - i pescatori più mattinieri che iniziavano la loro giornata.</p>
        
        <p>Trejano guardò verso est, verso la strada. Nessun movimento. Nessuna figura che tornava.</p>
        
        <p>«Devo tenermi occupato» disse a voce alta, come se parlare rendesse più reale la decisione. «Devo fare qualcosa, altrimenti impazzirò.»</p>`,
        choices: [
            {
                text: "Vai a pescare da solo per tutta la mattina",
                nextParagraph: 32,
                consequences: {
                    stats: { agilita: 1 }
                }
            },
            {
                text: "Vai a cercare Ago, hai bisogno di compagnia",
                nextParagraph: 33,
                consequences: {
                    relationships: { ago: 1 }
                }
            },
            {
                text: "Ripara le reti sulla veranda, resta vicino a casa",
                nextParagraph: 34,
                consequences: {
                    stats: { saggezza: 1 }
                }
            }
        ],
        flags: {
            set: { 'secondo_giorno_iniziato': true }
        }
    },
    32: {
        id: 32,
        title: "La Pesca Solitaria del Secondo Giorno",
        content: `<p>Trejano prese il bastone, le pinze e il sacco. Pescare da solo era difficile, ma forse la concentrazione richiesta lo avrebbe distratto dai pensieri cupi.</p>
        
        <p>Remò verso il suo punto preferito, dove il fiume formava un'ansa e l'acqua era più profonda. Lì le anguille si nascondevano tra i sassi sul fondo.</p>
        
        <p>Ma oggi qualcosa era diverso. Il fiume sembrava... inquieto. L'acqua si muoveva in modo strano, formando piccoli mulinelli che non aveva mai visto prima.</p>
        
        <p>E poi vide qualcosa. Una forma bianca che nuotava sotto la superficie. Troppo grande per essere un pesce. Troppo veloce per essere legno alla deriva.</p>
        
        <p>La seguì con lo sguardo mentre spariva nell'acqua scura. Cosa era stato?</p>
        
        <p>Un brivido gli percorse la schiena. C'erano storie, nel villaggio. Storie di creature che vivevano nel fiume. Creature che apparivano solo quando qualcosa stava per cambiare.</p>`,
        choices: [
            {
                text: "Continua a pescare, erano solo suggestioni",
                nextParagraph: 35,
                consequences: {
                    stats: { forza: 1 }
                }
            },
            {
                text: "Torna a riva, meglio non restare qui",
                nextParagraph: 36,
                consequences: {
                    stats: { saggezza: 1 }
                }
            }
        ],
        flags: {
            set: { 'creatura_bianca_vista': true }
        }
    },
    33: {
        id: 33,
        title: "Alla Ricerca di Ago",
        content: `<p>Trejano andò verso la casa di Ago. Il ragazzino abitava con la sua famiglia in una piccola casa di legno vicino ai campi coltivati, non lontano dal villaggio.</p>
        
        <p>Quando arrivò, trovò Ago che stava aiutando suo padre a portare sacchi di grano dal campo al granaio. Il ragazzo, vedendolo, lasciò cadere il sacco che stava trasportando e corse incontro all'amico.</p>
        
        <p>«Trejano! Stavo proprio pensando a te! Come va? È tornato tuo padre?»</p>
        
        <p>«No» rispose Trejano. «Mancano ancora due giorni.»</p>
        
        <p>«Devono essere giorni lunghissimi per te» disse Ago, con una maturità sorprendente per un bambino di dieci anni. «Vuoi che facciamo qualcosa insieme? Possiamo andare a esplorare, o pescare, o...»</p>
        
        <p>Il padre di Ago li chiamò: «Ago! Questi sacchi non si trasportano da soli!»</p>
        
        <p>«Posso aiutare» si offrì Trejano.</p>`,
        choices: [
            {
                text: "Aiuta Ago e suo padre con i sacchi",
                nextParagraph: 37,
                consequences: {
                    stats: { forza: 1 },
                    relationships: { ago: 1 }
                }
            },
            {
                text: "«Meglio che tu finisca il lavoro, ci vediamo dopo»",
                nextParagraph: 38,
                stats: null
            }
        ],
        flags: {
            set: { 'ago_incontrato_secondo_giorno': true }
        }
    },
    34: {
        id: 34,
        title: "Le Reti e i Ricordi",
        content: `<p>Trejano si sedette sulla veranda con le reti da riparare. Era un lavoro che aveva fatto mille volte con Neiano. Le mani si muovevano quasi da sole, intrecciando i fili, annodando, riparando gli strappi.</p>
        
        <p>Ma ogni gesto gli ricordava il padre. Ogni nodo era una lezione appresa. Ogni movimento delle dita portava con sé un ricordo.</p>
        
        <p><em>"Tira forte, Trejano. Un nodo debole significa anguille perdute."</em></p>
        
        <p><em>"Vedi questa rete? Ha più di vent'anni. Se la curi bene, durerà altri venti."</em></p>
        
        <p><em>"Le cose importanti richiedono tempo e pazienza. Come pescare. Come vivere."</em></p>
        
        <p>Trejano si accorse che stava piangendo solo quando una lacrima cadde sulla rete, bagnando i fili.</p>
        
        <p>Improvvisamente, sentì una presenza. Si voltò di scatto.</p>
        
        <p>Un piccolo topo dai lunghi baffi bianchi lo stava osservando dal bordo della veranda. I suoi occhi erano stranamente intelligenti, quasi... umani?</p>`,
        choices: [
            {
                text: "Osserva il topo con curiosità",
                nextParagraph: 39,
                consequences: {
                    stats: { saggezza: 1 }
                }
            },
            {
                text: "Scaccialo via, è solo un topo",
                nextParagraph: 40,
                stats: null
            }
        ],
        flags: {
            set: { 'topo_bianco_visto': true, 'reti_riparate': true }
        }
    },
    35: {
        id: 35,
        title: "La Pesca Continua",
        content: `<p>Trejano scosse la testa. «Sono solo suggestioni. Troppo tempo a pensare a cose strane.»</p>
        
        <p>Si concentrò sulla pesca. Colpì i sassi con il bastone, cercando di stanare le anguille. Una, due, tre... Lentamente, il sacco cominciò a riempirsi.</p>
        
        <p>Ma non riusciva a scacciare del tutto la sensazione di essere osservato. Di tanto in tanto guardava l'acqua, cercando quella forma bianca. Ma non la vide più.</p>
        
        <p>Dopo alcune ore, quando il sole era alto nel cielo, tornò a riva con un buon bottino. Abbastanza anguille per diversi pasti.</p>
        
        <p>«Almeno non morirò di fame» disse tra sé, cercando di sorridere.</p>
        
        <p>Ma il sorriso non raggiunse i suoi occhi.</p>`,
        choices: [
            {
                text: "Torna alla palafitta",
                nextParagraph: 41,
                stats: null
            }
        ],
        flags: {
            set: { 'pesca_secondo_giorno_completata': true }
        }
    },
    36: {
        id: 36,
        title: "Il Ritorno Prudente",
        content: `<p>Trejano remò velocemente verso la riva. Non aveva paura, esattamente. Ma c'era qualcosa nell'aria, nel fiume, che non andava.</p>
        
        <p>Quando toccò terra, si voltò a guardare l'acqua. Per un momento, gli sembrò di vedere di nuovo quella forma bianca, appena sotto la superficie. Poi sparì.</p>
        
        <p>«Forse dovrei parlarne con qualcuno» pensò. «Forse i vecchi del villaggio sapranno cos'era.»</p>
        
        <p>Ma poi decise di no. Aveva già abbastanza preoccupazioni. Non aveva bisogno di aggiungerne altre.</p>
        
        <p>Tirò la barca a riva e si diresse verso il villaggio. Aveva bisogno di compagnia. Aveva bisogno di sentire voci umane, di vedere persone che sorridevano e vivevano normalmente.</p>
        
        <p>Aveva bisogno di dimenticare, anche solo per poco, che suo padre era sparito su una strada che non portava da nessuna parte.</p>`,
        choices: [
            {
                text: "Vai al mercato del villaggio",
                nextParagraph: 41,
                stats: null
            }
        ],
        flags: {
            set: { 'ritorno_prudente': true }
        }
    },
    37: {
        id: 37,
        title: "Il Lavoro Condiviso",
        content: `<p>Per le ore successive, Trejano aiutò Ago e suo padre a trasportare i sacchi di grano. Era un lavoro duro - ogni sacco pesava quanto un bambino piccolo - ma c'era qualcosa di rassicurante nella fatica fisica.</p>
        
        <p>Il padre di Ago, un uomo robusto con mani enormi e un sorriso gentile, lo ringraziò più volte. «Sei un bravo ragazzo, Trejano. Neiano ha fatto bene a crescerti così.»</p>
        
        <p>Quelle parole scaldarono il cuore di Trejano più di quanto avrebbe immaginato.</p>
        
        <p>Quando finirono, il padre di Ago preparò del pane fresco con formaggio per i due ragazzi. Mangiarono seduti all'ombra di un grande albero, guardando i campi che si estendevano fino all'orizzonte.</p>
        
        <p>«Sai» disse Ago con la bocca piena, «a volte penso che vivere qui, a Treja, sia noioso. Ma poi guardo tutto questo...» indicò i campi, il fiume in lontananza, le colline, «e penso che forse non è poi così male.»</p>
        
        <p>«Non è noioso» rispose Trejano. «È casa.»</p>`,
        choices: [
            {
                text: "Passa il pomeriggio con Ago",
                nextParagraph: 42,
                consequences: {
                    relationships: { ago: 2 }
                }
            }
        ],
        flags: {
            set: { 'lavoro_con_ago': true }
        }
    },
    38: {
        id: 38,
        title: "L'Attesa Continua",
        content: `<p>«Meglio che tu finisca il lavoro» disse Trejano. «Ci vediamo dopo.»</p>
        
        <p>Ago annuì, anche se sembrava deluso. «Va bene. Se hai bisogno di me, sai dove trovarmi!»</p>
        
        <p>Trejano tornò verso il villaggio. Il sole saliva nel cielo, scaldando l'aria. Sarebbe stata una giornata calda.</p>
        
        <p>Passò davanti alla locanda, dove alcuni uomini stavano bevendo birra e discutendo animatamente. Passò davanti alla fucina, da dove provenivano i colpi ritmici del martello sull'incudine.</p>
        
        <p>Tutto era normale. Tutto era come sempre.</p>
        
        <p>Ma per Trejano nulla era normale. Ogni cosa gli ricordava l'assenza di Neiano. Ogni angolo del villaggio portava un ricordo.</p>
        
        <p>Si ritrovò, senza averlo pianificato, vicino all'inizio della strada. Quella strada.</p>`,
        choices: [
            {
                text: "Guarda la strada, cerca segni di movimento",
                nextParagraph: 43,
                consequences: {
                    stats: { empatia: 1 }
                }
            },
            {
                text: "Allontanati, non serve tormentarsi",
                nextParagraph: 41,
                stats: null
            }
        ],
        flags: null
    },
    39: {
        id: 39,
        title: "Il Topo dai Baffi Bianchi",
        content: `<p>Trejano posò la rete e osservò il topo. Non scappava. Non si muoveva nemmeno. Restava lì, seduto sulle zampe posteriori, a guardarlo.</p>
        
        <p>«Che cosa vuoi?» chiese Trejano, sentendosi un po' stupido a parlare con un topo.</p>
        
        <p>Il topo inclinò la testa, come se stesse riflettendo sulla domanda. Poi fece un verso strano - non il tipico squittio di un topo, ma qualcosa di più... musicale?</p>
        
        <p>E poi, così rapidamente che Trejano quasi non lo vide muoversi, il topo corse via, sparendo in un buco nel muro della palafitta.</p>
        
        <p>Trejano rimase a fissare il buco per un lungo momento. Aveva immaginato tutto? O c'era davvero qualcosa di strano in quel topo?</p>
        
        <p>«Sto diventando pazzo» disse a voce alta. «Parlo con i topi e vedo cose strane nel fiume. Forse ho solo bisogno di dormire di più.»</p>
        
        <p>Ma sapeva che non era vero. C'era qualcosa nell'aria. Qualcosa stava per accadere.</p>`,
        choices: [
            {
                text: "Continua a riparare le reti",
                nextParagraph: 41,
                stats: null
            }
        ],
        flags: {
            set: { 'topo_osservato': true, 'erhon_incontrata_forma_topo': true }
        }
    },
    40: {
        id: 40,
        title: "Il Topo Scacciato",
        content: `<p>«Via! Fuori di qui!» Trejano agitò una mano verso il topo.</p>
        
        <p>Il piccolo animale lo guardò per un momento con quelli che sembravano occhi... dispiaciuti? Poi scappò via, sparendo in un buco nel muro.</p>
        
        <p>Trejano tornò alle sue reti. Era solo un topo. I topi cercavano sempre cibo intorno alle case. Non c'era nulla di strano.</p>
        
        <p>Ma mentre annodava i fili, non riusciva a scacciare la sensazione di aver perso qualcosa. Come se avesse scacciato via non solo un topo, ma... qualcos'altro.</p>
        
        <p>«Stupidaggini» si disse. «Sono solo stanco e preoccupato.»</p>
        
        <p>Continuò a lavorare, ma le sue mani tremavano leggermente.</p>`,
        choices: [
            {
                text: "Finisci di riparare le reti",
                nextParagraph: 41,
                stats: null
            }
        ],
        flags: {
            set: { 'topo_scacciato': true }
        }
    },
        41: {
        id: 41,
        title: "Il Pomeriggio del Secondo Giorno",
        content: `<p>Il pomeriggio scivolò via lentamente. Trejano si trovò a vagare per il villaggio senza meta, osservando la vita che continuava intorno a lui.</p>
        
        <p>I pescatori rientravano con le loro catture. Le donne lavavano i panni al fiume, chiacchierando e ridendo. I bambini giocavano tra le palafitte, rincorrendosi e gridando.</p>
        
        <p>Tutto era così normale. Così... sereno.</p>
        
        <p>Ma Trejano si sentiva come se stesse guardando tutto da dietro un velo. Come se non facesse più davvero parte di quel mondo.</p>
        
        <p>«Ehi, Trejano!» Il vecchio Soriano, il locandiere, lo chiamò dalla porta della sua taverna. «Vieni qui un momento!»</p>
        
        <p>Trejano si avvicinò. Soriano era un uomo enorme, con una barba bianca che gli arrivava al petto e occhi che brillavano di perpetua allegria.</p>
        
        <p>«Ho sentito che tuo padre è partito» disse Soriano, facendogli cenno di entrare. «Siediti, ragazzo. Ti offro da bere.»</p>`,
        choices: [
            {
                text: "Entra nella locanda",
                nextParagraph: 44,
                consequences: {
                    stats: { empatia: 1 }
                }
            },
            {
                text: "Ringrazia ma declina, preferisci stare solo",
                nextParagraph: 45,
                stats: null
            }
        ],
        flags: {
            set: { 'pomeriggio_secondo_giorno': true }
        }
    },
    42: {
        id: 42,
        title: "Il Pomeriggio con Ago",
        content: `<p>Trejano e Ago passarono il pomeriggio insieme. Andarono a pescare nel fiume, anche se non catturarono molto. Esplorarono la palude vicino al villaggio, saltando tra le rocce e cercando rane.</p>
        
        <p>Ago chiacchierava incessantemente - di tutto e di niente. Parlava dei suoi sogni di diventare un grande avventuriero, di visitare le sette penisole, di vedere un drago.</p>
        
        <p>«Pensi che i draghi esistano davvero?» chiese a un certo punto.</p>
        
        <p>«Non lo so» rispose Trejano. «Forse. Il mondo è grande.»</p>
        
        <p>«Se esistono, un giorno li vedremo insieme» disse Ago con convinzione. «Tu diventerai un cavaliere e io... io sarò il tuo scudiero! O forse anche io diventerò un cavaliere. Cavalieri Trejano e Ago! Suona bene, no?»</p>
        
        <p>Trejano sorrise. Era impossibile non sorridere quando Ago era così entusiasta.</p>
        
        <p>«Sì» disse. «Suona bene.»</p>
        
        <p>Ma mentre pronunciava quelle parole, sentì un peso al cuore. Un presentimento. Come se sapesse che quei sogni infantili sarebbero stati spazzati via molto presto.</p>`,
        choices: [
            {
                text: "Il pomeriggio finisce, torna a casa",
                nextParagraph: 46,
                consequences: {
                    relationships: { ago: 1 }
                }
            }
        ],
        flags: {
            set: { 'pomeriggio_con_ago': true }
        }
    },
    43: {
        id: 43,
        title: "La Strada Silenziosa",
        content: `<p>Trejano si fermò all'inizio della strada, guardando verso l'alto. Il sentiero saliva tra gli alberi, sparendo oltre la prima curva.</p>
        
        <p>Silenzio. Nessun movimento. Nessun segno di vita.</p>
        
        <p>«Padre» sussurrò. «Dove sei?»</p>
        
        <p>Il vento soffiò tra i rami, portando con sé un suono. Forse era solo il fruscio delle foglie. O forse... voci?</p>
        
        <p>Trejano tese l'orecchio. Sì, erano voci. Lontane, indistinte. Non riusciva a capire le parole, ma c'era qualcosa di strano in quei suoni. Qualcosa di antico, di altro.</p>
        
        <p>E poi, all'improvviso, silenzio assoluto. Anche il vento si fermò. Anche gli uccelli smisero di cantare.</p>
        
        <p>Un brivido gelido percorse la schiena di Trejano.</p>
        
        <p>«Vattene da qui» disse una voce dietro di lui.</p>
        
        <p>Trejano si voltò di scatto. Era il vecchio Mentore, un pescatore così anziano che nessuno ricordava più la sua vera età. I suoi occhi erano bianchi per la cataratta, ma sembravano vedere oltre le apparenze.</p>
        
        <p>«Quella strada non è per te. Non ancora.»</p>`,
        choices: [
            {
                text: "«Cosa intende, signore?»",
                nextParagraph: 47,
                consequences: {
                    stats: { saggezza: 1 }
                }
            },
            {
                text: "Allontanati senza rispondere",
                nextParagraph: 41,
                stats: null
            }
        ],
        flags: {
            set: { 'mentore_incontrato': true }
        }
    },
    44: {
        id: 44,
        title: "Nella Locanda",
        content: `<p>Trejano entrò nella locanda. Era buio e fresco dentro, un piacevole contrasto con il caldo pomeriggio. L'odore di stufato di anguilla riempiva l'aria.</p>
        
        <p>Soriano gli mise davanti una tazza di sidro di mele. «Bevi. È fresco.»</p>
        
        <p>Trejano bevve. Era buono, dolce e aspro allo stesso tempo.</p>
        
        <p>«Tuo padre è un buon uomo» disse Soriano dopo un momento di silenzio. «Un uomo saggio. Se è partito, aveva una buona ragione.»</p>
        
        <p>«Lo so» rispose Trejano. «Ma... non capisco. Perché quella strada? Tutti dicono che è maledetta.»</p>
        
        <p>Soriano si grattò la barba pensieroso. «Maledetta... forse. O forse è solo dimenticata. Sai, quella strada una volta portava da qualche parte. Prima della guerra, prima che i regni si chiudessero in se stessi.»</p>
        
        <p>«La guerra?»</p>
        
        <p>«La Guerra dei Venti Regni. Tanto tempo fa. Prima che tu nascessi. Prima che molti di noi nascessero.» Soriano guardò nel vuoto, come se vedesse cose che Trejano non poteva vedere. «Cambiò tutto. Le strade si chiusero. I confini divennero muri. E quella strada... quella strada fu dimenticata.»</p>`,
        choices: [
            {
                text: "«Ma dove portava? Dove porta ora?»",
                nextParagraph: 48,
                consequences: {
                    stats: { saggezza: 1 }
                }
            }
        ],
        flags: {
            set: { 'soriano_guerra_raccontata': true }
        }
    },
    45: {
        id: 45,
        title: "La Solitudine Cercata",
        content: `<p>«Grazie, signor Soriano, ma preferirei stare solo» disse Trejano.</p>
        
        <p>Il vecchio locandiere annuì, comprensivo. «Capisco, ragazzo. Ma ricorda: se hai bisogno di parlare, la mia porta è sempre aperta.»</p>
        
        <p>Trejano si allontanò dalla locanda e tornò alla palafitta. Il sole stava iniziando a calare. Presto sarebbe stato il secondo tramonto.</p>
        
        <p>Si sedette sulla veranda, nella stessa posizione in cui si era seduto la sera prima. E la sera prima ancora, quando Neiano era ancora qui.</p>
        
        <p>Guardò il fiume, le palafitte, le colline in lontananza. Tutto era immobile nella luce dorata del pomeriggio.</p>
        
        <p>E improvvisamente, senza preavviso, sentì le lacrime scendere sulle guance.</p>
        
        <p>Non stava piangendo per la tristezza, esattamente. O per la paura. Era qualcosa di più profondo. Era... solitudine. Una solitudine così grande che sembrava inghiottirlo intero.</p>`,
        choices: [
            {
                text: "Lascia che le lacrime scorrano",
                nextParagraph: 49,
                consequences: {
                    maturita: 1
                }
            }
        ],
        flags: {
            set: { 'pianto_secondo_giorno': true }
        }
    },
    46: {
        id: 46,
        title: "Il Tramonto del Secondo Giorno",
        content: `<p>Quando Trejano tornò alla palafitta, il sole stava già calando. Il cielo si tingeva di arancione e rosso, colori di fuoco che si riflettevano sull'acqua del fiume.</p>
        
        <p>Si sedette sulla veranda, guardando lo spettacolo. Era bellissimo. Doloroso nella sua bellezza.</p>
        
        <p>Un altro tramonto. Ne restava solo uno.</p>
        
        <p>Domani sera, al tramonto del terzo giorno, Neiano sarebbe tornato. O almeno, così aveva promesso.</p>
        
        <p>Ma cosa succedeva se non tornava? Cosa succedeva se qualcosa gli era accaduto su quella strada maledetta?</p>
        
        <p>Trejano scosse la testa, cercando di scacciare quei pensieri. Doveva avere fede. Doveva credere che suo padre sarebbe tornato.</p>
        
        <p>Il sole toccò l'orizzonte, poi lentamente scivolò al di sotto. Le ombre si allungarono, il cielo passò dal rosso al viola al blu scuro.</p>
        
        <p>Le prime stelle cominciarono a brillare.</p>
        
        <p><strong>Fine del Secondo Giorno.</strong></p>`,
        choices: [
            {
                text: "➡️ Il Terzo Giorno",
                nextParagraph: 51,
                stats: null
            }
        ],
        flags: {
            set: { 'secondo_giorno_finito': true },
            modify: { 'giorni_attesa': 1 }
        }
    },
    47: {
        id: 47,
        title: "Le Parole del Mentore",
        content: `<p>«Cosa intende, signore?» chiese Trejano. «Perché dice che non è ancora per me?»</p>
        
        <p>Il vecchio Mentore lo guardò con quegli occhi bianchi che sembravano vedere tutto. «Perché quella strada chiama solo chi è pronto. Chi ha qualcosa da cercare. Chi ha qualcosa da perdere.»</p>
        
        <p>«Mio padre...»</p>
        
        <p>«Tuo padre era pronto. Tu non ancora.» Il vecchio mise una mano sulla spalla di Trejano. Era una mano leggera come una piuma, ma Trejano sentì un peso enorme in quel tocco. «Ma presto lo sarai. Molto presto. E quando quel momento arriverà, riconoscerai la strada. E la strada riconoscerà te.»</p>
        
        <p>Il Mentore si allontanò, trascinando i piedi nella polvere. Trejano lo guardò andare via, confuso e inquietato dalle sue parole.</p>
        
        <p>Cosa aveva voluto dire? Come poteva una strada "riconoscere" qualcuno?</p>`,
        choices: [
            {
                text: "Torna al villaggio",
                nextParagraph: 41,
                stats: null
            }
        ],
        flags: {
            set: { 'profezia_mentore': true }
        }
    },
    48: {
        id: 48,
        title: "La Storia della Strada",
        content: `<p>«Ma dove portava?» insistette Trejano. «Dove porta ora?»</p>
        
        <p>Soriano sospirò profondamente. «Nessuno lo sa con certezza. C'è chi dice che portasse alle terre alte, dove vivono le aquile. C'è chi dice che conducesse ai regni perduti, quelli che sparirono durante la guerra.»</p>
        
        <p>«I regni perduti?»</p>
        
        <p>«Prima della guerra ce n'erano venti. Venti regni, venti gemme. Dopo la guerra ne rimasero solo sette. Gli altri... sparirono. Inghiottiti dalla terra, dicono alcuni. Distrutti dal fuoco, dicono altri. Trasformati in deserto, dicono altri ancora.»</p>
        
        <p>Soriano si avvicinò, abbassando la voce. «Ma c'è una storia che pochi conoscono. Una storia che i vecchi sussurrano quando pensano che i giovani non ascoltino. Dicono che quella strada non porta a un luogo fisico. Dicono che porta... al destino.»</p>
        
        <p>«Al destino?»</p>
        
        <p>«A ciò che sei destinato a diventare. A ciò che devi essere.» Soriano si raddrizzò. «Ma sono solo storie da vecchi. Superstizioni.»</p>
        
        <p>Ma il modo in cui lo disse fece capire a Trejano che Soriano non pensava affatto che fossero solo storie.</p>`,
        choices: [
            {
                text: "«Grazie, signor Soriano»",
                nextParagraph: 46,
                consequences: {
                    stats: { saggezza: 1 }
                }
            }
        ],
        flags: {
            set: { 'storia_strada_appresa': true }
        }
    },
    49: {
        id: 49,
        title: "Le Lacrime e la Notte",
        content: `<p>Trejano lasciò che le lacrime scorressero. Non cercò di fermarle, non si vergognò. Pianse per Neiano, per la paura, per la solitudine. Pianse per tutto quello che era cambiato e per tutto quello che stava per cambiare.</p>
        
        <p>Quando finalmente le lacrime si fermarono, sentì una strana pace. Non era felicità. Non era sollievo. Era... accettazione. Accettazione del fatto che la sua vita non sarebbe mai più stata la stessa.</p>
        
        <p>Il sole era tramontato completamente. La notte era scesa su Treja, portando con sé il canto delle rane e il profumo dell'acqua.</p>
        
        <p>Trejano entrò nella palafitta e si sdraiò sul giaciglio. Quella notte dormì meglio. Non un sonno profondo, ma un sonno tranquillo. Un sonno di chi ha accettato ciò che non può cambiare.</p>
        
        <p>E nei suoi sogni, vide una strada che saliva verso il cielo. E alla fine della strada, una luce.</p>`,
        choices: [
            {
                text: "➡️ Il Terzo Giorno",
                nextParagraph: 51,
                consequences: {
                    maturita: 1
                }
            }
        ],
        flags: {
            set: { 'pianto_liberatorio': true, 'seconda_notte_serena': true }
        }
    },
    50: {
        id: 50,
        title: "La Vigilia dell'Attesa",
        content: `<p>La seconda notte passò. Trejano dormì a tratti, svegliandosi spesso per guardare fuori dalla finestra, verso la strada.</p>
        
        <p>Ogni volta vedeva solo oscurità e stelle.</p>
        
        <p>All'alba del terzo giorno, si alzò con un senso di anticipazione misto a terrore. Questo era il giorno. Il giorno in cui Neiano avrebbe dovuto tornare. Il giorno in cui avrebbe saputo la verità.</p>
        
        <p>Si vestì lentamente, ritardando il momento di uscire. Come se restare nella palafitta potesse fermare il tempo, impedire che il giorno avanzasse verso il suo inevitabile tramonto.</p>
        
        <p>Ma alla fine uscì. Il sole era già sorto, tingendo il mondo di oro rosato.</p>
        
        <p>Il terzo giorno era cominciato.</p>
        
        <p>L'ultimo giorno di attesa.</p>
        
        <p><strong>[Il Terzo Giorno inizia al paragrafo 51]</strong></p>`,
        choices: [
            {
                text: "➡️ Il Terzo Giorno",
                nextParagraph: 51,
                stats: null
            }
        ],
        flags: {
            set: { 'terzo_giorno_inizia': true }
        }
    },
    51: {
        id: 51,
        title: "Il Terzo Giorno - L'Alba dell'Attesa",
        content: `<p>Trejano si svegliò all'alba del terzo giorno. Non aveva dormito quasi per niente. Ogni rumore nella notte lo aveva fatto sobbalzare, sperando che fosse Neiano che tornava.</p>
        
        <p>Ma non era tornato.</p>
        
        <p>Oggi. Doveva tornare oggi, al tramonto del terzo giorno. Così aveva promesso.</p>
        
        <p>Trejano uscì sulla veranda. Il cielo era grigio, carico di nuvole basse. L'aria era umida e pesante, come prima di un temporale. Il fiume scorreva più veloce del solito, l'acqua scura e agitata.</p>
        
        <p>Tutto sembrava sbagliato. Tutto sembrava presagio di qualcosa di terribile.</p>
        
        <p>«È solo paura» disse Trejano a voce alta, cercando di convincersi. «Padre tornerà. Ha promesso.»</p>
        
        <p>Ma le sue stesse parole suonavano vuote nell'aria umida del mattino.</p>`,
        choices: [
            {
                text: "Resta sulla veranda, guarda verso la strada",
                nextParagraph: 52,
                consequences: {
                    stats: { empatia: 1 }
                }
            },
            {
                text: "Vai a cercare Ago, non vuoi essere solo oggi",
                nextParagraph: 53,
                consequences: {
                    relationships: { ago: 1 }
                }
            }
        ],
        flags: {
            set: { 'terzo_giorno_iniziato': true }
        }
    },
    52: {
        id: 52,
        title: "L'Attesa Solitaria",
        content: `<p>Trejano rimase sulla veranda per ore, guardando fisso verso est, verso la strada. Ogni ombra tra gli alberi lo faceva sussultare. Ogni movimento gli sembrava la figura di Neiano che tornava.</p>
        
        <p>Ma non era mai lui.</p>
        
        <p>Il sole, nascosto dalle nuvole, saliva lento nel cielo. Il tempo sembrava essersi fermato. Ogni minuto era un'eternità.</p>
        
        <p>A metà mattina, Ago apparve dal sentiero. Vedendo Trejano sulla veranda, accelerò il passo.</p>
        
        <p>«Trejano! Oggi è il giorno! Tuo padre tornerà!»</p>
        
        <p>La voce di Ago era piena di speranza, di eccitazione. Ma Trejano sentiva solo un peso nel petto.</p>
        
        <p>«Sì» disse. «Oggi.»</p>`,
        choices: [
            {
                text: "Passa la giornata con Ago",
                nextParagraph: 54,
                consequences: {
                    relationships: { ago: 1 }
                }
            }
        ],
        flags: null
    },
    53: {
        id: 53,
        title: "La Ricerca di Compagnia",
        content: `<p>Trejano non riusciva a stare solo. Andò a cercare Ago, sperando che la presenza dell'amico potesse alleviare l'ansia che lo divorava.</p>
        
        <p>Trovò il ragazzo che stava aiutando suo padre nei campi. Quando Ago lo vide, lasciò cadere il rastrello e corse incontro.</p>
        
        <p>«Oggi è il giorno!» esclamò. «Tuo padre tornerà al tramonto!»</p>
        
        <p>«Sì» disse Trejano, cercando di sorridere. «Al tramonto.»</p>
        
        <p>«Cosa facciamo? Come passiamo la giornata?» chiese Ago. «Dobbiamo tenerti distratto! Altrimenti impazzirai!»</p>
        
        <p>Aveva ragione. Trejano non poteva semplicemente aspettare, guardando il sole muoversi lentamente nel cielo.</p>`,
        choices: [
            {
                text: "Passa la giornata con Ago",
                nextParagraph: 54,
                consequences: {
                    relationships: { ago: 2 }
                }
            }
        ],
        flags: null
    },
    54: {
        id: 54,
        title: "L'Ultimo Giorno con Ago",
        content: `<p>Trejano e Ago passarono la giornata insieme. Andarono nei campi, giocarono nella palude, pescarono nel fiume - anche se Trejano non riusciva davvero a concentrarsi.</p>
        
        <p>La sua mente continuava a tornare a Neiano. Dove era? Cosa stava facendo? Stava bene?</p>
        
        <p>Nel pomeriggio, mentre il sole cominciava a calare, Ago propose: «Andiamo sulla collina! Da lì si vede la strada. Potremo vedere tuo padre arrivare da lontano!»</p>
        
        <p>Trejano esitò. Quella collina, quella vista della strada... gli metteva paura. Ma Ago aveva ragione. Da lì avrebbero visto Neiano per primi.</p>
        
        <p>«Va bene» disse. «Andiamo.»</p>
        
        <p>Salirono sulla collina all'inizio della strada. Da lì si vedeva tutto: Treja con le sue palafitte, i campi, il fiume. E la strada che serpeggiava verso l'alto, sparendo oltre l'orizzonte.</p>`,
        choices: [
            {
                text: "Siediti e aspetta, guardando la strada",
                nextParagraph: 55,
                stats: null
            }
        ],
        flags: {
            set: { 'collina_terzo_giorno': true }
        }
    },
    55: {
        id: 55,
        title: "Sulla Collina dell'Attesa",
        content: `<p>I due ragazzi si sedettero sull'erba, guardando la strada. Ago chiacchierava, cercando di distrarre l'amico.</p>
        
        <p>«Tuo padre è andato per la strada proibita?» chiese a un certo punto, la voce più seria. «Perché?»</p>
        
        <p>«Non lo so» rispose Trejano. «Mi ha parlato di una storia e mi ha detto di aspettarlo fino al terzo tramonto. Ho paura, Ago. E se venisse divorato dalle bestie feroci?»</p>
        
        <p>«Oh, non preoccuparti. Neiano è un uomo forte e saggio» lo rincuorò Ago, anche se non sembrava troppo convinto delle sue stesse parole.</p>
        
        <p>Già la strada era pericolosa. E negli ultimi tempi qualcuno aveva giurato che si aggirasse nei dintorni del villaggio, proveniente da quella strada, un Viandante che era giunto sin là chissà come.</p>
        
        <p>Nelle terre di Saar i Viandanti erano considerati una sorta di pericolosi fuorilegge: uomini e donne senza patria né casa, dediti alle forze occulte.</p>
        
        <p>La schiena di Trejano fu percorsa da un brivido.</p>`,
        choices: [
            {
                text: "«Credi che mio padre potrebbe incontrare i Viandanti?»",
                nextParagraph: 56,
                stats: null
            }
        ],
        flags: {
            set: { 'conversazione_viandanti': true }
        }
    },
    56: {
        id: 56,
        title: "Le Storie dei Viandanti",
        content: `<p>«Credi che mio padre potrebbe incontrare i Viandanti?» chiese Trejano.</p>
        
        <p>«Starà ben attento ad evitarli» rispose Ago, non troppo convinto neppure questa volta. Voleva rassicurare l'amico, ma era spaventato alla sola idea di questi uomini terribili.</p>
        
        <p>Ripensò a Falk, il giullare pellegrino, e alle sue storie sul terrificante viandante Criadel, capace di assumere le forme di animali feroci e di uccidere qualsiasi uomo o donna che incontrasse per estinguere la sua atavica sete di sangue.</p>
        
        <p>Finché l'eroico Toli l'aveva sconfitto e ucciso grazie alla protezione contro le magie di una misteriosa gemma gialla. Chissà quanti Viandanti crudeli esistevano ancora...</p>
        
        <p>Trejano era in preda all'agitazione. I suoi occhi guardavano Treja, ma vedevano suo padre in estremo pericolo. Nel suo giovane cuore si addensavano fosche nubi.</p>
        
        <p>Il sole stava calando. Presto sarebbe stato il tramonto.</p>`,
        choices: [
            {
                text: "Resta sulla collina, aspettando",
                nextParagraph: 57,
                stats: null
            }
        ],
        flags: {
            set: { 'storie_viandanti_raccontate': true }
        }
    },
    57: {
        id: 57,
        title: "Il Tramonto Si Avvicina",
        content: `<p>Il sole, divenuto più tenue, si avviò verso la sua culla d'occidente. Dapprima lentamente, poi sempre più rapido, quasi precipitasse giù dal cielo.</p>
        
        <p>Saliva la smania di Trejano. Gli occhi fissi sulla strada, cercando disperatamente la figura di Neiano.</p>
        
        <p>«Guarda!» gridò improvvisamente Ago, indicando la strada.</p>
        
        <p>Trejano balzò in piedi. C'era qualcosa... un'ombra... una figura...</p>
        
        <p>«Padre!» gridò, il cuore che batteva all'impazzata.</p>
        
        <p>Ma l'ombra si dissipò. Era solo un gioco di luce, una piega del terreno, un albero.</p>
        
        <p>«Mi sono sbagliato» pensò Trejano, la delusione che gli stringeva il petto come una morsa. L'ansia di rivedere il padre gli giocava brutti tiri.</p>
        
        <p>Il sole era già per metà scomparso dietro i grandi massicci occidentali.</p>
        
        <p>«Trejano» disse Ago piano. «Forse... forse dovresti tornare a casa. Ad aspettarlo lì.»</p>`,
        choices: [
            {
                text: "«Hai ragione. Torniamo.»",
                nextParagraph: 58,
                consequences: {
                    stats: { saggezza: 1 }
                }
            },
            {
                text: "«No, resto qui. Devo vederlo arrivare.»",
                nextParagraph: 58,
                consequences: {
                    stats: { forza: 1 }
                }
            }
        ],
        flags: {
            set: { 'falso_avvistamento': true }
        }
    },
    58: {
        id: 58,
        title: "Il Ritorno alla Palafitta",
        content: `<p>Trejano tornò alla palafitta mentre il sole continuava a calare. Ago lo accompagnò fino alla porta, poi, vedendo che l'amico voleva stare solo, si allontanò con un cenno silenzioso.</p>
        
        <p>Trejano entrò nella casa vuota. Accese la lanterna. La luce tremolante creava ombre danzanti sulle pareti.</p>
        
        <p>Andò alla finestra che dava verso la strada. Da lì riusciva a vederne l'imbocco. Aguzzò la vista, cercando disperatamente di scorgere il padre.</p>
        
        <p>Il sole stava definitivamente abbandonando il cielo. Il tramonto del terzo giorno.</p>
        
        <p>Ma Neiano non c'era.</p>
        
        <p>Trejano avvertì allora una presenza dietro di lui e si girò di scatto. Ma la luce della lanterna non rivelò nessuno nella stanza.</p>
        
        <p>Inquieto, prese il suo bastone da pesca e lo strinse nella mano destra. Tornò al suo punto di osservazione.</p>
        
        <p>E allora ebbe un tuffo al cuore.</p>`,
        choices: [
            {
                text: "Guarda verso la strada",
                nextParagraph: 59,
                stats: null
            }
        ],
        flags: {
            set: { 'alla_finestra_terzo_tramonto': true }
        }
    },
    59: {
        id: 59,
        title: "Le Ombre Rosse",
        content: `<p>Sulla strada si vedeva ora un gruppetto di uomini. Trejano li contò con il cuore che batteva forte.</p>
        
        <p>Sette. Sette figure.</p>
        
        <p>La luce del sole stava definitivamente abbandonando il cielo, ma Trejano riuscì a vedere che indossavano una tunica con un cappuccio calcato sulla testa.</p>
        
        <p>Gli abiti sembravano color del sangue.</p>
        
        <p>Un brivido gelido percorse la schiena di Trejano. Quelli non erano viaggiatori normali. Non erano mercanti. Non erano pescatori.</p>
        
        <p>Erano... qualcos'altro.</p>
        
        <p>Le figure confabularono per qualche minuto, sembrando incerte sul da farsi. Poi, come se avessero preso una decisione, cominciarono a muoversi verso il villaggio.</p>
        
        <p>Verso Treja.</p>
        
        <p>Trejano non era riuscito a impedire che il suo respiro divenisse mozzo e affannato. Chi erano quegli uomini o quegli esseri? Cosa cercavano?</p>
        
        <p>Dove era il padre? E se fosse stato catturato o peggio ucciso...</p>`,
        choices: [
            {
                text: "Spegni la lanterna, nasconditi nell'oscurità",
                nextParagraph: 60,
                consequences: {
                    stats: { astuzia: 1 }
                }
            },
            {
                text: "Resta alla finestra, devi capire cosa sta succedendo",
                nextParagraph: 60,
                consequences: {
                    stats: { forza: 1 }
                }
            }
        ],
        flags: {
            set: { 'sicofanti_visti': true, 'sette_incappucciati': true }
        }
    },
    60: {
        id: 60,
        title: "Gli Occhi di Bragia",
        content: `<p>Rapido, Trejano spense la lanterna, rimanendo nell'oscurità. Poi tornò al suo punto di osservazione, cercando di controllare il respiro.</p>
        
        <p>Il sole era ormai tramontato, ma già la luce del plenilunio prendeva il suo posto nel cielo. Nella luce argentea, le figure rosse sembravano fantasmi.</p>
        
        <p>Si fermarono. Sembravano guardare direttamente verso la palafitta di Trejano. Come se sapessero che era lì. Come se lo stessero cercando.</p>
        
        <p>Poi successe tutto in un battibaleno.</p>
        
        <p>Uno degli incappucciati tirò fuori qualcosa da sotto la tunica. Un istante dopo gli altri lo imitarono.</p>
        
        <p>Improvvisamente, occhi di bragia illuminavano l'aria. Frecce. Frecce con le punte infuocate.</p>
        
        <p>Trejano riuscì a stento a gettarsi di lato.</p>
        
        <p>Una freccia infuocata sibilò dove un attimo prima si affacciava il ragazzo e si conficcò nell'arazzo appeso alla parete.</p>
        
        <p>L'arazzo di Mesis prese fuoco.</p>
        
        <p><strong>[Continua al paragrafo 61]</strong></p>`,
        choices: [
            {
                text: "➡️ L'Attacco Inizia",
                nextParagraph: 61,
                stats: null
            }
        ],
        flags: {
            set: { 'frecce_infuocate': true, 'arazzo_in_fiamme': true, 'attacco_iniziato': true }
        }
    },
    61: {
        id: 61,
        title: "Le Fiamme Divorano",
        content: `<p>Trejano si rialzò, stordito. L'arazzo stava bruciando rapidamente, le fiamme che divoravano la seta antica. La stanza si riempì di fumo acre.</p>
        
        <p>Doveva uscire. Doveva scappare.</p>
        
        <p>Ma dove? Gli incappucciati rossi erano là fuori. Se usciva, lo avrebbero visto. Lo avrebbero preso.</p>
        
        <p>O peggio.</p>
        
        <p>Il fumo gli bruciava gli occhi, la gola. Tossì violentemente, cercando aria pulita. Le fiamme si stavano espandendo, lambendo ora anche le travi di legno del soffitto.</p>
        
        <p>Tutta la palafitta sarebbe bruciata. E lui con essa, se non faceva qualcosa.</p>
        
        <p>Poi, attraverso il fumo e le lacrime, vide qualcosa. Una figura. Un'ombra che si muoveva nella stanza.</p>
        
        <p>«Chi... chi sei?» riuscì a dire tra i colpi di tosse.</p>`,
        choices: [
            {
                text: "Stringi il bastone, preparati a difenderti",
                nextParagraph: 62,
                consequences: {
                    stats: { forza: 1 }
                }
            },
            {
                text: "Arretra verso la finestra",
                nextParagraph: 62,
                consequences: {
                    stats: { agilita: 1 }
                }
            }
        ],
        flags: {
            set: { 'palafitta_in_fiamme': true }
        }
    },
    62: {
        id: 62,
        title: "Il Vecchio dagli Occhi Saettanti",
        content: `<p>La figura si avvicinò. Era un vecchio. Un uomo anziano con occhi che brillavano nella luce delle fiamme. Occhi intensi, penetranti. Occhi che sembravano vedere attraverso Trejano.</p>
        
        <p>«Da dove... da dove sei entrato?» balbettò Trejano.</p>
        
        <p>Il vecchio non rispose. Si mosse con una velocità sorprendente per la sua età, balzando verso Trejano.</p>
        
        <p>Trejano non ebbe il tempo di alzare il bastone che ancora stringeva per difendersi. Il vecchio era troppo veloce.</p>
        
        <p>E poi, mentre si avvicinava rapidamente, il vecchio fece qualcosa di strano. Portò la mano destra alla fronte e sfregò qualcosa contro la pelle.</p>
        
        <p>Un anello. Un anello in cui era incastonata una gemma trasparente, che brillava di luce propria.</p>
        
        <p>E allora tutto cambiò.</p>`,
        choices: [
            {
                text: "Guarda terrorizzato la trasformazione",
                nextParagraph: 63,
                stats: null
            }
        ],
        flags: {
            set: { 'crise_apparso': true, 'anello_cristallo_visto': true }
        }
    },
    63: {
        id: 63,
        title: "La Trasformazione",
        content: `<p>La testa del vecchio sembrò allargarsi e accorciarsi. La faccia si coprì di un pelame fitto e giallo, chiazzato di nero.</p>
        
        <p>I suoi occhi divennero brillanti, felini. Anche il suo corpo si appiattì, affusolandosi e perdendosi in una coda pendula.</p>
        
        <p>La sua bocca era ora spalancata e piena di aguzzi denti.</p>
        
        <p>Un gattopardo. Il vecchio si era trasformato in un enorme gattopardo.</p>
        
        <p>Trejano, spaventato, fu investito dall'alito caldo e umido dell'animale. "È la fine" pensò. Chiuse gli occhi.</p>
        
        <p>Era un Viandante. Non aveva più speranze. Attendeva i feroci denti e i crudeli artigli.</p>
        
        <p>Ma la morte non arrivò.</p>
        
        <p>Invece, si sentì improvvisamente sollevare da terra.</p>`,
        choices: [
            {
                text: "Resta immobile, paralizzato dalla paura",
                nextParagraph: 64,
                consequences: {
                    stats: { empatia: 1 }
                }
            },
            {
                text: "Lotta, cerca di divincolarti",
                nextParagraph: 64,
                consequences: {
                    stats: { forza: 1 }
                }
            }
        ],
        flags: {
            set: { 'trasformazione_vista': true, 'crise_gattopardo': true }
        }
    },
    64: {
        id: 64,
        title: "Afferrato dalla Bestia",
        content: `<p>L'animale lo aveva azzannato alla collottola dell'abito di tela. La resistente tela di Saar non cedette.</p>
        
        <p>La fiera lo portava come fa un gatto con il suo cucciolo.</p>
        
        <p>Trejano attendeva la morte, rimpiangendo la sua breve vita. Ma poi sentì l'affuocata aria della palafitta in fiamme lasciare il posto alla fresca aria della notte che ora gli sferzava il viso.</p>
        
        <p>Riaprì per un istante gli occhi.</p>
        
        <p>Stavano correndo. Il gattopardo saettava veloce nelle strade del villaggio di Treja, ora illuminato da fuochi sempre più alti.</p>
        
        <p>Palafitte e case bruciavano in una gimkana sempre più indiavolata.</p>
        
        <p>E Trejano, appeso alle fauci del gattopardo, vedeva tutto: il suo villaggio in fiamme, le persone che correvano e gridavano, il fumo che saliva nero contro il cielo stellato.</p>
        
        <p>«Colpite il ragazzo e il gattopardo!» sentì urlare alle sue spalle.</p>`,
        choices: [
            {
                text: "Chiudi gli occhi, non guardare",
                nextParagraph: 65,
                stats: null
            },
            {
                text: "Continua a guardare, devi ricordare",
                nextParagraph: 65,
                consequences: {
                    maturita: 1
                }
            }
        ],
        flags: {
            set: { 'afferrato_gattopardo': true, 'fuga_iniziata': true }
        }
    },
    65: {
        id: 65,
        title: "La Pioggia di Morte",
        content: `<p>Un nugolo di frecce e piccoli giavellotti piombò sul gattopardo e sul ragazzo.</p>
        
        <p>Ma l'animale, destramente, riuscì a evitarli. Correva ora a una velocità vorticosa, zigzagando come un fulmine nel cielo.</p>
        
        <p>A destra. A sinistra. Sotto un pontile. Sopra una barca rovesciata. Il gattopardo si muoveva con una grazia impossibile, schivando ogni proiettile.</p>
        
        <p>Trejano, appeso alle sue fauci, veniva sballottato come un fagotto. Sentiva le frecce sibilare vicino alle sue orecchie, sentiva il calore delle fiamme mentre passavano accanto alle case in fiamme.</p>
        
        <p>E poi, improvvisamente, il gattopardo cadde a terra.</p>
        
        <p>Anche Trejano rotolò nella polvere, battendo la testa contro un largo masso.</p>
        
        <p>Il dolore esplose nel suo cranio. La vista si annebbiò.</p>`,
        choices: [
            {
                text: "Cerca di rialzarti",
                nextParagraph: 66,
                consequences: {
                    stats: { forza: 1 }
                }
            },
            {
                text: "Resta a terra, stordito",
                nextParagraph: 66,
                stats: null
            }
        ],
        flags: {
            set: { 'gattopardo_colpito': true, 'testa_colpita': true }
        }
    },
    66: {
        id: 66,
        title: "Il Giavellotto",
        content: `<p>Attraverso la nebbia del dolore, Trejano vide il gattopardo rialzarsi. L'animale era stato colpito sul dorso da un giavellotto che lo aveva ferito.</p>
        
        <p>Sangue scuro macchiava il pelo giallo chiazzato di nero.</p>
        
        <p>Ma la bestia non si arrese. Si rialzò lesto, riafferrò Trejano tra le fauci e si tuffò in una corsa ancora più agile e sfrenata.</p>
        
        <p>Trejano aveva la vista annebbiata per la paura e per il colpo ricevuto sulla testa. Riuscì a girare appena la testa per guardare dietro.</p>
        
        <p>Treja bruciava. Tutto il villaggio era avvolto dalle fiamme. Le urla dei misteriosi uomini erano ormai lontane.</p>
        
        <p>Frecce e giavellotti non riuscivano più a raggiungere i due fuggitivi.</p>
        
        <p>Il gattopardo correva verso l'esterno del villaggio, verso l'oscurità della notte, verso la salvezza.</p>
        
        <p>O forse verso qualcosa di peggio.</p>`,
        choices: [
            {
                text: "Resisti, non svenire",
                nextParagraph: 67,
                consequences: {
                    stats: { forza: 1 }
                }
            },
            {
                text: "Lasciati andare, il dolore è troppo",
                nextParagraph: 67,
                stats: null
            }
        ],
        flags: {
            set: { 'gattopardo_ferito': true, 'fuga_continua': true }
        }
    },
    67: {
        id: 67,
        title: "L'Ultima Vista di Casa",
        content: `<p>Trejano, con le ultime forze, girò ancora una volta la testa per guardare indietro.</p>
        
        <p>Treja. La sua casa. Il suo mondo.</p>
        
        <p>Tutto bruciava. Le palafitte crollavano nel fiume con schianti terribili. Le fiamme salivano alte contro il cielo notturno, trasformando la notte in un inferno arancione.</p>
        
        <p>E le persone... riusciva a vedere le persone che correvano, che gridavano. Riusciva a sentire le urla di terrore.</p>
        
        <p>Ago. Dov'era Ago?</p>
        
        <p>«Ago...» sussurrò, ma la sua voce si perse nel vento della corsa.</p>
        
        <p>Il gattopardo correva sempre più veloce, sempre più lontano. Treja diventava sempre più piccola, sempre più lontana.</p>
        
        <p>E poi, mentre il dolore alla testa diventava insopportabile e l'oscurità iniziava a inghiottirlo, Trejano pensò a Neiano.</p>
        
        <p>Padre, dove sei?</p>`,
        choices: [
            {
                text: "Svieni",
                nextParagraph: 68,
                stats: null
            }
        ],
        flags: {
            set: { 'treja_vista_ultima_volta': true, 'pensiero_ago': true }
        }
    },
    68: {
        id: 68,
        title: "Nell'Oscurità",
        content: `<p>L'oscurità lo inghiottì.</p>
        
        <p>Trejano svenne, il corpo che diventava un peso morto tra le fauci del gattopardo.</p>
        
        <p>Ma la bestia non si fermò. Continuò a correre, portando il ragazzo lontano dalle fiamme, lontano dai sicofanti, lontano da tutto ciò che Trejano aveva mai conosciuto.</p>
        
        <p>Nella sua incoscienza, Trejano sognò. Sognò Neiano che camminava su una strada bianca. Sognò Ago che correva e rideva. Sognò una perla che brillava come la luna.</p>
        
        <p>E sognò una voce, una voce antica e gentile, che sussurrava: <em>"Non temere, piccolo Ratnaraj. Il tuo cammino è appena iniziato."</em></p>
        
        <p>Ma quando cercò di capire da dove venisse quella voce, l'oscurità si fece più profonda, e non sognò più nulla.</p>`,
        choices: [
            {
                text: "➡️ Il Risveglio",
                nextParagraph: 69,
                stats: null
            }
        ],
        flags: {
            set: { 'svenuto': true, 'sogno_ratnaraj': true }
        }
    },
    69: {
        id: 69,
        title: "Lontano da Treja",
        content: `<p>Il gattopardo correva nella notte. Lontano dalle fiamme, lontano dalle urla, lontano dalla morte.</p>
        
        <p>La luna piena illuminava il suo cammino. Correva verso nord, verso le terre selvagge di Saar, dove gli alberi erano fitti e le paludi profonde.</p>
        
        <p>Correva fino a quando le luci di Treja non furono più visibili, fino a quando non ci fu più nulla alle sue spalle se non oscurità e silenzio.</p>
        
        <p>Solo allora rallentò. Solo allora, quando fu certo che nessuno li seguiva più, si fermò.</p>
        
        <p>Depose delicatamente Trejano a terra, sotto un grande albero. Il ragazzo era ancora privo di sensi, il respiro debole ma regolare.</p>
        
        <p>Il gattopardo lo guardò per un lungo momento. Poi, lentamente, la trasformazione si invertì.</p>
        
        <p>Il pelo si ritrasse. Il corpo si raddrizzò. Le zampe divennero braccia.</p>
        
        <p>E dove un momento prima c'era un gattopardo, ora c'era di nuovo il vecchio. Il vecchio dagli occhi saettanti.</p>
        
        <p>Crise.</p>`,
        choices: [
            {
                text: "➡️ Trejano si Sveglia",
                nextParagraph: 70,
                stats: null
            }
        ],
        flags: {
            set: { 'lontani_da_treja': true, 'crise_ritrasformato': true }
        }
    },
    70: {
        id: 70,
        title: "Il Risveglio nelle Terre di Saar",
        content: `<p>Non sapeva quanto tempo fosse passato quando Trejano aprì gli occhi.</p>
        
        <p>La prima cosa che vide fu il cielo. Un cielo nero punteggiato di stelle. Entaris brillava più forte di tutte, la stella del nord, la guida dei viaggiatori.</p>
        
        <p>Poi sentì il dolore. La testa gli pulsava dove aveva battuto contro il masso. Ogni movimento era agonia.</p>
        
        <p>«Piano» disse una voce. «Non muoverti troppo in fretta.»</p>
        
        <p>Trejano girò la testa, ignorando il dolore. Accanto a lui, seduto su un tronco caduto, c'era il vecchio. L'uomo che si era trasformato in gattopardo. L'uomo che lo aveva salvato.</p>
        
        <p>«Chi... chi sei?» riuscì a dire Trejano, la voce roca.</p>
        
        <p>Il vecchio sorrise. Era un sorriso triste, pieno di memoria e rimpianto.</p>
        
        <p>«Il mio nome è Crise» disse. «E ho molto da raccontarti, giovane Trejano. Ma prima...» Si interruppe, guardando indietro verso sud, verso dove era Treja. «Prima dobbiamo muoverci. Non siamo ancora al sicuro.»</p>
        
        <p><strong>[Continua al paragrafo 71]</strong></p>`,
        choices: [
            {
                text: "➡️ La Fuga Continua",
                nextParagraph: 71,
                stats: null
            }
        ],
        flags: {
            set: { 'risveglio': true, 'crise_presentato': true, 'nelle_terre_saar': true }
        }
    },
    71: {
        id: 71,
        title: "Le Prime Domande",
        content: `<p>«Chi... chi sei?» chiese Trejano, la voce ancora debole. «Come conosci il mio nome?»</p>
        
        <p>Crise continuò a preparare qualcosa vicino al fuoco. Trejano riusciva ora a vedere meglio: c'era una pentola appesa su ceppi di legno, e le fiamme avevano uno strano colore verde-giada.</p>
        
        <p>«Neiano mi ha parlato di te» disse Crise senza voltarsi. «Mi ha raccontato molto del ragazzo dai capelli bianchi che ha cresciuto come figlio.»</p>
        
        <p>«Mio padre... dove... dov'è mio padre?»</p>
        
        <p>Il vecchio si irrigidì per un momento, poi riprese a mescolare il contenuto della pentola.</p>
        
        <p>«Ogni cosa a suo tempo, Trejano. Prima devi riprenderti. Poi parleremo.»</p>
        
        <p>«No! Voglio sapere ora!» Trejano cercò di alzarsi, ma la testa gli girò e dovette sdraiarsi di nuovo. «Dov'è mio padre? È... è vivo?»</p>`,
        choices: [
            {
                text: "Insisti per avere risposte",
                nextParagraph: 72,
                consequences: {
                    stats: { forza: 1 }
                }
            },
            {
                text: "Aspetta, sei troppo debole",
                nextParagraph: 72,
                consequences: {
                    stats: { saggezza: 1 }
                }
            }
        ],
        flags: {
            set: { 'prime_domande_neiano': true }
        }
    },
    72: {
        id: 72,
        title: "Il Decotto di Millefoglio",
        content: `<p>Crise si voltò finalmente. I suoi occhi - quegli stessi occhi che avevano brillato così intensamente durante la trasformazione - ora erano miti, benevoli.</p>
        
        <p>«Bevi questo» disse, porgendogli una ciotola di legno fumante.</p>
        
        <p>Trejano la prese con mani tremanti.</p>
        
        <p>«È un decotto di millefoglio. Servirà a guarire più rapidamente la ferita che hai sul capo.»</p>
        
        <p>Trejano bevve lentamente. Il liquido era caldo e amaro, ma quasi subito sentì il dolore alla tempia allargarsi... e poi sparire completamente. Era come se il dolore venisse dissolto, lavato via da un'onda gentile.</p>
        
        <p>«Meglio?» chiese Crise.</p>
        
        <p>Trejano annuì, stupito. Toccò la tempia: c'era un impiastro umido, ma non faceva più male.</p>
        
        <p>«Come... come hai fatto?»</p>
        
        <p>«Erbe. Conoscenza. Tempo.» Crise sorrise leggermente. «E un po' di magia, forse. Ma soprattutto le prime due cose.»</p>`,
        choices: [
            {
                text: "«Chi sei davvero?»",
                nextParagraph: 73,
                consequences: {
                    stats: { saggezza: 1 }
                }
            },
            {
                text: "«Perché mi hai salvato?»",
                nextParagraph: 73,
                consequences: {
                    stats: { empatia: 1 }
                }
            }
        ],
        flags: {
            set: { 'decotto_bevuto': true, 'ferita_curata': true }
        }
    },
    73: {
        id: 73,
        title: "Crise Si Presenta",
        content: `<p>«Il mio nome è Crise» disse il vecchio, sedendosi su un tronco caduto vicino al fuoco. «Sono un Viandante, come forse hai già capito. Ma non tutti i Viandanti sono malvagi, Trejano. Alcuni di noi cercano semplicemente... altre strade.»</p>
        
        <p>«Ti sei trasformato in un gattopardo» disse Trejano, la voce ancora incredula al ricordo. «Ti ho visto. La tua testa... il tuo corpo...»</p>
        
        <p>«Sì. È uno dei miei doni.» Crise mostrò l'anello al dito: la gemma trasparente brillava debolmente nella luce del fuoco. «Cristallo di rocca. Una delle gemme perdute. Mi permette di assumere alcune forme animali.»</p>
        
        <p>«Ma... ma perché? Perché mi hai salvato? Quelli... quegli uomini con le tuniche rosse... cos'erano?»</p>
        
        <p>L'espressione di Crise si fece cupa. «Sicofanti. Gli assassini di re Reudhos di Rubino. Erano venuti per te, Trejano. Per ucciderti.»</p>`,
        choices: [
            {
                text: "«Per me? Ma... perché?»",
                nextParagraph: 74,
                stats: null
            }
        ],
        flags: {
            set: { 'crise_presentato': true, 'sicofanti_spiegati': true }
        }
    },
    74: {
        id: 74,
        title: "Le Domande su Neiano",
        content: `<p>«Perché?» ripeté Trejano. «Io... io sono solo un pescatore. Non ho fatto niente!»</p>
        
        <p>«Sei molto di più di un pescatore» disse Crise piano. «Ma questa è una conversazione lunga e complessa. E tu hai bisogno di riposo.»</p>
        
        <p>«NO!» Trejano si alzò a sedere, ignorando il giramento di testa. «Basta evasioni! Voglio sapere cosa sta succedendo! Voglio sapere dov'è mio padre!»</p>
        
        <p>Le ultime parole uscirono come un grido disperato. E con esse vennero le lacrime - lacrime di paura, di rabbia, di confusione.</p>
        
        <p>Crise lo guardò a lungo, in silenzio. Poi sospirò.</p>
        
        <p>«Neiano...» iniziò, poi si fermò. «Neiano era un uomo coraggioso. Un uomo che ha sacrificato molto per proteggerti.»</p>
        
        <p>«Era? PERCHÉ USI IL PASSATO?»</p>
        
        <p>Crise non rispose subito. E quel silenzio disse a Trejano tutto quello che doveva sapere.</p>`,
        choices: [
            {
                text: "«No... no, non può essere...»",
                nextParagraph: 75,
                consequences: {
                    maturita: 1
                }
            },
            {
                text: "Piangi in silenzio",
                nextParagraph: 75,
                consequences: {
                    stats: { empatia: 1 },
                    maturita: 1
                }
            }
        ],
        flags: {
            set: { 'sospetto_morte_neiano': true }
        }
    },
    75: {
        id: 75,
        title: "La Verità Nascosta",
        content: `<p>«Non posso dirtelo con certezza» disse Crise dopo un lungo silenzio. «Non so cosa gli sia accaduto su quella strada. Ma... temo il peggio.»</p>
        
        <p>Non era la verità completa. Trejano lo sentiva. Ma era più di quanto avesse saputo fino a quel momento.</p>
        
        <p>«Quando Neiano partì» continuò Crise, «sapeva che era pericoloso. Sapeva che forse non sarebbe tornato. Ma doveva andare. Doveva cercare risposte. Per te.»</p>
        
        <p>«Non volevo che andasse!» gridò Trejano. «Non volevo le sue risposte! Volevo solo che rimanesse!»</p>
        
        <p>«Lo so» disse Crise gentilmente. «Ma alcune cose devono accadere, che ci piaccia o no. Alcune strade devono essere percorse.»</p>
        
        <p>Trejano si accasciò, esausto emotivamente e fisicamente. Tutto era troppo. Troppo dolore, troppa paura, troppe domande senza risposta.</p>`,
        choices: [
            {
                text: "«Cosa succede ora?»",
                nextParagraph: 76,
                stats: null
            }
        ],
        flags: {
            set: { 'crise_evita_verita_completa': true }
        }
    },
    76: {
        id: 76,
        title: "Il Viaggio Annunciato",
        content: `<p>«Ora» disse Crise, «dobbiamo muoverci. Non siamo ancora al sicuro. I sicofanti potrebbero seguire le nostre tracce.»</p>
        
        <p>«Dove andiamo?»</p>
        
        <p>«A nord. Verso le terre delle aquile. Verso Tojen l'inaccessibile.» Crise si alzò, iniziando a spegnere il fuoco. «Riposa perché ci attende un viaggio di oltre venti giorni.»</p>
        
        <p>«Venti giorni?» Trejano non riusciva nemmeno a immaginarlo. Non si era mai allontanato da Treja per più di qualche ora.</p>
        
        <p>«Forse di più» disse Crise. «Dipende da quanto velocemente riusciamo a viaggiare. E da quanti... ostacoli incontreremo.»</p>
        
        <p>«Ma... ma io non posso! Devo tornare a Treja! Devo cercare Ago! Devo...»</p>
        
        <p>«Treja non c'è più» disse Crise, e la durezza nella sua voce fermò Trejano. «È bruciata, Trejano. Quasi completamente. E tornare ora significherebbe solo morire.»</p>`,
        choices: [
            {
                text: "«E Ago? Cosa ne è di Ago?»",
                nextParagraph: 77,
                consequences: {
                    relationships: { ago: 1 }
                }
            },
            {
                text: "Accetta in silenzio, troppo scioccato per parlare",
                nextParagraph: 77,
                stats: null
            }
        ],
        flags: {
            set: { 'viaggio_annunciato': true, 'destinazione_tojen': true }
        }
    },
    77: {
        id: 77,
        title: "La Speranza per Ago",
        content: `<p>«E Ago?» chiese Trejano, la voce che tremava. «Il mio amico... era al villaggio. Era...»</p>
        
        <p>«Non lo so» disse Crise onestamente. «Non so cosa gli sia accaduto. Ma tuo amico è giovane e veloce. Forse è riuscito a scappare. Forse...»</p>
        
        <p>Si fermò, vedendo l'espressione sul viso di Trejano.</p>
        
        <p>«Ascolta» disse, più gentilmente. «Non possiamo saperlo con certezza. Ma dobbiamo avere speranza. La speranza è tutto quello che abbiamo, a volte.»</p>
        
        <p>Trejano annuì debolmente. Ago. Il suo migliore amico. Forse morto. Forse vivo e solo, spaventato.</p>
        
        <p>E lui, Trejano, stava per lasciare le terre di Saar. Stava per andare chissà dove con uno sconosciuto che si trasformava in animali.</p>
        
        <p>Come era potuto accadere tutto questo? Solo quella mattina stava aspettando che Neiano tornasse. Solo quella mattina il mondo aveva ancora un senso.</p>`,
        choices: [
            {
                text: "«Quando partiamo?»",
                nextParagraph: 78,
                consequences: {
                    maturita: 1
                }
            }
        ],
        flags: {
            set: { 'preoccupazione_ago': true }
        }
    },
    78: {
        id: 78,
        title: "I Preparativi",
        content: `<p>«All'alba» disse Crise. «Fra poche ore. Ora devi dormire un po'. Hai bisogno di forze per il viaggio.»</p>
        
        <p>«Non riuscirò a dormire» disse Trejano.</p>
        
        <p>«Prova comunque. Chiudi gli occhi. Respira. Il corpo ha bisogno di riposo anche quando la mente è turbata.»</p>
        
        <p>Crise preparò una coperta e la diede a Trejano. Era ruvida ma calda.</p>
        
        <p>«Io farò la guardia» disse il vecchio. «Dormi tranquillo. Nessuno ci troverà stanotte.»</p>
        
        <p>Trejano si sdraiò, avvolgendosi nella coperta. Il terreno era duro sotto la sua schiena, così diverso dal suo giaciglio nella palafitta.</p>
        
        <p>La palafitta. Bruciata ora. Cenere e rovine.</p>
        
        <p>Chiuse gli occhi, cercando di non piangere. Ma le lacrime vennero comunque, silenziose, scorrendo sui lati del viso.</p>`,
        choices: [
            {
                text: "Cerca di dormire",
                nextParagraph: 79,
                stats: null
            }
        ],
        flags: {
            set: { 'preparativi_viaggio': true }
        }
    },
    79: {
        id: 79,
        title: "La Prima Notte Lontano da Casa",
        content: `<p>Alla fine, esausto, Trejano scivolò in un sonno inquieto.</p>
        
        <p>Sognò Treja in fiamme. Sognò Ago che correva e gridava. Sognò Neiano che camminava su una strada bianca, allontanandosi sempre di più.</p>
        
        <p>E sognò una perla. Una perla enorme che brillava come la luna. La perla che Neiano aveva nascosto. La perla per cui, forse, gli uomini in rosso erano venuti.</p>
        
        <p>Nel sogno, la perla gli parlava. Una voce antica, gentile: <em>"Non temere, piccolo Ratnaraj. Il tuo cammino è appena iniziato."</em></p>
        
        <p>Ratnaraj. Quel nome di nuovo. Lo stesso nome che aveva sussurrato Mesis, il mercante, anni prima.</p>
        
        <p>Ma cosa significava?</p>
        
        <p>Trejano si svegliò di soprassalto. Era ancora notte, ma il cielo a est cominciava a schiarire. L'alba si avvicinava.</p>
        
        <p>Crise era seduto vicino al fuoco ormai spento, sveglio, vigile. Quando vide Trejano muoversi, annuì.</p>
        
        <p>«È ora» disse. «Dobbiamo andare.»</p>`,
        choices: [
            {
                text: "Alzati, è ora di partire",
                nextParagraph: 80,
                stats: null
            }
        ],
        flags: {
            set: { 'sogno_ratnaraj_primo': true, 'prima_notte_passata': true }
        }
    },
    80: {
        id: 80,
        title: "L'Inizio del Viaggio",
        content: `<p>Trejano si alzò lentamente. Ogni muscolo del corpo gli faceva male. Il colpo alla testa era guarito grazie al decotto, ma il resto del corpo ricordava la fuga disperata della notte precedente.</p>
        
        <p>Crise gli diede del pane secco e un po' d'acqua da una borraccia di pelle.</p>
        
        <p>«Mangia. È tutto quello che abbiamo per ora, ma cercheremo altro cibo lungo il cammino.»</p>
        
        <p>Trejano mangiò in silenzio. Il pane era duro e insapore, ma aveva fame.</p>
        
        <p>Quando finì, Crise si alzò e indicò verso nord.</p>
        
        <p>«Andiamo. Abbiamo molta strada da fare.»</p>
        
        <p>Trejano guardò indietro, verso sud. Verso dove era stata Treja. Non si vedeva nulla da qui, solo alberi e nebbia mattutina.</p>
        
        <p>La sua casa. Il suo mondo. Tutto lasciato alle spalle.</p>
        
        <p>«Trejano» disse Crise gentilmente. «So che è difficile. Ma devi andare avanti. È l'unica strada.»</p>
        
        <p>Trejano annuì, anche se il cuore gli si spezzava. Si voltò verso nord.</p>
        
        <p>E insieme a Crise, iniziò a camminare verso l'ignoto.</p>
        
        <p><strong>[Continua al paragrafo 81]</strong></p>`,
        choices: [
            {
                text: "➡️ Il Viaggio Attraverso Saar",
                nextParagraph: 81,
                stats: null
            }
        ],
        flags: {
            set: { 'viaggio_iniziato': true, 'lasciato_treja': true }
        }
    },
    81: {
        id: 81,
        title: "Primi Passi nel Bosco",
        content: `<p>Il bosco era denso e oscuro. Gli alberi si ergevano alti intorno a loro, le chiome che filtravano la luce del sole in raggi sottili e dorati.</p>
        
        <p>Crise camminava davanti, con passo sicuro nonostante l'età. Trejano lo seguiva, cercando di non inciampare nelle radici che spuntavano dal terreno.</p>
        
        <p>«Dove... dove stiamo andando esattamente?» chiese dopo un po'.</p>
        
        <p>«A nord» rispose Crise senza voltarsi. «Sempre a nord. Verso le montagne, verso Tojen.»</p>
        
        <p>«E quanto tempo ci vorrà?»</p>
        
        <p>«Venti giorni. Forse più, se incontreremo ostacoli.»</p>
        
        <p>Venti giorni. Trejano non riusciva nemmeno a immaginarlo. Non era mai stato lontano da Treja per più di qualche ora. E ora doveva camminare per venti giorni attraverso terre sconosciute.</p>
        
        <p>«E... e cosa c'è a Tojen?» chiese timidamente.</p>
        
        <p>«Risposte» disse Crise. «E un'aquila.»</p>`,
        choices: [
            {
                text: "«Un'aquila?»",
                nextParagraph: 82,
                stats: null
            }
        ],
        flags: {
            set: { 'primo_giorno_viaggio': true }
        }
    },
    82: {
        id: 82,
        title: "Le Terre delle Aquile",
        content: `<p>«Sì, un'aquila» disse Crise con un mezzo sorriso. «Ma non un'aquila qualunque. Quilian, la regina delle aquile. Una delle ultime creature ancestrali rimaste a Limb.»</p>
        
        <p>«Ancestrali?»</p>
        
        <p>«Creature antiche. Potenti. Sopravvissute alla Guerra dei Venti Regni.» Crise si fermò, guardando verso nord. «Ma di questo parleremo lungo il cammino. Ho promesso di raccontarti la storia, e lo farò. Nei prossimi giorni saprai tutto. O quasi tutto.»</p>
        
        <p>Riprese a camminare, e Trejano lo seguì.</p>
        
        <p>Dopo alcune ore, Crise si fermò vicino a una pianta con foglie larghe e fiori gialli.</p>
        
        <p>«Guarda» disse, indicando la pianta. «Questa è arnica. Buona per le contusioni e le ferite. Impara a riconoscerla.»</p>
        
        <p>Si chinò e raccolse alcuni fiori, mettendoli nella sua bisaccia.</p>`,
        choices: [
            {
                text: "«Puoi insegnarmi?»",
                nextParagraph: 83,
                consequences: {
                    stats: { saggezza: 1 }
                }
            },
            {
                text: "Osserva in silenzio",
                nextParagraph: 83,
                stats: null
            }
        ],
        flags: {
            set: { 'arnica_mostrata': true }
        }
    },
    83: {
        id: 83,
        title: "Le Erbe del Bosco",
        content: `<p>«Insegnarti?» Crise alzò lo sguardo verso Trejano. «Sì, certo. Dovrai imparare molte cose nei prossimi giorni. Le erbe sono solo l'inizio.»</p>
        
        <p>Continuarono a camminare, e Crise si fermava spesso per mostrare a Trejano diverse piante.</p>
        
        <p>«Questa è achillea. Ferma le emorragie.»</p>
        
        <p>«Questo è iperico. Cura le ferite e solleva lo spirito.»</p>
        
        <p>«Questa è belladonna. MOLTO pericolosa. Non toccarla mai. Un solo fiore può uccidere un uomo.»</p>
        
        <p>Trejano cercava di ricordare tutto, ma erano così tante piante, così tanti nomi. La testa gli girava.</p>
        
        <p>«Non preoccuparti» disse Crise, vedendo la sua espressione. «Non devi ricordare tutto subito. Imparerai con il tempo.»</p>
        
        <p>«Ma perché devo imparare queste cose? Io sono solo... ero solo un pescatore.»</p>
        
        <p>Crise lo guardò a lungo prima di rispondere.</p>`,
        choices: [
            {
                text: "Aspetta la risposta",
                nextParagraph: 84,
                stats: null
            }
        ],
        flags: {
            set: { 'lezione_erbe_iniziata': true }
        }
    },
    84: {
        id: 84,
        title: "Più di un Pescatore",
        content: `<p>«Perché tu non sei solo un pescatore, Trejano» disse Crise piano. «E forse non lo sei mai stato. Ma questo... questa è una storia lunga. Una storia che inizierò a raccontarti questa sera, quando ci accamperemo.»</p>
        
        <p>«Ma...»</p>
        
        <p>«Pazienza» lo interruppe Crise. «Impara ad avere pazienza. È una delle virtù più importanti. Tu vuoi tutte le risposte subito, ma alcune cose devono essere rivelate al momento giusto.»</p>
        
        <p>Trejano annuì, anche se dentro ribolliva di frustrazione. Voleva sapere. Voleva capire. Perché gli uomini in rosso lo avevano cercato? Perché Neiano era partito? Cosa significava tutto questo?</p>
        
        <p>Ma Crise aveva ripreso a camminare, e Trejano non ebbe altra scelta che seguirlo.</p>
        
        <p>Il sole cominciava a calare quando si fermarono in una piccola radura.</p>
        
        <p>«Qui accamperemo per la notte» disse Crise.</p>`,
        choices: [
            {
                text: "Aiuta a preparare il campo",
                nextParagraph: 85,
                consequences: {
                    stats: { forza: 1 },
                    relationships: { crise: 1 }
                }
            },
            {
                text: "Siediti, sei troppo stanco",
                nextParagraph: 85,
                stats: null
            }
        ],
        flags: {
            set: { 'prima_sera_viaggio': true }
        }
    },
    85: {
        id: 85,
        title: "Il Primo Campo",
        content: `<p>Crise raccolse legna per il fuoco mentre Trejano lo guardava, incerto su come potesse aiutare.</p>
        
        <p>«Raccogliere legna secca» disse Crise, vedendo la sua esitazione. «Guarda sotto gli alberi. Solo rami caduti, non strappare nulla dalle piante vive.»</p>
        
        <p>Trejano si mise al lavoro. Era strano, ma familiare allo stesso tempo. A Treja aveva raccolto legna mille volte per il fuoco della palafitta.</p>
        
        <p>La palafitta. Che ora non esisteva più.</p>
        
        <p>Quando tornò con le braccia piene di legna, Crise aveva già preparato un piccolo cerchio di pietre per il fuoco.</p>
        
        <p>«Bene» disse, prendendo la legna. Con movimenti esperti, accese il fuoco usando delle pietre focaie.</p>
        
        <p>Le fiamme si alzarono, e Trejano si accorse con un brivido che avevano lo stesso strano colore verde-giada di prima.</p>
        
        <p>«Come fai a fare questo?» chiese, indicando le fiamme.</p>`,
        choices: [
            {
                text: "Ascolta la spiegazione",
                nextParagraph: 86,
                consequences: {
                    stats: { saggezza: 1 }
                }
            }
        ],
        flags: {
            set: { 'primo_campo_preparato': true }
        }
    },
    86: {
        id: 86,
        title: "Le Fiamme di Giada",
        content: `<p>«Un trucco» disse Crise con un mezzo sorriso. «Polvere di rame mescolata alla legna. Fa bruciare il fuoco con questo colore. E ha anche proprietà... dissuasive per certi animali.»</p>
        
        <p>«Animali pericolosi?»</p>
        
        <p>«Alcuni. Ma non preoccuparti. Stanotte avremo anche altre sentinelle.»</p>
        
        <p>Come se avesse chiamato qualcosa, un gufo atterrò su un ramo sopra di loro. Poi un altro. E un altro ancora.</p>
        
        <p>Presto, una dozzina di uccelli notturni li circondava, osservandoli con occhi brillanti nell'oscurità crescente.</p>
        
        <p>«Loro sono i nostri guardiani» disse Crise. «Mi avvertiranno se qualcuno si avvicina.»</p>
        
        <p>Tirò fuori dalla bisaccia del pane secco e lo condivise con Trejano. Mangiarono in silenzio per un po', guardando il fuoco verde-giada danzare.</p>
        
        <p>Poi Crise parlò.</p>`,
        choices: [
            {
                text: "Ascolta",
                nextParagraph: 87,
                stats: null
            }
        ],
        flags: {
            set: { 'uccelli_sentinella_prima_volta': true }
        }
    },
    87: {
        id: 87,
        title: "L'Inizio della Storia",
        content: `<p>«Ti ho promesso di raccontarti una storia» disse Crise. «E stasera inizierò. Ma sappi che questa storia richiederà molte notti per essere raccontata tutta. E alla fine... alla fine capirai chi sei davvero.»</p>
        
        <p>Trejano si raddrizzò, improvvisamente completamente sveglio nonostante la stanchezza.</p>
        
        <p>«C'era una volta» iniziò Crise, «un tempo in cui Limb era unita. Venti regni, venti gemme, un'unica grande terra. L'età dell'Opale Supremo, la chiamavano. Un'età di pace e prosperità.»</p>
        
        <p>«Ma poi venne la guerra. La Guerra dei Venti Regni. E tutto cambiò.»</p>
        
        <p>La voce di Crise era profonda, ipnotica. Trejano si ritrovò ad ascoltare, completamente assorbito.</p>
        
        <p>«La guerra durò cento anni. Cento anni di sangue e fuoco. E quando finì, tredici regni erano scomparsi. Cancellati dalla faccia di Limb.»</p>`,
        choices: [
            {
                text: "«Cosa li distrusse?»",
                nextParagraph: 88,
                stats: null
            },
            {
                text: "Ascolta in silenzio",
                nextParagraph: 88,
                stats: null
            }
        ],
        flags: {
            set: { 'storia_iniziata': true, 'guerra_venti_regni_raccontata': true }
        }
    },
    88: {
        id: 88,
        title: "La Guerra e le Gemme",
        content: `<p>«L'avidità» disse Crise semplicemente. «La paura. La sete di potere. Un re - Reudhos I di Rubino - decise che un regno non era abbastanza. Voleva tutte le gemme. Voleva tutto il potere.»</p>
        
        <p>«E iniziò la guerra. Gli altri regni si coalizzarono contro di lui, ma era troppo forte. Troppo spietato. Uno dopo l'altro, i regni cadevano.»</p>
        
        <p>«Alla fine, solo sette rimasero. Sette regni, sette gemme. Rubino, Ametista, Perla, Zaffiro, Smeraldo, Topazio, Acquamarina.»</p>
        
        <p>«E gli altri tredici?»</p>
        
        <p>«Scomparsi. Le loro terre distrutte, le loro gemme perdute. O almeno, così si credeva.»</p>
        
        <p>Crise guardò Trejano intensamente.</p>
        
        <p>«Ma alcune gemme non erano perdute. Erano solo... nascoste.»</p>
        
        <p>Toccò l'anello al suo dito, la gemma trasparente che brillava debolmente.</p>
        
        <p>«Cristallo di Rocca. Una delle gemme perdute. E ce ne sono altre.»</p>`,
        choices: [
            {
                text: "«La perla...»",
                nextParagraph: 89,
                consequences: {
                    stats: { saggezza: 1 }
                }
            }
        ],
        flags: {
            set: { 'sette_regni_spiegati': true, 'tredici_perduti_spiegati': true }
        }
    },
    89: {
        id: 89,
        title: "La Connessione",
        content: `<p>«La perla» ripeté Trejano, e improvvisamente tutto cominciò a connettersi nella sua mente. «La perla che Neiano aveva nascosto. Era...»</p>
        
        <p>«Una delle gemme perdute» confermò Crise. «La Perla di Akoia. La gemma del regno perduto di Perla.»</p>
        
        <p>«Ma... ma come...»</p>
        
        <p>«Quella storia» disse Crise, «te la racconterò domani sera. Per stanotte, basta così. Hai bisogno di dormire, e io di pensare.»</p>
        
        <p>Si alzò e aggiunse altra legna al fuoco.</p>
        
        <p>«Dormi, Trejano. Domani avremo un'altra lunga giornata di cammino.»</p>
        
        <p>Trejano si sdraiò, avvolgendosi nella coperta. Ma la sua mente turbinava. La guerra. Le gemme perdute. La perla.</p>
        
        <p>Tutto era connesso. Lui era connesso a tutto questo, in qualche modo.</p>
        
        <p>Ma come?</p>`,
        choices: [
            {
                text: "Cerca di dormire",
                nextParagraph: 90,
                stats: null
            }
        ],
        flags: {
            set: { 'perla_collegata': true }
        }
    },
    90: {
        id: 90,
        title: "Sogni e Stelle",
        content: `<p>Quella notte, Trejano dormì male. I sogni lo tormentavano. Vedeva regni che bruciavano, gemme che brillavano, un re con una corona di rubini che rideva mentre il mondo crollava intorno a lui.</p>
        
        <p>E vedeva una perla. Una perla enorme e brillante, che galleggiava in un mare di stelle.</p>
        
        <p>Una voce sussurrava: <em>"Ratnaraj. Re delle Gemme. Il tuo destino ti attende."</em></p>
        
        <p>Si svegliò di soprassalto. Era ancora notte, ma il cielo a est cominciava a schiarire leggermente. L'alba non era lontana.</p>
        
        <p>Crise era seduto vicino al fuoco, sveglio, vigile. Gli uccelli erano ancora sui rami, occhi brillanti nell'oscurità.</p>
        
        <p>«Hai fatto di nuovo quel sogno?» chiese Crise senza voltarsi.</p>
        
        <p>«Come... come lo sai?»</p>
        
        <p>«Perché tu hai il dono. E il dono si manifesta attraverso i sogni, all'inizio.»</p>
        
        <p>Si voltò a guardare Trejano.</p>
        
        <p>«Preparati, ragazzo. Abbiamo un'altra lunga giornata davanti a noi.»</p>
        
        <p><strong>[Continua al paragrafo 91]</strong></p>`,
        choices: [
            {
                text: "➡️ Il Secondo Giorno di Viaggio",
                nextParagraph: 91,
                stats: null
            }
        ],
        flags: {
            set: { 'sogno_ratnaraj_secondo': true, 'dono_menzionato': true }
        }
    }
}

// Esporta per uso nel browser
if (typeof window !== 'undefined') {
    window.StoryData = StoryData;
    console.log('✅ StoryData caricato con', Object.keys(StoryData).length, 'paragrafi');
}
