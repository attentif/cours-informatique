---
aliases: []
tags: [Information & données]
---

# Numérisation de l'information

::: tip 🎯 Attentes fondamentales
- Comprendre le principe de la numérisation de l'information et le compromis qu'elle implique
- Encoder et décoder une information avec le système binaire
- Classifier les principales unités de mesure de taille mémoire
:::

À la fin du XXe siècle, notre monde a vécu une «révolution numérique». Ce terme désigne les changements importants des sociétés provoqués par l’envol des techniques liées à l’informatique. Le mot «numérique» fait référence aux dispositifs informatiques qui ne peuvent traiter que des données chiffrables et ont donc besoin d’information numérisée. Dans une machine, le mot «informatique» est en fait stocké en une suite de 0 et de 1 comme illustré ci-contre. L’usage fréquent du terme «numérique» pour parler de tout ce qui exploite des techniques informatiques vient de cet état de fait: les mémoires de nos dispositifs informatiques ne comportent que des 0 ou des 1.


## Le système binaire

Pour stocker l’information sous forme numérique, les systèmes informatiques utilisent le **système binaire**. Il s’agit d’une forme de codage utilisant la base 2 permettant de représenter des nombres avec seulement deux chiffres : 0 et 1. La quantité d’information représentée par un de ces chiffres binaires est appelée _bit_, terme venant de l’anglais _binary digit_ qui signifie «chiffre binaire». Ce concept est essentiel en informatique, car les unités centrales de traitement des ordinateurs actuels sont composées de transistors ne gérant que deux états. Cette restriction technique a conduit à la numérisation reposant sur le système binaire.

### Un octet<sup>1</sup>: huit _bits_

Où chaque bit prend un valeur selon sa position:

| Octet | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
|-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Position | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| Base 2 | 2<sup>7</sup> | 2<sup>6</sup> | 2<sup>5</sup> | 2<sup>4</sup> | 2<sup>3</sup> | 2<sup>2</sup> | 2<sup>1</sup> | 2<sup>0</sup> |
| Valeur décimale | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |

Cette valeur est prise en compte si le bit vaut 1 et est ignorée si le bit vaut 0.

::: info Exemple
Le nombre décimal 54 est représenté en binaire par l'octet `00110110`:

| Octet | 0 | 0 | 1 | 1 | 0 | 1 | 1 | 0 |
|-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Position | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| Base 2 | - | - | 2<sup>5</sup> | 2<sup>4</sup> | - | 2<sup>2</sup> | 2<sup>1</sup> | - |
| Valeur décimale | 0 | 0 | 32 | 16 | 0 | 4 | 2 | 0 |

(L'addition des valeurs décimales de chaque bit donne 54.)
:::

---

1. Le mot anglais _byte_ est souvent utilisé pour dire «octet»


## Numériser différents types d'information

### Texte

### Image

### Son


## Le compromis au cœur de la numérisation
