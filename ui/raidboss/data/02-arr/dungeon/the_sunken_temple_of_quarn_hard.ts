//import Conditions from '../../../../../resources/conditions';
import NetRegexes from '../../../../../resources/netregexes';
import { Responses } from '../../../../../resources/responses';
import ZoneId from '../../../../../resources/zone_id';
import { RaidbossData } from '../../../../../types/data';
import { TriggerSet } from '../../../../../types/trigger';

export type Data = RaidbossData;

const triggerSet: TriggerSet<Data> = {
  zoneId: ZoneId.TheSunkenTempleOfQarnHard,
  triggers: [
    {
      id: 'Sunken Quarn Hard Light of Anathema',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: 'C26', source: 'Vicegerent to the Warden'}),
      netRegexDe: NetRegexes.startsUsing({ id: 'C26'}),
      netRegexFr: NetRegexes.startsUsing({ id: 'C26'}),
      netRegexJa: NetRegexes.startsUsing({ id: 'C26'}),
      response: Responses.awayFromFront(),
    },
  ],
};

export default triggerSet;
