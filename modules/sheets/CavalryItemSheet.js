export default class CavalryItemSheet extends ItemSheet {
    get template() {
        return `systems/CavalryFVTT/templates/sheets/${this.item.data.type}-sheet.html`;
    }

    getData() {
        const data = super.getData();

        data.config = CONFIG.CavalryFVTT;

        return data;
    }
}

