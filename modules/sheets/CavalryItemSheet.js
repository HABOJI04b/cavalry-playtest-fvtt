export default class CavalryItemSheet extends ItemSheet {
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
          classes: ['cavalry-playtest-fvtt', 'sheet', 'item'],
          width: 520,
          height: 480,
          tabs: [
            {
              navSelector: '.sheet-tabs',
              contentSelector: '.sheet-body',
              initial: 'description',
            },
          ],
        })
    }
    

    get template() {
        return "systems/cavalry-playtest-fvtt/templates/sheets/item-sheet.html";
    }
    
    getData() {
        const context = super.getData();
      
        const actorData = context.data;
      
        context.system = itemData.system;
        context.flags = itemData.flags;
      
        return context;
    }
}

