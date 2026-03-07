# Fiche récapitulative

# **Créer des composants React + utiliser Tailwind dans le CSS**

---

## 1. Objectif

Quand plusieurs éléments ont le même style, il vaut mieux :

* créer un **composant réutilisable**
* mettre les styles répétitifs dans le **CSS avec `@apply`**
* changer seulement le contenu grâce aux **props**

Cela permet :

* d’éviter les répétitions
* d’avoir un code plus propre
* de modifier un style à un seul endroit
* de montrer une bonne logique de développement

---

## 2. Principe général

Au lieu d’écrire plusieurs fois ceci :

```jsx
<h2 className="text-3xl font-semibold text-slate-900 mb-4">
  Mes projets
</h2>
```

on peut :

### soit créer un composant simple

```jsx
function SectionTitle({ children }) {
  return (
    <h2 className="text-3xl font-semibold text-slate-900 mb-4">
      {children}
    </h2>
  );
}

export default SectionTitle;
```

### soit faire encore plus propre avec du CSS Tailwind

```css
.section-title {
  @apply text-3xl font-semibold text-slate-900 mb-4;
}
```

```jsx
function SectionTitle({ children }) {
  return <h2 className="section-title">{children}</h2>;
}

export default SectionTitle;
```

---

# 3. Quand créer un composant ?

Tu peux créer un composant quand un élément revient plusieurs fois.

## Exemples :

* un titre de section
* une description
* un bouton
* une carte projet
* une carte compétence
* un conteneur de section
* un badge
* un lien de navigation

---

# 4. Quand mettre Tailwind dans le CSS ?

Tu peux mettre Tailwind dans le CSS quand :

* les styles sont répétés plusieurs fois
* le style ne change presque pas
* tu veux un nom clair et réutilisable

## Exemples :

* `.section-title`
* `.section-text`
* `.btn-primary`
* `.btn-secondary`
* `.card-base`
* `.container-custom`

---

# 5. Quand garder Tailwind dans `className` ?

Il vaut mieux garder Tailwind directement dans `className` pour :

* les styles très spécifiques
* les petits ajustements
* les variantes ponctuelles
* le responsive propre à un seul composant

## Exemple :

```jsx
<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
```

Ici, ce n’est pas gênant de le laisser dans le JSX.

---

# 6. Bonne méthode de travail

## À faire

1. créer un composant pour les éléments répétitifs
2. créer des classes CSS pour les styles communs
3. utiliser les props pour changer le texte, les liens, les variantes
4. garder dans `className` seulement ce qui est spécifique

## À éviter

* recopier le même `className` partout
* mettre tout le style dans le CSS
* créer trop de composants inutiles
* créer des composants trop compliqués dès le début

---

# 7. Exemple d’organisation des dossiers

```txt
src/
  assets/
  components/
    layout/
      Header.jsx
      Footer.jsx
    ui/
      Button.jsx
      SectionTitle.jsx
      SectionText.jsx
      Container.jsx
      ProjectCard.jsx
    sections/
      Hero.jsx
      About.jsx
      ProjectsPreview.jsx
      Skills.jsx
  pages/
    Home.jsx
    Projects.jsx
    About.jsx
    Contact.jsx
  styles/
    index.css
  App.jsx
  main.jsx
```

---

# 8. Exemple de CSS global avec Tailwind

Dans ton fichier `index.css` :

```css
@import "tailwindcss";

@layer base {
  body {
    @apply bg-white text-slate-900 antialiased;
  }

  h1, h2, h3, h4 {
    @apply tracking-tight;
  }

  a {
    @apply transition;
  }
}

@layer components {
  .container-custom {
    @apply mx-auto w-full max-w-7xl px-6 md:px-10 xl:px-20;
  }

  .section-spacing {
    @apply py-16 md:py-24;
  }

  .section-title {
    @apply text-3xl md:text-4xl font-semibold text-slate-900 mb-4;
  }

  .section-text {
    @apply text-base md:text-lg leading-relaxed text-slate-600;
  }

  .btn-primary {
    @apply inline-flex items-center justify-center rounded-full px-6 py-3 font-medium bg-blue-600 text-white hover:bg-blue-700 transition;
  }

  .btn-secondary {
    @apply inline-flex items-center justify-center rounded-full px-6 py-3 font-medium border border-slate-300 text-slate-900 hover:bg-slate-100 transition;
  }

  .card-base {
    @apply rounded-3xl border border-slate-200 bg-white shadow-sm p-6;
  }
}
```

---

# 9. Exemple : créer un composant `SectionTitle`

## Fichier `SectionTitle.jsx`

```jsx
function SectionTitle({ children }) {
  return <h2 className="section-title">{children}</h2>;
}

export default SectionTitle;
```

## Utilisation

```jsx
<SectionTitle>Mes projets</SectionTitle>
<SectionTitle>Compétences</SectionTitle>
<SectionTitle>À propos</SectionTitle>
```

---

# 10. Exemple : créer un composant `SectionText`

## Fichier `SectionText.jsx`

```jsx
function SectionText({ children }) {
  return <p className="section-text">{children}</p>;
}

export default SectionText;
```

## Utilisation

```jsx
<SectionText>
  Je conçois et développe des interfaces web modernes et responsives.
</SectionText>
```

---

# 11. Exemple : créer un composant `Button`

## Fichier `Button.jsx`

```jsx
function Button({ children, variant = "primary", type = "button" }) {
  const classes = {
    primary: "btn-primary",
    secondary: "btn-secondary",
  };

  return (
    <button type={type} className={classes[variant]}>
      {children}
    </button>
  );
}

export default Button;
```

## Utilisation

```jsx
<Button>Voir mes projets</Button>
<Button variant="secondary">Télécharger mon CV</Button>
```

---

# 12. Exemple : bouton avec lien

Si ton bouton doit parfois être un lien :

```jsx
function Button({ children, variant = "primary", href, type = "button" }) {
  const classes = {
    primary: "btn-primary",
    secondary: "btn-secondary",
  };

  if (href) {
    return (
      <a href={href} className={classes[variant]}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes[variant]}>
      {children}
    </button>
  );
}

export default Button;
```

## Utilisation

```jsx
<Button href="#projects">Voir mes projets</Button>
<Button href="/cv.pdf" variant="secondary">Télécharger mon CV</Button>
```

---

# 13. Exemple : composant `Container`

Très utile pour éviter de répéter les marges latérales partout.

## Fichier `Container.jsx`

```jsx
function Container({ children }) {
  return <div className="container-custom">{children}</div>;
}

export default Container;
```

## Utilisation

```jsx
<Container>
  <SectionTitle>Mes projets</SectionTitle>
  <SectionText>Voici une sélection de réalisations.</SectionText>
</Container>
```

---

# 14. Exemple : composant `ProjectCard`

## Fichier `ProjectCard.jsx`

```jsx
function ProjectCard({ title, description, tags, link }) {
  return (
    <article className="card-base">
      <h3 className="text-xl font-semibold text-slate-900 mb-3">{title}</h3>

      <p className="text-slate-600 mb-4 leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700"
          >
            {tag}
          </span>
        ))}
      </div>

      <a
        href={link}
        className="inline-flex items-center font-medium text-blue-600 hover:underline"
      >
        Voir le projet
      </a>
    </article>
  );
}

export default ProjectCard;
```

## Utilisation

```jsx
<ProjectCard
  title="Portfolio développeuse web"
  description="Création d’un portfolio moderne en React avec Tailwind."
  tags={["React", "Tailwind", "Responsive"]}
  link="#"
/>
```

---

# 15. Exemple : section complète

```jsx
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import SectionText from "../ui/SectionText";
import Button from "../ui/Button";

function Hero() {
  return (
    <section className="section-spacing">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-600 mb-4">
            Développeuse web
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Bonjour, moi c’est Loriana
          </h1>

          <SectionText>
            Je conçois et développe des interfaces web modernes, accessibles et
            pensées avec soin.
          </SectionText>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#projects">Voir mes projets</Button>
            <Button href="#contact" variant="secondary">
              Me contacter
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
```

---

# 16. Utiliser les props : principe

Les **props** servent à réutiliser un même composant avec des valeurs différentes.

## Exemple simple

```jsx
function Message({ text }) {
  return <p>{text}</p>;
}
```

Utilisation :

```jsx
<Message text="Bonjour" />
<Message text="Bienvenue sur mon portfolio" />
```

Le composant est le même, seule la valeur change.

---

# 17. Exemple avec plusieurs props

```jsx
function SkillCard({ title, description, icon }) {
  return (
    <article className="card-base">
      <img src={icon} alt="" className="w-10 h-10 mb-4" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </article>
  );
}
```

Utilisation :

```jsx
<SkillCard
  title="HTML / CSS"
  description="Création d’interfaces structurées et responsives."
  icon="/icons/html.svg"
/>

<SkillCard
  title="JavaScript"
  description="Ajout d’interactions et de logique métier."
  icon="/icons/js.svg"
/>
```

---

# 18. Comment savoir si je dois créer un composant ?

Pose-toi ces questions :

## Est-ce que cet élément revient plusieurs fois ?

* oui → composant possible

## Est-ce qu’il a toujours le même style ?

* oui → CSS réutilisable possible

## Est-ce que seul le contenu change ?

* oui → props

## Est-ce qu’il devient plus lisible si je le sépare ?

* oui → composant

---

# 19. Bonne logique pour ton portfolio

Pour ton portfolio, tu peux facilement créer :

## Composants UI

* `Button`
* `SectionTitle`
* `SectionText`
* `Container`
* `Tag`
* `Card`

## Composants de section

* `Hero`
* `AboutPreview`
* `ProjectsPreview`
* `SkillsPreview`
* `ContactSection`

## Composants de contenu

* `ProjectCard`
* `SkillCard`
* `TimelineItem`

---

# 20. Ce qu’un recruteur voit grâce à ça

Avec cette méthode, ton portfolio montre que tu sais :

* organiser un projet React
* éviter la duplication
* factoriser proprement
* créer des composants réutilisables
* structurer ton CSS intelligemment
* utiliser Tailwind avec logique
* écrire un code plus maintenable

Autrement dit : tu montres que tu **codes vraiment**, et que tu ne fais pas juste du copier-coller.

---

# 21. Résumé ultra simple à retenir

## Règle rapide

### Je crée un composant quand :

* l’élément revient plusieurs fois
* le style reste globalement le même
* le contenu change avec des props

### Je mets du Tailwind dans le CSS quand :

* les classes sont répétées souvent
* le style est stable
* je veux un nom réutilisable

### Je garde du Tailwind dans `className` quand :

* c’est spécifique à un seul cas
* c’est un ajustement local
* c’est du responsive ponctuel

---

# 22. Mini modèle prêt à réutiliser

## `index.css`

```css
@import "tailwindcss";

@layer components {
  .container-custom {
    @apply mx-auto w-full max-w-7xl px-6 md:px-10 xl:px-20;
  }

  .section-spacing {
    @apply py-16 md:py-24;
  }

  .section-title {
    @apply text-3xl md:text-4xl font-semibold text-slate-900 mb-4;
  }

  .section-text {
    @apply text-base md:text-lg text-slate-600 leading-relaxed;
  }

  .btn-primary {
    @apply inline-flex items-center justify-center rounded-full px-6 py-3 font-medium bg-blue-600 text-white hover:bg-blue-700 transition;
  }

  .btn-secondary {
    @apply inline-flex items-center justify-center rounded-full px-6 py-3 font-medium border border-slate-300 text-slate-900 hover:bg-slate-100 transition;
  }

  .card-base {
    @apply rounded-3xl border border-slate-200 bg-white shadow-sm p-6;
  }
}
```

## `Button.jsx`

```jsx
function Button({ children, variant = "primary", href, type = "button" }) {
  const classes = {
    primary: "btn-primary",
    secondary: "btn-secondary",
  };

  if (href) {
    return (
      <a href={href} className={classes[variant]}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes[variant]}>
      {children}
    </button>
  );
}

export default Button;
```

## `SectionTitle.jsx`

```jsx
function SectionTitle({ children }) {
  return <h2 className="section-title">{children}</h2>;
}

export default SectionTitle;
```

## `SectionText.jsx`

```jsx
function SectionText({ children }) {
  return <p className="section-text">{children}</p>;
}

export default SectionText;
```

---

# 23. Conclusion

Ta méthode est très bonne :

* **React** pour structurer
* **props** pour réutiliser
* **Tailwind dans le CSS** pour éviter les répétitions
* **className** pour les détails spécifiques

C’est un très bon équilibre entre :

* propreté
* lisibilité
* factorisation
* souplesse