import Joi from "joi";

export const CarValidator = Joi.object({
    model: Joi.string().regex(new RegExp('^[a-zA-ZА-яіІїЇ]{1,20}$')).required().messages({
        'string.empty':'"model" doesnt be empty',
        'string.pattern.base':'Only letters, min 1 max 20', //якщо по регулярці не пройшло то вивести це повід
    }),
    //                                             які символи    кількість  required - обов'язкове поле
    price: Joi.number().min(0).max(1000000).required().messages({
        'number.base':'Price must be from 1 to 1 000 000', //base - basic mistake
        'number.min':'The price must be more than 0 or equal to 0',
        'number.max':'The price mustnt be more than 1 000 000'
        //бібліотека joi має свої готові відповіді які можна міняти за назвою ключів.
        // joi не дозволяє відправляти дані в форму якщо вони не валідні
    }),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        'number.base':'Year can be from 1990 to 2022'
    }),
})