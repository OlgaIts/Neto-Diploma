import { z } from 'zod';
import moment from 'moment';

const birthNumberRegex = /^[IVXLCDM]+-[А-ЯЁ]{2}-\d{6}$/;

export const PassengerFormSchema = z
  .object({
    lastName: z
      .string()
      .min(2, { message: 'Фамилия должна содержать не менее 2 символов' })
      .regex(new RegExp(".*[A-Za-zА-Яа-я'-].*"), {
        message: 'Поле не должно содержать цифры',
      }),
    firstName: z
      .string()
      .min(2, { message: 'Имя должно содержать не менее 2 символов' })
      .regex(new RegExp(".*[A-Za-zА-Яа-я'-].*"), {
        message: 'Поле не должно содержать цифры',
      }),
    middleName: z
      .string()
      .min(5, { message: 'Отчество должно содержать не менее 5 символов' })
      .regex(new RegExp(".*[A-Za-zА-Яа-я'-].*"), {
        message: 'Поле не должно содержать цифры',
      }),

    birthday: z
      .string()
      .refine((date) => /^\d{2}\.\d{2}\.\d{4}$/.test(date), {
        message: 'Дата должна быть в формате: ДД.ММ.ГГГГ',
      })
      .refine(
        (date) => {
          return /^\d{2}\.\d{2}\.\d{4}$/.test(date);
        },
        {
          message: 'Дата должна содержать только цифры и точки.',
        },
      )
      .refine(
        (date) => {
          const [day, month, year] = date.split('.').map(Number);
          const inputDate = moment(`${year}-${month}-${day}`, 'YYYY-MM-DD');
          return inputDate.isValid();
        },
        {
          message: 'Введите корректную дату.',
        },
      )
      .refine(
        (date) => {
          const [day, month, year] = date.split('.').map(Number);
          const inputDate = moment(`${year}-${month}-${day}`, 'YYYY-MM-DD');
          const currentDate = moment();
          return inputDate.isBefore(currentDate, 'day');
        },
        {
          message: 'Дата не может быть в будущем.',
        },
      )
      .refine(
        (date) => {
          const [day, month, year] = date.split('.').map(Number);
          const inputDate = moment(`${year}-${month}-${day}`, 'YYYY-MM-DD');
          const ageInYears = moment().diff(inputDate, 'years');
          const ageInMonths = moment().diff(inputDate, 'months');
          return ageInYears <= 100 && ageInYears >= 0 && ageInMonths >= 1;
        },
        {
          message: 'Возраст должен быть от 1 месяца до 100 лет.',
        },
      ),

    passSeries: z
      .string()
      .regex(new RegExp('[0-9]{4}'), {
        message: 'Серия паспорта указана не корректно',
      })
      .optional()
      .or(z.literal('')),

    passNumber: z
      .string()
      .regex(new RegExp('[0-9]{6}'), {
        message: 'Номер паспорта указан не корректно',
      })
      .optional()
      .or(z.literal('')),

    birthNumber: z
      .string()
      .regex(new RegExp(birthNumberRegex), {
        message:
          'Номер свидетельства о рождении указан некорректно. Пример: VIII-ЫП-123456',
      })
      .optional()
      .or(z.literal('')),

    documentType: z
      .string()
      .refine(
        (type) => type === 'Паспорт РФ' || type === 'Свидетельство о рождении',
        {
          message: 'Некорректный тип документа',
        },
      )
      .optional(),
  })
  .refine(
    (data) => {
      if (data.documentType === 'Свидетельство о рождении') {
        return !!data.birthNumber && birthNumberRegex.test(data.birthNumber);
      }
      if (data.documentType === 'Паспорт РФ') {
        return !!data.passSeries && !!data.passNumber;
      }
      return true;
    },
    {
      message: 'Необходимо заполнить необходимые поля для выбранного документа',
      path: ['passSeries', 'passNumber', 'birthNumber'],
    },
  );
