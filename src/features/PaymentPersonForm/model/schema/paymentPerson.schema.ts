import { z } from 'zod';

export const paymentPersonSchema = z.object({
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
  phone: z
    .string()
    .min(5, { message: 'Номер телефона должен содержать от 5 до 11 символов.' })
    .max(11, {
      message: 'Номер телефона должен содержать от 5 до 11 символов.',
    })
    .refine((phone) => /^(\+7|8)/.test(phone), {
      message: 'Номер телефона должен начинаться с +7 или 8.',
    })
    .refine((phone) => /^\+?\d+$/.test(phone), {
      message:
        'Номер телефона не должен содержать букв или специальных символов.',
    })
    .refine((phone) => /^(\+7|8)\d{4,10}$/.test(phone), {
      message: 'Введите корректный номер телефона.',
    }),
  email: z.string().email({ message: 'Введите корректный email-адрес.' }),
});
