// ===== STORY DATA - VOLUME I: L'INNOCENZA SPEZZATA =====
// Paragrafi 1-15: Apertura e Dialogo con Neiano

const storyData = {
    // ===== PARAGRAFO 1: INIZIO =====
    1: {
        id: 1,
        title: "L'Inizio",
        text: `<p><em>Tanti anni or sono, nella terra di Limb, viveva un fanciullo.</em></p>
        
        <p>Gli occhi di Trejano vagavano nel cielo notturno, frugando tra i cirri bizzosi alla ricerca di Entaris, la stella più luminosa di Limb. Quella che indicava la città di Reudhos, quella che guidava i naviganti e i viandanti nelle notti senza luna.</p>
        
        <p>Ma quella notte Trejano non cercava la via. Cercava solo di non pensare.</p>
        
        <p>Bianchi i suoi capelli come la neve che riflette il sole. Neri i suoi occhi come la notte profonda e senza lume. E ora quegli occhi neri erano arrossati dal pianto.</p>
        
        <p>Era in fuga attraverso le misteriose terre di Saar. Correva da ore, o forse da giorni — aveva perso il conto del tempo. Il dolore alla tempia pulsava a ogni passo, dove la ferita ancora sanguinava sotto l'impiastro che il vecchio gli aveva applicato.</p>
        
        <p>Il vecchio. Quel viandante dai poteri terribili che si era trasformato in belva per salvarlo. O forse per rapirlo. Trejano ancora non sapeva.</p>
        
        <p>Chiuse gli occhi e nella mente gli tornò nitida l'ultima conversazione con Neiano, suo padre. L'ultima volta che l'aveva visto, prima che tutto cambiasse per sempre...</p>`,
        choices: [
            {
                text: "📖 Ricorda il dialogo con Neiano",
                next: 2,
                stats: null
            }
        ],
        flags: {
            set: ['flashback_iniziato']
        }
    },

    // ===== PARAGRAFO 2: RICORDO DEL DIALOGO =====
    2: {
        id: 2,
        title: "Il Sogno di un Pescatore",
        text: `<p><em>«Papà, come si fa a diventare cavaliere?»</em></p>
        
        <p>Il ricordo era così vivido che Trejano poteva ancora vedere il sorriso di Neiano. Quel sorriso paziente, un po' triste, che suo padre aveva ogni volta che lui parlava di avventure e viaggi.</p>
        
        <p>Erano seduti fuori dalla palafitta, all'ombra del grande salice che dominava il piccolo spiazzo. Il sole del pomeriggio tingeva d'oro le acque dell'Ondrasco. Ago, il suo migliore amico, se n'era appena andato dopo una mattinata di pesca.</p>
        
        <p>«Non pensarci Trejano» aveva risposto Neiano, accarezzandogli i capelli bianchi. «Noi siamo pescatori, non cavalieri.»</p>
        
        <p>Ma Trejano aveva tredici anni e i sogni a quell'età sono più veri della realtà. Aveva trascorso troppi inverni ad ascoltare le storie che Neiano gli raccontava davanti al focolare. Storie di eroi e cavalieri, di terre lontane e creature magnifiche.</p>
        
        <p>Come vuoi che Trejano risponda al padre?</p>`,
        choices: [
            {
                text: "⚔️ Con determinazione solenne (come un vero cavaliere)",
                next: 3,
                stats: { forza: 1 }
            },
            {
                text: "🤔 Con curiosità sincera (cerca di capire il padre)",
                next: 4,
                stats: { saggezza: 1 }
            },
            {
                text: "😔 Con silenzio triste (accetta ma soffre)",
                next: 5,
                stats: { empatia: 1 }
            }
        ]
    },

    // ===== PARAGRAFO 3: SCELTA A1 - DETERMINATO =====
    3: {
        id: 3,
        title: "La Determinazione del Giovane",
        text: `<p>Trejano raddrizzò le spalle, cercando di rendersi più alto, più adulto. Voleva che il padre lo prendesse sul serio.</p>
        
        <p>«Padre» disse con tutta la solennità che un ragazzo di tredici anni può raccogliere, sforzandosi di ricordare le formule che il padre usava nelle storie. «Vorrei diventare cavaliere ed attraversare l'Ondrasco ed i massicci Aeternali e vedere le terre dove vivono le aquile maestose e gli altri incredibili animali; e poi visitare le sette penisole dei re e Reudhos l'eterna.»</p>
        
        <p>Neiano sospirò. Quel ragazzo era così testardo. Nel villaggio lo chiamavano Trejano Testadipietra. Era davvero ostinato come un mulo.</p>
        
        <p>Un mulo. Neiano sorrise a quel pensiero. "Mulo" era stato anche il suo soprannome da piccolo.</p>
        
        <p>«Figlio mio» rispose Neiano scrutandolo con i suoi occhi color della cenere. «Non si addice ad un modesto pescatore di anguille desiderare imprese di cavalieri. La loro è una vita errabonda e perigliosa, una eterna ricerca di qualcosa che forse non raggiungeranno mai.»</p>
        
        <p>Fece una pausa, guardando le acque del fiume.</p>
        
        <p>«Ricca è la vita del pescatore che nella sua terra e nella sua casa è capace di scoprire il suo tesoro: non di acquemarine, ametiste, perle, smeraldi, topazi, zaffiri o rubini è formato, ma dal più profondo significato della vita.»</p>`,
        choices: [
            {
                text: "➡️ Continua",
                next: 6,
                stats: null
            }
        ],
        flags: {
            set: ['dialogo_determinato'],
            modify: { 'neiano_relazione': 1 }
        }
    },

    // ===== PARAGRAFO 4: SCELTA A2 - CURIOSO =====
    4: {
        id: 4,
        title: "Le Domande del Saggio",
        text: `<p>«Ma padre» chiese Trejano con voce più dolce, «perché non posso? Tu mi racconti sempre storie di cavalieri e di terre lontane. Se sono solo storie, perché me le narri?»</p>
        
        <p>Era una domanda saggia per un ragazzo di tredici anni, e Neiano se n'era accorto. Guardò suo figlio con nuovo rispetto.</p>
        
        <p>«Le storie, figlio mio, servono a farci sognare. Ma i sogni e la realtà sono due cose diverse.» Posò una mano sulla spalla di Trejano. «Io ti racconto quelle storie perché tu possa vedere mondi che forse non vedrai mai. Perché la tua mente possa viaggiare anche se i tuoi piedi restano qui, su questa terra.»</p>
        
        <p>«Ma tu» insistette Trejano, «come conosci tutte queste storie? Tu sei solo un pescatore, no?»</p>
        
        <p>Neiano distolse lo sguardo, guardando verso la foresta che circondava Treja. Verso quella strada misteriosa che non conduceva in nessun luogo.</p>
        
        <p>«Anch'io ho sognato, una volta» mormorò. «E a volte i sogni hanno un prezzo.»</p>`,
        choices: [
            {
                text: "➡️ Continua",
                next: 6,
                stats: null
            }
        ],
        flags: {
            set: ['dialogo_curioso'],
            modify: { 'neiano_relazione': 1 }
        }
    },

    // ===== PARAGRAFO 5: SCELTA A3 - SILENZIOSO =====
    5: {
        id: 5,
        title: "Il Silenzio che Parla",
        text: `<p>Trejano abbassò lo sguardo. Le parole del padre pesavano come pietre nel suo cuore. Strinse le mani sui pantaloni di tela di Saar, cercando di contenere la delusione che gli bruciava in gola.</p>
        
        <p>«Va bene, padre» sussurrò.</p>
        
        <p>Ma Neiano conosceva suo figlio. Conosceva quel silenzio carico di sogni infranti. Si chinò verso di lui, sollevandogli il mento con dolcezza finché i loro occhi non si incontrarono.</p>
        
        <p>«Trejano» disse con voce ferma ma affettuosa. «Non è che non voglia che tu diventi qualcuno di grande. È che temo per te. Il mondo là fuori...» fece un gesto vago verso l'orizzonte, «...è più pericoloso di quanto tu possa immaginare. E io non voglio perderti.»</p>
        
        <p>Una lacrima rigò la guancia di Trejano. Neiano gliela asciugò con il pollice.</p>
        
        <p>«Ma se è davvero ciò che vuoi» continuò il padre, «se il tuo cuore ti chiama altrove... allora forse non è mio compito fermarti. È solo mio dovere prepararti.»</p>`,
        choices: [
            {
                text: "➡️ Continua",
                next: 6,
                stats: null
            }
        ],
        flags: {
            set: ['dialogo_silenzioso'],
            modify: { 'neiano_relazione': 1, 'maturita_emotiva': 1 }
        }
    }
};

// Esporta i dati
if (typeof window !== 'undefined') {
    window.storyData = storyData;
    console.log('📖 Story Data caricato: Paragrafi 1-5');
}
// ===== STORY DATA - PARAGRAFI 6-10 =====
// Ricongiungimento e Annuncio della Partenza di Neiano

const storyData_6_10 = {
    // ===== PARAGRAFO 6: RICONGIUNGIMENTO =====
    6: {
        id: 6,
        title: "L'Annuncio",
        text: `<p>Neiano guardò suo figlio in silenzio per qualche istante. Nei suoi occhi color della cenere bruciava qualcosa di nuovo, un fuoco che Trejano non aveva mai visto prima. Sembrava che il padre stesse lottando con una decisione importante.</p>
        
        <p>Alla fine, Neiano sospirò profondamente.</p>
        
        <p>«Figliolo» disse con voce grave, posando entrambe le mani sulle spalle di Trejano. «Al terzo tramonto da oggi ti narrerò una storia. Tu mi ascolterai attentamente e poi deciderai...»</p>
        
        <p>Trejano rimase perplesso. Era abituato alla chiarezza del padre e al suo pragmatismo, che abbandonava solo quando narrava le sue storie davanti al focolare. Ma ora vedeva nei suoi occhi miti e riflessivi un'intensità nuova.</p>
        
        <p>«Papà, cosa vuoi narrarmi? Perché non me lo dici adesso?»</p>
        
        <p>«Figliolo» riprese Neiano senza stizza ma con perentorietà. «Frena la tua curiosità. Al terzo tramonto da oggi ti narrerò la storia. Ora debbo partire. Attendimi e sarò di ritorno per allora.»</p>`,
        choices: [
            {
                text: "➡️ Partire? Ma dove?",
                next: 7,
                stats: null
            }
        ]
    },

    // ===== PARAGRAFO 7: SHOCK DELLA PARTENZA =====
    7: {
        id: 7,
        title: "La Strada che Non Porta da Nessuna Parte",
        text: `<p><em>Partire?</em></p>
        
        <p>Trejano rimase immobile e sorpreso mentre guardava il padre voltarsi e camminare verso la palafitta. Il padre non era mai partito. Mai. Ed ora improvvisamente doveva partire.</p>
        
        <p>Per andare dove? Perché? Perché così repentinamente? Quale storia? Decidere cosa?</p>
        
        <p>Mille domande vorticavano nella mente di Trejano mentre vedeva Neiano rientrare nella palafitta. Dopo pochi minuti tornò portando una sporta da cui proveniva un gustoso odore di stufato d'anguilla e, a tracolla, un tascapane che spandeva nell'aria una fragranza di pane appena sfornato.</p>
        
        <p>Nell'altra mano stringeva un bastone: il bastone che utilizzava da giovane per la pesca delle anguille, protagonista di tante storie che gli aveva narrato. Dopo tanti anni di fedele servigio, il padre l'aveva riposto, lasciando a Trejano quella parte della pesca.</p>
        
        <p>«Arrivederci Trejano» disse Neiano, stringendo forte a sé il figlio. «Attendimi al tramonto del terzo giorno. Pane e stufato di anguilla non ti mancano. Sono sicuro che qualcuno veglierà benevolo su di te.»</p>`,
        choices: [
            {
                text: "🏃 Corri dietro al padre per fermarlo!",
                next: 8,
                stats: { empatia: 1 }
            },
            {
                text: "😢 Resta fermo, stringi forte l'abbraccio",
                next: 9,
                stats: { forza: 1 }
            },
            {
                text: "❓ Chiedi dove sta andando",
                next: 10,
                stats: { astuzia: 1 }
            }
        ],
        flags: {
            set: ['neiano_parte']
        }
    },

    // ===== PARAGRAFO 8: SCELTA B1 - CORRI =====
    8: {
        id: 8,
        title: "Il Richiamo del Cuore",
        text: `<p>L'abbraccio si sciolse e Trejano vide il padre imboccare la strada che non conduceva in nessun luogo. Quella strada di cui tutti a Treja parlavano con timore. Quella che nessuno aveva mai percorso fino in fondo.</p>
        
        <p>Ebbe paura. Gli aveva sempre raccomandato di tenersi lontano da là. Era pericolosa...</p>
        
        <p>Fece due passi in avanti, aprì la bocca per gridare. Voleva correre dietro al padre per fermarlo, per dirgli che non gli importava nulla della storia e che non voleva più diventare cavaliere. Che sarebbe rimasto con lui per sempre a pescare le anguille.</p>
        
        <p>Ma si fermò. Qualcosa lo trattenne.</p>
        
        <p>Già il padre era lontano qualche centinaio di metri, stava per scantonare seguendo la curva della strada che l'avrebbe rapito alla sua vista. Da lontano Neiano sembrava ringiovanito: l'andatura incerta dell'età era scomparsa, sembrava anche più alto. Sembrava, così in lontananza, un ragazzo che va in cerca di avventura...</p>
        
        <p>Trejano rimase fermo a guardare finché la figura del padre non scomparve dietro la curva.</p>`,
        choices: [
            {
                text: "➡️ I tre giorni di attesa",
                next: 11,
                stats: null
            }
        ],
        flags: {
            modify: { 'neiano_relazione': 1 }
        }
    },

    // ===== PARAGRAFO 9: SCELTA B2 - RESTA FERMO =====
    9: {
        id: 9,
        title: "La Forza del Silenzio",
        text: `<p>Trejano ricambiò la stretta del padre con tutta la forza che aveva. Non disse nulla. Un groppo gli bloccava la gola e non riusciva a parlare.</p>
        
        <p>Sentì il cuore di Neiano battere contro il suo petto. Un battito forte, regolare. Un battito che diceva: "Tornerò."</p>
        
        <p>Poi l'abbraccio si sciolse. Neiano si voltò e imboccò la strada che non conduceva in nessun luogo. Trejano rimase immobile, con i pugni stretti lungo i fianchi, guardando la figura del padre allontanarsi.</p>
        
        <p>Voleva gridare. Voleva correre. Ma rimase fermo.</p>
        
        <p>Perché quella era la forza che Neiano gli aveva insegnato: non quella dei muscoli, ma quella del cuore. La forza di lasciar andare chi ami, fidando che tornerà.</p>
        
        <p>Da lontano Neiano sembrava più giovane, più leggero. L'andatura si era fatta spedita, quasi allegra. Come un ragazzo che parte per un'avventura.</p>
        
        <p>Trejano lo guardò finché non scomparve dietro la curva della strada. Solo allora si permise di piangere.</p>`,
        choices: [
            {
                text: "➡️ I tre giorni di attesa",
                next: 11,
                stats: null
            }
        ],
        flags: {
            modify: { 'neiano_relazione': 1, 'maturita_emotiva': 1 }
        }
    },

    // ===== PARAGRAFO 10: SCELTA B3 - CHIEDI =====
    10: {
        id: 10,
        title: "Le Domande Senza Risposta",
        text: `<p>«Padre, aspetta!» gridò Trejano, trattenendo Neiano per un lembo della tunica. «Dove vai? Cosa vuoi raccontarmi? Non capisco!»</p>
        
        <p>Neiano si voltò. Sul suo volto c'era un'espressione che Trejano non aveva mai visto: metà sorriso, metà tristezza. Come se stesse guardando qualcosa di molto lontano.</p>
        
        <p>«Vado dove devo andare» rispose con voce dolce. «A cercare le risposte alle tue domande. A scoprire se il tuo destino è davvero quello di un pescatore... o se è qualcosa di più grande.»</p>
        
        <p>«Ma io...»</p>
        
        <p>«Tre giorni, Trejano. Solo tre giorni. Poi saprai tutto.» Gli posò una mano sui capelli bianchi. «E allora deciderai tu. Non io. Tu.»</p>
        
        <p>Si voltò di nuovo e imboccò la strada. Trejano restò fermo a guardarlo allontanarsi, con più domande di prima ma, stranamente, anche con una nuova speranza nel cuore.</p>
        
        <p>Neiano si allontanava spedito, ringiovanito. Come un ragazzo che va in cerca della sua avventura.</p>`,
        choices: [
            {
                text: "➡️ I tre giorni di attesa",
                next: 11,
                stats: null
            }
        ],
        flags: {
            modify: { 'neiano_relazione': 1 }
        }
    }
};

// Esporta i dati
if (typeof window !== 'undefined') {
    window.storyData_6_10 = storyData_6_10;
    console.log('📖 Story Data caricato: Paragrafi 6-10');
}
// ========================================
// BLOCCO 3: PARAGRAFI 11-15
// I Tre Giorni di Attesa
// ========================================

const storyData_11_15 = {
    
    // ===== PARAGRAFO 11: RICONGIUNGIMENTO - INIZIO ATTESA =====
    11: {
        id: 11,
        title: "I Tre Giorni",
        text: `<p>Trejano guardò la strada finché Neiano non fu che un puntino all'orizzonte, poi tornò lentamente verso la palafitta. Il sole era alto ormai, e il fiume Ondrasco scorreva pigro come sempre, indifferente al turbamento che agitava il cuore del ragazzo.</p>
        
        <p><em>Tre giorni</em>, pensò. <em>Tre giorni e poi saprò.</em></p>
        
        <p>Ma sapere cosa? Neiano aveva parlato per enigmi, come faceva sempre quando l'argomento era troppo importante per essere affrontato direttamente. Una storia da raccontare. Una scelta da fare. Ma quale storia? E quale scelta?</p>
        
        <p>Entrò nella palafitta e si guardò attorno. La casa sembrava stranamente vuota senza Neiano, anche se il padre era partito solo da pochi minuti. Le reti pendevano dagli uncini, il tavolo ancora conservava le tracce della colazione, ma tutto sembrava privo di vita.</p>
        
        <p>«Trejano!» La voce di Ago lo raggiunse dalla porta. Il suo amico stava sulla soglia, con quella sua aria eternamente curiosa. «Ho visto Neiano partire. Dove è andato? Non vi serve aiuto con le anguille oggi?»</p>`,
        choices: [
            {
                text: "«Neiano tornerà tra tre giorni. Ha... cose da fare»",
                next: 12,
                requirement: null
            },
            {
                text: "«Non lo so nemmeno io. È partito senza spiegare nulla»",
                next: 13,
                requirement: null
            },
            {
                text: "Raccontagli tutto del dialogo e dei tuoi sogni",
                next: 14,
                requirement: null
            }
        ],
        flags: {
            set: { 'giorni_attesa': 1, 'neiano_partito': true }
        }
    },

    // ===== PARAGRAFO 12: SCELTA C1 - RISERVATO =====
    12: {
        id: 12,
        title: "Segreti Custoditi",
        text: `<p>«Neiano tornerà tra tre giorni» disse Trejano, cercando di mantenere un tono casual. «Ha... cose da fare.»</p>
        
        <p>Ago lo guardò con quell'espressione che significava "non ti credo ma non insisto". Era uno dei motivi per cui Trejano lo apprezzava: sapeva quando lasciar perdere.</p>
        
        <p>«Cose da fare, eh?» Ago sorrise. «Misteriose cose da fare. Va bene, non chiedo altro. Ma significa che sei libero oggi? Potremmo andare alla pozza grande, quella dove i pesci-gatto si nascondono sotto le radici...»</p>
        
        <p>Trejano guardò verso la strada dove Neiano era scomparso. Una parte di lui voleva stare solo, a riflettere sulle parole del padre. Un'altra parte sapeva che tre giorni di attesa sarebbero stati lunghi e dolorosi se passati in solitudine.</p>
        
        <p><em>Forse è meglio distrarsi</em>, pensò. <em>O forse dovrei usare questo tempo per pensare.</em></p>`,
        choices: [
            {
                text: "Accetta di andare alla pozza con Ago",
                next: 15,
                stats: null
            },
            {
                text: "Ringrazia ma preferisci restare solo",
                next: 15,
                stats: null
            }
        ],
        flags: {
            modify: { 'ago_relazione': 1 }
        }
    },

    // ===== PARAGRAFO 13: SCELTA C2 - CONFUSO =====
    13: {
        id: 13,
        title: "Confessioni",
        text: `<p>«Non lo so nemmeno io» ammise Trejano, sedendosi sui gradini della palafitta. «È partito senza spiegare nulla. O meglio, ha detto che tornerà tra tre giorni e allora mi racconterà una storia. Ma quale storia? E perché deve andare via per raccontarla?»</p>
        
        <p>Ago si sedette accanto a lui, raccogliendo un sassolino e gettandolo nel fiume.</p>
        
        <p>«Gli adulti sono strani» disse con saggezza da bambino di dieci anni. «Mio padre una volta è partito per "pensare". È tornato tre giorni dopo con un maiale. Non aveva senso.»</p>
        
        <p>Trejano non poté fare a meno di sorridere un po'. Era vero, gli adulti erano incomprensibili. Ma c'era qualcosa di diverso questa volta. Qualcosa nel modo in cui Neiano lo aveva guardato, come se stesse vedendo non il ragazzo che era, ma l'uomo che sarebbe diventato.</p>
        
        <p>«Vuoi venire alla pozza grande?» propose Ago. «Così non pensi troppo. Pensare troppo fa male alla testa, dice sempre mia madre.»</p>`,
        choices: [
            {
                text: "Accetta di andare alla pozza con Ago",
                next: 15,
                stats: null
            },
            {
                text: "Ringrazia ma preferisci restare solo",
                next: 15,
                stats: null
            }
        ],
        flags: {
            modify: { 'ago_relazione': 2 }
        }
    },

    // ===== PARAGRAFO 14: SCELTA C3 - APERTO =====
    14: {
        id: 14,
        title: "Confidenze",
        text: `<p>Trejano si ritrovò a raccontare tutto. Le parole uscivano come un fiume in piena: il sogno di diventare cavaliere, le obiezioni di Neiano, la partenza misteriosa, la promessa di una storia da ascoltare e di una scelta da fare.</p>
        
        <p>Ago ascoltava a bocca aperta, gli occhi che brillavano di eccitazione.</p>
        
        <p>«Un cavaliere!» esclamò quando Trejano ebbe finito. «È magnifico! Io ti vedo benissimo come cavaliere, sai? Alto, con un'armatura lucente, una spada...»</p>
        
        <p>«Neiano non era d'accordo.»</p>
        
        <p>«I padri non sono mai d'accordo» rispose Ago con sicurezza. «Mio padre voleva che diventassi fabbro come lui. Gli ho detto che preferisco pescare. Si è arrabbiato per tre giorni, poi ha ceduto. I padri cedono sempre.»</p>
        
        <p>Trejano non era sicuro che fosse così semplice. C'era qualcosa di più profondo nelle parole di Neiano, qualcosa che andava oltre la semplice preoccupazione di un genitore.</p>
        
        <p>«Vieni alla pozza grande?» chiese Ago. «Possiamo fare finta che sei un cavaliere che va a caccia di un drago acquatico!»</p>`,
        choices: [
            {
                text: "Accetta entusiasta - il gioco di ruolo ti piace",
                next: 15,
                stats: null
            },
            {
                text: "Accetta ma senza entusiasmo - hai bisogno di distrazione",
                next: 15,
                stats: null
            }
        ],
        flags: {
            modify: { 'ago_relazione': 3, 'ago_sa_sogni_cavaliere': true }
        }
    },

    // ===== PARAGRAFO 15: CONVERGENZA - PRIMO GIORNO =====
    15: {
        id: 15,
        title: "Il Primo Giorno",
        text: `<p>Il primo giorno passò lentamente. Che Trejano avesse trascorso il tempo con Ago o da solo, il risultato fu lo stesso: la mente continuava a tornare a Neiano, alla strada, alle parole dette e a quelle non dette.</p>
        
        <p>La sera cadde su Treja portando con sé l'umidità del fiume e il canto delle rane. Trejano si ritrovò sulla veranda della palafitta, seduto esattamente dove Neiano era solito sedersi dopo una giornata di pesca.</p>
        
        <p>Guardò la strada. Vuota. Nessuna figura familiare che tornava a casa.</p>
        
        <p><em>Due giorni ancora</em>, pensò. <em>Due giorni e poi saprò.</em></p>
        
        <p>Ma quella notte, mentre giaceva nel suo giaciglio ascoltando il fiume scorrere sotto le palafitte, Trejano si accorse di una cosa strana: non riusciva a immaginare quale storia Neiano volesse raccontargli. Ogni volta che ci provava, la mente scivolava via, come se stesse cercando di afferrare l'acqua con le mani.</p>
        
        <p>E questo, più di ogni altra cosa, lo teneva sveglio nella notte.</p>`,
        choices: [
            {
                text: "➡️ Il secondo giorno",
                next: 16,
                stats: null
            }
        ],
        flags: {
            modify: { 'giorni_attesa': 2 }
        }
    }
};

// Esporta i dati
if (typeof window !== 'undefined') {
    window.storyData_11_15 = storyData_11_15;
    console.log('📖 Story Data caricato: Paragrafi 11-15');
}
