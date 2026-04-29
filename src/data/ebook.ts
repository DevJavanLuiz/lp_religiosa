import type { Chapter, Benefit, PainPoint, TransformationItem, AudienceItem } from '@/types'

export const chapters: Chapter[] = [
  {
    id: 1,
    title: 'Paternidade',
    subtitle: 'A revelação do amor de Deus',
    description:
      'Descubra como a compreensão da paternidade de Deus pode curar feridas profundas de rejeição, abandono e carência afetiva. Um convite para se reconectar com o amor que restaura.',
    icon: 'church',
  },
  {
    id: 2,
    title: 'O Poder do Perdão',
    subtitle: 'Liberte-se do que aprisiona sua alma',
    description:
      'Entenda o processo bíblico do perdão e como ele pode desatar nós emocionais que você carrega há anos. Perdoar não é esquecer — é se libertar.',
    icon: 'lock-open',
  },
  {
    id: 3,
    title: 'Curando Traumas Profundos',
    subtitle: 'A cura que vem de dentro para fora',
    description:
      'Com base bíblica e sensibilidade emocional, este capítulo aborda como enfrentar traumas que marcaram sua história e encontrar restauração verdadeira.',
    icon: 'heart',
  },
  {
    id: 4,
    title: 'Superando o Luto e as Perdas',
    subtitle: 'Encontrando consolo e esperança',
    description:
      'Luto não é fraqueza — é amor. Aprenda a atravessar a dor da perda com apoio espiritual, sem negar o que sente, mas encontrando forças em Deus.',
    icon: 'leaf',
  },
  {
    id: 5,
    title: 'Genograma Familiar',
    subtitle: 'Quebrando padrões que se repetem',
    description:
      'Identifique padrões emocionais e comportamentais herdados de gerações anteriores e descubra como interromper ciclos que limitam sua vida espiritual.',
    icon: 'link',
  },
]

export const benefits: Benefit[] = [
  {
    id: 1,
    title: 'Compreender feridas emocionais à luz da Palavra',
    description:
      'Olhe para sua dor com os olhos de Deus. Compreenda o que aconteceu com você a partir de uma perspectiva bíblica e acolhedora.',
    icon: 'book-open',
  },
  {
    id: 2,
    title: 'Lidar com a dor da rejeição e da ausência afetiva',
    description:
      'Encontre caminhos para processar a rejeição e o vazio deixado por relações que feriram sua identidade.',
    icon: 'heart',
  },
  {
    id: 3,
    title: 'O poder do perdão no processo de libertação interior',
    description:
      'Descubra como o perdão, quando compreendido biblicamente, se torna uma ferramenta poderosa de libertação e paz.',
    icon: 'sparkles',
  },
  {
    id: 4,
    title: 'Enfrentar traumas e perdas com base bíblica',
    description:
      'Receba orientação sensível, profunda e com embasamento nas Escrituras para enfrentar as maiores dores da sua vida.',
    icon: 'shield',
  },
  {
    id: 5,
    title: 'Identificar padrões familiares que precisam ser quebrados',
    description:
      'Reconheça ciclos de comportamento e emoção que se repetem em sua família e entenda como Deus deseja romper essas cadeias.',
    icon: 'key-round',
  },
  {
    id: 6,
    title: 'Fortalecer sua identidade em Deus',
    description:
      'Redescubra quem você é aos olhos do Pai. Restaure sua identidade, seu valor e seu propósito através da verdade que liberta.',
    icon: 'crown',
  },
]

export const painPoints: PainPoint[] = [
  { id: 1, text: 'Carrega feridas emocionais que nunca cicatrizaram de verdade' },
  { id: 2, text: 'Sente um vazio interior que nada parece preencher' },
  { id: 3, text: 'Luta com sentimentos de rejeição, culpa ou vergonha' },
  { id: 4, text: 'Tem dificuldade de perdoar — ou de se perdoar' },
  { id: 5, text: 'Carrega traumas que ainda afetam seus relacionamentos' },
  { id: 6, text: 'Enfrenta o luto de uma perda que parece não ter fim' },
  { id: 7, text: 'Percebe padrões familiares se repetindo em sua vida' },
  { id: 8, text: 'Sente que perdeu sua identidade e precisa se reencontrar em Deus' },
]

export const transformations: TransformationItem[] = [
  { before: 'Dor silenciosa e solidão', after: 'Clareza espiritual e acolhimento' },
  { before: 'Culpa e autocrítica destrutiva', after: 'Perdão e compreensão profunda' },
  { before: 'Prisão emocional e medo', after: 'Liberdade interior e coragem' },
  { before: 'Repetição de padrões familiares', after: 'Quebra de ciclos e renovação' },
  { before: 'Sensação de não pertencimento', after: 'Identidade restaurada em Deus' },
  { before: 'Confusão e cansaço espiritual', after: 'Direção, paz e esperança renovada' },
]

export const audienceItems: AudienceItem[] = [
  { id: 1, text: 'Carregam dores emocionais antigas que nunca foram tratadas' },
  { id: 2, text: 'Querem perdoar, mas não sabem por onde começar' },
  { id: 3, text: 'Enfrentam traumas, perdas ou luto profundo' },
  { id: 4, text: 'Desejam cura interior com base cristã e bíblica' },
  { id: 5, text: 'Querem restaurar sua identidade e valor em Deus' },
  { id: 6, text: 'Sentem que precisam de um novo começo espiritual' },
  { id: 7, text: 'Buscam um material profundo, sensível e respeitoso' },
]
