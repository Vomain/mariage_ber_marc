/* =========================================================
   Marc & Bérénice — site logic
   - i18n FR (default) / EN toggle, persisted in localStorage
   - live countdown to the wedding
   - copy IBAN button
   ========================================================= */

(function () {
  "use strict";

  /* ---------- config ---------- */
  // Change this single line when the real date/time is confirmed.
  var WEDDING_DATE = new Date("2027-07-10T15:00:00+02:00");

  /* ---------- translations ---------- */
  var I18N = {
    fr: {
      "nav.place": "Lieu &amp; date",
      "nav.programme": "Programme",
      "nav.stay": "Où dormir",
      "nav.venue": "Venir",
      "nav.visit": "À visiter",
      "nav.gifts": "Cadeaux",
      "nav.faq": "FAQ",
      "nav.rsvp": "RSVP",

      "hero.eyebrow": "Nous nous marions",
      "hero.date": "10 juillet 2027",
      "hero.place": "Domaine Le Mezo, Golfe du Morbihan",
      "hero.cta": "Répondre à l'invitation",

      "countdown.days": "jours",
      "countdown.hours": "heures",
      "countdown.mins": "minutes",
      "countdown.secs": "secondes",

      "rsvp.title": "Serez-vous là ?",
      "rsvp.lead": "Merci de nous confirmer votre présence avant le [date limite à confirmer].",
      "rsvp.lead2": "Le formulaire nous permet de vous compter pour chaque moment : cérémonie, cocktail, dîner &amp; soirée, brunch.",
      "rsvp.cta": "Remplir le formulaire",
      "rsvp.hint": "Vous pourrez modifier votre réponse plus tard avec le lien reçu par email.",

      "place.title": "Lieu &amp; date",
      "place.intro": "Le 10 juillet 2027, nous vous donnons rendez-vous au Domaine Le Mezo, au cœur du Parc Naturel Régional du Golfe du Morbihan.",
      "place.dateLabel": "Date",
      "place.date": "Samedi 10 juillet 2027",
      "place.venueLabel": "Lieu",
      "place.venue": "Domaine Le Mezo, Golfe du Morbihan, Bretagne Sud",
      "place.addressLabel": "Adresse",
      "place.address": "[Adresse exacte à confirmer] — à 10 min de Vannes",
      "place.timeLabel": "Arrivée",
      "place.time": "À partir de 15h00",
      "place.departLabel": "Retour",
      "place.depart": "Départ le lendemain avant 12h00",
      "place.hint": "Les horaires définitifs vous seront confirmés plus tard.",

      "programme.title": "Le programme",
      "programme.intro": "Les grandes lignes du week-end. Les horaires sont encore provisoires.",
      "programme.s1": "Cérémonie",
      "programme.s2": "Cocktail",
      "programme.s3": "Dîner &amp; soirée",
      "programme.s4": "Brunch (le lendemain)",

      "dress.title": "Dress code",
      "dress.body": "Pour le brunch du lendemain : <strong>tenue blanche</strong>. Pour le reste, élégant et confortable — et pensez à un maillot et de la crème solaire selon la météo.",

      "stay.title": "Où dormir",
      "stay.intro": "Tout l'hébergement se trouve sur place, au Domaine Le Mezo — du château aux yourtes. Les réservations et la répartition sont gérées par les mariés.",
      "stay.castle": "Le Château",
      "stay.castleDesc": "2 suites et 4 chambres, jusqu'à 14 personnes.",
      "stay.farms": "Les Farm Houses",
      "stay.farmsDesc": "7 maisons de 2 à 6 chambres, environ 84 personnes.",
      "stay.lofts": "Les Lofts",
      "stay.loftsDesc": "3 lofts, environ 38 personnes.",
      "stay.yurts": "Les Yourtes",
      "stay.yurtsDesc": "10 yourtes de 4 personnes, 40 personnes.",
      "stay.note": "Important : merci de ne pas contacter directement le domaine pour la réservation. Toutes les demandes passent par le formulaire ci-dessous, et nous nous chargeons nous-mêmes de la répartition des hébergements.",
      "stay.cta": "Réserver un hébergement",
      "stay.hint": "L'ouverture des réservations pour la veille du mariage se fait 90 jours avant l'événement.",

      "venue.title": "Comment venir",
      "venue.intro": "Le domaine se situe à environ 10 minutes de Vannes, en Bretagne Sud. Il n'y a pas de navette prévue.",
      "venue.train": "En train",
      "venue.trainBody": "Depuis Paris, TGV jusqu'à la gare de Vannes (environ 2h45). Comptez ensuite 15 minutes de route jusqu'au domaine. Pour les invités arrivant en train, le domaine peut vous accueillir sur place — précisez-le dans votre réponse.",
      "venue.car": "En voiture",
      "venue.carBody": "De Paris, comptez environ 4h30 à 5h par l'autoroute. Un parking est disponible sur place.",
      "venue.air": "En avion",
      "venue.airBody": "Aéroport de Nantes-Atlantique, puis 1h15 de route. Aéroport de Rennes, puis 1h30 de route.",
      "venue.map": "Carte",
      "venue.mapLink": "Ouvrir dans Google Maps →",
      "venue.hint": "Ces informations sont provisoires et seront précisées plus tard.",

      "visit.title": "À visiter dans les environs",
      "visit.intro": "Vous venez de loin ? Voici quelques idées pour profiter du Morbihan autour du mariage.",
      "visit.vannes": "Cité médiévale pleine de charme : remparts, port, ruelles pavées et marché. À 10 minutes du domaine.",
      "visit.golfe": "Iles et îlots par dizaines, balades en bateau au départ de Vannes. Un paysage unique.",
      "visit.sene": "Bourgs de pêcheurs typiques, avec leurs alignements de menhirs à Carnac à proximité.",
      "visit.quiberon": "Côte sauvage et plages, à environ 45 minutes. Idéal pour une journée.",
      "visit.rochefort": "Classé « Plus Beau Village de France », à 40 minutes. Ruelles fleuries et ateliers d'artisans.",

      "quiz.title": "Le petit jeu",
      "quiz.intro": "Un plan du domaine, et un défi : retrouvez les lieux cachés du week-end. Détails à venir.",
      "quiz.placeholder": "[Plan du château — à remplacer]",

      "gifts.title": "Liste de cadeaux",
      "gifts.intro": "Votre présence est le plus beau des cadeaux. Si vous souhaitez tout de même participer, voici deux options.",
      "gifts.ibanTitle": "Par virement",
      "gifts.copy": "Copier l'IBAN",
      "gifts.cagnotteTitle": "Sur place",
      "gifts.cagnotteBody": "Une urne sera disponible au domaine le jour du mariage.",

      "faq.title": "Questions fréquentes",
      "faq.q1": "Puis-je venir avec un accompagnant ?",
      "faq.a1": "Les invitations sont nominatives et les places sont limitées. Écrivez-nous si vous avez un doute, nous en parlerons.",
      "faq.q2": "Les enfants sont-ils invités ?",
      "faq.a2": "Oui, les enfants sont les bienvenus. Merci de nous le préciser dans votre réponse pour que nous puissions tout prévoir.",
      "faq.q3": "Allergies et régimes alimentaires ?",
      "faq.a3": "Indiquez-les dans le formulaire de réponse, le domaine s'adapte.",
      "faq.q4": "Y a-t-il une navette ?",
      "faq.a4": "Non, il n'y a pas de navette. Le mieux est de vous organiser en covoiturage ; l'hébergement sur place simplifie les choses.",
      "faq.q5": "Faut-il réserver un hôtel ?",
      "faq.a5": "Non. Tout l'hébergement est sur place, au domaine. Voir la section « Où dormir ».",
      "faq.q6": "Puis-je proposer une chanson ?",
      "faq.a6": "Oui, avec plaisir ! Indiquez-la dans le formulaire de réponse.",
      "faq.q7": "Que faut-il apporter ?",
      "faq.a7": "Un maillot de bain, de la crème solaire, et une tenue blanche pour le brunch du lendemain.",
      "faq.q8": "Comment être prévenu des mises à jour ?",
      "faq.a8": "Un groupe WhatsApp sera créé pour le week-end. Vous recevrez aussi un email de confirmation avec les détails à ajouter à votre agenda.",

      "common.photo": "[Photo du domaine]",
      "footer.date": "10 juillet 2027 · Domaine Le Mezo",
      "footer.note": "Une question ? Écrivez-nous à l'adresse de contact à venir.",
      "lang.next": "EN"
    },

    en: {
      "nav.place": "Place &amp; date",
      "nav.programme": "Schedule",
      "nav.stay": "Where to stay",
      "nav.venue": "Getting there",
      "nav.visit": "Things to do",
      "nav.gifts": "Gifts",
      "nav.faq": "FAQ",
      "nav.rsvp": "RSVP",

      "hero.eyebrow": "We're getting married",
      "hero.date": "10 July 2027",
      "hero.place": "Domaine Le Mezo, Gulf of Morbihan",
      "hero.cta": "Reply to the invitation",

      "countdown.days": "days",
      "countdown.hours": "hours",
      "countdown.mins": "minutes",
      "countdown.secs": "seconds",

      "rsvp.title": "Will you be there?",
      "rsvp.lead": "Please let us know before [deadline to be confirmed].",
      "rsvp.lead2": "The form lets us count you for each moment: ceremony, cocktail, dinner &amp; party, brunch.",
      "rsvp.cta": "Fill in the form",
      "rsvp.hint": "You can change your answer later with the link you receive by email.",

      "place.title": "Place &amp; date",
      "place.intro": "On 10 July 2027, join us at Domaine Le Mezo, in the heart of the Gulf of Morbihan Regional Nature Park.",
      "place.dateLabel": "Date",
      "place.date": "Saturday 10 July 2027",
      "place.venueLabel": "Venue",
      "place.venue": "Domaine Le Mezo, Gulf of Morbihan, South Brittany",
      "place.addressLabel": "Address",
      "place.address": "[Exact address to be confirmed] — 10 min from Vannes",
      "place.timeLabel": "Arrival",
      "place.time": "From 3:00 pm",
      "place.departLabel": "Departure",
      "place.depart": "Departure the next day before 12:00 pm",
      "place.hint": "Final times will be confirmed later.",

      "programme.title": "The schedule",
      "programme.intro": "The outline of the weekend. Times are still provisional.",
      "programme.s1": "Ceremony",
      "programme.s2": "Cocktail",
      "programme.s3": "Dinner &amp; party",
      "programme.s4": "Brunch (next day)",

      "dress.title": "Dress code",
      "dress.body": "For the next-day brunch: <strong>all white</strong>. Otherwise, elegant and comfortable — and bring a swimsuit and sunscreen depending on the weather.",

      "stay.title": "Where to stay",
      "stay.intro": "All accommodation is on site at Domaine Le Mezo — from the château to the yurts. Bookings and room assignments are handled by the couple.",
      "stay.castle": "The Château",
      "stay.castleDesc": "2 suites and 4 rooms, up to 14 people.",
      "stay.farms": "The Farm Houses",
      "stay.farmsDesc": "7 houses of 2 to 6 rooms, about 84 people.",
      "stay.lofts": "The Lofts",
      "stay.loftsDesc": "3 lofts, about 38 people.",
      "stay.yurts": "The Yurts",
      "stay.yurtsDesc": "10 yurts of 4 people, 40 people.",
      "stay.note": "Important: please do not contact the venue directly for bookings. All requests go through the form below, and we handle the room assignments ourselves.",
      "stay.cta": "Book accommodation",
      "stay.hint": "Bookings for the night before the wedding open 90 days before the event.",

      "venue.title": "Getting there",
      "venue.intro": "The venue is about 10 minutes from Vannes, in South Brittany. There is no shuttle.",
      "venue.train": "By train",
      "venue.trainBody": "From Paris, take the TGV to Vannes station (about 2h45). Then a 15-minute drive to the venue. Guests arriving by train can be welcomed on site — just mention it in your reply.",
      "venue.car": "By car",
      "venue.carBody": "From Paris, allow about 4h30 to 5h via the motorway. Parking is available on site.",
      "venue.air": "By plane",
      "venue.airBody": "Nantes-Atlantique airport, then a 1h15 drive. Rennes airport, then a 1h30 drive.",
      "venue.map": "Map",
      "venue.mapLink": "Open in Google Maps →",
      "venue.hint": "This information is provisional and will be refined later.",

      "visit.title": "Things to do nearby",
      "visit.intro": "Coming from far away? Here are a few ideas to enjoy Morbihan around the wedding.",
      "visit.vannes": "A charming medieval town: ramparts, harbour, cobbled lanes and a market. 10 minutes from the venue.",
      "visit.golfe": "Dozens of islands and islets, boat trips from Vannes. A unique landscape.",
      "visit.sene": "Typical fishing villages, with the Carnac standing stones nearby.",
      "visit.quiberon": "Wild coast and beaches, about 45 minutes away. Ideal for a day out.",
      "visit.rochefort": "Listed among the « Most Beautiful Villages of France », 40 minutes away. Flowered lanes and artisan workshops.",

      "quiz.title": "The little game",
      "quiz.intro": "A map of the estate, and a challenge: find the weekend's hidden spots. Details to come.",
      "quiz.placeholder": "[Château map — to be replaced]",

      "gifts.title": "Gift list",
      "gifts.intro": "Your presence is the greatest gift. If you would still like to contribute, here are two options.",
      "gifts.ibanTitle": "By bank transfer",
      "gifts.copy": "Copy IBAN",
      "gifts.cagnotteTitle": "On site",
      "gifts.cagnotteBody": "A collection box will be available at the venue on the wedding day.",

      "faq.title": "Frequently asked questions",
      "faq.q1": "Can I bring a plus one?",
      "faq.a1": "Invitations are personal and places are limited. Get in touch if you're unsure, we'll sort it out together.",
      "faq.q2": "Are children invited?",
      "faq.a2": "Yes, children are welcome. Please let us know in your reply so we can plan accordingly.",
      "faq.q3": "Allergies and dietary requirements?",
      "faq.a3": "Mention them in the reply form — the venue adapts.",
      "faq.q4": "Is there a shuttle?",
      "faq.a4": "No, there is no shuttle. Carpooling is your best bet; having accommodation on site makes things easier.",
      "faq.q5": "Do I need to book a hotel?",
      "faq.a5": "No. All accommodation is on site at the venue. See the « Where to stay » section.",
      "faq.q6": "Can I suggest a song?",
      "faq.a6": "Yes, please! Mention it in the reply form.",
      "faq.q7": "What should I bring?",
      "faq.a7": "A swimsuit, sunscreen, and something white for the next-day brunch.",
      "faq.q8": "How will I hear about updates?",
      "faq.a8": "A WhatsApp group will be created for the weekend. You'll also get a confirmation email with the details to add to your calendar.",

      "common.photo": "[Venue photo]",
      "footer.date": "10 July 2027 · Domaine Le Mezo",
      "footer.note": "Any questions? Write to us at the contact address to come.",
      "lang.next": "FR"
    }
  };

  /* ---------- i18n ---------- */
  function applyLang(lang) {
    var dict = I18N[lang] || I18N.fr;
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (Object.prototype.hasOwnProperty.call(dict, key)) {
        el.innerHTML = dict[key];
      }
    });

    var toggle = document.getElementById("langToggle");
    if (toggle) toggle.textContent = dict["lang.next"];
    toggle.setAttribute("aria-label", lang === "fr" ? "Switch to English" : "Passer en français");

    try { localStorage.setItem("wedding-lang", lang); } catch (e) {}
  }

  function initLang() {
    var saved = null;
    try { saved = localStorage.getItem("wedding-lang"); } catch (e) {}
    // Default French; honour an explicit ?lang=en override.
    var params = new URLSearchParams(window.location.search);
    var lang = params.get("lang") || saved || "fr";
    if (lang !== "fr" && lang !== "en") lang = "fr";
    applyLang(lang);

    document.getElementById("langToggle").addEventListener("click", function () {
      var current = document.documentElement.lang === "en" ? "en" : "fr";
      applyLang(current === "fr" ? "en" : "fr");
    });
  }

  /* ---------- countdown ---------- */
  function initCountdown() {
    var elDays = document.getElementById("cd-days");
    var elHours = document.getElementById("cd-hours");
    var elMins = document.getElementById("cd-mins");
    var elSecs = document.getElementById("cd-secs");
    if (!elDays) return;

    function pad(n) { return (n < 10 ? "0" : "") + n; }

    function tick() {
      var now = Date.now();
      var diff = WEDDING_DATE.getTime() - now;

      if (diff <= 0) {
        elDays.textContent = "0";
        elHours.textContent = "00";
        elMins.textContent = "00";
        elSecs.textContent = "00";
        clearInterval(timer);
        return;
      }

      var s = Math.floor(diff / 1000);
      var days = Math.floor(s / 86400);
      var hours = Math.floor((s % 86400) / 3600);
      var mins = Math.floor((s % 3600) / 60);
      var secs = s % 60;

      elDays.textContent = days;
      elHours.textContent = pad(hours);
      elMins.textContent = pad(mins);
      elSecs.textContent = pad(secs);
    }

    tick();
    var timer = setInterval(tick, 1000);
  }

  /* ---------- copy IBAN ---------- */
  function initCopyIban() {
    var btn = document.getElementById("copyIban");
    var iban = document.getElementById("iban");
    if (!btn || !iban) return;

    btn.addEventListener("click", function () {
      var text = iban.textContent.trim();
      function done() {
        var original = btn.getAttribute("data-i18n");
        var dict = I18N[document.documentElement.lang] || I18N.fr;
        btn.textContent = document.documentElement.lang === "en" ? "Copied!" : "Copié !";
        setTimeout(function () { btn.textContent = dict["gifts.copy"] || "Copier l'IBAN"; }, 1600);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done).catch(function () { fallback(); });
      } else { fallback(); }

      function fallback() {
        var ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand("copy"); done(); } catch (e) {}
        document.body.removeChild(ta);
      }
    });
  }

  /* ---------- boot ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    initLang();
    initCountdown();
    initCopyIban();
  });
})();
