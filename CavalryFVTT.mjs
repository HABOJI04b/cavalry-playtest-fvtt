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

    game.CavalryFVTT = {
        CavalryActor,
        CavalryItem
    }

    CONFIG.CavalryFVTT = CavalryFVTT;

    CONFIG.Actor.documentClass = BoilerplateActor;
    CONFIG.Item.documentClass = BoilerplateItem;

    Items.unregisterSheet("core", ActorSheet);
    Items.registerSheet("CavalryFVTT", CavalryActorSheet, { makeDefault: true });

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("CavalryFVTT", CavalryItemSheet, { makeDefault: true });
});