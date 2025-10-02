// STORY DATA - IN FIN TE SPECCHIA
// Paragrafi del Volume I con sistema di scelte e conseguenze

const StoryData = {
    1: {
        id: 1,
        title: "L'Alba di un Nuovo Giorno",
        text: `<p>Il sole stava sorgendo sulle palafitte di Treja, tingendo di rosa le acque del fiume. Trejano, con i suoi capelli bianchi come neve che contrastavano con la sua giovane età di diciassette anni, si svegliò al suono familiare del fiume che scorreva sotto la sua casa.</p>
        
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
        text: `<p>Trejano entrò nella stanza principale della palafitta. Neiano era seduto al tavolo di legno grezzo, le mani giunte davanti a sé. I suoi occhi, solitamente pieni di calore, erano pensierosi.</p>
        
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
        text: `<p>Trejano rimase sulla veranda ancora un momento, respirando l'aria fresca del mattino. Il fiume scorreva placido, portando con sé piccoli pezzi di legno e foglie. Una libellula dalle ali iridescenti si posò sul parapetto accanto a lui.</p>
        
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
        text: `<p>Neiano annuì lentamente, come se si fosse aspettato quella risposta.</p>
        
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
        text: `<p>Neiano tornò a sedersi, le mani che tremavano leggermente.</p>
        
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
        text: `<p>«Devo andare a cercare risposte» disse Neiano. «Risposte su chi sei. Risposte su quella perla. E risposte su... su cosa sta per succedere.»</p>
        
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
        text: `<p>Trejano guardò Neiano allontanarsi sulla strada. Ogni passo lo portava più lontano, verso l'orizzonte dove la strada spariva tra le colline.</p>
        
        <p>Una parte di lui voleva correre, afferrare il padre, costringerlo a restare, a spiegare tutto subito. Un'altra parte sapeva che doveva lasciarlo andare, che questo faceva parte di qualcosa più grande.</p>
        
        <p>Il vento soffiava tra i capelli bianchi di Trejano, portando con sé il profumo di acqua e terra bagnata. Le palafitte di Treja scricchiolavano piano nel loro eterno dialogo con il fiume.</p>
        
        <p>Tre giorni. Solo tre giorni.</p>
        
        <p>Ma perché sembravano un'eternità?</p>`,
        choices: [
            {
                text: "Corri verso di lui, ma poi ti fermi",
                nextParagraph: 8,
                stats: null
            },
            {
                text: "Resta fermo, dimostra la tua forza",
                nextParagraph: 9,
                stats: null
            },
            {
                text: "Grida: «Padre, dove vai davvero?»",
                nextParagraph: 10,
                stats: null
            }
        ],
        flags: null
    },
    8: {
        id: 8,
        title: "Il Passo Non Fatto",
        text: `<p>Trejano iniziò a correre. I piedi nudi battevano sul legno umido della palafitta, poi sulla terra del sentiero.</p>
        
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
        text: `<p>Trejano rimase immobile, i pugni serrati ai fianchi. Ogni fibra del suo essere voleva correre, gridare, fermare quella partenza assurda.</p>
        
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
        text: `<p>«PADRE!» gridò Trejano. «DOVE VAI DAVVERO?»</p>
        
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
        text: `<p>Trejano tornò alla palafitta con passi lenti. Il villaggio era completamente sveglio ora. I pescatori stavano uscendo con le loro barche, le donne preparavano il pane, i bambini correvano tra le palafitte giocando.</p>
        
        <p>Tutto era normale. Tutto era come sempre.</p>
        
        <p>Eppure per Trejano nulla sarebbe più stato come prima.</p>
        
        <p>«Ehi, Trejano!» Una voce familiare lo chiamò. Era Ago, il figlio del fabbro, suo amico d'infanzia. Un ragazzo di dieci anni con più energia di quanto il suo piccolo corpo potesse contenere. «Hai visto? Mio padre ha finito la nuova spada! È bellissima! Vuoi venire a vederla?»</p>
        
        <p>Trejano guardò l'amico. Per un momento pensò di raccontargli tutto. Ma poi... cosa avrebbe detto? Che suo padre era partito per una strada che non portava da nessuna parte? Che c'era una perla misteriosa nascosta da qualche parte? Che forse lui, Trejano, non era chi pensava di essere?</p>`,
        choices: [
            {
                text: "«Non ora, Ago. Ho bisogno di stare solo»",
                nextParagraph: 12,
                stats: null
            },
            {
                text: "«Va bene, andiamo a vedere la spada»",
                nextParagraph: 13,
                stats: null
            },
            {
                text: "«Ago... posso parlarti di una cosa?»",
                nextParagraph: 14,
                stats: null
            }
        ],
        flags: {
            set: { 'incontro_ago': true }
        }
    },
    12: {
        id: 12,
        title: "La Solitudine",
        text: `<p>«Oh» disse Ago, la delusione evidente sul viso. «Va bene. Se... se hai bisogno di parlare, sai dove trovarmi.»</p>
        
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
        text: `<p>Trejano seguì Ago verso la fucina. A volte, pensò, era meglio lasciarsi distrarre. A volte pensare troppo faceva solo male.</p>
        
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
                stats: null
            },
            {
                text: "«Non è niente. Bella spada davvero!»",
                nextParagraph: 15,
                stats: null
            }
        ],
        flags: {
            modify: { 'ago_relazione': 1 }
        }
    },
    14: {
        id: 14,
        title: "Confidenze",
        text: `<p>Trejano si ritrovò a raccontare tutto. Le parole uscivano come un fiume in piena: il sogno di diventare cavaliere, la partenza di Neiano, la perla misteriosa, i tre giorni di attesa.</p>
        
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
        text: `<p>Il primo giorno passò lentamente. Trejano cercò di tenersi occupato - riparò alcune reti, aiutò i vicini a trasportare del legname, pescò nel fiume - ma la sua mente continuava a tornare a Neiano e alla strada misteriosa.</p>
        
        <p>La sera cadde su Treja portando con sé l'umidità del fiume e il canto delle rane. Trejano si ritrovò sulla veranda della palafitta, seduto esattamente dove Neiano era solito sedersi dopo una giornata di pesca.</p>
        
        <p>Guardò verso la strada. Vuota. Nessuna figura familiare che tornava a casa.</p>
        
        <p><em>Due giorni ancora</em>, pensò. <em>Due giorni e poi saprò.</em></p>
        
        <p>Ma quella notte, mentre giaceva nel suo giaciglio ascoltando il fiume scorrere sotto le palafitte, Trejano si accorse di una cosa strana: non riusciva a immaginare quale storia Neiano volesse raccontargli. Ogni volta che ci provava, la mente scivolava via, come se stesse cercando di afferrare l'acqua con le mani.</p>
        
        <p>E questo, più di ogni altra cosa, lo teneva sveglio nella notte.</p>
        
        <p><strong>[CONTINUA - Altri paragrafi in sviluppo]</strong></p>`,
        choices: [
            {
                text: "🔄 Ricomincia la storia",
                nextParagraph: 1,
                stats: null
            }
        ],
        flags: {
            modify: { 'giorni_attesa': 1 }
        }
    }
};

// Esporta per uso nel browser
if (typeof window !== 'undefined') {
    window.StoryData = StoryData;
    console.log('✅ StoryData caricato con', Object.keys(StoryData).length, 'paragrafi');
}
