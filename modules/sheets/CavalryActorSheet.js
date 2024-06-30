export class CavalryActorSheet extends ActorSheet {
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
          classes: ["cavalry-playtest-fvtt", "sheet", "actor"],
          template: "systems/cavalry-playtest-fvtt/templates/sheets/actor-sheet.html",
          width: 600,
          height: 600,
          tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "features" }]
        });
    }

    get template() {
        return `systems/cavalry-playtest-fvtt/templates/actor/${this.actor.type}-sheet.html`;
    }
    
    getData() {
        const context = super.getData();
      
        const actorData = context.data;
      
        context.system = actorData.system;
        context.flags = actorData.flags;
      
        if (actorData.type == 'character') {
          this._prepareCharacterData(context);
        }
      
        return context;
    }
}