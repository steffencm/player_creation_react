
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
                        "modifier": 0,
                    },
                    {
                        "id": "slight_of_hand",
                        "display": "Slight of Hand",
                        "modifier": 0,
                    },
                    {
                        "id": "stealth",
                        "display": "Stealth",
                        "modifier": 0,
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
                        "modifier": 0,
                    },
                    {
                        "id": "history",
                        "display": "History",
                        "modifier": 0,
                    },
                    {
                        "id": "investigation",
                        "display": "Investigation",
                        "modifier": 0,
                    },
                    {
                        "id": "nature",
                        "display": "Nature",
                        "modifier": 0,
                    },
                    {
                        "id": "relgion",
                        "display": "Religion",
                        "modifier": 0,
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
                        "modifier": 0,
                    },
                    {
                        "id": "insight",
                        "display": "Insight",
                        "modifier": 0,
                    },
                    {
                        "id": "medicine",
                        "display": "Medicine",
                        "modifier": 0,
                    },
                    {
                        "id": "perception",
                        "display": "Perception",
                        "modifier": 0,
                    },
                    {
                        "id": "survival",
                        "display": "Survival",
                        "modifier": 0,
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
                        "modifier": 0,
                    },
                    {
                        "id": "intimidation",
                        "display": "Intimidation",
                        "modifier": 0,
                    },
                    {
                        "id": "performance",
                        "display": "Performance",
                        "modifier": 0,
                    },
                    {
                        "id": "persuasion",
                        "display": "Persuasion",
                        "modifier": 0,
                    },
              ]
         },
         {
             "id": "consititution",
             "display": "Consitition",
             "modifier": 0,
             "children": [],
         },
     ]

   }

}


export default Player;
