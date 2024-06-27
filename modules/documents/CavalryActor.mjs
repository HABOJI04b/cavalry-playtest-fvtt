export class CavalryFVTTActor extends Actor {
    prepareData() {
        super.prepareData();
    }

    prepareBaseData(){  }

    prepareDerivedData() {
        const actorData = this;
        const systemData = actorData.system;
        const flags = actorData.flags.boilerplate || {};

        this._prepareCharacterData(actorData);
    }

    prepareCharacterData() {
        if (actorData !== 'character') return;

        const systemData = actorData.system;
    }

    activateListeners(html) {
        super.activateListeners(html);
      
        // Render the item sheet for viewing/editing prior to the editable check.
        html.on('click', '.item-edit', (ev) => {
          const li = $(ev.currentTarget).parents('.item');
          const item = this.actor.items.get(li.data('itemId'));
          item.sheet.render(true);
        });
      
        // -------------------------------------------------------------
        // Everything below here is only needed if the sheet is editable
        if (!this.isEditable) return;
      
        // Add Inventory Item
        html.on('click', '.item-create', this._onItemCreate.bind(this));
      
        // Delete Inventory Item
        html.on('click', '.item-delete', (ev) => {
          const li = $(ev.currentTarget).parents('.item');
          const item = this.actor.items.get(li.data('itemId'));
          item.delete();
          li.slideUp(200, () => this.render(false));
        });
      
        // Active Effect management
        html.on('click', '.effect-control', (ev) => {
          const row = ev.currentTarget.closest('li');
          const document =
            row.dataset.parentId === this.actor.id
              ? this.actor
              : this.actor.items.get(row.dataset.parentId);
          onManageActiveEffect(ev, document);
        });
      
        // Rollable abilities.
        html.on('click', '.rollable', this._onRoll.bind(this));
      
        // Drag events for macros.
        if (this.actor.isOwner) {
          let handler = (ev) => this._onDragStart(ev);
          html.find('li.item').each((i, li) => {
            if (li.classList.contains('inventory-header')) return;
            li.setAttribute('draggable', true);
            li.addEventListener('dragstart', handler, false);
          });
        }
      }      
}