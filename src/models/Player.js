
class Player{
    
    constructor(){
        this.choices = {
            "race": null,
            "class": null,
            "background": null,
            "equipment": null,
            "armour": null,
       }
       this.stats = [
           {
               "id" : "strength",
               "display": "Strength",
               "modifier": 0,
               "children": [
                   {
                       "id": "athletics",
                       "display": "Athletics",
                       "modifier": 0,
                   },
               ],
           },
           {
               "id": "dexterity",
               "display": "Dexterity",
               "modifier": 0,
               "children": [
                    {
                        "id": "acrobatics",
                        "display": "Acrobatics",
                        "modifer": 0,
                    },
                    {
                        "id": "slight_of_hand",
                        "display": "Slight of Hand",
                        "modifer": 0,
                    },
                    {
                        "id": "stealth",
                        "display": "Stealth",
                        "modifer": 0,
                    },
              ]
         },
         {
               "id": "intelligence",
               "display": "Intelligence",
               "modifier": 0,
               "children": [
                    {
                        "id": "arcana",
                        "display": "Arcana",
                        "modifer": 0,
                    },
                    {
                        "id": "history",
                        "display": "History",
                        "modifer": 0,
                    },
                    {
                        "id": "investigation",
                        "display": "Investigation",
                        "modifer": 0,
                    },
                    {
                        "id": "nature",
                        "display": "Nature",
                        "modifer": 0,
                    },
                    {
                        "id": "relgion",
                        "display": "Religion",
                        "modifer": 0,
                    },
              ]
         },
         {
               "id": "wisdom",
               "display": "Wisdom",
               "modifier": 0,
               "children": [
                    {
                        "id": "animal_handling",
                        "display": "Animal Handling",
                        "modifer": 0,
                    },
                    {
                        "id": "insight",
                        "display": "Insight",
                        "modifer": 0,
                    },
                    {
                        "id": "medicine",
                        "display": "Medicine",
                        "modifer": 0,
                    },
                    {
                        "id": "perception",
                        "display": "Perception",
                        "modifer": 0,
                    },
                    {
                        "id": "survival",
                        "display": "Survival",
                        "modifer": 0,
                    },
              ]
         },
         {
               "id": "charisma",
               "display": "Charisma",
               "modifier": 0,
               "children": [
                    {
                        "id": "deception",
                        "display": "Deception",
                        "modifer": 0,
                    },
                    {
                        "id": "intimidation",
                        "display": "Intimidation",
                        "modifer": 0,
                    },
                    {
                        "id": "performance",
                        "display": "Performance",
                        "modifer": 0,
                    },
                    {
                        "id": "persuasion",
                        "display": "Persuasion",
                        "modifer": 0,
                    },
              ]
         },
         {
             "id": "consititution",
             "display": "Consitition",
             "modifier": 0,
         },
     ]

   }

}


export default Player;
