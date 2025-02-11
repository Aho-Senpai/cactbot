import Conditions from '../../../../../resources/conditions';
import NetRegexes from '../../../../../resources/netregexes';
import { Responses } from '../../../../../resources/responses';
import ZoneId from '../../../../../resources/zone_id';
import { RaidbossData } from '../../../../../types/data';
import { TriggerSet } from '../../../../../types/trigger';

export type Data = RaidbossData;

const triggerSet: TriggerSet<Data> = {
  zoneId: ZoneId.PharosSirius,
  triggers: [
    {
      id: 'Pharos Sirius Deathly Cadenza',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '5CF', source: 'Siren'}),
      netRegexDe: NetRegexes.startsUsing({ id: '5CF'}),
      netRegexFr: NetRegexes.startsUsing({ id: '5CF'}),
      netRegexJa: NetRegexes.startsUsing({ id: '5CF'}),
      response: Responses.getIn(),
    },
    {
      id: 'Pharos Sirius Feral Lunge',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '5CC', source: 'Siren'}),
      netRegexDe: NetRegexes.startsUsing({ id: '5CC'}),
      netRegexFr: NetRegexes.startsUsing({ id: '5CC'}),
      netRegexJa: NetRegexes.startsUsing({ id: '5CC'}),
      response: Responses.getOut(),
    },
    {
      id: 'Corrupted Crystal',
      type: 'GainsEffect',
      netRegex: NetRegexes.gainsEffect({ effectId: '176', count: '03'}),
      condition: Conditions.targetIsYou(),
      alertText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'Go away from party : stacks explode soon',
          de: '',
          fr: 'Allez loin de votre equipe, vos stacks explose bientot',
          ja: '',
          cn: '',
          ko: '',
        },
      },
    },
    {
      // Not 100% sure if there's a better way to handle the callout
      id: 'Doom',
      type: 'GainsEffect',
      netRegex: NetRegexes.gainsEffect({ effectId: '172' }),
      alertText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        en: 'Doom on ${player} : Heal',
        de: '',
        fr: 'Doom sur ${player} : Soin complet',
        ja: '',
        cn: '',
        ko: '',
      },
    },
  ],
};

export default triggerSet;
