export class CavalryFVTTActor extends Actor {
    prepareData() {
        super.prepareData();
    }

    prepareBaseData(){  }

    prepareDerivedData() {
        const actorData = this;
        const systemData = actorData.system;
        const flags = actorData.flags.cavalry-playtest-fvtt || {};

        this._prepareCharacterData(actorData);
    }

    prepareCharacterData() {
        if (actorData !== 'spectre') return;

        const systemData = actorData.system;
        for (let [key, ability] of Object.entries(systemData.abilities)) {
            ability.mod = Math.floor((ability.value - 10) / 2);
        }
    } 
}