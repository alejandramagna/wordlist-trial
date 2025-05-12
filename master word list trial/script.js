document.addEventListener('DOMContentLoaded', () => {
    const WORDS_PER_ROUND = 10;
    const MASTER_VERB_LIST = [
        { english: "accept", spanish: "aceptar" }, { english: "achieve", spanish: "lograr" },
        { english: "act", spanish: "actuar" }, { english: "add", spanish: "añadir" },
        { english: "admire", spanish: "admirar" }, { english: "admit", spanish: "admitir" },
        { english: "advise", spanish: "aconsejar" }, { english: "affect", spanish: "afectar" },
        { english: "agree", spanish: "estar de acuerdo" }, { english: "allow", spanish: "permitir" },
        { english: "answer", spanish: "responder" }, { english: "appear", spanish: "aparecer" },
        { english: "apply", spanish: "solicitar" }, { english: "argue", spanish: "discutir" },
        { english: "arrange", spanish: "organizar" }, { english: "arrive", spanish: "llegar" },
        { english: "ask", spanish: "preguntar" }, { english: "attack", spanish: "atacar" },
        { english: "avoid", spanish: "evitar" }, { english: "bake", spanish: "hornear" },
        { english: "be", spanish: "ser/estar" }, { english: "beat", spanish: "golpear/ganar" },
        { english: "become", spanish: "convertirse en" }, { english: "begin", spanish: "empezar" },
        { english: "believe", spanish: "creer" }, { english: "belong", spanish: "pertenecer" },
        { english: "break", spanish: "romper" }, { english: "bring", spanish: "traer" },
        { english: "build", spanish: "construir" }, { english: "buy", spanish: "comprar" },
        { english: "call", spanish: "llamar" }, { english: "can", spanish: "poder" },
        { english: "care", spanish: "cuidar" }, { english: "carry", spanish: "llevar" },
        { english: "catch", spanish: "atrapar" }, { english: "cause", spanish: "causar" },
        { english: "change", spanish: "cambiar" }, { english: "check", spanish: "comprobar" },
        { english: "choose", spanish: "elegir" }, { english: "clean", spanish: "limpiar" },
        { english: "close", spanish: "cerrar" }, { english: "come", spanish: "venir" },
        { english: "compare", spanish: "comparar" }, { english: "complain", spanish: "quejarse" },
        { english: "complete", spanish: "completar" }, { english: "continue", spanish: "continuar" },
        { english: "cook", spanish: "cocinar" }, { english: "copy", spanish: "copiar" },
        { english: "cost", spanish: "costar" }, { english: "count", spanish: "contar" },
        { english: "create", spanish: "crear" }, { english: "cry", spanish: "llorar" },
        { english: "cut", spanish: "cortar" }, { english: "dance", spanish: "bailar" },
        { english: "decide", spanish: "decidir" }, { english: "describe", spanish: "describir" },
        { english: "design", spanish: "diseñar" }, { english: "destroy", spanish: "destruir" },
        { english: "die", spanish: "morir" }, { english: "discover", spanish: "descubrir" },
        { english: "discuss", spanish: "debatir" }, { english: "do", spanish: "hacer" },
        { english: "draw", spanish: "dibujar" }, { english: "dream", spanish: "soñar" },
        { english: "drink", spanish: "beber" }, { english: "drive", spanish: "conducir" },
        { english: "eat", spanish: "comer" }, { english: "explain", spanish: "explicar" },
        { english: "fall", spanish: "caer" }, { english: "feel", spanish: "sentir" },
        { english: "fight", spanish: "luchar" }, { english: "fill", spanish: "llenar" },
        { english: "find", spanish: "encontrar" }, { english: "finish", spanish: "terminar" },
        { english: "fly", spanish: "volar" }, { english: "follow", spanish: "seguir" },
        { english: "forget", spanish: "olvidar" }, { english: "forgive", spanish: "perdonar" },
        { english: "get", spanish: "obtener" }, { english: "give", spanish: "dar" },
        { english: "go", spanish: "ir" }, { english: "grow", spanish: "crecer" },
        { english: "happen", spanish: "suceder" }, { english: "have", spanish: "tener" },
        { english: "hear", spanish: "oír" }, { english: "help", spanish: "ayudar" },
        { english: "hit", spanish: "golpear" }, { english: "hope", spanish: "esperar (deseo)" },
        { english: "hurt", spanish: "herir" }, { english: "imagine", spanish: "imaginar" },
        { english: "improve", spanish: "mejorar" }, { english: "include", spanish: "incluir" },
        { english: "introduce", spanish: "presentar" }, { english: "invite", spanish: "invitar" },
        { english: "join", spanish: "unirse" }, { english: "jump", spanish: "saltar" },
        { english: "keep", spanish: "guardar/mantener" }, { english: "know", spanish: "saber/conocer" },
        { english: "laugh", spanish: "reír" }, { english: "learn", spanish: "aprender" },
        { english: "leave", spanish: "irse/dejar" }, { english: "lend", spanish: "prestar" },
        { english: "let", spanish: "dejar/permitir" }, { english: "lie", spanish: "mentir/yacer" },
        { english: "like", spanish: "gustar" }, { english: "listen", spanish: "escuchar" },
        { english: "live", spanish: "vivir" }, { english: "look", spanish: "mirar" },
        { english: "lose", spanish: "perder" }, { english: "love", spanish: "amar" },
        { english: "make", spanish: "hacer/fabricar" }, { english: "mean", spanish: "significar" },
        { english: "meet", spanish: "conocer/encontrarse" }, { english: "mention", spanish: "mencionar" },
        { english: "mind", spanish: "importar" }, { english: "miss", spanish: "extrañar/perder" },
        { english: "move", spanish: "mover" }, { english: "need", spanish: "necesitar" },
        { english: "notice", spanish: "notar" }, { english: "offer", spanish: "ofrecer" },
        { english: "open", spanish: "abrir" }, { english: "order", spanish: "pedir/ordenar" },
        { english: "own", spanish: "poseer" }, { english: "paint", spanish: "pintar" },
        { english: "pass", spanish: "pasar" }, { english: "pay", spanish: "pagar" },
        { english: "plan", spanish: "planear" }, { english: "play", spanish: "jugar/tocar (instrumento)" },
        { english: "prefer", spanish: "preferir" }, { english: "prepare", spanish: "preparar" },
        { english: "promise", spanish: "prometer" }, { english: "protect", spanish: "proteger" },
        { english: "provide", spanish: "proveer" }, { english: "pull", spanish: "tirar de" },
        { english: "push", spanish: "empujar" }, { english: "put", spanish: "poner" },
        { english: "rain", spanish: "llover" }, { english: "read", spanish: "leer" },
        { english: "receive", spanish: "recibir" }, { english: "remember", spanish: "recordar" },
        { english: "repeat", spanish: "repetir" }, { english: "reply", spanish: "responder" },
        { english: "rest", spanish: "descansar" }, { english: "return", spanish: "volver/devolver" },
        { english: "run", spanish: "correr" }, { english: "save", spanish: "guardar/salvar" },
        { english: "say", spanish: "decir" }, { english: "see", spanish: "ver" },
        { english: "sell", spanish: "vender" }, { english: "send", spanish: "enviar" },
        { english: "serve", spanish: "servir" }, { english: "set", spanish: "establecer/colocar" },
        { english: "share", spanish: "compartir" }, { english: "show", spanish: "mostrar" },
        { english: "sing", spanish: "cantar" }, { english: "sit", spanish: "sentarse" },
        { english: "sleep", spanish: "dormir" }, { english: "speak", spanish: "hablar" },
        { english: "spend", spanish: "gastar/pasar (tiempo)" }, { english: "stand", spanish: "estar de pie" },
        { english: "start", spanish: "empezar" }, { english: "stay", spanish: "quedarse" },
        { english: "steal", spanish: "robar" }, { english: "stop", spanish: "parar" },
        { english: "study", spanish: "estudiar" }, { english: "suggest", spanish: "sugerir" },
        { english: "swim", spanish: "nadar" }, { english: "take", spanish: "tomar/coger" },
        { english: "talk", spanish: "hablar" }, { english: "teach", spanish: "enseñar" },
        { english: "tell", spanish: "decir/contar" }, { english: "thank", spanish: "agradecer" },
        { english: "think", spanish: "pensar" }, { english: "throw", spanish: "lanzar" },
        { english: "touch", spanish: "tocar" }, { english: "travel", spanish: "viajar" },
        { english: "try", spanish: "intentar" }, { english: "turn", spanish: "girar" },
        { english: "understand", spanish: "entender" }, { english: "use", spanish: "usar" },
        { english: "visit", spanish: "visitar" }, { english: "wait", spanish: "esperar" },
        { english: "wake", spanish: "despertar" }, { english: "walk", spanish: "caminar" },
        { english: "want", spanish: "querer" }, { english: "wash", spanish: "lavar" },
        { english: "watch", spanish: "mirar (TV, etc.)" }, { english: "wear", spanish: "llevar puesto" },
        { english: "win", spanish: "ganar" }, { english: "work", spanish: "trabajar" },
        { english: "worry", spanish: "preocuparse" }, { english: "write", spanish: "escribir" }
    ];

    let workingList = []; // Lista de palabras para el ciclo actual de 100
    let currentWordSet = []; // Las 10 palabras de la ronda actual
    let currentIndexInWorkingList = 0;
    let matchesThisRound = 0;
    let totalMatches = 0;

    let selectedEnglishButton = null;
    let selectedSpanishButton = null;

    const englishWordsContainer = document.getElementById('english-words-container');
    const spanishWordsContainer = document.getElementById('spanish-words-container');
    const feedbackEl = document.getElementById('feedback-message');
    const currentRoundMatchesEl = document.getElementById('current-round-matches');
    const currentRoundTotalEl = document.getElementById('current-round-total');
    const totalProgressMatchesEl = document.getElementById('total-progress-matches');
    const totalProgressTotalEl = document.getElementById('total-progress-total');
    const nextSetButton = document.getElementById('next-set-button');

    const synth = window.speechSynthesis;

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function speak(text, lang = 'en-US') {
        if (synth.speaking) {
            synth.cancel(); // Cancelar si ya está hablando para evitar solapamientos
        }
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;
        utterance.onerror = (event) => console.error('SpeechSynthesis Error:', event);
        synth.speak(utterance);
    }

    function createWordButton(wordText, language, originalWordData) {
        const button = document.createElement('button');
        button.textContent = wordText;
        button.dataset.language = language;
        // Guardar el par completo para facilitar la búsqueda de la traducción
        button.dataset.english = originalWordData.english;
        button.dataset.spanish = originalWordData.spanish;

        button.addEventListener('click', () => handleWordSelection(button));
        return button;
    }

    function displayCurrentSet() {
        englishWordsContainer.innerHTML = '';
        spanishWordsContainer.innerHTML = '';

        const englishTerms = currentWordSet.map(pair => pair.english);
        const spanishTerms = currentWordSet.map(pair => pair.spanish);

        shuffleArray(englishTerms); // Barajar para que no estén en el mismo orden
        shuffleArray(spanishTerms);

        englishTerms.forEach(term => {
            const originalPair = currentWordSet.find(p => p.english === term);
            englishWordsContainer.appendChild(createWordButton(term, 'english', originalPair));
        });

        spanishTerms.forEach(term => {
            const originalPair = currentWordSet.find(p => p.spanish === term);
            spanishWordsContainer.appendChild(createWordButton(term, 'spanish', originalPair));
        });

        currentRoundTotalEl.textContent = currentWordSet.length;
        updateProgressDisplay();
    }

    function handleWordSelection(button) {
        if (button.classList.contains('matched')) return; // No hacer nada si ya está emparejado

        const lang = button.dataset.language;

        if (lang === 'english') {
            speak(button.dataset.english); // Pronunciar la palabra en inglés
            if (selectedEnglishButton) {
                selectedEnglishButton.classList.remove('selected');
            }
            selectedEnglishButton = button;
            selectedEnglishButton.classList.add('selected');
        } else if (lang === 'spanish') {
            if (selectedSpanishButton) {
                selectedSpanishButton.classList.remove('selected');
            }
            selectedSpanishButton = button;
            selectedSpanishButton.classList.add('selected');
        }

        if (selectedEnglishButton && selectedSpanishButton) {
            checkMatch();
        }
    }

    function checkMatch() {
        // El par original está guardado en data-english y data-spanish de cada botón
        // Solo necesitamos comparar si el data-english del botón inglés es igual al data-english del botón español
        // y lo mismo para el español. Esto asegura que provienen del mismo par original.
        if (selectedEnglishButton.dataset.english === selectedSpanishButton.dataset.english &&
            selectedEnglishButton.dataset.spanish === selectedSpanishButton.dataset.spanish) {
            // ¡Correcto!
            feedbackEl.textContent = "¡Correcto!";
            feedbackEl.className = 'correct';

            selectedEnglishButton.classList.add('matched');
            selectedSpanishButton.classList.add('matched');
            selectedEnglishButton.classList.remove('selected');
            selectedSpanishButton.classList.remove('selected');

            matchesThisRound++;
            totalMatches++;
            updateProgressDisplay();

            if (matchesThisRound === currentWordSet.length) {
                feedbackEl.textContent = "¡Tanda completada!";
                if (currentIndexInWorkingList < workingList.length) {
                    nextSetButton.style.display = 'block';
                } else {
                    // Se completaron las 100 palabras
                    feedbackEl.textContent = "¡Felicidades! Has completado todas las palabras. Reiniciando...";
                    setTimeout(initializeGame, 2500); // Esperar y reiniciar
                }
            }
        } else {
            // Incorrecto
            feedbackEl.textContent = "Incorrecto. Intenta de nuevo.";
            feedbackEl.className = 'incorrect';

            selectedEnglishButton.classList.add('incorrect-flash');
            selectedSpanishButton.classList.add('incorrect-flash');

            setTimeout(() => {
                selectedEnglishButton.classList.remove('selected', 'incorrect-flash');
                selectedSpanishButton.classList.remove('selected', 'incorrect-flash');
            }, 700);
        }

        // Resetear selecciones para el próximo intento (si no fue un match)
        // o para el siguiente par (si fue un match)
        selectedEnglishButton = null;
        selectedSpanishButton = null;
    }

    function updateProgressDisplay() {
        currentRoundMatchesEl.textContent = matchesThisRound;
        totalProgressMatchesEl.textContent = totalMatches;
    }

    function loadNextSet() {
        nextSetButton.style.display = 'none';
        feedbackEl.textContent = '\u00A0'; // Limpiar mensaje (con un espacio no rompible)
        feedbackEl.className = '';
        matchesThisRound = 0;

        if (currentIndexInWorkingList >= workingList.length) {
            // Debería haberse manejado antes, pero por si acaso, reiniciar
            initializeGame();
            return;
        }

        const endIndex = Math.min(currentIndexInWorkingList + WORDS_PER_ROUND, workingList.length);
        currentWordSet = workingList.slice(currentIndexInWorkingList, endIndex);
        currentIndexInWorkingList = endIndex;

        displayCurrentSet();
    }

    function initializeGame() {
        workingList = [...MASTER_VERB_LIST]; // Crear una copia para trabajar
        shuffleArray(workingList);
        currentIndexInWorkingList = 0;
        totalMatches = 0; // Resetear progreso total para el nuevo ciclo
        totalProgressTotalEl.textContent = workingList.length;
        loadNextSet(); // Cargar la primera tanda
    }

    nextSetButton.addEventListener('click', loadNextSet);

    // Iniciar el juego cuando la página cargue
    initializeGame();
});