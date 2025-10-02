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
    }
};

// Esporta per uso nel browser
if (typeof window !== 'undefined') {
    window.StoryData = StoryData;
    console.log('✅ StoryData caricato con', Object.keys(StoryData).length, 'paragrafi');
}
