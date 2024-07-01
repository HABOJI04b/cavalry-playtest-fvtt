//classes import
import { CavalryActor } from "./modules/documents/CavalryActor.mjs";
import { CavalryItem } from "./modules/documents/CavalryItem.mjs"

//sheets import
import { CavalryActorSheet } from "./modules/sheets/CavalryActorSheet.js";
import { CavalryItemSheet}  from "./modules/sheets/CavalryItemSheet.js";

//config import
import { CavalryFVTT } from "./modules/config.js";

Hooks.once("init", function(){
    console.log("Кавалерия 0.4 | Инициализирую систему")

    game.cavalry = {
        CavalryActor,
        CavalryItem
    }

    CONFIG.CavalryFVTT = CavalryFVTT;

    CONFIG.Actor.documentClass = CavalryActor;
    CONFIG.Item.documentClass = CavalryItem;

    Items.unregisterSheet("core", ActorSheet);
    Items.registerSheet("cavalry", CavalryActorSheet, { types: "character", makeDefault: true });

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("cavalry", CavalryItemSheet, { types: "weapon", makeDefault: true });
});