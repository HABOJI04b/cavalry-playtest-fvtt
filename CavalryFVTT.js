import { CavalryFVTT } from "./modules/comfig.js";
import CavalryItemSheet from "./modules/sheets/CavalryItemSheet.js";

Hooks.once("init", function(){
    console.log("Кавалерия 0.4 | Инициализирую систему")

    CONFIG.CavalryFVTT = CavalryFVTT;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("CavalryFVTT", CavalryItemSheet, { makeDefault: true });
});