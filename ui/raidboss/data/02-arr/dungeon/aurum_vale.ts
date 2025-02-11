import Conditions from '../../../../../resources/conditions';
import NetRegexes from '../../../../../resources/netregexes';
//import { Responses } from '../../../../../resources/responses';
import ZoneId from '../../../../../resources/zone_id';
import { RaidbossData } from '../../../../../types/data';
import { TriggerSet } from '../../../../../types/trigger';

export type Data = RaidbossData;

const triggerSet: TriggerSet<Data> = {
  zoneId: ZoneId.TheSunkenTempleOfQarn,
  triggers: [
    {
      id: 'Aurum Vale GoldLungs/Burrs',
      type: 'GainsEffect',
      // Count `0[2-9]` here is to filter out the first stack
      netRegex: NetRegexes.gainsEffect({ effectId: ['12E', '12F'], count: '0[2-9]' }),
      condition: Conditions.targetIsYou(),
      alertText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'Eat Fruit',
          de: '',
          fr: 'Mangez 1 fruit',
          ja: '',
          cn: '',
          ko: '',
        },
      },
    },
  ],
};

export default triggerSet;
