//classes import
import { CavalryFVTTActor } from "./modules/documents/CavalryActor.mjs";
import { CavalryFVTTItem } from "./modules/documents/CavalryItem.mjs"

//sheets import
import { CavalryActorSheet } from "./modules/sheets/CavalryActorSheet.js";
import { CavalryItemSheet }  from "./modules/sheets/CavalryItemSheet.js";

//config import
import { CavalryFVTT } from "./modules/config.js";

Hooks.once("init", function(){
    console.log("Кавалерия 0.4 | Инициализирую систему")

    game.cavalry = {
        CavalryFVTTActor,
        CavalryFVTTItem
    }

    CONFIG.CavalryFVTT = CavalryFVTT;

    CONFIG.Actor.documentClass = CavalryFVTTActor;
    CONFIG.Item.documentClass = CavalryFVTTItem;

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("cavalry", CavalryActorSheet, { types: ["spectre"], makeDefault: true, label: 'CavalryFVTT.SheetLabels.Actor' });

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("cavalry", CavalryItemSheet, { types: ["system"], makeDefault: true, label: 'CavalryFVTT.SheetLabels.Item' });
});