<script setup lang="ts"></script>

<template>
  <div class="tw-flex tw-flex-col">
    <div class="tw-py-16 tw-flex max-lg:tw-flex-col-reverse tw-gap-8">
      <img src="@/assets/letsgo-lego.png" alt="letsgo-lego" class="tw-m-auto tw-w-3/4 lg:tw-w-1/3" />
      <div>
        <h3 class="tw-text-2xl tw-text-center">Application de vente aux enchères</h3>
        <div class="tw-border-t tw-my-4 tw-bg-indigo-500/40 tw-rounded-lg tw-h-0.5"></div>
        <div class="tw-flex tw-flex-col tw-gap-4">
          <p class="tw-text-lg">
            Conçue dans le cadre d'un projet universitaire, <strong>Letsgo Lego</strong> est une plateforme de vente aux
            enchères de Lego destinée aux particuliers (Consumer to Consumer). Réalisée en mobile first avec des
            interfaces ergonomiques et intuitives, cette plateforme s'adresse à un public intergénérationnel, comprenant
            des utilisateurs âgés de 18 à 80 ans. La plateforme propose différentes catégories de produits Lego (pièces
            de collection, packs, œuvres artistiques), ainsi que 2 types d'enchères (ascendantes et descendantes)
            dépendants de la catégorie du produit mis en vente.
          </p>
          <span class="tw-font-semibold tw-text-lg">Technologies utilisées :</span>
          <ul>
            <li>
              Frontend : <strong>React</strong> pour le développement des interfaces utilisateur combiné avec la
              bibliothèque <strong>Styled Components</strong> pour le style
            </li>
            <li>Backend : Api crée avec <strong>Express</strong> et l'environnement <strong>Node.js</strong></li>
            <li>Base de donnée non-relationnelle <strong>MongoDB</strong></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="tw-py-4 xs:tw-py-16 tw-flex max-lg:tw-flex-col tw-gap-8">
      <div>
        <h3 class="tw-text-2xl tw-text-center">Jeu du démineur</h3>
        <div class="tw-border-t tw-my-4 tw-bg-indigo-500/40 tw-rounded-lg tw-h-0.5"></div>
        <div class="tw-flex tw-flex-col tw-gap-4">
          <p class="tw-text-lg">
            Afin d'apprendre les bases du langage de programmation Dart et du framework Flutter, j'ai réalisé un
            <strong>jeu du démineur</strong> pour un cours de développement avancé. Si vous ne connaissez pas, le jeu du
            démineur est un jeu de réflexion dont le but est de localiser des mines cachées dans un champ de dimensions
            données. Le joueur doit dévoiler les cases de la grille une à une. Si une mine est dévoilée, le jeu est
            terminé. Si aucune mine n'est dévoilée, le joueur gagne. Le jeu est composé de 3 niveaux de difficulté
            (facile, moyen, difficile). Le stockage des différents utilisateurs et de leurs scores est géré par le local
            storage.
          </p>
          <span class="tw-font-semibold tw-text-lg">Technologies utilisées :</span>
          <ul>
            <li>Frontend : Le framework <strong>Flutter</strong></li>
            <li>Backend : Le langage <strong>Dart</strong></li>
            <li>Stockage des données dans le <strong>LocalStorage</strong></li>
          </ul>
        </div>
      </div>
      <img src="@/assets/demineur.png" alt="demineur" class="tw-m-auto tw-w-11/12 lg:tw-w-2/5" />
    </div>

    <div class="tw-py-4 xs:tw-py-16 tw-flex max-lg:tw-flex-col-reverse tw-gap-8">
      <img src="@/assets/ironheart.png" alt="ironheart" class="tw-m-auto tw-w-11/12 lg:tw-w-5/12" />
      <div>
        <h3 class="tw-text-2xl tw-text-center">Jeu de plateforme</h3>
        <div class="tw-border-t tw-my-4 tw-bg-indigo-500/40 tw-rounded-lg tw-h-0.5"></div>
        <div class="tw-flex tw-flex-col tw-gap-4">
          <p class="tw-text-lg">
            Développé en 1 semaine dans le cadre de la Gamejam 2023, avec pour thème "Robot" et "Gravité",
            <strong>Ironheart</strong> est un jeu de plateforme en 2D. Le joueur incarne un robot nommé R.O.B qui a le
            pouvoir de modifier la gravité. En s'aidant des cartons placés à sa disposition, le joueur doit traverser
            différents niveaux afin de s'échapper du grenier dans lequel il est enfermé. Les niveaux ont une difficulté
            de plus en plus élevée.
          </p>
          <span class="tw-font-semibold tw-text-lg">Technologies utilisées :</span>
          <ul>
            <li>Langage <strong>Python</strong></li>
            <li>
              Utilisation des IA <strong>Midjourney</strong> et <strong>ChatGPT</strong> pour la création des décors
              ainsi que la narration
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
