import { v4 as uuidv4 } from 'uuid';

export const contactInfo = [
  {
    id: uuidv4(),
    iconName: 'icon-tel',
    text: '8 (800) 000 00 00',
  },
  {
    id: uuidv4(),
    iconName: 'icon-envelope',
    text: 'inbox@mail.ru',
  },
  {
    id: uuidv4(),
    iconName: 'icon-skype',
    text: 'tu.train.tickets',
  },
  {
    id: uuidv4(),
    iconName: 'icon-map',
    text: (
      <>
        г. Москва <br />
        ул. Московская 27-35
        <br />
        555 555
      </>
    ),
  },
];
