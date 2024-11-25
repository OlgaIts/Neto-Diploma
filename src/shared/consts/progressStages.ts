interface Stage {
  title: string;
  step: number;
}

export const progressStages: Stage[] = [
  {
    title: 'Билеты',
    step: 1,
  },
  {
    title: 'Пассажиры',
    step: 2,
  },
  {
    title: 'Оплата',
    step: 3,
  },
  {
    title: 'Проверка',
    step: 4,
  },
];
