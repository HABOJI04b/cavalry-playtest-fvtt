export class CavalryActorSheet extends ActorSheet {
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
          classes: ["cavalry-playtest-fvtt", "sheet", "actor"],
          template: "systems/cavalry-playtest-fvtt/templates/sheets/actor-sheet.html",
          width: 600,
          height: 600,
        });
    }
    
    getData() {
        const context = super.getData();
      
        const actorData = context.data;
      
        context.system = actorData.system;
        context.flags = actorData.flags;

        context.config = CONFIG.CavalryFVTT;
      
        if (actorData.type == 'spectre') {
          this._prepareCharacterData(context);
        }
      
        return context;
    }

    _prepareCharacterData(context) {
      for (let [k, v] of Object.entries(context.system.abilities)){
        v.label = game.i18n.localize(CONFIG.CavalryFVTT.abilities[k]) ?? k;
      }
    }
}