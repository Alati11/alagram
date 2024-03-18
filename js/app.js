const { createApp } = Vue;

// JavaScript per gestire la modale e la selezione delle emoticon
var modal = document.getElementById("myModal");
var closeBtn = document.getElementsByClassName("close")[0];




createApp({
	data() {
		return {
			messageText: ' ',
			darkMode: false,
			modalOpen: false,
			selectedEmoticon: '',
			emoticons: [
				'😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇',
				'🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚',
				'😋', '😛', '😜', '😝', '🤑', '🤗', '🤓', '😎', '🤩', '🥳',
				'😏', '😒', '😞', '😔', '😟', '😕', '👍', '🚴', '🏍️', '🚀'
			],

			userName: 'Giuseppe',
			currentIndex: 0,
			dateFormat: 'dd/LL/yyyy HH:mm:ss',

			contacts: [
				{
					name: 'Nicolas',
					avatar: './img/avatar_1.jpg',
					visible: true,
					messages: [
						{ date: '10/01/2024 15:30', message: 'Ciao, come stai?', status: 'received' },
						{ date: '10/01/2024 15:31', message: 'Ciao! Sto bene, grazie! Tu?', status: 'sent' },
						{ date: '10/01/2024 15:32', message: 'Anche io sto bene, grazie!', status: 'received' },
						{ date: '10/01/2024 15:33', message: 'Che cosa hai fatto di bello oggi?', status: 'sent' },
						{ date: '10/01/2024 15:34', message: 'Sono andato al parco con degli amici.', status: 'received' },
						{ date: '10/01/2024 15:35', message: 'Davvero? Che divertimento!', status: 'sent' },
						{ date: '10/01/2024 15:36', message: 'Sì, è stato davvero divertente!', status: 'received' },
						{ date: '10/01/2024 15:37', message: 'Dobbiamo rifarlo presto!', status: 'sent' }
					]
				},
				{
					name: 'Manuel',
					avatar: './img/avatar_2.jpg',
					visible: true,
					messages: [
						{ date: '10/01/2024 15:30', message: 'Ciao, hai voglia di giocare a tennis questo weekend?', status: 'received' },
						{ date: '10/01/2024 15:31', message: 'Certo! Dove e a che ora?', status: 'sent' },
						{ date: '10/01/2024 15:32', message: 'Che ne dici del campo vicino al parco alle 10 del mattino?', status: 'received' },
						{ date: '10/01/2024 15:33', message: 'Perfetto! Sarò lì!', status: 'sent' },
						{ date: '10/01/2024 15:34', message: 'Dovremmo invitare anche Marco e Luca?', status: 'received' },
						{ date: '10/01/2024 15:35', message: 'Sì, sarebbe divertente! Posso mandare loro un messaggio?', status: 'sent' },
						{ date: '10/01/2024 15:36', message: 'Fatto! Vediamoci lì sabato!', status: 'received' },
						{ date: '10/01/2024 15:37', message: `'Non vedo l'ora! Sarà una bella partita!'`, status: 'sent' },
					]
				},
				{
					name: 'Francesco',
					avatar: './img/avatar_3.jpg',
					visible: true,
					messages: [
						{ date: '10/01/2024 15:30', message: 'Hai visto l\'ultimo episodio di Breaking Bad?', status: 'received' },
						{ date: '10/01/2024 15:31', message: 'Sì, è stato incredibile! Che colpo di scena!', status: 'sent' },
						{ date: '10/01/2024 15:32', message: 'Assolutamente! Non me l\'aspettavo affatto!', status: 'received' },
						{ date: '10/01/2024 15:33', message: 'Walter White è diventato davvero un personaggio complesso.', status: 'sent' },
						{ date: '10/01/2024 15:34', message: 'Sì, è vero. È incredibile vedere la sua trasformazione.', status: 'received' },
						{ date: '10/01/2024 15:35', message: 'E Jesse Pinkman? Che fine farà?', status: 'sent' },
						{ date: '10/01/2024 15:36', message: 'Non lo so, ma spero che trovi una via d\'uscita.', status: 'received' },
						{ date: '10/01/2024 15:37', message: 'Anche io. Mi dispiace per lui.', status: 'sent' },
						{ date: '10/01/2024 15:38', message: 'Non vedo l\'ora di vedere come andrà a finire.', status: 'received' }
					]
				},
				{
					name: 'Alessandro B.',
					avatar: './img/avatar_4.jpg',
					visible: true,
					messages: [
						{ date: '10/01/2024 15:30', message: 'Lo sai che ha aperto una nuova pizzeria?', status: 'sent' },
						{ date: '10/01/2024 15:50', message: 'Si, ma preferirei andare al cinema', status: 'received' }
					]
				},
				{
					name: 'Michele',
					avatar: './img/avatar_5.jpg',
					visible: true,
					messages: [
						{ date: '10/01/2024 18:00', message: 'Ciao! Hai sentito che gli AC/DC stanno per fare un nuovo tour?', status: 'sent' },
						{ date: '10/01/2024 18:01', message: 'Sì, ho sentito! Sarebbe fantastico poterli vedere dal vivo!', status: 'received' },
						{ date: '10/01/2024 18:02', message: 'Assolutamente! Sono una leggenda del rock.', status: 'sent' },
						{ date: '10/01/2024 18:03', message: 'Speriamo che passino anche dalle nostre parti.', status: 'received' },
						{ date: '10/01/2024 18:05', message: 'Sarebbe un \ esperienza incredibile!', status: 'sent' },
						{ date: '10/01/2024 18:06', message: 'Hai già preso i biglietti per il concerto?', status: 'received' },
						{ date: '10/01/2024 18:08', message: 'No, devo ancora controllare quando saranno in città.', status: 'sent' },
						{ date: '10/01/2024 18:09', message: 'Dovremmo farlo subito! I biglietti potrebbero finire presto.', status: 'received' },
						{ date: '10/01/2024 18:10', message: 'Hai ragione! Andiamo a controllare ora stesso!', status: 'sent' }
					]
				},
				{
					name: 'Giovanna',
					avatar: './img/avatar_6.jpg',
					visible: true,
					messages: [
						{ date: '10/01/2024 15:30', message: 'Ciao Giovanna, hai novità?', status: 'sent' },
						{ date: '10/01/2024 15:50', message: 'Non ancora', status: 'received' },
						{ date: '10/01/2024 15:51', message: 'Nessuna nuova, buona nuova', status: 'sent' }
					]
				},
				{
					name: 'Federico',
					avatar: './img/avatar_7.jpg',
					visible: true,
					messages: [
						{ date: '10/01/2024 15:30', message: 'Fai gli auguri a Martina che è il suo compleanno!', status: 'sent' },
						{ date: '10/01/2024 15:50', message: 'Grazie per avermelo ricordato, le scrivo subito!', status: 'received' }
					]
				},
				{
					name: 'Davide',
					avatar: './img/avatar_8.jpg',
					visible: true,
					messages: [
						{ date: '10/01/2024 15:30', message: 'Ciao, andiamo a mangiare la pizza stasera?', status: 'received' },
						{ date: '10/01/2024 15:50', message: "No, l'ho già mangiata ieri, ordiniamo sushi!", status: 'sent' },
						{ date: '10/01/2024 15:51', message: 'OK!!', status: 'received' }
					]
				},
				{
					name: 'Giacomo',
					avatar: './img/avatar_1.jpg',
					visible: true,
					messages: [
						{ date: '10/01/2024 15:30', message: 'Hai portato a spasso il cane?', status: 'sent' },
						{ date: '10/01/2024 15:50', message: 'Ricordati di stendere i panni', status: 'sent' },
						{ date: '10/01/2024 16:15', message: 'Tutto fatto!', status: 'received' }
					]
				},
				{
					name: 'Jacopo',
					avatar: './img/avatar_7.jpg',
					visible: true,
					messages: [
						{ date: '10/01/2024 15:30:55', message: 'Fai gli auguri a Martina che è il suo compleanno!', status: 'sent' },
						{ date: '10/01/2024 15:50:00', message: 'Grazie per avermelo ricordato, le scrivo subito!', status: 'received' }
					]
				},
				{
					name: 'Matilde',
					avatar: './img/avatar_6.jpg',
					visible: true,
					messages: [
						{ date: '10/01/2024 15:30', message: 'Ciao Matilde, come stai?', status: 'sent' },
						{ date: '10/01/2024 15:50', message: 'Ottimo!', status: 'received' },
						{ date: '10/01/2024 15:51', message: 'Nessuna nuova, buona nuova', status: 'sent' }
					]
				},
				{
					name: 'Edoardo',
					avatar: './img/avatar_5.jpg',
					visible: true,
					messages: [
						{ date: '10/01/2024 15:30', message: 'Ricordati di chiamare la nonna', status: 'sent' },
						{ date: '10/01/2024 15:50', message: 'Va bene, stasera la sento', status: 'received' }
					]
				},
				{
					name: 'Ginevra',
					avatar: './img/avatar_6.jpg',
					visible: true,
					messages: [
						{ date: '10/01/2024 15:30', message: 'Ciao Ginevra, hai novità?', status: 'sent' },
						{ date: '10/01/2024 15:50', message: 'Non ancora', status: 'received' },
						{ date: '10/01/2024 15:51', message: 'Nessuna nuova, buona nuova', status: 'sent' }
					]
				}

			],
			currentMessage: null,
			messageText: " ",
			filterMsg: " ",
			search: " ",
			visible: true,
			inputSearch: "",
		}
	},

	computed: {
		messagePlaceholder() {
			return this.messageText ? '' : 'Scrivi messaggio';
		}
	},

	methods: {
		formatTime(dateTime) {
            const formattedTime = new Date(dateTime).toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' });
            return formattedTime;
        },

		getLastMessage(messages) {
            // Ottieni l'ultimo messaggio
            return messages[messages.length - 1];
        },

		getLastAccessDate(messages) {
            // Ottieni la data più recente tra tutti i messaggi
            let lastAccessDate = new Date(0); // Inizializza con una data molto vecchia
            messages.forEach(function(message) {
                const messageDate = new Date(message.date);
                if (messageDate > lastAccessDate) {
                    lastAccessDate = messageDate;
                }
            });
            return lastAccessDate;
        },
		formatLastAccess(dateTime) {
            // Formatta la data e l'orario
            const formattedDateTime = new Date(dateTime).toLocaleString('it-IT');
            return formattedDateTime;
        },

		toggleDarkMode() {
			this.darkMode = !this.darkMode;
			const app = document.getElementById('app');
			app.classList.toggle('dark-mode', this.darkMode);
			console.log(toggleDarkMode)
		},

		setIndexContact(position) {
			this.currentIndex = position;
		},

		handleKeyPress(event) {
			if (event.key === 'Enter') {
			  this.sendMessage(this.currentIndex);
			  this.scrollToBottom();
			}
		  },
		sendMessage(currentIndex) {
			const text = this.messageText.trim();
			const emoticon = this.selectedEmoticon;
			if (text !== '' || emoticon !== '') {
				if (text !== '') {
					const newMessage = {
						date: dayjs().format('YYYY-MM-DD HH:mm:ss'),
						message: text,
						status: 'sent'
					};
					this.contacts[currentIndex].messages.push(newMessage);
					this.messageText = '';
				}
				if (emoticon !== '') {
					const newMessage = {
						date: dayjs().format('YYYY-MM-DD HH:mm:ss'),
						message: emoticon,
						status: 'sent'
					};
					this.contacts[currentIndex].messages.push(newMessage);
					this.selectedEmoticon = ''; // Resettiamo l'emozione selezionata
				}
				 // Array di possibili risposte
				 const responses = [
					"Va bene!", 
					"Ok 😉", 
					"Capito!", 
					"Ho capito 😉", 
					"Perfetto 👍", 
					"Bene!",
					"Alla grande 🚀"
				];
		
				// Seleziona una risposta casuale
				const randomResponse = responses[Math.floor(Math.random() * responses.length)];

				// Reimposta il flag hasReplied a false per consentire una nuova risposta
				this.contacts[currentIndex].hasReplied = false;
				setTimeout(() => {
					// Aggiungi la risposta solo se non è stata già inviata
					if (!this.contacts[currentIndex].hasReplied) {
						this.contacts[currentIndex].hasReplied = true;
						let newReceivedMessage = {
							date: dayjs().format('YYYY-MM-DD HH:mm:ss'),
							message: randomResponse,
							status: 'received'   
						};
						this.contacts[currentIndex].messages.push(newReceivedMessage);
					}
				}, 1000);
			}
		},
		
		openModal() {
			const modal = document.getElementById("myModal");
            modal.style.display = "block";
			modal.classList.remove('leave');
			modal.classList.add('show');
			this.modalOpen = true; // Imposta il flag della modale aperta

			modal.addEventListener('animationend', () => {
				if (modal.classList.contains('leave')) {
				  modal.classList.remove('leave');
				}
			  });
		},

		closeModal() {
			const modal = document.getElementById("myModal");
			modal.style.display = "none";
			modal.classList.remove('show');
			modal.classList.add('leave');
			this.modalOpen = false; // Imposta il flag della modale chiusa
		},

		handleKeyPress(event) {
			if (event.key === 'Enter') {
				this.sendMessage(this.currentIndex);
				this.scrollToBottom();
				if (this.modalOpen) { // Controlla se la modale è aperta prima di chiuderla
					this.closeModal();
				}
			}
		},

		selectEmoticon(emoticon) {
			this.messageText += emoticon;
		},

		searchContact() {
			let search = this.inputSearch.toLowerCase();
			
			this.contacts.forEach((contact) => {
				if (contact.name.toLowerCase().includes(search)) {
					contact.visible = true;
				} else {
					contact.visible = false;
				}
			});
		},


		scrollToBottom() {
			this.$nextTick(() => {
				const chatContainer = document.getElementById('chat'); // Sostituisci 'chat-container' con l'ID del tuo contenitore chat
				chatContainer.scrollTop = chatContainer.scrollHeight;
			});
		}
	},
	mounted() {
		console.log('Vue Ok!');
		// Definizione della chiusura della modale quando si fa clic su closeBtn
        var closeBtn = document.getElementsByClassName("close")[0];
        closeBtn.onclick = this.closeModal;
        
        // Definizione della chiusura della modale quando si fa clic fuori dalla modale
        window.onclick = (event) => {
			const modal = document.getElementById("myModal");
            if (event.target == modal) {
                this.closeModal();
            }
        };

		document.addEventListener('keydown', this.handleKeyPress);
		// modal.addEventListener('mouseleave', this.handleMouseLeave);
	},

	beforeUnmount() {
		document.removeEventListener('keydown', this.handleKeyPress);
	},

}).mount('#app')