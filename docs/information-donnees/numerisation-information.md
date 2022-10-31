---
title: Numérisation de l'information 🚧
aliases: []
tags: [Information & données]
sources: ["https://renardeau.ch/cours/index.php?p=cours&cours_id=234&classe_id_selected=&matiere_id_selected=57"]
---

# {{ $frontmatter.title }}

::: tip 🎯 Attentes fondamentales
- Comprendre le principe de la numérisation de l'information et le compromis qu'elle implique
- Encoder et décoder une information avec le système binaire
- Classifier les principales unités de mesure de taille mémoire
:::

Dans la deuxième moitié du XXe siècle, notre monde a vécu une «révolution numérique». Le terme fait référence aux dispositifs informatiques qui ne peuvent traiter que des données chiffrables et ont donc besoin d’information numérisée. Dans une machine, le mot «informatique» est en fait enregistré par suite de 0 et de 1 comme illustré ci-contre (les espaces ne sont là que pour faciliter le repérage des lettres).

L’usage fréquent du terme «numérique» pour parler de tout ce qui exploite des techniques informatiques vient de cet état de fait: les mémoires de nos dispositifs informatiques ne comportent que des 0 ou des 1… on appelle cela le système binaire.


## Le système binaire

### Le _bit_

Pour stocker l’information sous forme numérique, les systèmes informatiques utilisent le **système binaire**. Il s’agit d’une forme de codage utilisant la base 2 permettant de représenter des nombres avec seulement deux chiffres : 0 et 1. La quantité d’information représentée par un de ces chiffres binaires est appelée _bit_, terme venant de l’anglais _binary digit_ qu'on peut traduire par «chiffre binaire». Ce concept est essentiel en informatique, car les unités centrales de traitement des ordinateurs actuels sont composées de transistors ne gérant que deux états. Cette restriction technique a conduit à la numérisation reposant sur le système binaire.

### Le _byte_ ou octet: huit _bits_

Pour construire des nombres supérieurs à 1 avec des bits, ces derniers sont regroupés par blocs de huit, dans lesquels chaque bit (s'il est actif, soit à `1`) est associé à une valeur selon sa position:

| Octet | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
|-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Position | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| Base 2 | 2<sup>7</sup> | 2<sup>6</sup> | 2<sup>5</sup> | 2<sup>4</sup> | 2<sup>3</sup> | 2<sup>2</sup> | 2<sup>1</sup> | 2<sup>0</sup> |
| Valeur décimale | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |

Cette valeur est prise en compte si le bit vaut 1 et est ignorée si le bit vaut 0.

::: info Exemple
Le nombre décimal 42 est représenté en binaire par l'octet `00101010`:

| Octet | 0 | 0 | 1 | 0 | 1 | 0 | 1 | 0 |
|-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Position | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| Base 2 | - | - | 2<sup>5</sup> | 2<sup>4</sup> | - | 2<sup>2</sup> | 2<sup>1</sup> | - |
| Valeur décimale | 0 | 0 | 32 | 0 | 8 | 0 | 2 | 0 |

(L'addition des valeurs décimales de chaque bit donne 42.)
:::


## Numériser différents types d'information

### Du texte

### Une image

### Du son


## Le compromis au cœur de la numérisation

Représenter les choses du monde réel par des chiffres n'est pas une opération anodine: de l'information est forcément perdue! Par sa nature «discrète» ou «discontinue», le numérique ne peut pas être autre chose qu'une approximation de la réalité. Elle peut être plus ou moins précise, mais elle reste une approximation très limitée sans comparaison possible avec le monde réel. Le tout, comme avec toute représentation, est d'en faire bon usage et de ne pas la confondre avec la réalité.
