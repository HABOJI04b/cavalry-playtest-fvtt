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
        if (actorData !== 'character') return;

        const systemData = actorData.system;
    } 
}