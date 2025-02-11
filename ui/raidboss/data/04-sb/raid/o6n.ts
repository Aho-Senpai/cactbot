import Conditions from '../../../../../resources/conditions';
import NetRegexes from '../../../../../resources/netregexes';
import { Responses } from '../../../../../resources/responses';
import ZoneId from '../../../../../resources/zone_id';
import { RaidbossData } from '../../../../../types/data';
import { TriggerSet } from '../../../../../types/trigger';

export type Data = RaidbossData;

// TODO: handle paintings? <_<

// O6N - Sigmascape 2.0 Normal
const triggerSet: TriggerSet<Data> = {
  zoneId: ZoneId.SigmascapeV20,
  timelineFile: 'o6n.txt',
  triggers: [
    {
      id: 'O6N Demonic Howl',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '282C', source: 'Demon Chadarnook', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '282C', source: 'Gefallen(?:e|er|es|en) Chadarnook', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '282C', source: 'Démon Chadarnouk', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '282C', source: 'チャダルヌーク・デーモン', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '282C', source: '恶魔查达奴克', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '282C', source: '차다르누크 악령', capture: false }),
      response: Responses.aoe(),
    },
    {
      id: 'O6N Demonic Shear',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '282A', source: 'Demon Chadarnook' }),
      netRegexDe: NetRegexes.startsUsing({ id: '282A', source: 'Gefallen(?:e|er|es|en) Chadarnook' }),
      netRegexFr: NetRegexes.startsUsing({ id: '282A', source: 'Démon Chadarnouk' }),
      netRegexJa: NetRegexes.startsUsing({ id: '282A', source: 'チャダルヌーク・デーモン' }),
      netRegexCn: NetRegexes.startsUsing({ id: '282A', source: '恶魔查达奴克' }),
      netRegexKo: NetRegexes.startsUsing({ id: '282A', source: '차다르누크 악령' }),
      response: Responses.tankBuster(),
    },
    {
      id: 'O6N Demonic Pain',
      type: 'Tether',
      // 0001 = far enough, 0039 = too close
      netRegex: NetRegexes.tether({ id: ['0001', '0039'] }),
      condition: (data, matches) => data.me === matches.target || data.me === matches.source,
      suppressSeconds: 10,
      alertText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'Away From Boss',
          de: 'Weg vom Boss',
          fr: 'Éloignez-vous du boss',
          cn: '远离BOSS',
          ko: '보스에게서 떨어지기',
        },
      },
    },
    {
      id: 'O6N Demonic Stone',
      type: 'HeadMarker',
      netRegex: NetRegexes.headMarker({ id: '0001' }),
      condition: Conditions.targetIsYou(),
      infoText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'Drop Chasing AOE Away',
          de: 'AoEs weglocken',
          fr: 'Déposez les AoEs au loin',
          ja: '離れてAoEを置く', // FIXME
          cn: '远离放置追踪AOE',
          ko: '연속장판 멀리빼기',
        },
      },
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        'Demon Chadarnook': 'gefallen(?:e|er|es|en) Chadarnook',
        'Easterly': 'Ostwind',
        'Haunt': 'Verfolgung',
        'I have claimed the girl in the picture!': 'Das Mädchen in diesem Bildnis gehört mir!',
        'Portrayal of Earth': 'Erdgemälde',
        'Portrayal of Fire': 'Feuergemälde',
        'Portrayal of Water': 'Wassergemälde',
      },
      'replaceText': {
        'Demonic Howl': 'Dämonisches Heulen',
        'Demonic Pain': 'Dämonischer Schmerz',
        'Demonic Shear': 'Dämonische Schere',
        'Demonic Spout': 'Dämonischer Überschwang',
        'Demonic Stone': 'Dämonischer Stein',
        'Demonic Typhoon': 'Dämonischer Taifun',
        'Demonic Wave': 'Dämonische Welle',
        'Earthquake': 'Erdbeben',
        'Featherlance': 'Federlanze',
        'Flash Fire': 'Blitzfeuer',
        'Flash Gale': 'Blitzwind',
        'Materialize': 'Materialisierung',
        'Possession': 'Besessenheit',
        'Release': 'Befreiung',
      },
    },
    {
      'locale': 'fr',
      'replaceSync': {
        'Demon Chadarnook': 'démon Chadarnouk',
        'Easterly': 'rafale ultime',
        'Haunt': 'Cauchemar corporel',
        'I have claimed the girl in the picture!': 'Héhéhé... La fille du tableau m\'appartient.',
        'Portrayal of Earth': 'peinture de la terre',
        'Portrayal of Fire': 'peinture du feu',
        'Portrayal of Water': 'peinture de l\'eau',
      },
      'replaceText': {
        'Demonic Howl': 'Hurlement démoniaque',
        'Demonic Pain': 'Douleur démoniaque',
        'Demonic Shear': 'Cisailles démoniaques',
        'Demonic Spout': 'Vague démoniaque',
        'Demonic Stone': 'Pierre démoniaque',
        'Demonic Typhoon': 'Typhon démoniaque',
        'Demonic Wave': 'Vague démoniaque',
        'Earthquake': 'Grand séisme',
        'Featherlance': 'Lance de plume',
        'Flash Fire': 'Flammes subites',
        'Flash Gale': 'Vent subit',
        'Materialize': 'Matérialisation',
        'Possession': 'Possession',
        'Release': 'Libération',
      },
    },
    {
      'locale': 'ja',
      'replaceSync': {
        'Demon Chadarnook': 'チャダルヌーク・デーモン',
        'Easterly': '極風',
        'Haunt': '思念体',
        'I have claimed the girl in the picture!': 'グフフフ……この絵の女は、わしがいただいた……。',
        'Portrayal of Earth': '土の絵画',
        'Portrayal of Fire': '火の絵画',
        'Portrayal of Water': '水の絵画',
      },
      'replaceText': {
        'Demonic Howl': 'デモニックハウル',
        'Demonic Pain': 'デモニックペイン',
        'Demonic Shear': 'デモニックシアー',
        'Demonic Spout': 'デモニックスパウト',
        'Demonic Stone': 'デモニックストーン',
        'Demonic Typhoon': 'デモニックタイフーン',
        'Demonic Wave': 'デモニックウェーブ',
        'Earthquake': '大地震',
        'Featherlance': 'フェザーランス',
        'Flash Fire': 'フラッシュファイア',
        'Flash Gale': 'フラッシュウィンド',
        'Materialize': '実体化',
        'Possession': '絵画憑依',
        'Release': '憑依解除',
      },
    },
    {
      'locale': 'cn',
      'replaceSync': {
        'Demon Chadarnook': '恶魔查达奴克',
        'Easterly': '极风',
        'Haunt': '幻影',
        'I have claimed the girl in the picture!': '呵哼哼……这个画作的女人就归我了',
        'Portrayal of Earth': '土之画作',
        'Portrayal of Fire': '火之画作',
        'Portrayal of Water': '水之画作',
      },
      'replaceText': {
        'Demonic Howl': '恶魔啸',
        'Demonic Pain': '恶魔痛',
        'Demonic Shear': '恶魔斩',
        'Demonic Spout': '恶魔喷',
        'Demonic Stone': '恶魔飞石',
        'Demonic Typhoon': '恶魔台风',
        'Demonic Wave': '恶魔波',
        'Earthquake': '大地震',
        'Featherlance': '羽枪',
        'Flash Fire': '闪光炎',
        'Flash Gale': '闪光风',
        'Materialize': '实体化',
        'Possession': '附身画像',
        'Release': '附身解除',
      },
    },
    {
      'locale': 'ko',
      'replaceSync': {
        'Demon Chadarnook': '차다르누크 악령',
        'Easterly': '극풍',
        'Haunt': '사념체',
        'I have claimed the girl in the picture!': '우후후후…… 그림 속 여자는 내가 데려가마……',
        'Portrayal of Earth': '땅의 그림',
        'Portrayal of Fire': '불의 그림',
        'Portrayal of Water': '물의 그림',
      },
      'replaceText': {
        'Demonic Howl': '악령의 외침',
        'Demonic Pain': '악령의 고통',
        'Demonic Shear': '악령의 참격',
        'Demonic Spout': '악령의 물기둥',
        'Demonic Stone': '악령의 돌',
        'Demonic Typhoon': '악령의 태풍',
        'Demonic Wave': '악령의 물결',
        'Earthquake': '대지진',
        'Featherlance': '깃털창',
        'Flash Fire': '불바다',
        'Flash Gale': '돌풍',
        'Materialize': '실체화',
        'Possession': '그림 빙의',
        'Release': '빙의 해제',
      },
    },
  ],
};

export default triggerSet;
