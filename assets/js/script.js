  /**
         * ==========================================
         * PARTIE 1 : SITE BILINGUE (Réponses aux questions du prof)
         * ==========================================
         */

        /**
         * QUESTION : Gérer le contenu multilingue (Page 3 du PDF)
         * REPONSE : Création d'un objet JSON structuré regroupant les clés de traduction pour chaque langue (FR/EN).
         */
        const langData = {
            fr: {
                "sys-title": "STATUT_SYSTEME: EN LIGNE",
                "btn-theme-light": "MODE: CLAIR",
                "btn-theme-dark": "MODE: SOMBRE",
                "btn-lang": "ENGLISH",
                "node-profile": "PROFIL_EXPERTISE",
                "node-edu": "FORMATION_GEO",
                "node-exp": "PARCOURS_PRO",
                "node-video": "LAB_ANALYSE_VIDEO",
                "bio-text": "Étudiante en géomatique spécialisée en analyse spatiale et développement web interactif. Expertise en intégration de données géospatiales.",
                "vid-btn": "EXECUTER LA SEQUENCE SPLIT-SCREEN",
                "toast-lang": "LANGUE MISE À JOUR : FRANÇAIS",
                "label-skill": "NIVEAU MAÎTRISE",
                "btn-close": "FERMER [X]"
            },
            en: {
                "sys-title": "SYSTEM_STATUS: ONLINE",
                "btn-theme-light": "MODE: LIGHT",
                "btn-theme-dark": "MODE: DARK",
                "btn-lang": "FRANÇAIS",
                "node-profile": "EXPERT_PROFILE",
                "node-edu": "GEO_TRAINING",
                "node-exp": "CAREER_PATH",
                "node-video": "VIDEO_ANALYSIS_LAB",
                "bio-text": "Geomatics student specialized in spatial analysis and interactive web development. Expertise in geospatial data integration.",
                "vid-btn": "EXECUTE SPLIT-SCREEN SEQUENCE",
                "toast-lang": "LANGUAGE UPDATED: ENGLISH",
                "label-skill": "MASTERY LEVEL",
                "btn-close": "CLOSE [X]"
            }
        };

        /**
         * QUESTION : Sauvegarder des informations dans le navigateur (Page 1 du PDF)
         * REPONSE : Utilisation de localStorage.getItem('site_lang') pour récupérer la préférence utilisateur au démarrage.
         */
        let currentLang = localStorage.getItem('site_lang') || 'fr';
        let activeNodeType = null;

        /**
         * QUESTION : Changer le contenu HTML (Page 3 du PDF)
         * REPONSE : La fonction updateUI() utilise innerText pour injecter les traductions basées sur les identifiants DOM.
         */
        function updateUI() {
            Object.keys(langData[currentLang]).forEach(id => {
                const el = document.getElementById(id);
                if (el) el.innerText = langData[currentLang][id];
            });

            // Mise à jour des nœuds de la carte
            document.querySelectorAll('.node-label').forEach(label => {
                const key = label.getAttribute('data-key');
                if(langData[currentLang][key]) label.innerText = langData[currentLang][key];
            });

            // Mise à jour contextuelle du thème
            const theme = document.body.getAttribute('data-theme');
            const themeBtn = document.getElementById('btn-theme');
            themeBtn.innerText = langData[currentLang][theme === 'light' ? 'btn-theme-dark' : 'btn-theme-light'];

            document.getElementById('btn-lang').innerText = langData[currentLang]['btn-lang'];

            if (activeNodeType) showDetails(activeNodeType);
        }

        function switchLang() {
            currentLang = currentLang === 'fr' ? 'en' : 'fr';
            // SAUVEGARDE : localStorage.setItem pour la persistance
            localStorage.setItem('site_lang', currentLang);
            showToast(langData[currentLang]['toast-lang']);
            updateUI();
        }

        function toggleTheme() {
            const body = document.body;
            const newTheme = body.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
            body.setAttribute('data-theme', newTheme);
            updateUI();
        }

        // --- GESTION DES NŒUDS DE LA CARTE ---
        const nodes = [
            { key: 'node-profile', type: 'profile', x: -120, y: -100 },
            { key: 'node-edu', type: 'edu', x: 100, y: -40 },
            { key: 'node-exp', type: 'exp', x: 60, y: 120 },
            { key: 'node-video', type: 'video', x: -140, y: 80 }
        ];

        function initNodes() {
            const canvas = document.getElementById('map-canvas');
            const multiplier = window.innerWidth < 768 ? 0.7 : 1;

            nodes.forEach(n => {
                const div = document.createElement('div');
                div.className = 'node';
                div.style.left = `calc(50% + ${n.x * multiplier}px)`;
                div.style.top = `calc(50% + ${n.y * multiplier}px)`;
                div.innerHTML = `<span class="node-label" data-key="${n.key}">${langData[currentLang][n.key]}</span>`;
                
                div.onclick = (e) => {
                    e.stopPropagation();
                    activeNodeType === n.type ? closePanel() : showDetails(n.type);
                };
                canvas.appendChild(div);
            });
        }

        function showDetails(type) {
            activeNodeType = type;
            const panel = document.getElementById('side-panel');
            const content = document.getElementById('panel-content');
            
            // Activation de l'effet HUD
            document.body.classList.add('panel-open');
            panel.classList.add('active');

            let html = `<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:30px;">
                            <h1 style="font-size:1rem; color:var(--primary)">// ${type.toUpperCase()}_LOG</h1>
                            <span onclick="closePanel()" style="cursor:pointer; font-size:0.6rem; color:var(--danger)">${langData[currentLang]['btn-close']}</span>
                        </div>`;

            if (type === 'profile') {
                html += `<div class="data-card"><h2>BIO_DATA</h2><p>${langData[currentLang]['bio-text']}</p></div>`;
                html += `<div class="data-card"><h2>${langData[currentLang]['label-skill']}</h2>
                            <p>QGIS / ARCGIS</p><div class="skill-bar"><div class="skill-fill" style="width:95%"></div></div>
                            <p>POSTGIS / SQL</p><div class="skill-bar"><div class="skill-fill" style="width:90%"></div></div>
                         </div>`;
            } else if (type === 'edu') {
                html += `<div class="data-card"><h2>ENSG (FRANCE)</h2><p>2024-2025 | Master 2 AIGLE.</p></div>`;
                html += `<div class="data-card"><h2>EMIT (MADA)</h2><p>2023-2024 | Master 2 SIGD.</p></div>`;
            } else if (type === 'video') {
                html += `
                    <div class="video-lab">
                        <div class="v-mask" id="v-mask"></div>
                        <div class="v-box" id="vb1"><video id="vid1" muted loop><source src="https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c4/Stop_motion_animation_of_a_toy_car.webm/Stop_motion_animation_of_a_toy_car.webm.480p.vp9.webm"></video></div>
                        <div class="v-box" id="vb2"><video id="vid2" muted loop><source src="https://upload.wikimedia.org/wikipedia/commons/transcoded/a/a2/Lego_Stop_Motion_-_The_Adventure_of_the_Blue_Car.webm/Lego_Stop_Motion_-_The_Adventure_of_the_Blue_Car.webm.480p.vp9.webm"></video></div>
                    </div>
                    <button class="btn-ui" id="vid-btn-action" style="width:100%; margin-top:15px" onclick="startVideoTP()">${langData[currentLang]['vid-btn']}</button>
                `;
            } else {
                html += `<div class="data-card"><h2>ATOPIA PARIS</h2><p>Stage M2 : Analyse spatiale urbaine.</p></div>`;
                html += `<div class="data-card"><h2>OPENATLAS</h2><p>Interopérabilité OSM.</p></div>`;
            }

            content.innerHTML = html;
            setTimeout(() => {
                document.querySelectorAll('.skill-fill').forEach(bar => bar.style.width = bar.style.width);
            }, 100);
        }

        function closePanel() {
            document.getElementById('side-panel').classList.remove('active');
            document.body.classList.remove('panel-open');
            activeNodeType = null;
        }

        function showToast(msg) {
            const t = document.getElementById('toast');
            t.innerText = msg;
            t.style.opacity = '1';
            setTimeout(() => t.style.opacity = '0', 2000);
        }

        /**
         * ==========================================
         * PARTIE 2 : MANIPULATION VIDÉO (Réponses aux questions du prof)
         * ==========================================
         */

        function startVideoTP() {
            /**
             * QUESTION Q2 : Ajouter des balises vidéo sans attribut controls.
             * REPONSE : Les éléments vid1 et vid2 n'ont pas l'attribut "controls" dans le HTML généré dynamiquement.
             */
            const v1 = document.getElementById('vid1');
            const v2 = document.getElementById('vid2');
            const mask = document.getElementById('v-mask');
            const b1 = document.getElementById('vb1');
            const b2 = document.getElementById('vb2');

            /**
             * QUESTION Q3 : Lancer la lecture des deux vidéos simultanément.
             * REPONSE : Appel de .play() sur les deux instances simultanément.
             */
            v1.play(); v2.play();
            showToast("SEQUENCE_INITIALIZED");

            /**
             * QUESTION Q4 : Création d'un fondu au noir progressif.
             * REPONSE : Utilisation de setInterval pour diminuer l'opacité du masque pendant les 1.5 premières secondes.
             */
            let op = 1;
            const fade = setInterval(() => {
                if(v1.currentTime < 1.5) { 
                    op -= 0.05; mask.style.opacity = op; 
                } else { 
                    mask.style.opacity = 0; clearInterval(fade); 
                }
            }, 50);

            /**
             * QUESTION Q5 : Déplacement du split screen avant la fin.
             * REPONSE : Un minuteur toutes les 50ms vérifie si (duration - currentTime < 5) et modifie la hauteur des conteneurs.
             */
            const splitTimer = setInterval(() => {
                if(v2.duration && (v2.duration - v2.currentTime < 5)) {
                    let ratio = (5 - (v2.duration - v2.currentTime)) / 5;
                    b1.style.height = (50 + (ratio * 50)) + "%";
                    b2.style.height = (50 - (ratio * 50)) + "%";
                }
            }, 50);

            /**
             * QUESTION Q6 : Afficher currentTime dans la console toutes les 50ms.
             * REPONSE : Implémentation du console.log() à l'intérieur d'un setInterval de 50ms.
             */
            const logTimer = setInterval(() => {
                if (!v1.paused) console.log("LIVE_TIMESTAMP: " + v1.currentTime.toFixed(3));
                if (v1.ended) {
                    clearInterval(logTimer);
                    clearInterval(splitTimer);
                    showToast("SEQUENCE_COMPLETED");
                }
            }, 50);
        }

        // --- INTERACTIONS SYSTEME ---
        window.onmousemove = (e) => {
            const grid = document.getElementById('geo-grid');
            grid.style.transform = `translate(${(e.clientX/60)}px, ${(e.clientY/60)}px)`;
            document.getElementById('lat').innerText = (48.8410 + (e.clientY/20000)).toFixed(4);
            document.getElementById('lon').innerText = (2.5870 + (e.clientX/20000)).toFixed(4);
        };

        document.body.onclick = () => closePanel();
        document.getElementById('side-panel').onclick = (e) => e.stopPropagation();

        window.onload = () => {
            initNodes();
            updateUI();
        };

        window.onresize = () => {
            document.getElementById('map-canvas').innerHTML = "";
            initNodes();
        };