# base de données

super variable

Pour des stocker des valeurs dans une base de données il faut:
1. créer une base de données
2. créer des tables
3. en fin insérer des données dans cette table

## table

=> concept que l'on va gérer dans notre projet
-> user
-> recette
-> catégorie
-> commentaire
-> bon_de_commande...

## table vous avez des colonnes et des types

user

prenom VARCHAR(255)
nom VARCHAR(255)
date_naissance DATE

Pas d'accentuation ou de caractère spéciaux
Pas d'espace => remplacer par des underscore
nom des colonnes et tables => minuscule
mot clé du langage SQL => VARCHAR/ TEXT/ BOOLEAN/ NULL/ DEFAULT (EN MAJUSCULE)

## cas concrêt

-dans cette base nous allons créer une table "user"
    -prenom VARCHAR (255)
    -date_naissance DATETIME
    -description TEXT

### extensions

=> SQlite => très simple à mettre en place 
SGBD

=> créer un fichier 01_demo.db => ne pas écrire dedans

Pour écrire dans le fichier on a besoin de requête SQL
réaliser traitements dans le fichier .db
