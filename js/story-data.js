const StoryData = {
    1: {
        id: 1,
        title: "Il Dialogo",
        text: `<p>«Padre, io voglio diventare un cavaliere.»</p>
        
        <p>Le parole uscirono dalla bocca di Trejano come un fiume in piena, incontenibili dopo giorni passati a rimuginare in silenzio. Neiano smise di sistemare le reti e alzò lo sguardo, i suoi occhi grigi come il cielo prima della tempesta.</p>
        
        <p>«Un cavaliere» ripeté, come se stesse assaporando il peso di quella parola. «Figlio mio, tu sai che la vita di un cavaliere...»</p>
        
        <p>«Lo so!» lo interruppe Trejano, le guance arrossate dall'emozione. «So che è pericolosa, so che è difficile. Ma io non voglio passare tutta la vita qui a pescare anguille! Voglio vedere il mondo, padre. Voglio visitare le sette penisole, vedere le aquile volare sui massicci Aeternali, combattere per qualcosa di più grande di me!»</p>
        
        <p>Il vento portava con sé l'odore del fiume Ondrasco e il canto lontano delle rane. Neiano guardava suo figlio con un'espressione che Trejano non sapeva decifrare. Non era rabbia, non era disapprovazione. Era qualcosa di più profondo, qualcosa che somigliava alla tristezza.</p>
        
        <p>«Trejano...» iniziò Neiano, ma poi si fermò. Le sue mani, forti e callose dal lavoro, si posarono sulle spalle del ragazzo. «Dimmi una cosa. Perché vuoi diventare un cavaliere?»</p>`,
        choices: [
            {
                text: "«Per la gloria e l'avventura! Per vivere una vita degna di essere raccontata!»",
                next: 2,
                requirement: null
            },
            {
                text: "«Per proteggere chi non può difendersi. Per fare del bene nel mondo.»",
                next: 3,
                requirement: null
            },
            {
                text: "«Perché sento che è il mio destino, padre. Non so spiegarlo altrimenti.»",
                next: 4,
                requirement: null
            }
        ],
        flags: {
            set: { 'dialogo_neiano_avvenuto': true }
        }
    },
    2: {
        id: 2,
        title: "Sogni di Gloria",
        text: `<p>«Per la gloria e l'avventura!» esclamò Trejano, gli occhi che brillavano. «Per vivere una vita degna di essere raccontata! Padre, tu non capisci... qui a Treja non succede mai nulla. Sempre le stesse giornate, sempre le stesse anguille, sempre lo stesso fiume. Io voglio di più! Voglio che un giorno si raccontino storie su di me, che i bambini giochino a fare il mio nome!»</p>
        
        <p>Neiano sospirò. Non era un sospiro di disappunto, ma di comprensione melanconica.</p>
        
        <p>«La gloria...» mormorò. «Sai, Trejano, io ero come te alla tua età. Anch'io sognavo cose grandi. Ma la gloria è una cosa pericolosa da cercare. È come un fuoco: può illuminarti la strada o consumarti completamente.»</p>
        
        <p>«Ma tu hai rinunciato!» protestò Trejano. «Hai scelto di restare qui, di fare il pescatore. Io non voglio rinunciare prima ancora di provare!»</p>
        
        <p>Per un lungo momento, Neiano non disse nulla. Guardava il fiume, come se nelle sue acque scure potesse leggere il futuro.</p>
        
        <p>Poi si voltò verso Trejano con un'espressione seria.</p>
        
        <p>«Figlio mio, devo dirti una cosa importante. Devo... andare via per un po'.»</p>`,
        choices: [
            {
                text: "➡️ Continua",
                next: 5,
                stats: null
            }
        ],
        flags: {
            set: { 'motivazione_cavaliere': 'gloria' },
            modify: { 'maturita_emotiva': 1 }
        }
    },
    3: {
        id: 3,
        title: "Il Cuore del Cavaliere",
        text: `<p>«Per proteggere chi non può difendersi» rispose Trejano con voce ferma. «Per fare del bene nel mondo, padre. Tu mi hai sempre insegnato che la forza va usata per aiutare i deboli, che chi può deve prendersi cura di chi non può. Ma qui a Treja... cosa posso proteggere? Le anguille? I pesci-gatto?»</p>
        
        <p>Qualcosa si accese negli occhi di Neiano. Un lampo di orgoglio, forse, o di riconoscimento.</p>
        
        <p>«Trejano...» disse piano. «Quelle sono parole sagge. Troppo sagge per un ragazzo della tua età. Mi chiedo...» si interruppe, come se avesse detto troppo. «Mi chiedo se tu sappia davvero cosa significhi proteggere qualcuno. Il peso che comporta. Le scelte che dovrai fare.»</p>
        
        <p>«Allora insegnami!» supplicò Trejano. «Tu lo sai, vero? C'è qualcosa nel modo in cui ti muovi, nel modo in cui guardi l'orizzonte... Tu non sei sempre stato un pescatore, vero padre?»</p>
        
        <p>Neiano parve vacillare. Per un attimo sembrò sul punto di dire qualcosa di importante, di rivelare un segreto a lungo custodito. Ma poi scosse la testa.</p>
        
        <p>«Figlio mio, devo dirti una cosa. Devo... andare via per un po'.»</p>`,
        choices: [
            {
                text: "➡️ Continua",
                next: 5,
                stats: null
            }
        ],
        flags: {
            set: { 'motivazione_cavaliere': 'protezione' },
            modify: { 'maturita_emotiva': 1, 'empatia': 1 }
        }
    },
    4: {
        id: 4,
        title: "Il Richiamo del Destino",
        text: `<p>«Perché sento che è il mio destino, padre» disse Trejano, e nella sua voce c'era qualcosa di strano, quasi un'eco di qualcosa più grande. «Non so spiegarlo altrimenti. È come se... come se ci fosse una strada davanti a me che posso solo intravedere, ma che devo percorrere. Tu capisci?»</p>
        
        <p>Il volto di Neiano impallidì. Le sue mani tremarono leggermente sulle spalle di Trejano.</p>
        
        <p>«Destino» sussurrò. «Hai detto destino.» Guardò suo figlio con un'intensità nuova, come se lo stesse vedendo per la prima volta. O forse come se stesse vedendo qualcun altro attraverso di lui.</p>
        
        <p>«Padre, ti senti bene?»</p>
        
        <p>«Sì, io... sì.» Neiano si passò una mano sul viso. «Trejano, tu non puoi capire quanto siano pesanti le tue parole. Il destino... il destino non è una cosa da invocare alla leggera. È un fiume che ci trascina, anche quando vorremmo nuotare in direzione opposta.»</p>
        
        <p>Si voltò verso la strada che usciva da Treja, quella che nessuno percorreva mai perché non portava da nessuna parte. O almeno, così dicevano tutti.</p>
        
        <p>«Figlio mio, devo dirti una cosa. Devo... andare via per un po'.»</p>`,
        choices: [
            {
                text: "➡️ Continua",
                next: 5,
                stats: null
            }
        ],
        flags: {
            set: { 'motivazione_cavaliere': 'destino' },
            modify: { 'maturita_emotiva': 1, 'saggezza': 1 }
        }
    },
    5: {
        id: 5,
        title: "L'Annuncio",
        text: `<p>«Andare via?» ripeté Trejano, confuso. «Ma... dove? Per quanto tempo?»</p>
        
        <p>Neiano guardò ancora la strada, quella strada che non portava da nessuna parte.</p>
        
        <p>«Non posso dirtelo ancora» disse piano. «Ma tornerò. Tornerò al terzo tramonto da oggi, e allora... allora ti racconterò una storia. Una storia vera, Trejano. La storia più vera che tu abbia mai ascoltato. E dopo che l'avrai sentita, deciderai tu. Deciderai tu se vuoi davvero essere un cavaliere, se vuoi davvero seguire questa strada.»</p>
        
        <p>«Ma padre, io non capisco...»</p>
        
        <p>«Lo so. E mi dispiace. Ma ci sono cose che devo fare prima. Cose che devo... verificare.» Neiano posò una mano sui capelli bianchi di Trejano, un gesto di affetto che il ragazzo conosceva bene. «Tre giorni, figlio mio. Tre giorni e poi avrai tutte le risposte che cerchi. Te lo prometto.»</p>
        
        <p>Si voltò per andarsene, poi si fermò.</p>
        
        <p>«E Trejano... qualunque cosa tu scelga, io sarò orgoglioso di te. Ricordalo sempre.»</p>`,
        choices: [
            {
                text: "➡️ Neiano si prepara a partire",
                next: 6,
                stats: null
            }
        ],
        flags: {
            set: { 'neiano_annuncia_partenza': true, 'promessa_storia': true }
        }
    },
    6: {
        id: 6,
        title: "La Partenza",
        text: `<p>Neiano entrò nella palafitta e iniziò a preparare un piccolo fagotto. Poche cose: un mantello, del pane secco, una borraccia. Trejano lo guardava dalla soglia, il cuore stretto in una morsa di emozioni contrastanti.</p>
        
        <p>Confusione. Paura. Ma anche, stranamente, eccitazione. Stava per succedere qualcosa. Qualcosa di importante.</p>
        
        <p>«Padre» chiamò. «Quella strada... quella strada che nessuno percorre... è lì che vai?»</p>
        
        <p>Neiano si fermò. Sorrise, ma era un sorriso triste.</p>
        
        <p>«È l'unica strada che vale la pena percorrere, figlio mio. Le strade che tutti conoscono portano solo dove tutti sono già stati.»</p>
        
        <p>Si caricò il fagotto sulle spalle e uscì. Il sole era alto ora, e il fiume brillava come argento liquido. Neiano si voltò un'ultima volta verso Trejano.</p>
        
        <p>«Tre giorni» disse. «E ricorda: qualunque cosa accada, io ti amo.»</p>
        
        <p>Poi iniziò a camminare verso la strada che non portava da nessuna parte.</p>`,
        choices: [
            {
                text: "Guardalo partire in silenzio",
                next: 7,
                requirement: null
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
                next: 8,
                requirement: null
            },
            {
                text: "Resta fermo, dimostra la tua forza",
                next: 9,
                requirement: null
            },
            {
                text: "Grida: «Padre, dove vai davvero?»",
                next: 10,
                requirement: null
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
        
        <p>Neiano si voltò, come se avesse percepito il movimento. I loro occhi si incontrarono attraverso la distanza. Il padre alzò una mano in un gesto di saluto, o forse di benedizione.</p>
        
        <p>Poi riprese a camminare, e questa volta Trejano non fece nulla per fermarlo.</p>
        
        <p>Restò lì, sulla strada, a guardare la figura di Neiano diventare sempre più piccola, fino a scomparire completamente dove la strada si piegava dietro una collina.</p>`,
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
    9: {
        id: 9,
        title: "La Forza del Silenzio",
        text: `<p>Trejano non si mosse. Rimase sulla veranda della palafitta, le mani strette ai fianchi, a guardare Neiano allontanarsi.</p>
        
        <p>Voleva correre. Voleva gridare. Ma non lo fece.</p>
        
        <p>Perché in quel momento capì che questa era la prima vera prova. Non con una spada, non con un nemico da affrontare. Ma con se stesso, con la capacità di lasciare andare qualcuno che amava, fidandosi che sarebbe tornato.</p>
        
        <p><em>Un cavaliere deve essere forte</em>, pensò. <em>Forte anche quando è spaventato.</em></p>
        
        <p>Neiano non si voltò. Continuò a camminare con passo deciso, come un uomo che sa esattamente dove sta andando, anche se la strada sembrava non portare da nessuna parte.</p>
        
        <p>E Trejano rimase lì, immobile come una statua, fino a quando la figura del padre scomparve completamente all'orizzonte.</p>
        
        <p>Solo allora si permise di tremare.</p>`,
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
    },
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
                text: "Accetta entusiasta",
                next: 15,
                stats: null
            },
            {
                text: "Accetta senza entusiasmo",
                next: 15,
                stats: null
            }
        ],
        flags: {
            modify: { 'ago_relazione': 3, 'ago_sa_sogni_cavaliere': true }
        }
    },
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
    },
    };

if (typeof window !== 'undefined') {
    window.StoryData = StoryData;
    console.log('✅ StoryData caricato con', Object.keys(StoryData).length, 'paragrafi');
}
