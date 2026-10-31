# Marc & Bérénice — site de mariage

Site statique (HTML/CSS/JS, sans build) pour le mariage du 10 juillet 2027
au Domaine Le Mezo, Golfe du Morbihan.

Domaine : **marcetberenice.fr**

## Structure

| Fichier | Rôle |
|---|---|
| `index.html` | Structure de la page (FR par défaut) |
| `styles.css` | Thème visuel (palette issue de la charte) |
| `script.js` | Traductions FR/EN, compte à rebours, copie IBAN |
| `CNAME` | Domaine personnalisé pour GitHub Pages |
| `.nojekyll` | Empêche Jekyll de traiter le site |

## Modifier le contenu

- **Textes** : tout est centralisé dans l'objet `I18N` en haut de `script.js`
  (deux langues : `fr` et `en`). Les clés correspondent aux attributs
  `data-i18n` dans `index.html`.
- **Date du compte à rebours** : variable `WEDDING_DATE` dans `script.js`.
- **Palette** : variables CSS dans le bloc `:root` de `styles.css`.
- **Liens de formulaires** : chercher `https://google.fr` dans `index.html`
  (RSVP et hébergement) et remplacer par les vrais liens.
- **IBAN** : chercher `[IBAN à confirmer]` dans `index.html`.

## Points à compléter plus tard

- [ ] Date limite RSVP
- [ ] Liens Google Form (RSVP + hébergement)
- [ ] IBAN
- [ ] Horaires du programme
- [ ] Adresse exacte du domaine
- [ ] Photos réelles (actuellement des emplacements)
- [ ] Plan du château (petit jeu)
- [ ] Adresse email de contact

## Déploiement

Hébergé via **GitHub Pages**. Le domaine `marcetberenice.fr` est déclaré
dans `CNAME`. Les DNS sont gérés côté IONOS (voir les instructions fournies
séparément).
